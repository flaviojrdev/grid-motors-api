import supertest from 'supertest'
import app from '../../../../app'

const request = supertest(app)

const carR = {
  _id: '5f9f1b9b9c9d440000a1b0f3',
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

const routeString = '/api/v1/car'
const idString = `/api/v1/car/${carR._id}`

describe('Car registration', () => {
  afterAll(async () => {
    return request.delete(idString).send(carR)
  })

  test('Should be able to register a new car', async () => {
    const response = await request.post(routeString).send(carR)
    expect(response.status).toBe(201)
  })
})
