import supertest from 'supertest'
import app from '../../../../app'

const request = supertest(app)
const routeString = '/api/v1/car'
let id = ''

const carU = {
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

const carU2 = {
  model: 'Celta',
  color: 'White',
  year: 2019,
  values_per_day: 50,
  accessories: [
    {
      description: 'Air Conditioner',
    },
    {
      description: 'MP3 Player',
    },
  ],
  number_of_passengers: 4,
}

describe('Car update', () => {
  beforeAll(async () => {
    process.env.SKIP_AUTH = 'true'
    const response = await request.post(routeString).send(carU)
    id = response.body._id
  })

  afterAll(async () => {
    await request.delete(`${routeString}/${id}`)
    process.env.SKIP_AUTH = 'false'
  })

  test('should update a car by id', async () => {
    const response = await request.put(`${routeString}/${id}`).send(carU2)
    expect(response.status).toBe(200)
  })
})