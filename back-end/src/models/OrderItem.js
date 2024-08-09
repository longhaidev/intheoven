const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId(), ref: "Product" },
  quantity: { type: Number, require: true },
  price: { type: Number, require: true },
});

const OrderItem = mongoose.model("Order Item", orderItemSchema);
module.exports = OrderItem;
