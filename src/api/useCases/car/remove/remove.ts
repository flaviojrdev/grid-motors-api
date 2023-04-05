import { Request, Response } from 'express'
import Car from '@entities/car'

export const removeCarById = async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await Car.findByIdAndDelete(id)
  res.status(200).json(result)
}