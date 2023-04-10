import { Request, Response } from 'express'
import mongoose from 'mongoose'
import Reserve from '../../../entities/reserve'

export const removeReserveById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'The id is not in the default MongoDB ObjectID' })
    }

    const reserve = await Reserve.findByIdAndDelete(id)
    if (!reserve) {
      return res.status(404).json({ error: 'Reserve not found' })
    }
    
    res.status(204).end()
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }  
}
