const Author = require("../models/authors.models");

const AddNewAuthor = (req, res) => {
  const { name } = req.body;
  Author.create({ name })
    .then((newAuthor) => res.json({ newAuthor }))
    .catch((err) => res.json(err));
};

const GetAllAuthors = (req, res) => {
  Author.find()
    .then((authors) => {
      res.json(authors);
    })
    .catch((err) => res.json({ err }));
};

const GetOneAuthor = (req, res) => {
  Author.findById({ _id: req.params.id })
    .then((author) => res.json(author))
    .catch((err) => res.json(err));
};

const DeleteAuthor = (req, res) => {
  Author.findByIdAndDelete({ _id: req.params.id })
    .then((deleted) => {
      res.json(deleted);
      console.log(`${deleted} deleted.`);
    })
    .catch((err) => console.log(err));
};

const UpdateAuthor = (req, res) => {
  const { name } = req.body;
  Author.findByIdAndUpdate(
    { _id: req.params.id },
    { name },
    { new: true, runValidators: true }
  )
    .then((updated) => {
      res.json(updated);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  AddNewAuthor,
  GetAllAuthors,
  GetOneAuthor,
  DeleteAuthor,
  UpdateAuthor,
};
