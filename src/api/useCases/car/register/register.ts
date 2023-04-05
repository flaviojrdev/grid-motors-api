import car from '@entities/car'
import type { Request, Response } from 'express'
import carSchema from '@utils/validateCar'

export const registerCar = async (req: Request, res: Response) => {
  try {
    const { error } = carSchema.validate(req.body)
    if (error) {
      return res.status(400).json({ error: error.details[0].message })
    }
  } catch (err) {
    console.error(err)
    return res.status(500).send('Internal server error')
  }

  const newCar = new car(req.body)
  const result = await newCar.save()
  res.status(201).json(result)
}