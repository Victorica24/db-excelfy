const Koa = require('koa');
const pino_logger = require('koa-pino-logger');
const serve = require('koa-static');
const router_api = require('./api-routes');
const path = require('path');

const app = new Koa();

app.use( pino_logger() );
app.use( router_api.middleware() );
app.use(serve( path.join(__dirname, '../', 'frontend') ));

app.listen(3000);

console.log('listening on port 3000');
