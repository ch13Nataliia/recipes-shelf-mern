import Product from '../models/product.model.js';

// FIND ALL PRODUCTS
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// FIND SINGLE PRODUCT

export const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE PRODUCT
export const createProduct =  async (req, res) => {
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
}

// UPDATE PRODUCT
export const updateProduct = async (req, res) => {
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
}

// DELETE PRODUCT
export const deleteProduct = async (req, res) => {
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
}