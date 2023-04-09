import { registerReserve } from './register/register'
import { listAllReserves } from './listAll/listAll'
import { removeReserveById } from './remove/remove'
import { updateReserveById } from './update/update'
import { listReserveById } from './listById/listById'

const reservationUseCases = {
  registerReserve,
  listAllReserves,
  removeReserveById,
  updateReserveById,
  listReserveById,
}

export default reservationUseCases
