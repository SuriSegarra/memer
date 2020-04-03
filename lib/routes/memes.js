const { Router } = require('express');
const Memes = require('../models/Meme');

module.exports = Router()
  .post('/', (req, res, next) => {
    Memes
      .create(req.body)
      .then(meme => res.send(meme))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Memes 
      .findById(req.params.id)
      .then(meme => res.send(meme))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Memes
      .find()
      .then(meme => res.send(meme))
      .catch(next);
  });
