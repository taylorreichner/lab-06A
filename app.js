const express = require('express');

const cors = require('cors');

const app = express();

const { quarterbacks } = require('./Data.js')

app.use(cors());



app.get('/quarterbacks',(req, res) => {
    res.json({ quarterbacks })
});

app.get('/quarterbacks/:id', (req, res) => {
    const id = Number(req.params.id);

    const selectedQuarterbacks = quarterbacks.find((qb) => qb.id === id);

res.json({ results: selectedQuarterbacks });

});

module.exports = {
    app
};