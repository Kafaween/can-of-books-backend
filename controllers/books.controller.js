const { Book, SeedBooksCollection } = require('../models/books.models');

const handlebooks = async (req, res) => {
  const { email } = req.query;
  console.log(email);
  Book.find({ email: email }, function (error, result) {
    if (error) {
      res.send(error.message);
    } else if (result === undefined) {
      res.send('data is not found');
    } else {
      res.send(result);
    }
  });
};

// SeedBooksCollection();

module.exports = { handlebooks };
