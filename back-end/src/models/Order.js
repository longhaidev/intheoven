const mongoose = require("mongoose");
const OrderItem = require("./OrderItem");

const orderSchema = new mongoose.Schema({
  id: { type: String, require: true },
  user_id: { type: mongoose.Types.ObjectId, ref: "User", require: true },
  order_item: [OrderItem],
  total_amount: { type: Number, required: true },
  order_date: { type: Date, default: Date.now },
  order_status: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Shipped", "Delivered", "Cancelled"],
  },
  shipping_address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  payment_method: { type: String, required: true },
  payment_status: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Paid", "Failed"],
  },
});

const Order = mongoose.model("Order", orderSchema);
module.export = Order;
