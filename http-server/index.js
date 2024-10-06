const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000
const app = express();

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.use(bodyParser.json());

app.post("/conversation", function(req, res) {
    console.log(req.headers);
    console.log(req.query.message);
    console.log(req.body);
    res.send({ 
        msg: "This is a POST request",
        status: "success",
        calc: 1 + 1,
        answer: 2,
        hey: "1+1=2??"
    });
    });

app.listen(port, function() {
  console.log(`Example app listening at http://localhost:${port}`);
});