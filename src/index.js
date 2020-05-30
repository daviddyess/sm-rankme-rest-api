import express from 'express';
import bodyParser from 'body-parser';
console.log(`Environment variable set to ${process.env.NODE_ENV}`);
import statRoutes from './routes/StatRoutes';
import statusRoutes from './routes/StatusRoutes';
import steamRoutes from './routes/SteamRoutes';

import Sequelize from 'sequelize';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3009;

app.use('/api/stats', statRoutes);
app.use('/api/status', statusRoutes);
app.use('/api/steam', steamRoutes);

app.get('*', (req, res) => res.send('Welcome to the Rankme Stats API'));

app.listen(port, () =>
  console.log(`Stats API Server listening on http://localhost:${port}!`)
);

export default app;
