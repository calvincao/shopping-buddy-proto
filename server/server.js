const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/calvin', (req, res) => {
  res.send('hi from calvin!')
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});