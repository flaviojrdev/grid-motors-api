import { Document } from 'mongoose'

export interface Ireserve extends Document {
  start_date: String
  end_date: String
  final_value: number
  id_car: object
  id_user: object
}
