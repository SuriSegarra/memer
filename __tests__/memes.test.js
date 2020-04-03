const { getMeme, getMemes } = require('../db/data-helpers');
const request = require('supertest');
const app = require('../lib/app');

describe('memes route', () => {
  it('creates a meme', () => {
    return request(app)
      .post('/api/v1/memes')
      .send({
        top: 'top',
        image: 'image',
        bottom: 'bottom'
      })
      .then( res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          top: expect.any(String),
          image: expect.any(String),
          bottom: expect.any(String),
          __v: 0
        });
      });
  });
  it('gets a meme by id', async() => {
    const meme = await getMeme();
    return request(app)
      .get(`/api/v1/memes/${meme._id}`)
      .then(res => {
        expect(res.body).toEqual(meme);
      });
  });
  it('get all memes', async() => {
    const memes = await getMemes();
    return request(app)
      .get('/api/v1/memes')
      .then(res => {
        expect(res.body).toEqual(memes);
      
      });
  });
});
