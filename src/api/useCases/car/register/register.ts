import Car from '@entities/car'
import { Request, Response } from 'express'
import carValidationSchema from '@utils/validateCar'

export const registerCar = async (req: Request, res: Response) => {
  try {
    const carData = { ...req.body }

    const { error } = carValidationSchema.validate(carData)
    if (error) {
      return res.status(400).json({ error: error.details[0].message })
    }

    const newCar = new Car(carData)
    const result = await newCar.save()
    const { _id, __v, ...car } = result.toObject()
    const formattedResponse = {
      _id: _id,
      ...car,
    }

    res.status(201).json(formattedResponse)
  } catch (err) {
    return res.status(500).send('Internal server error')
  }
}
