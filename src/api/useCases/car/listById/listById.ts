import { Request, Response } from 'express'
import mongoose from 'mongoose'
import Car from '../../../entities/car'

export const listCarById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'The id is not in the default MongoDB ObjectID' })
    }

    const car = await Car.findById(id)
    if (!car) {
      return res.status(404).json({ error: 'Car not found' })
    }

    const { __v, ...carFormatted } = car.toObject()
    res.status(200).json(carFormatted)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
