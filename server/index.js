const express = require('express');
const cors = require('cors');

const server = express();
const port = 5000;
const delay = 1000;
const store = {
    counter: 0
};

server.use(cors()).use(express.json())
    .listen(port, () => console.log(`Server now listening on port ${port}...`));

server
    .get('/counter', (req, res) => {
        setTimeout(() => res.send({value: store.counter}), delay);
    })
    .put('/counter/increment', (req, res) => {
        store.counter++;
        res.sendStatus(200);
    })
    .put('/counter/decrement', (req, res) => {
        store.counter--;
        res.sendStatus(200);
    });
