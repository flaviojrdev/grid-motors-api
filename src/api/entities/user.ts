import mongoose from 'mongoose'
import { IUser } from '@interfaces/user'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  birth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  cep: {
    type: String,
    required: true,
  },
  qualified: {
    type: String,
    required: true,
  },
  patio: {
    type: String,
    required: true,
  },
  complement: {
    type: String,
    required: true,
  },
  neighborhood: {
    type: String,
    required: true,
  },
  locality: {
    type: String,
    required: true,
  },
  uf: {
    type: String,
    required: true,
  },
})

const User = mongoose.model<IUser>('User', userSchema)

export default User
