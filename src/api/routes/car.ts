import { Router } from 'express'
import carUseCases from '@useCases/car/index'

const carRouter = Router()

carRouter
  .get('/', carUseCases.listAllCars)
  .post('/', carUseCases.registerCar)
  .delete('/:id', carUseCases.removeCarById)
  .put('/:id', carUseCases.updateCarById)

export default carRouter
