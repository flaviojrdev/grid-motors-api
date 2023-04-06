import User from '@entities/user'
import type { Request, Response } from 'express'
import userValidationSchema from '@utils/validateUser'
import { MongoServerError } from 'mongodb'
import axios from 'axios'
import bcrypt from 'bcrypt'

export const registerUser = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${req.body.cep}/json/`)
    const { data } = response
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const newUser = new User({
      name: req.body.name,
      cpf: req.body.cpf,
      birth: req.body.birth,
      email: req.body.email,
      password: hashedPassword,
      cep: req.body.cep,
      qualified: req.body.qualified === 'sim',
      patio: data.logradouro,
      complement: data.complemento,
      neighborhood: data.bairro,
      locality: data.localidade,
      uf: data.uf,
    })

    const userObject = newUser.toObject({ versionKey: false })
    delete userObject._id
    const { error } = userValidationSchema.validate(userObject)
    if (error) {
      return res.status(400).json({ error: error.details[0].message })
    }

    const result = await newUser.save()
    const { _id, __v, ...user } = result.toObject()
    res.status(201).json(user)
  } catch (err) {
    if (err instanceof MongoServerError && err.code === 11000 && err.keyValue.email) {
      return res.status(409).json({ error: 'Email already exists' })
    }
    res.status(500).send('Internal server error')
  }
}
