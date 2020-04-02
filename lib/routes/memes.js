const { Router } = require('express');
const Memes = require('../models/Meme');

module.exports = Router()
  .post('/', (req, res, next) => {
    Memes
      .create(req.body)
      .then(meme => res.send(meme))
      .catch(next);
  });
