const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/book_fav', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT;

const { verifyToken } = require('./controllers/auth0.controller');
const {
  handlebooks,
  AddBooks,
  DeleteBooks,
  UpdateBook,
} = require('./controllers/books.controller');

app.get('/', (request, response) => {
  response.send('Hello World 🥳');
});

app.get('/verify-token', verifyToken);
app.get('/profile', (request, response) => {});
app.get('/books', handlebooks);

app.post('/books', AddBooks);
app.delete('/books/:id', DeleteBooks);
app.put('/books/:id', UpdateBook);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
