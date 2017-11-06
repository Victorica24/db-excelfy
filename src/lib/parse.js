
const xlsx = require('node-xlsx').default;
const json2csv = require('json2csv');
const validate = require('./validate');
const format = require('./format');
const import_settings = require('./table_settings')
const fs = require('fs');


/**
 * Validate field by loaded validation settings.
 * When validation fails return array of fields and faild validation function name.
 * @param {string} value is required field value
 * @param {array} settings array with validation function namesuffix
 * @param {string} column_name is required for error output
 * @returns {array} with objects contains field_name and failed validation function name
 */
function validate_data( value, settings, column_name ) {
    let errors = [];

    if( (!settings) || (!settings.validate) ) {
        return errors;
    }

    settings.validate.forEach(validation_name => {
        let params = validation_name.split('|');
        let name = params[0];
        let args = params.slice(1);

        if (params.length > 0) {
            let valfunc =  validate[name];

            if (valfunc(value, ...args) === false) {
                errors.push({validation_type: validation_name, validation_fields: column_name});
            }
        }
    });

    return errors;
}

function format_data( value, settings ) {
    let result = value;

    if (typeof value === 'undefined') {
        return result;
    }

    if( (!settings) || (!settings.format) ) {
        return result;
    }

    settings.format.forEach(format_name => {
        let params = format_name.split('|');
        let name = params[0];
        let args = params.slice(1);

        if (params.length > 0) {
            let formatfunc = format[name];
            result = formatfunc(value, ...args);
        }
    });

    return result;
}

function validate_record( record, validations ) {
    validations.forEach(validation => {
        valfunc = validate[validation.name];
        validation.values.forEach(valParams => {
            if (!valfunc(record, valParams)) {
                record.errors.push( { validation_type: validation.name,  validation_fields: valParams.join(',') } );
            }
        });
    });

    return record;
}

function trimData(value) {
    if (typeof value === 'undefined') {
        return value;
    }

    if (typeof value === 'string' && value.length > 0) {
        return value.trim();
    }

    return value;
}
/*
 * load excel file ad process
 */
function parse(filePath) {
    const excel_document = xlsx.parse(filePath); //`${__dirname}/../data/UIF_EVI_DBCUK.xlsm`
    const worksheet_table = excel_document.filter(value => { return value.name === 'table' })[0];
    const column_names = worksheet_table.data[0];
    let column_data = [];

    try {
        worksheet_table.data.slice(2).filter(value => { return value.length > 0 }).forEach((row, row_index) => {
            let newRow = { column_id: row_index+3, errors: [] };
            column_names.forEach( (column_name, column_index) => {
                newRow[column_name] = trimData(row[column_index]);
                newRow[column_name] = format_data( newRow[column_name], import_settings.columns[column_name] );
                newRow.errors = newRow.errors.concat( validate_data( newRow[column_name], import_settings.columns[column_name], column_name ) );
            } );
            newRow = validate_record( newRow, import_settings.row );
            column_data.push( newRow );
        });

        let csv = json2csv({ data: column_data, fields: column_names });
        fs.writeFile(filePath.slice(0,filePath.lastIndexOf('.'))+'.csv', csv,(err) => {
            if (err) {
                console.log('Error on write result to file.',err);
            }
        });

        // Write result as JSON file
        // fs.writeFile('file.json', JSON.stringify(column_data),(err) => {
        //     if (err) {
        //         console.log('Error on write result to file.',err);
        //     } else {
        //         console.log('JSON file created.');
        //     }
        // });

        return column_data;

    } catch (error) {
        return error;
    }
}

module.exports = parse;
