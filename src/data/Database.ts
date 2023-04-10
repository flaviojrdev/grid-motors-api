import dotEnv from 'dotenv'
dotEnv.config()
import mongoose, { ConnectOptions } from 'mongoose'
import logger from '../api/utils/logger'

class Database {
  private uri: string = `${process.env.DATABASE_URI}`

  constructor() {}

  public async connect() {
    await mongoose
      .connect(this.uri, { useNewUrlParser: true } as ConnectOptions)
      .then(() => {
        logger.info('Database connection successful')
      })
      .catch((err) => {
        logger.info('Database connection error\n', err)
        process.exit(1)
      })
  }

  public async disconnect() {
    await mongoose
      .disconnect()
      .catch((err) => {
        logger.info('Database disconnection error\n', err)
        process.exit(1)
      })
  }
}

export default Database
