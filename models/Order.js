const { model, Schema } = require("mongoose");

const orderSchema = new Schema({
  billingAddress: String,
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: "products",
      },
      unit: Number,
    },
  ],
});

module.exports = model("Order", orderSchema);
