import express, { Application } from 'express'
import router from './api/routes/index'
import Database from './data/Database'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import swaggerUi from 'swagger-ui-express'

const swaggerDocs = require('../swagger.json')

const app: Application = express()
const db: Database = new Database()
const basePath: string = '/api/v1'

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(helmet())

app.use(`${basePath}/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(basePath, router)

db.connect()

export default app
