import { Request, Response } from 'express'
import Reserve from '@entities/reserve'

export const removeReserveById = async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await Reserve.findByIdAndDelete(id)
  res.status(200).json(result)
}
