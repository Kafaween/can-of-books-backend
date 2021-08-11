const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(cors());

const PORT = process.env.PORT;

const { verifyToken } = require('./controllers/auth0.controller');
const { handlebooks } = require('./controllers/books.controller');

app.get('/', (request, response) => {
  response.send('Hello World 🥳');
});

app.get('/verify-token', verifyToken);
app.get('/profile', (request, response) => {});
app.get('/books', handlebooks);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
