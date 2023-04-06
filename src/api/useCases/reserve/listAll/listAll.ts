import { Request, Response } from 'express'
import Reserve from '@entities/reserve'

export const listAllReserves = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1
  const limit = parseInt(req.query.limit as string) || 100

  const total = await Reserve.countDocuments()
  const offset = (page - 1) * limit + 1
  const offsets = offset + limit - 1

  const reserves = await Reserve.find()
    .skip((page - 1) * limit)
    .limit(limit)

  res.status(200).json({
    reserves: reserves,
    total: total,
    limit: limit,
    offset: offset,
    offsets: offsets,
  })
}
