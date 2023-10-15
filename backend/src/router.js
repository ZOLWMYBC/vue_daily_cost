import Router from '@koa/router';
import authRouter from './routes/auth.js';

const router = new Router();

router.use('/auth', authRouter.routes());

export default router;
