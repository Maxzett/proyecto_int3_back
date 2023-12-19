import { addProductInCartService } from "../service/shoppingCartService.js";

const addProductInCartController = async (req, res) => {
  try {
    const addProductToCart = await addProductInCartService(req);
    res.json(addProductToCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default addProductInCartController;