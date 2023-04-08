import { Request, Response } from 'express'
import User from '@entities/user'

export const listAllUsers = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1
  const limit = parseInt(req.query.limit as string) || 100

  const total = await User.countDocuments()
  const offset = (page - 1) * limit + 1
  const offsets = offset + limit - 1

  const users = await User.find()
    .skip((page - 1) * limit)
    .limit(limit)

  res.status(200).json({
    users: users,
    total: total,
    limit: limit,
    offset: offset,
    offsets: offsets,
  })
}
