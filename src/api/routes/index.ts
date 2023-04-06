import { Router } from 'express'
import carRouter from './car'
import userRouter from './user'
import reserveRouter from './reserve'
import authRouter from './auth'

const router = Router()

router.use('/car', carRouter)
router.use('/user', userRouter)
router.use('/reserve', reserveRouter)
router.use('/auth', authRouter)

export default router
