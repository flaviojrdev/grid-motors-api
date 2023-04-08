import supertest from 'supertest'
import app from '../../../../app'

const request = supertest(app)
const routeString = '/api/v1/car'
let id = ''

const carD = {
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

describe('Car deletion', () => {

  beforeAll(async () => {
    process.env.SKIP_AUTH = 'true'
    const response = await request.post(routeString).send(carD)
    id = response.body._id
  })

  afterAll(async () => {
    process.env.SKIP_AUTH = 'false'
  })

  test('Should be able to delete a car', async () => {
    const response = await request.delete(`${routeString}/${id}`)
    expect(response.status).toBe(204)
  })  
})
