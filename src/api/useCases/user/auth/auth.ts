import User from '@entities/user'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Secret } from 'jsonwebtoken'

export const authenticateUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' })
    }

    const acessToken = signAcessToken(user._id)
    res.status(200).json({ token: acessToken })
  } catch (err) {
    return res.status(500).send('Internal server error')
  }
}

const signAcessToken = (userId: string) => {
  const secret: Secret = process.env.JWT_SECRET as Secret
  const expiresIn = process.env.JWT_EXPIRES_IN as string
  const payload = {
    id: userId,
  }

  return jwt.sign(payload, secret, { expiresIn })
}