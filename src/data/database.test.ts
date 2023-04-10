import mongoose from 'mongoose'
import Database from '../data/Database'

describe('Database', () => {
  const db = new Database()

  beforeAll(async () => {
    await db.connect()
  })

  afterAll(async () => {
    await mongoose.connection.close()
  })

  test('should connect to the database', async () => {
    expect(mongoose.connection.readyState).toBe(1)
  })

  test('should disconnect from the database', async () => {
    await db.disconnect()
    expect(mongoose.connection.readyState).toBe(0)
  })
})
