const { model, Schema } = require("mongoose");

const productSchema = new Schema({
  name: String,
  quantity: Number,
  image: String,
  price: Number,
});

module.exports = model("Product", productSchema);
