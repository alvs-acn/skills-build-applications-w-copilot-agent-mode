import express from 'express';
import './config/database.js';
import { getApiBaseUrl } from './config/api.js';
import routes from './routes.js';
const app = express();
const port = Number(process.env.PORT || 8000);
app.use(express.json());
app.use(routes);
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'octofit-backend' });
});
app.get('/api/config', (_req, res) => {
    res.json({ apiBaseUrl: getApiBaseUrl() });
});
app.get('/', (_req, res) => {
    res.send('OctoFit Tracker API is running');
});
app.listen(port, () => {
    console.log(`OctoFit Tracker API listening on port ${port}`);
    console.log(`API base URL: ${getApiBaseUrl()}`);
});
