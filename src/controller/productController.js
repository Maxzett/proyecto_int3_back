import {
    createProductService,
    deleteProductService,
    getProductByIdService,
    getProductByNameService,
    getProductsService,
    updateProductService,
  } from "../service/productService.js";
  
  const getProductsController = async (req, res) => {
    try {
      const products = await getProductsService();
      if (products.length === 0)
        return res.status(404).json({ message: "Products not found" });
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const getProductByIdController = async (req, res) => {
    try {
      const id = req.params.id;
      const product = await getProductByIdService(id);
      if(!product) return res.status(404).json({message: "Product not found."})
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
      
    }
  };
  const getProductByNameController = async (req, res) => {
    try {
      const product = await getProductByNameService(req);
      if(!product) return res.status(404).json({message: "Product not found."})
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
      
    }
  };
  const updateProductController = async (req, res) => {
    try {
      const updateProduct = await updateProductService(req);
      if(!updateProduct) 
        return res.status(404).json({message: "Product not found"});
      res.status(204);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const createProductController = async (req, res) => {
    const createProduct = await createProductService(req);
    res.json(createProduct);
  };
  
  const deleteProductController = async (req, res) => {
    try {
      const deleteProduct = await deleteProductService(req);
      if(!deleteProduct) 
        return res.status(404).json({message: "Product not found"});
      res.json(deleteProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  export {
    getProductsController,
    getProductByIdController,
    updateProductController,
    createProductController,
    deleteProductController,
    getProductByNameController
  };