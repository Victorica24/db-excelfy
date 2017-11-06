class validate {
    static email( value ) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let result = true;

        if (typeof value === 'string' && value.length > 0) {
            value.split(',').forEach(value => {
                if (re.test(value) === false) {
                    result = false;
                }
            })

            return result;
        }

        return result;
    }

    static required( value ) {
        return typeof value !== 'undefined' && value !== null && value.length > 0;
    }

    static phone( value ) {
        let re = /^([0-9-\.+\ ]+)$/;
        if (typeof value === 'string' && value.length > 0) {
            return re.test(value);
        }
        return true;
    }

    static number( value ) {
        if (value.length > 0) {
            return !isNaN( parseFloat(value) ) && isFinite(value);
        }
        return true;
    }

    static usertype( value ) {
        return ["I", "E"].indexOf( value ) > -1;
    }

    static imanidshort( value ) {
        let re = /^([0-9]+)$/;
        if (typeof value === 'string' && value.length > 0) {
            return re.test(value);
        }
        return true;
    }

    static maxValues( value, count = 1) {
        if (typeof value === 'string' && value.length > 0) {
            return value.split(',').length < (count + 1);
        }

        return true;
    }

    static weblink ( value ) {
        // string must contain href and title
        if (!value) {
            return true;
        }

        return (value.indexOf('href') > -1 && value.indexOf('title') > -1);
    }

    static minOneFilled ( record, value ) {
        let result = '';
        value.forEach(column_name => {
            if (typeof record[column_name] === 'string') {
                result += record[column_name];
            }
        });
        return result.length > 0;
    }
}

module.exports = validate;
