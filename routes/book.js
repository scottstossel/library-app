const express = require('express');
const router = express.Router();

const Book = require('../models/Book');

//GET all

router.get('/', (req, res) => {
  const books = Book.find()
  books.then(data => {
    return res.json(data);
  })
});

//GET Single book
router.get('book/:id', (req, res) => {
  const book = Book.findById(req.params.id);
  book.then(book => {
    return res.json(book)
  })
})

//POST 
router.post('/book', (req, res) => {
  console.log(req.body);

  const newBook = new Book(
    {
      title: req.body.title,
      author: req.body.author,
      pages: req.body.pages,
      genre: req.body.genre
    }
  );

  newBook.save()
    .then((val) => {
      console.log(val)
      return res.status(201).json(val);
    })
    .catch(err => {
      return res.json({error: err})
    });
});

//PUT
router.put('/book/:id', (req, res) => {
  const toUpdate = Book.findByIdAndUpdate(req.params.id, req.body, {new: true})
    toUpdate.then(data => {
      return res.json(data)
    })
});

//Delete
router.delete('/book/:id', (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => {
      return res.status(200).json({message: 'Book has been deleted'})
    })
    .catch(err => {
      return res.json({message: `Book couldn't be deleted ${err}`})
    })
})

module.exports = router;