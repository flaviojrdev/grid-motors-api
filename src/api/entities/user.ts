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
    validate: {
      validator: (cpf: string) => {
        const cpfRegex = /^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/
        return cpfRegex.test(cpf)
      },
      message: (props: any) => `${props.value} is not a valid CPF!`,
    },
  },
  birth: {
    type: String,
    required: true,
    validate: {
      validator: (dateString: string) => {
        const [day, month, year] = dateString.split('/')
        const birthDate = new Date(Number(year), Number(month) - 1, Number(day))
        const diff = Date.now() - birthDate.getTime()
        const ageDate = new Date(diff)
        const age = Math.abs(ageDate.getUTCFullYear() - 1970)
        return age >= 18
      },
      message: (props: any) => `You must be at least 18 years old to register!`,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
      },
      message: (props: any) => `${props.value} is not a valid email!`,
    },
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
    type: Boolean,
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
})

const User = mongoose.model<IUser>('User', userSchema)

export default User
