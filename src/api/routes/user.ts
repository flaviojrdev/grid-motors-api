import { Router } from 'express'
import { authMiddleware } from '@middlewares/auth'
import userUseCases from '@useCases/user/index'

const userRouter = Router()

userRouter
  .get('/', authMiddleware, userUseCases.listAllUsers)
  .post('/', userUseCases.registerUser)
  .delete('/:id', authMiddleware, userUseCases.removeUserById)
  .put('/:id', authMiddleware, userUseCases.updateUserById)

export default userRouter
