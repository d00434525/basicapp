const express = require("express");
const { User } = require("../persist/model");
const setUpAuth = require("./auth");
const setUpSessionStore = require("./session");
const setUpAuth = require("./session");
const app = express();

// tell the server to understand how to read json
app.use(express.json());

setUpSessionStore(app);
setUpAuth(app);

module.exports = app;