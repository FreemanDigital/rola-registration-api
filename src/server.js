const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: '././config.env' });

const app = require('./app');
const port = process.env.PORT || 3000;

const DB = process.env.DATABASE_URL.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((conn) => {
        // console.log(conn.connections);
        console.log('DB connection successful!');
    });

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

