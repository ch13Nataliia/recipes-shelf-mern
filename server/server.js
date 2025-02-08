import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';
dotenv.config();

const app = express();
app.use(express.json()); //allows us ro accet JSON data in the req.body

// FIND ALL PRODUCTS
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// FIND SINGLE PRODUCT
app.get('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// CREATE PRODUCT
app.post('/api/products', async (req, res) => {
  const product = req.body;
  if (
    !product.name ||
    !product.price ||
    !product.image ||
    !product.description
  ) {
    return res
      .status(404)
      .json({ success: false, message: 'Please provide all fields' });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(200).json({ success: true, data: newProduct });
  } catch (error) {
    console.error('Error in Create Product', error.message);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});
// UPDATE PRODUCT

app.put('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: 'product not found' });
    }
    const updateProduct = await Product.findById(id);
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE PRODUCT
app.delete('/api/products/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: 'product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// console.log(process.env.DB_URL);

app.listen(5000, () => {
  connectDB();
  console.log('Server listen at http://localhost:5000');
});
