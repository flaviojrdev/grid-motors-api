import { Request, Response } from 'express'
import Reserve from '@entities/reserve'

export const listAllReserves = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1
  const limit = parseInt(req.query.limit as string) || 100

  const filter: any = {}

  if (req.query.user_id) {
    filter.user_id = { $regex: new RegExp(req.query.user_id as string, 'i') }
  }
  if (req.query.car_id) {
    filter.car_id = { $regex: new RegExp(req.query.car_id as string, 'i') }
  }
  if (req.query.start_date) {
    filter.start_date = parseInt(req.query.start_date as string)
  }
  if (req.query.end_date) {
    filter.end_date = parseFloat(req.query.end_date as string)
  }
  if (req.query.final_value) {
    filter.final_value = parseInt(req.query.final_value as string)
  }

  const total = await Reserve.countDocuments(filter)
  const offset = (page - 1) * limit + 1
  const offsets = offset + limit - 1

  const reserves = await Reserve.find(filter)
    .skip((page - 1) * limit)
    .limit(limit)
    .select('-__v')

  res.status(200).json({
    reserves,
    total,
    limit,
    offset,
    offsets,
  })
}
