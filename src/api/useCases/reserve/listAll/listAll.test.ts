import supertest from 'supertest'
import app from '../../../../app'

const request = supertest(app)
const routeString = '/api/v1/reserve'

describe('Reserve listing', () => {
  beforeAll(async () => {
    process.env.SKIP_AUTH = 'true'
  })

  afterAll(async () => {
    process.env.SKIP_AUTH = 'false'
  })

  test('Should be able to list all reserves', async () => {
    const response = await request.get(routeString)
    expect(response.status).toBe(200)
  })
})
