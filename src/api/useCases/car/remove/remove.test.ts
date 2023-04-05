import supertest from 'supertest'
import app from '../../../../app'

const request = supertest(app)

const carD = {
  _id: '5f9f1b9b9c9d440000a1b0f1',
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
const idString = `/api/v1/car/${carD._id}`

describe('Car deletion', () => {
  beforeAll(() => {
    return request.post(routeString).send(carD)
  })

  test('Should be able to delete a car by id', async () => {
    const response = await request.delete(idString)
    expect(response.status).toBe(200)
  })
})