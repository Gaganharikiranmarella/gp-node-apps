import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoute from './routes/contact.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Root route - just to check if API is running
app.get('/', (req, res) => {
  res.send('API is running');
});

// Contact route handles POST requests for sending messages
app.use('/api/contact', contactRoute);

export default app;
