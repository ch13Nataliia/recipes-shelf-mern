import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/product.model.js';
import { getProducts } from '../controllers/product.controller.js';
import { getSingleProduct } from '../controllers/product.controller.js';
import { createProduct } from '../controllers/product.controller.js';
import { updateProduct } from '../controllers/product.controller.js';
import { deleteProduct } from '../controllers/product.controller.js';


const router = express.Router();

// FIND ALL PRODUCTS
router.get('/', getProducts);

// FIND SINGLE PRODUCT
router.get('/:id', getSingleProduct);

// CREATE PRODUCT
router.post('/', createProduct);

// UPDATE PRODUCT
router.put('/:id', updateProduct);

// DELETE PRODUCT
router.delete('/:id', deleteProduct);

export default router;
