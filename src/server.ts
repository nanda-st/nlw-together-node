import 'reflect-metadata';
import express from 'express';

import './database';

const app = express();

app.get('/', (req, res) => {
    return res.send("Hello World")
})

app.listen(5000, () => {
    console.log('Server is running . . .')
})