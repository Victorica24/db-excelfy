const fs = require("fs");
const path = require("path");
const moment = require('moment');
const del = require('del');

module.exports = function(dirpath) {
    fs.readdir(dirpath, (err, files) => {
        if (!err) {
            files.forEach(file => {
                if (file.slice(0,1) !== '.') {
                    fs.stat(path.join(dirpath, file), (err, stats) => {
                        if (!err) {
                            let yesterday = moment().subtract(1, 'days');
                            if (moment(stats.mtime).isBefore(yesterday)) {
                                del(path.join(dirpath, file));
                            }
                        }
                    });
                }
            });
        } else {
            console.log(err)
        }
    });
}
