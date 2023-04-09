import { registerUser } from './register/register'
import { listAllUsers } from './listAll/listAll'
import { removeUserById } from './remove/remove'
import { updateUserById } from './update/update'
import { authenticateUser } from './auth/auth'
import { listUserById } from './listById/listById'

const userUseCases = {
  registerUser,
  listAllUsers,
  removeUserById,
  updateUserById,
  authenticateUser,
  listUserById,
}

export default userUseCases
