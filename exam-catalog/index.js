const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const exams = [
        {code: 'AZ-900', name: 'Azure Fundamentals'},
        {code: 'AZ-204', name: 'Azure Developer Associate'},
        {code: 'AZ-104', name: 'Azure Administrator Associate'},
    ];

    res.json(exams);
})

app.listen(port, () => {
    console.log(`exam-catalog listening on port ${port}`);
})