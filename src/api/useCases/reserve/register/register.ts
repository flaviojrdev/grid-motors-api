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

    if (user.qualified !== 'yes') {
      return res.status(403).json({ error: 'User must have a driver license' })
    }

    const start = req.body.start_date
    const end = req.body.end_date
    const duration = moment.duration(moment(end, 'DD/MM/YYYY').diff(moment(start, 'DD/MM/YYYY')))
    const days = duration.asDays()
    const finalValue = car.values_per_day * days

    const existingUserReservation = await Reserve.findOne({
      id_user: user._id,
      start_date: { $lte: end },
      end_date: { $gte: start }
    })
    if (existingUserReservation) {
      return res.status(400).json({ error: `You have already made a reservation from ${start} until ${end}` })
    }

    const existingReservation = await Reserve.findOne({
      id_car: car._id,
      start_date: { $lte: end },
      end_date: { $gte: start }
    })
    if (existingReservation) {
      return res.status(400).json({ error: `This car is already reserved between ${start} to ${end}` })
    }

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
    const formattedReserve = {
      _id: _id,
      ...reserve
    }
    
    res.status(201).json(formattedReserve)
  } catch (err) {
    console.error(err)
    return res.status(500).send('Internal server error')
  }
}
