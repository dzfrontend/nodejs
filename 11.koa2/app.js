(async function run() {

    const Koa = require('koa');
    const Static = require('koa-static-cache');
    const Router = require('koa-router');
    const Bodyparser = require('koa-bodyparser');
    const fs = require('fs');
    const mysql = require('mysql2/promise');

    const app = new Koa();

    app.use( Static('./static', {
        prefix: '/static',
        gzip: true
    }) );

    const connection = await mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'todolist'
    });

    const router = new Router();

    app.use( Bodyparser() );

    router.get('/', ctx => {
        const content = fs.readFileSync('./static/index.html');
        ctx.body = content.toString();
    });

    // mysql example
    router.get('/todos', async ctx => {
        const [data] = await connection.query("SELECT id,title,done FROM todos ORDER BY done DESC");
        ctx.body = {
            code: 0,
            data
        }
    });

    app.use( router.routes() );
    app.listen(3000);
    console.log('app started at http://localhost:3000/');
})();