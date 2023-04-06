import { registerUser } from './register/register'
import { listAllUsers } from './listAll/listAll'
import { removeUserById } from './remove/remove'
import { updateUserById } from './update/update'
import { authenticateUser } from './auth/auth'

const userUseCases = {
  registerUser,
  listAllUsers,
  removeUserById,
  updateUserById,
  authenticateUser,
}

export default userUseCases
