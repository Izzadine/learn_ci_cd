const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const msg = 'Hello world!'
  res.send(msg);

});

module.exports = app;
