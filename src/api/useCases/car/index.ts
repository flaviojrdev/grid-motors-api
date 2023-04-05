import { registerCar } from './register/register'
import { listAllCars } from './listAll/listAll'
import { removeCarById } from './remove/remove'
import { updateCarById } from './update/update'

const carUseCases = {
  registerCar,
  listAllCars,
  removeCarById,
  updateCarById
}

export default carUseCases
