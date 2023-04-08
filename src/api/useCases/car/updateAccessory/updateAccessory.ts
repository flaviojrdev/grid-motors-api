import { Request, Response } from 'express'
import mongoose from 'mongoose'
import Car from '@entities/car'
import { IAccessory } from '@interfaces/accessory'

export const updateAccessoryById = async (req: Request, res: Response) => {
  try {
    const { carId, accessoryId } = req.params
    const updates = req.body

    if (!mongoose.Types.ObjectId.isValid(carId)) {
      return res.status(400).json({ message: 'The car id is not in the default MongoDB ObjectID' })
    }

    if (!mongoose.Types.ObjectId.isValid(accessoryId)) {
      return res.status(400).json({ message: 'The accessory id is not in the default MongoDB ObjectID' })
    }

    const car = await Car.findById(carId)
    if (!car) {
      return res.status(404).json({ message: 'Car not found' })
    }

    const accessoryIndex = car.accessories.findIndex((accessory: IAccessory) => accessory.id === accessoryId)
    if (accessoryIndex === -1) {
      return res.status(404).json({ message: 'Accessory not found' })
    }

    car.accessories[accessoryIndex] = { ...car.accessories[accessoryIndex], ...updates }

    const updatedCar = await car.save()

    res.status(200).json(updatedCar.accessories[accessoryIndex])
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
}
