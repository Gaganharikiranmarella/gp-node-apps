import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoute from './routes/contact.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Root test route to avoid 404 on /
app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/contact', contactRoute);

export default app;  // Export Express app for Vercel
