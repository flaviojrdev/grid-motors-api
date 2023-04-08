import supertest from 'supertest'
import app from '../../../../app'

const request = supertest(app)
const routeString = '/api/v1/car'

describe('Car listing', () => {
  test('Should be able to list all cars', async () => {
    const response = await request.get(routeString)
    expect(response.status).toBe(200)
  })
})