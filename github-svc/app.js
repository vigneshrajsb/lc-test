const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('yellow world');
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});