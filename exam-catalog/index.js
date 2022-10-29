const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World from exam catalog!');
})

app.listen(port, () => {
    console.log(`exam-catalog listening on port ${port}`);
})