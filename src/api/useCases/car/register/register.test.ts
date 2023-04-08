import supertest from 'supertest'
import app from '../../../../app'

const request = supertest(app)
const routeString = '/api/v1/car'
let id = ''

const carR = {
  model: 'Gol',
  color: 'Black',
  year: 2020,
  values_per_day: 100,
  accessories: [
    {
      description: 'Air Conditioner',
    },
    {
      description: 'MP3 Player',
    },
  ],
  number_of_passengers: 5,
}

describe('Car registration', () => {
  beforeAll(async () => {
    process.env.SKIP_AUTH = 'true'
  })

  afterAll(async () => {
    await request.delete(`${routeString}/${id}`)
    process.env.SKIP_AUTH = 'false'
  })

  test('Should be able to register a new car', async () => {
    const response = await request.post(routeString).send(carR)
    id = response.body._id
    expect(response.status).toBe(201)
  })
})
