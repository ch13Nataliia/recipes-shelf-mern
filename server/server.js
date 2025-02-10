import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import path from 'path';
import ProductRoutes from './routes/product.route.js';
dotenv.config();

const app = express();

app.use(express.json()); //allows us ro accet JSON data in the req.body

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();
app.use('/api/products', ProductRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/client/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
	});
}

// console.log(process.env.DB_URL);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server listen at http://localhost:${PORT}`);
});
