import { Router, Request, Response } from 'express';
const router = Router();

router.get('/echo', (req: Request, res: Response) => {
  res.json({ query: req.query, msg: 'Echo from Node API' });
});

router.post('/sum', (req: Request, res: Response) => {
  const { a = 0, b = 0 } = req.body || {};
  return res.json({ sum: Number(a) + Number(b) });
});

export default router;
