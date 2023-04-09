import { Request, Response } from 'express'
import mongoose from 'mongoose'
import Reserve from '@entities/reserve'
import reserveValidationSchema from '@utils/validateReserve'

export const updateReserveById = async (req: Request, res: Response) => {
  try {
    const { error } = reserveValidationSchema.validate(req.body)
    if (error) {
      return res.status(400).json({ error: error.details[0].message })
    }

    const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'The id is not in the default MongoDB ObjectID' })
    }

    const updates = req.body
    const reserve = await Reserve.findByIdAndUpdate(id, updates, { new: true })
    if (!reserve) {
      return res.status(404).json({ message: 'Reserve not found' })
    }

    const { _id, __v, ...reserveWithoutV } = reserve.toObject()
    const formattedReserve = {
      _id: _id,
      ...reserveWithoutV,
    }
    
    res.status(200).json(formattedReserve)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}
