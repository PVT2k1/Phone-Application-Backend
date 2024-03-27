const express = require('express');
const mongoose = require('mongoose');
const Callog = require('./models/callog');

const app = express();

mongoose.connect('mongodb://localhost:27017')
    .then(() => console.log('Connected successfully!'))
    .catch(() => console.log('connection failed'));

app.use(express.json());

// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, OPTIONS'
    );
    next();
})

app.get('/callogHistory', async (req, res) =>  {
    const callogs = await Callog.find({});
    res.status(200).json(callogs);
});

app.post('/callogHistory', (req, res) => {
    const callog = new Callog(req.body);
    callog.save();

    res.status(201).json({ message: 'Created new callog.'})
});

app.listen(5000, () => console.log('App listening at http://localhost:5000'));