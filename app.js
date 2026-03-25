const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // comment
  // const hello = 'It work on my machine';
  const msg = 'It work on my machine';
  res.send(msg);
});

module.exports = app;
