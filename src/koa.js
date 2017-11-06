const Koa = require('koa');
const pino_logger = require('koa-pino-logger');
const serve = require('koa-static');
const router_api = require('./api-routes');
const path = require('path');

const app = new Koa();
const port = process.env.PORT || 3000;

app.use( pino_logger() );
app.use( router_api.middleware() );
app.use(serve( path.join(__dirname, '../', 'frontend') ));

app.listen(port);

console.log('listening on port ' + port);
