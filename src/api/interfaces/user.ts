import mongoose from 'mongoose'

export interface IUser extends mongoose.Document {
  name: string
  cpf: string
  birth: string
  email: string
  password: string
  cep: string
  qualified: boolean
  patio: string
  complement: string
  neighborhood: string
  locality: string
  uf: string
}
