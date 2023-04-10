import mongoose from 'mongoose'
import { IAccessory } from '../interfaces/accessory'
import { ICar } from '../interfaces/car'

const accessorySchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      unique: false,
    },
  }
)

const carSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
    min: 1950,
    max: 2023,
  },
  values_per_day: {
    type: Number,
    required: true,
  },
  accessories: {
    type: [accessorySchema],
    required: true,
    validate: (value: IAccessory[]) => value.length > 0,
  },
  number_of_passengers: {
    type: Number,
    required: true,
  },
})

const Car = mongoose.model<ICar>('Car', carSchema)

export default Car
