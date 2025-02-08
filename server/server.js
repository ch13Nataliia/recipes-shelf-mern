import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import ProductRoutes from './routes/product.route.js';
dotenv.config();

const app = express();

app.use(express.json()); //allows us ro accet JSON data in the req.body

const PORT = process.env.PORT || 5000;

app.use('/api/products', ProductRoutes);

// console.log(process.env.DB_URL);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server listen at http://localhost:${PORT}`);
});
