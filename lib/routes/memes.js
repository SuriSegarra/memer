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
  })
  .patch('/:id', (req, res, next) => {
    Memes
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(meme => res.send(meme))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Memes 
      .findByIdAndDelete(req.params.id)
      .then(meme => res.send(meme))
      .catch(next);
  });
