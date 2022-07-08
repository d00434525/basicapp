const express = require("express");
const { User } = require("../persist/model");
const setUpAuth = require("./auth");
const setUpSession = require("./session");
const app = express();

// tell the server to understand how to read json
app.use(express.json());

setUpSession(app);
setUpAuth(app);

app.post("/users", async (req,res) => {
    try {
        let user = await User.create({
            username: req.body.username,
            fullname: req.body.fullname,
            password: req.body.password,
        });
        res.status(201).json(user);
    } catch {
        res.status(500).json({
            message: `post request failed to create user`,
            error: error,
        });
    }
});


module.exports = app;