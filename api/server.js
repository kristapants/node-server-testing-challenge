const express = require("express");

const fruitsRouter = require("./fruits/fruits-router");

const server = express();

server.use(express.json());

server.use("/api/users", fruitsRouter);

server.get("/", (req, res) => {
  res.json({ api: "fruits" });
});

module.exports = server;
