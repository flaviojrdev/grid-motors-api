import { Router } from 'express'
import carRouter from './car'

const router = Router()

router.use('/car', carRouter)

export default router
