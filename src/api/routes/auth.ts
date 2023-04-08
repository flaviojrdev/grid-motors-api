import { Router } from 'express'
import userUseCases from '@useCases/user/index'

const authRouter = Router()

authRouter.post('/', userUseCases.authenticateUser)

export default authRouter