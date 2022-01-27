const express = require('express');
const cors = require('cors');
const controller = require('./controller')

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post('/recipes', controller.getRecipes, (req, res) => {
  res.status(200).json({ recipes: res.locals.recipes })
})

app.use((req, res) => {
  res.send('Looks like you\'re lost...Error 404')
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});