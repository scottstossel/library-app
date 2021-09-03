const express = require('express');
const router = express.Router();

const User = require('../models/Rental');

//GET all

router.get('/', (req, res) => {
  const rentals = Rental.find()
  rentals.then(data => {
    return res.json(data);
  })
});

//GET Single user
router.get('rental/:id', (req, res) => {
  const rental = Rental.findById(req.params.id);
  rental.then(rental => {
    return res.json(rental)
  })
})

//POST 
router.post('/rental', (req, res) => {
  console.log(req.body);

  const newRental = new Rental(
    {
      user: req.body.user,
      book: req.body.book
    }
  );

  newRental.save()
    .then((val) => {
      console.log(val)
      return res.status(201).json(val);
    })
    .catch(err => {
      return res.json({error: err})
    });
});

//PUT
router.put('/rental/:id', (req, res) => {
  const toUpdate = Rental.findByIdAndUpdate(req.params.id, req.body, {new: true})
    toUpdate.then(data => {
      return res.json(data)
    })
});

//Delete
router.delete('/rental/:id', (req, res) => {
  Rental.findByIdAndDelete(req.params.id)
    .then(() => {
      return res.status(200).json({message: 'Rental has been deleted'})
    })
    .catch(err => {
      return res.json({message: `Rental couldn't be deleted ${err}`})
    })
})

module.exports = router;