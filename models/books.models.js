const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/book_fav', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const BooksSchema = new mongoose.Schema({
  title: String,
  status: String,
  description: String,
  email: { type: String, unique: true },
});
const Book = mongoose.model('Book', BooksSchema);
const SeedBooksCollection = () => {
  try {
    const gameofthrones = new Book({
      title: 'Game of thrones',
      status: 'good',
      description: 'a bunch of kings fighting on a chair',
      email: 'm7moud.abubaker.92@gmail.com',
    });
    const harrypoter = new Book({
      title: 'harry poter',
      status: 'perfect',
      description: 'some wizard stuffs',
      email: 'deyaa.pozan@gmail.com',
    });
    const fightclub = new Book({
      title: 'fightclub',
      status: 'the best',
      description: "don't talk about fight club (first rule)",
      email: 'abod.kafaween@gmail.com',
    });

    gameofthrones.save();
    harrypoter.save();
    fightclub.save();
  } catch (error) {
    console.log('Error while creating the user: ', error.message);
  }
};

module.exports = { Book, SeedBooksCollection };
