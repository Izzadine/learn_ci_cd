const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // comment
  const hello = 'It work on my machine';
  const msg = 'Hello world!';
  res.send(msg);
});

module.exports = app;
