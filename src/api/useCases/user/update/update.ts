import { Request, Response } from 'express'
import User from '@entities/user'
import userValidationSchema from '@utils/validateUser'

export const updateUserById = async (req: Request, res: Response) => {
  try {    
    const { error } = userValidationSchema.validate(req.body)
    if (error) {
      return res.status(400).json({ error: error.details[0].message })
    }
  } catch (err) {
    return res.status(500).send('Internal server error')
  }

  const { id } = req.params
  const updates = req.body
  if (req.body.qualified === 'sim') {
    req.body.qualified = true
  } else if (req.body.qualified === 'nao') {
    req.body.qualified = false
  }

  try {
    const user = await User.findById(id)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    user.set(updates)
    const result = await user.save()
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}
