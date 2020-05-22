const express = require("express");

const product = require("./product");
const order = require("./order");

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "API V1 - 👋🌎🌍🌏",
  });
});

router.use("/products", product);
router.use("/order", order);

module.exports = router;
