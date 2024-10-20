const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup", function(req, res) {

    const kidneys = req.body.kidneys;
    const result = schema.safeParse(kidneys);
    if (!result.success) {
        res.status(400).send(result.error.errors);
    } else {
        res.send("All good!");
    }
});

app.listen(3000);