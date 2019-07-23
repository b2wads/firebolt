const request = require('supertest')

const app = require('../../../app')

describe('Root path test', () => {
  describe('GET /', () => {
    let res

    beforeAll(async () => {
      res = await request(app).get('/')
    })

    it('should return 404', () => {
      expect(res.status).toBe(404)
    })
  })
})
