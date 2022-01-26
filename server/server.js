const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post('/recipes', (req, res) => {
  console.log(req.body);
  res.status(200).send('looking for recipes??')
})

app.use('/*', (req, res) => {
  res.send('Looks like you\'re lost...Error 404')
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});