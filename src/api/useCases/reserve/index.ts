import { registerReserve } from './register/register'
import { listAllReserves } from './listAll/listAll'
import { removeReserveById } from './remove/remove'
import { updateReserveById } from './update/update'

const reservationUseCases = {
  registerReserve,
  listAllReserves,
  removeReserveById,
  updateReserveById  
}

export default reservationUseCases
