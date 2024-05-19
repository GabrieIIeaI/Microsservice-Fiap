const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Welcome to the microservice professor!" });
});

app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 + num2;
    res.json({ result });
});

app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 - num2;
    res.json({ result });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;