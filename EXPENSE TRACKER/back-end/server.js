const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hi and Welcome to the Expense Tracker API!'); 
});

app.get('/api/expenses', (req, res) => {
    db.query('SELECT * FROM expenses', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});


app.post('/api/expenses', (req, res) => {
    const { description, amount, date } = req.body;
    db.query('INSERT INTO expenses (description, amount, date) VALUES (?, ?, ?)', [description, amount, date], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ id: results.insertId, description, amount, date });
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});