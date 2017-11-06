const Router = require('koa-better-router');
const path = require('path');
const body = require('koa-better-body');
const del = require('del');
const parse = require('./lib/parse.js');
const fs = require('fs');
const cleandir = require('./lib/clean-uploads.js');
let router = Router({ prefix: '/api' }).loadMethods();
const uploadPath = path.join(__dirname, '../uploads');



router.post('/upload', body({
        encoding: 'utf-8',
        uploadDir: uploadPath,
        keepExtensions: true,
        multipart: true,
        urlencoded: true
    }), (ctx, next) => {
        let uplodedFile = ctx.request.files[0];

        // verify excel mime type
        if (uplodedFile && uplodedFile.type.toLowerCase().indexOf('excel') > -1) {
            ctx.body = {message: "success", file: uplodedFile.path.slice(uplodedFile.path.lastIndexOf('/')+1, uplodedFile.path.lastIndexOf('.')), records: parse(uplodedFile.path)};
        } else {
            ctx.status = 400;
            ctx.body = `{"message":"Wrong mime type"}`;
            del([uplodedFile.path]);
        }

        next();
        cleandir(uploadPath);
    })
    .get('/download/:file', (ctx, next) => {
        let filename = path.join(uploadPath, ctx.params.file + '.csv');
        ctx.body = fs.createReadStream(filename);
        ctx.set('Content-disposition', 'attachment; filename=' + ctx.params.file + '.csv');
        ctx.set('Content-type', 'text/csv');
    });

module.exports = router;
