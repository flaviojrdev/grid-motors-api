import { registerCar } from './register/register'
import { listAllCars } from './listAll/listAll'
import { listCarById } from './listById/listById'
import { removeCarById } from './remove/remove'
import { updateCarById } from './update/update'
import { updateAccessoryById } from './updateAccessory/updateAccessory'

const carUseCases = {
  registerCar,
  listAllCars,
  listCarById,
  removeCarById,
  updateCarById,
  updateAccessoryById
}

export default carUseCases
