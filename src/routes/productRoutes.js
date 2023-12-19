import express from "express";
import {
  getProductsController,
  getProductByIdController,
  getProductByNameController,
  createProductController,
  updateProductController,
  deleteProductController
} from '../controller/productController.js';

import productBodyValidator from "../utils/productBodyValidator.js";

const routesProducts = express.Router();

routesProducts.post('/product', productBodyValidator, createProductController)
routesProducts.get("/products",  getProductsController);
routesProducts.get('/product/:id', getProductByIdController)
routesProducts.get("/product-name/:name", getProductByNameController);
routesProducts.put('/product/:id',  updateProductController)
routesProducts.delete('/product/:id', deleteProductController)

export default routesProducts;