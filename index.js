const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const { MONGODB } = require("./config");
const api = require("./api");

const PORT = process.env.PORT || 5000;

const app = express();

////Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

//Route Middlewares
app.use("/api/v1", api);

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected!");
    return app.listen({ port: PORT });
  })
  .then(() => console.log(`Server Started at http://localhost:${PORT}`))
  .catch((err) => {
    console.error(err);
  });
