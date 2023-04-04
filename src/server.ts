import dotenv from 'dotenv'
dotenv.config()
import app from './app'
import logger from './api/utils/logger'

const port: number = parseInt(process.env.PORT || '3000', 10)

app.listen(port, () => {
  logger.info(`Listening on port ${port}`)
})
