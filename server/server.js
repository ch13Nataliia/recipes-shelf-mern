import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('Port i s reasdy');
});

// console.log(process.env.DB_URL);

app.listen(5000, () => {
  connectDB();
  console.log('Server listen at http://localhost:5000');
});
