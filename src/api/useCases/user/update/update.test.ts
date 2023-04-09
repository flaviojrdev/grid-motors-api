import supertest from 'supertest'
import app from '../../../../app'

const request = supertest(app)
const routeString = '/api/v1/user'
let id = ''

function threeNum() {
  return Math.floor(Math.random() * 900) + 100
}

const userU = {
  name: 'Joaozinho Fulano',
  cpf: `${threeNum()}.${threeNum()}.${threeNum()}-00`,
  birth: '04/01/1990',
  email: Date.now().toString() + '@mail.com',
  password: '123456',
  cep: '01001000',
  qualified: 'yes',
  patio: 'Rua do Joaozinho',
  complement: 'Casa 1',
  neighborhood: 'Bairro do Joaozinho',
  locality: 'Cidade do Joaozinho',
  uf: 'SP',
}

const userU2 = {
  name: 'Ciclano',
  cpf: `${threeNum()}.${threeNum()}.${threeNum()}-00`,
  birth: '10/10/2000',
  email: Date.now().toString() + '@mail.com',
  password: '123456',
  cep: '01001000',
  qualified: 'yes',
  patio: 'Rua do Joaozinho',
  complement: 'Casa 1',
  neighborhood: 'Bairro do Joaozinho',
  locality: 'Cidade do Joaozinho',
  uf: 'SP',
}

describe('User update', () => {
  beforeAll(async () => {
    process.env.SKIP_AUTH = 'true'
    const response = await request.post(routeString).send(userU)
    id = response.body._id
  })

  afterAll(async () => {
    await request.delete(`${routeString}/${id}`)
    process.env.SKIP_AUTH = 'false'
  })

  test('should update a user by id', async () => {
    const response = await request.put(`${routeString}/${id}`).send(userU2)
    expect(response.status).toBe(200)
  })
})