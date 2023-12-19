import ProductModel from "../models/products.models.js";

const getProductsService = async () => {
  try {
    const products = await ProductModel.find();
    return products;
  } catch (error) {
    console.log(error);
    throw new Error("Internal server error");
  }
};

const getProductByIdService = async (req) => {
  try {
    const id = req.params.id;
    const product = await ProductModel.findOne({ _id: id });

    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Internal Server Error");
  }
};
const getProductByNameService = async (req) => {
  try {
    const name = req.params.name;
    const product = await ProductModel.findOne({ name: name });

    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Internal Server Error");
  }
};
const createProductService = async (req) => {
  try {
    const newProduct = req.body;
    const newProductToDB = new ProductModel({
      name: newProduct.name,
      description: newProduct.description,
      new_price: newProduct.new_price,
      old_price: newProduct.old_price,
      category: newProduct.category,
      image: newProduct.image,
    });
    await newProductToDB.save();
    return { message: "Product has been added succesfully." };
  } catch (error) {
    console.error(error);
  }
};

const updateProductService = async (req) => {
  try {
    const id = req.params.id;
    const updateProduct = req.body;
    const product = await ProductModel.findOneAndUpdate({_id: id}, updateProduct)
    if(!product) return undefined
    return product
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
};

const deleteProductService = async (req) => {
  try {
    const id = req.params.id;
    const deleteProduct = await ProductModel.deleteOne({_id: id})
    if(deleteProduct.deletedCount === 0) return undefined;

    return { message: 'Product has been deleted succesfully.'}
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
};
export {
  getProductsService,
  getProductByIdService,
  createProductService,
  updateProductService,
  deleteProductService,
  getProductByNameService,
};