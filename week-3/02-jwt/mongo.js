const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect('mongodb+srv://adityak8340:nu4Xcu9048Si5CVK@cluster0.q50rr.mongodb.net/');
const User = new mongoose.model('Users', {
    name: String,
    email: String,
    password: String
});

app.use(express.json());
app.post("/signup", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = User.findOne({ email: username });
    if (existingUser) {
        return res.status(400).json({
            msg: "User already exists",
        });
    }

    const user = new User({
        name: name,
        email: username,
        password: password
    });
    user.save();
    res.json({
        msg: "User created successfully",
    });
});

app.listen(3000);
