import { Request } from 'express'
import { IUser } from '@interfaces/user'

export interface IRequestWithUser extends Request {
  user?: IUser
}
