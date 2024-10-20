const express = require("express");

const app = express();

app.get("/health-checkup", function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (username === "Aadi" && password === "1234") {
        if (kidneyId == 1  || kidneyId == 2) {
            res.json({
                msg: "Kidney is healthy"
        })
        }
    } 
    res.status(400).json({"msg": "Somethings up with your inputs!"});
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});