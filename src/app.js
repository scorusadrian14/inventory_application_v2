const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const middlewares = require("./middlewares");
const api = require("./api/api");
const project = require("./constants/project");

const app = express();
app.use(morgan("tiny"));
app.use(helmet());
app.use(compression());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: project.message,
  });
});

app.use("/api/v1", api);

//ERROR HANDLING
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
