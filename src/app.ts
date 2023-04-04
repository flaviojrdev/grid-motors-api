import express, { Application } from 'express'
import router from './api/routes/index'
import Database from './data/Database'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'

const app: Application = express()
const db: Database = new Database()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(helmet())
app.use('/api/v1', router)

db.connect()

export default app
