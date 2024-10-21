const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = "123456";

const app = express();
app.use(express.json());
const ALL_USERS = [
    {
        username: "johnasad@gmail.com",
        password: "1456",
        name: "John Asad"
    },
    {
        username: "alicearya@gmail.com",
        password: "1236",
        name: "Alice Arya"
    },
    {
        username: "priya@gmail.com",
        password: "1234",
        name: "Priya"
    }
];

function userExists(username, password) {
    for (let i = 0; i < ALL_USERS.length; i++) {
        if (ALL_USERS[i].username === username && ALL_USERS[i].password === password) {
            return true;
        }
    }
    return false;
}

app.post("/signin", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)) {
        return res.status(403).json({
            msg: "Invalid username or password",
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", function(req, res) {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    res.json({
            users: ALL_USERS
    })
});

app.listen(3000);