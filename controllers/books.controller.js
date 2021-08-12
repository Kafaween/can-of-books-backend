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

const AddBooks = (req, res) => {
  try {
    const { title, status, description } = req.body;

    const NewbookData = new Book({
      title: title,
      status: status,
      description: description,
    });
    NewbookData.save();
    res.json(NewbookData);
  } catch (error) {
    res.json(error.message);
  }
};
// SeedBooksCollection();

const DeleteBooks = (req, res) => {
  console.log(req.params);
  try {
    const { id } = req.params;
    Book.deleteOne({ _id: id }, (error, deleted) => {
      res.send(deleted);
    });
  } catch (error) {
    res.send(error.message);
  }
};

const UpdateBook = (req, res) => {
  const { title, status, description } = req.body;
  const idbook = req.params.id;
  const NewbookData = {
    title: title,
    status: status,
    description: description,
  };
  Book.findByIdAndUpdate(
    { _id: idbook },
    NewbookData,
    { new: true },
    (error, result) => {
      if (error) {
        res.send(error.message);
      } else {
        res.send(result);
      }
    }
  );
};

module.exports = { handlebooks, AddBooks, DeleteBooks, UpdateBook };
