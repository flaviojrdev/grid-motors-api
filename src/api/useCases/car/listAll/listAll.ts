import { Request, Response } from 'express'
import Car from '../../../entities/car'

export const listAllCars = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1
  const limit = parseInt(req.query.limit as string) || 100

  const filter: any = {}

  if (req.query.model) {
    filter.model = { $regex: new RegExp(req.query.model as string, 'i') }
  }
  if (req.query.color) {
    filter.color = { $regex: new RegExp(req.query.color as string, 'i') }
  }
  if (req.query.year) {
    filter.year = parseInt(req.query.year as string)
  }
  if (req.query.values_per_day) {
    filter.values_per_day = parseFloat(req.query.values_per_day as string)
  }
  if (req.query.number_of_passengers) {
    filter.number_of_passengers = parseInt(req.query.number_of_passengers as string)
  }
  if (req.query.accessories) {
    filter.accessories = { $elemMatch: { description: { $regex: new RegExp(req.query.accessories as string, 'i') } } }
  }

  const total = await Car.countDocuments(filter)
  const offset = (page - 1) * limit + 1
  const offsets = offset + limit - 1

  const cars = await Car.find(filter)
    .skip((page - 1) * limit)
    .limit(limit)
    .select('-__v')

  res.status(200).json({
    cars,
    total,
    limit,
    offset,
    offsets,
  })
}
