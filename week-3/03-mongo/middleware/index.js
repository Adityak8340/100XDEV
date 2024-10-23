const express = require('express');

const app = express();

function isOldEnough(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    } else {
        res.status(403).json({
            msg: "You are not old enough to to swing",
        });
    }
}

app.use(isOldEnough);

app.get("/ride1", function(req, res) {
    res.json({
        msg: "You are now riding the Millennium Falcon",
    });
});

app.get("/ride2", function(req, res) {
    res.json({
        msg: "You are now riding the Death Star",
    });
});

app.listen(3000);