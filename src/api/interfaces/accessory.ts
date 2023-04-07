import { Document } from 'mongoose'

export interface IAccessory extends Document {
  description: string
}
