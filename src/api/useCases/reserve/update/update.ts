import { Request, Response } from 'express'
import Reserve from '@entities/reserve'
import reserveValidationSchema from '@utils/validateReserve'

export const updateReserveById = async (req: Request, res: Response) => {
  try {
    const { error } = reserveValidationSchema.validate(req.body)
    if (error) {
      return res.status(400).json({ error: error.details[0].message })
    }
  } catch (err) {
    return res.status(500).send('Internal server error')
  }

  const { id } = req.params
  const updates = req.body

  try {
    const reserve = await Reserve.findById(id)
    if (!reserve) {
      return res.status(404).json({ message: 'Reserve not found' })
    }
    reserve.set(updates)
    const result = await reserve.save()
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}
