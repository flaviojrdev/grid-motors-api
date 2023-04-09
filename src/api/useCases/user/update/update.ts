import { Request, Response } from 'express'
import mongoose from 'mongoose'
import User from '@entities/user'
import userValidationSchema from '@utils/validateUser'

export const updateUserById = async (req: Request, res: Response) => {
  try {
    const { error } = userValidationSchema.validate(req.body)
    if (error) {
      return res.status(400).json({ error: error.details[0].message })
    }

    const id = req.params.id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'The id is not in the default MongoDB ObjectID' })
    }

    const updates = req.body
    const user = await User.findByIdAndUpdate(id, updates, { new: true })
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    const { _id, __v, ...userWithoutV } = user.toObject()
    const formattedUser = {
      _id: _id,
      ...userWithoutV,
    }
    
    res.status(200).json(formattedUser)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}
