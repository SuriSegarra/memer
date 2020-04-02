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
});