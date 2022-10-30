const express = require('express');
const fetch = require('node-fetch')

const app = express();
const port = process.env.PORT || 3002;

const examCatalogServiceUrl = process.env.CATALOG_SERVICE_URL || 'http://localhost:3000';
const examShopServiceUrl = process.env.SHOP_SERVICE_URL || 'http://localhost:3001';

app.get('/', async (req, res) => {
    const exams = await fetch(examCatalogServiceUrl).then(res => res.json());
    const examPrices = await fetch(examShopServiceUrl).then(res => res.json());

    const content = `
        <h1>Available exams</h1>
        <p>Catalog service url: ${examCatalogServiceUrl}</p>
        <ul>
            ${exams.map(e => `<li>${e.code} (${e.name})</li>`).join('')}
        </ul>
        
        <h2>Exam prices</h2>
        <p>Exam prices url: ${examShopServiceUrl}</p>
        <ul>
            ${examPrices.map(e => `<li>${e.code} (${e.provider}) - $${e.price}</li>`).join('')}
        </ul>
    `;

    res.send(content);
})

app.listen(port, () => {
    console.log(`exam-planner listening on port ${port}`);
})