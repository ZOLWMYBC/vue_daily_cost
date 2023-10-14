import { Router } from 'express';
import { jsonResult } from './util.js';

const router = Router();

router.get('/ping', (req, res) => {
  res.json(jsonResult('pong'));
});

export default router;
