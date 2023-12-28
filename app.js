const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

const app = express();
app.use(morgan("tiny"));
app.use(helmet());
app.use(compression());

app.get("/", (req, res) => {
  res.json({
    message: "🏠📦🥫 Welcome to Home inventory application 🏠📦🥫",
  });
});

module.exports = app;
