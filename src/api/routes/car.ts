import { Router } from 'express'
import { authMiddleware } from '@middlewares/auth'
import carUseCases from '@useCases/car/index'

const carRouter = Router()

carRouter
  .get('/', carUseCases.listAllCars)
  .get('/:id', carUseCases.listCarById)
  .post('/', authMiddleware, carUseCases.registerCar)
  .delete('/:id', authMiddleware, carUseCases.removeCarById)
  .put('/:id', authMiddleware, carUseCases.updateCarById)
  .patch('/:carId/accessories/:accessoryId', authMiddleware, carUseCases.updateAccessoryById)

export default carRouter
