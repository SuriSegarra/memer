const chance = require('chance').Chance();
const Meme = require('../lib/models/Meme');

module.exports = async() => {
  const memes = await Meme.create([...Array(5)].map(() => ({
    top: chance.profession(),
    image: chance.url(),
    bottom: chance.animal()
  })));
};
