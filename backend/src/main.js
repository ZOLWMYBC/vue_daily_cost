import Koa from 'koa';
import router from './router.js';

const app = new Koa();

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.body = { code: 500, msg: error?.message };
    console.error(error);
  }
});

app.use(router.routes());

app.listen(3000, () => {
  console.log('Server started at port 3000.');
});
