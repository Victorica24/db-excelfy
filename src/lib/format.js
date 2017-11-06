class format {
    static uppercase( value ) {
        if (typeof value === 'string' && value.length > 0) {
            return value.toUpperCase();
        }

        return value;
    }

    static lowercase( value ) {
        if (typeof value === 'string' && value.length > 0) {
            return value.toLowerCase();
        }

        return value;
    }

    static fillup ( value, len = 9, fill = 0) {
        let arraylength = len - String(value).length + 1;

        if (arraylength < 1) {
            return value;
        }

        return Array( arraylength ).join( fill ) + value;
    }
}

module.exports = format;
