const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    const exams = [
        {code: 'AZ-900', price: 100, provider: 'Example Inc Provider'},
        {code: 'AZ-900', price: 165, provider: 'SolidScore Provider'},
        {code: 'AZ-104', price: 165, provider: 'Cool Exam Provider'},
    ];

    res.json(exams);
})

app.listen(port, () => {
    console.log(`exam-shop listening on port ${port}`);
})