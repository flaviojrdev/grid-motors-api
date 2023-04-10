import { Request, Response } from 'express'
import mongoose from 'mongoose'
import Reserve from '../../../entities/reserve'

export const listReserveById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'The id is not in the default MongoDB ObjectID' })
    }

    const reserve = await Reserve.findById(id)
    if (!reserve) {
      return res.status(404).json({ error: 'Reserve not found' })
    }

    const { __v, ...reserveFormatted } = reserve.toObject()
    res.status(200).json(reserveFormatted)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
