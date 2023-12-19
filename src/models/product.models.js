import { Schema, model } from "mongoose";

const ProductSchema = Schema({
    name: { type: String, required: [true, 'Name is requiered'], unique: true },
    description: { type: String, required: [true, 'Description is requiered'], unique: true },
    new_price: { type: Number, required: [true, 'New Price is requiered'], unique: true },
    old_price: { type: Number, required: [true, 'Old price is requiered'], unique: true },
    category: { type: String, required: [true, 'Category is requiered'], unique: true },
    Image: { type: File, required: [true, 'Image is requiered'], unique: true },

})

const ProductModel = model('Product', ProductSchema);

export default ProductModel;