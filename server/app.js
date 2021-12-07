const express = require("express");
const path = require("path");
const http = require("http");
const cors = require('cors');

const {routesInit} = require("./routes/config_routes");
const mongoConnect = require("./db/mongoConnect");

const app = express().use('*', cors());

app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

routesInit(app);

const server = http.createServer(app);

let port = process.env.PORT || "3004";

console.log(port);
server.listen(port);
