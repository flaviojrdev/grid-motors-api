import mongoose from 'mongoose'
import { Ireserve } from '../interfaces/reserve'

const reserveSchema = new mongoose.Schema<Ireserve>({
  start_date: {
    type: String,
    required: true,
  },
  end_date: {
    type: String,
    required: true,
  },
  final_value: {
    type: Number,
    required: true,
  },
  id_car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
    required: true,
  },
  id_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
})

const Reserve = mongoose.model<Ireserve>('Reserve', reserveSchema)

export default Reserve
