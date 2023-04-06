import Reserve from '@entities/reserve'
import Car from '@entities/car'
import { Response } from 'express'
import { IRequestWithUser } from '@interfaces/requestWithUser'
import reserveValidationSchema from '@utils/validateReserve'
import moment from 'moment'

export const registerReserve = async (req: IRequestWithUser, res: Response) => {
  try {
    const carId = req.body.id_car
    const car = await Car.findById(carId)
    if (!car) {
      return res.status(400).json({ error: 'Car not found' })
    }

    const user = res.locals.user
    if (!user) {
      return res.status(401).json({ error: 'User unauthorized' })
    }

    const start = req.body.start_date
    const end = req.body.end_date
    const duration = moment.duration(moment(end, 'DD/MM/YYYY').diff(moment(start, 'DD/MM/YYYY')))
    const days = duration.asDays()
    const finalValue = car.values_per_day * days

    const reserveData = {
      start_date: start,
      end_date: end,
      id_car: car._id,
      final_value: finalValue,
      id_user: user._id,
    }
    const reserveDataTest = {
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      id_car: car._id.toString(),
      final_value: finalValue,
      id_user: user._id.toString(),
    }

    const { error } = reserveValidationSchema.validate(reserveDataTest)
    if (error) {
      return res.status(400).json({ error: error.details[0].message })
    }

    const newReserve = new Reserve(reserveData)
    const result = await newReserve.save()
    const { _id, __v, ...reserve } = result.toObject()
    res.status(201).json(reserve)
  } catch (err) {
    return res.status(500).send('Internal server error')
  }
}
