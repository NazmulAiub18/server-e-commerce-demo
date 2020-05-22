const express = require("express");
const Order = require("../models/Order");
const { orderDetails } = require("../utils/validator");

const router = express.Router();

router.post("/", async (req, res) => {
  const { valid, errors } = orderDetails(req.body);
  if (!valid) {
    return res.status(400).json(errors);
  }
  const newOrder = new Order({
    billingAddress: req.body.billingAddress.trim(),
    products: req.body.products,
  });
  try {
    const result = await newOrder.save();
    return res
      .status(200)
      .send(
        `Congrats, Order Succesfully Recieved! Order Number Is ${result._id}`
      );
  } catch (err) {
    console.error(err);
    return res.status(500).json({ general: "Internal server error!" });
  }
});

module.exports = router;
