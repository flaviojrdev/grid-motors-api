import supertest from 'supertest'
import app from '../../../../app'

const request = supertest(app)

const carU = {
  _id: '5f9f1b9b9c9d440000a1b0f2',
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
  _id: '5f9f1b9b9c9d440000a1b0f2',
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

const routeString = '/api/v1/car'
const idRoute = `/api/v1/car/${carU._id}`

describe('Car update', () => {
  beforeAll(async () => {
    await request.post(routeString).send(carU)
  })

  afterAll(async () => {
    await request.delete(idRoute)
  })

  test('should update a car by id', async () => {
    const response = await request.put(idRoute).send(carU2)
    expect(response.status).toBe(200)
    expect(response.body).toEqual(expect.objectContaining({
      _id: carU._id,
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
    }));    
  })
})