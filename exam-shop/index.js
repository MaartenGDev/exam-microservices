const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
    res.send('Hello World from exam shop!');
})

app.listen(port, () => {
    console.log(`exam-shop listening on port ${port}`);
})