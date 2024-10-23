const express = require('express');
const app = express();
app.use(express.json());

// Add CORS headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;
    res.send(String(parseInt(a) + parseInt(b)));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});