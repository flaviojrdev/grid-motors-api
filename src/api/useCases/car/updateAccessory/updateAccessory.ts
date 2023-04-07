import { Request, Response } from 'express'
import Car from '@entities/car'
import { IAccessory } from '@interfaces/accessory'

export const updateAccessoryById = async (req: Request, res: Response) => {
  const { carId, accessoryId } = req.params
  console.log('carId', carId)
  console.log('accessoryId', accessoryId)
  const updates = req.body

  try {
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
