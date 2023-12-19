import { Schema, model } from "mongoose";


const ShoppingCartSchema = new Schema({

  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true
  },

  products: {
    type: Array,
    required: [true, "Products is required"],
  },

  total: {
    type: Number,
    required: [true, "Total is required"],
  },

});

const ShoppingCartModel = model("ShoppingCart", ShoppingCartSchema);

export default ShoppingCartModel;