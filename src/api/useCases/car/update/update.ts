import { Request, Response } from 'express'
import mongoose from 'mongoose'
import Car from '@entities/car'
import carValidationSchema from '@utils/validateCar'

export const updateCarById = async (req: Request, res: Response) => {
  try {
    const { error } = carValidationSchema.validate(req.body)
    if (error) {
      return res.status(400).json({ error: error.details[0].message })
    }

    const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'The id is not in the default MongoDB ObjectID' })
    }

    const updates = req.body
    const car = await Car.findByIdAndUpdate(id, updates, { new: true })
    if (!car) {
      return res.status(404).json({ message: 'Car not found' })
    }

    const { _id, __v, ...carWithoutV } = car.toObject()
    const formattedCar = {
      _id: _id,
      ...carWithoutV
    }

    res.status(200).json(formattedCar)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
