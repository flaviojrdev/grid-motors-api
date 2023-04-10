import { Request, Response } from 'express'
import mongoose from 'mongoose'
import Car from '../../../entities/car'

export const removeCarById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'The id is not in the default MongoDB ObjectID' })
    }
    
    const car = await Car.findByIdAndDelete(id)
    if (!car) {
      return res.status(404).json({ error: 'Car not found' })
    }

    res.status(204).end()
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
