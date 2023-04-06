import { Router } from 'express'
import userUseCases from '@useCases/userindex'

const authRouter = Router()

authRouter.post('/', userUseCases.authenticateUser)

export default authRouter