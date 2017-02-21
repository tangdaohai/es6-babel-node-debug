/**
 * Created by Jerry on 2017/2/17.
 */

import Koa from "koa";
const app = new Koa();

app.use(async (ctx, next) => {
    const t1 = Date.now();
    console.log(`--> ${ctx.method} ${ctx.path}`);
    await next();
    const t2 = Date.now();
    console.log(`<-- ${ctx.method} ${ctx.path} ${ t2 - t1}ms`);
});

app.use(async ctx => {
    return ctx.body = await getTime();
});

//测试异步,等待5s后再返回
async function getTime(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(new Date());
        }, 5000);
    });
}

app.listen(3300);