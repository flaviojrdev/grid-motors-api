import { Request, Response } from 'express'
import User from '@entities/user'

export const removeUserById = async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await User.findByIdAndDelete(id)
  res.status(200).json(result)
}