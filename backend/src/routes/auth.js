import Router from '@koa/router';
import auth from '../service/auth.js';
import { jsonResult } from '../util.js';

const authRouter = new Router();

authRouter.post('/login', async (ctx) => {
  const vo = await auth.login(ctx.params);
  res.json(jsonResult(vo));
});

export default authRouter;
