import 'dotenv/config';
import express from 'express';
import { corsMiddleware } from './middleware/cors.js';
import health from './routes/health.js';
import examples from './routes/examples.js';

const app = express();
app.use(express.json());
app.use(corsMiddleware);

app.use('/health', health);
app.use('/api', examples);

const port = Number(process.env.NODE_API_PORT || 4000);
app.listen(port, () => console.log(`Node API on http://localhost:${port}`));
