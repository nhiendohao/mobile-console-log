'use strict';

const express = require('express');
const serveIndex = require('serve-index');
const multer = require('multer');
const mobileConsole = require('./mobile-console-middleware.js');

const app = express();

app.post('/mobile-console-log', multer().fields([]), mobileConsole);

app.use(express.static('.'));
app.use(serveIndex('.', {
    icons: true
}));

app.use(function (req, res, next) {
    console.log('404: Page not Found', req.url);
    next();
});

const port = 8000;

app.listen(port, function () {
    console.log('server started on port %d', port);
});