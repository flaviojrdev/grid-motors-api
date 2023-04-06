import { Response, NextFunction } from 'express'
import jwt, { Secret, JwtPayload } from 'jsonwebtoken'
import User from '@entities/user'
import { IUser } from '@interfaces/user'
import { IRequestWithUser } from '@interfaces/requestWithUser'

export const authMiddleware = async (req: IRequestWithUser, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const secret: Secret = process.env.JWT_SECRET as Secret
    const token = authHeader.split(' ')[1]

    try {
      const decoded = jwt.verify(token, secret) as JwtPayload
      if (typeof decoded === 'string') {
        return res.status(401).json({ message: 'Unauthorized' })
      }

      const authenticatedUser = (await User.findById(decoded.id)) as IUser & { _id: any }
      if (!authenticatedUser) {
        return res.status(401).json({ message: 'Unauthorized' })
      }

      res.locals.user = authenticatedUser.toObject()
      next()
    } catch (err) {
      return res.status(401).json({ message: 'Unauthorized' })
    }
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
}
