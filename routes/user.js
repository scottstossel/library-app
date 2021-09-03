const express = require('express');
const router = express.Router();

const User = require('../models/User');

//GET all

router.get('/', (req, res) => {
  const users = User.find()
  users.then(data => {
    return res.json(data);
  })
});

//GET Single user
router.get('user/:id', (req, res) => {
  const user = User.findById(req.params.id);
  user.then(user => {
    return res.json(user)
  })
})

//POST 
router.post('/user', (req, res) => {
  console.log(req.body);

  const newUser = new User(
    {
      name: req.body.name,
      lastName: req.body.lastName
    }
  );

  newUser.save()
    .then((val) => {
      console.log(val)
      return res.status(201).json(val);
    })
    .catch(err => {
      return res.json({error: err})
    });
});

//PUT
router.put('/user/:id', (req, res) => {
  const toUpdate = User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    toUpdate.then(data => {
      return res.json(data)
    })
});

//Delete
router.delete('/user/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => {
      return res.status(200).json({message: 'User has been deleted'})
    })
    .catch(err => {
      return res.json({message: `User couldn't be deleted ${err}`})
    })
})

module.exports = router;