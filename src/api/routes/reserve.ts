import { Router } from 'express'
import { authMiddleware } from '@middlewares/auth'
import reservationUseCases from '@useCases/reserve/index'

const reserveRouter = Router()

reserveRouter
  .post('/', authMiddleware, reservationUseCases.registerReserve)
  .get('/', authMiddleware, reservationUseCases.listAllReserves)
  .delete('/:id', authMiddleware, reservationUseCases.removeReserveById)
  .put('/:id', authMiddleware, reservationUseCases.updateReserveById)

export default reserveRouter
