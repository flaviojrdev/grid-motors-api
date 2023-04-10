import { Request, Response } from 'express'
import User from '../../../entities/user'

export const listAllUsers = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1
  const limit = parseInt(req.query.limit as string) || 100

  const filter: any = {}

  if (req.query.name) {
    filter.name = { $regex: new RegExp(req.query.name as string, 'i') }
  }
  if (req.query.cpf) {
    filter.cpf = { $regex: new RegExp(req.query.cpf as string, 'i') }
  }
  if(req.query.birth) {
    filter.birth = parseInt(req.query.birth as string)
  }
  if (req.query.email) {
    filter.email = { $regex: new RegExp(req.query.email as string, 'i') }
  }
  if (req.query.cep) {
    filter.cep = { $regex: new RegExp(req.query.cep as string, 'i') }
  }
  if (req.query.qualified) {
    filter.qualified = { $regex: new RegExp(req.query.qualified as string, 'i') }
  }
  if (req.query.patio) {
    filter.patio = { $regex: new RegExp(req.query.patio as string, 'i') }
  }
  if (req.query.complement) {
    filter.complement = { $regex: new RegExp(req.query.complement as string, 'i') }
  }
  if (req.query.neighborhood) {
    filter.neighborhood = { $regex: new RegExp(req.query.neighborhood as string, 'i') }
  }
  if (req.query.locality) {
    filter.locality = { $regex: new RegExp(req.query.locality as string, 'i') }
  }
  if (req.query.uf) {
    filter.uf = { $regex: new RegExp(req.query.uf as string, 'i') }
  }
  

  const total = await User.countDocuments(filter)
  const offset = (page - 1) * limit + 1
  const offsets = offset + limit - 1

  const users = await User.find(filter)
    .skip((page - 1) * limit)
    .limit(limit)
    .select('-__v')

  res.status(200).json({
    users,
    total,
    limit,
    offset,
    offsets,
  })
}
