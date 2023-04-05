import { Request, Response } from 'express'
import Car from '@entities/car'
import carSchema from '@utils/validateCar'

export const updateCarById = async (req: Request, res: Response) => {
  try {
    const { error } = carSchema.validate(req.body)
    if (error) {
      return res.status(400).json({ error: error.details[0].message })
    }
  } catch (err) {
    console.error(err)
    return res.status(500).send('Internal server error')
  }

  const { id } = req.params
  const updates = req.body

  try {
    const car = await Car.findById(id)
    if (!car) {
      return res.status(404).json({ message: 'Car not found' })
    }
    car.set(updates)
    const result = await car.save()
    res.status(200).json(result)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}