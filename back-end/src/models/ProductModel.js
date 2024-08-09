const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  product_category: { type: String, required: true },
  nutrition: [
    {
      calories: { type: Number, required: true },
      total_fat: { type: Number, required: true },
      saturated_fat: { type: Number, required: true },
      trans_fat: { type: Number, required: true },
      total_carb: { type: Number, required: true },
      total_sugar: { type: Number, required: true },
      protein: { type: Number, required: true },
    },
  ],
  ingredients: { type: String, default: "" },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  img: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
