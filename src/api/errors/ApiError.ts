export class ApiError extends Error {
  statusCode: number
  name: string
  isOperational: boolean

  constructor(message: string, statusCode: number, name?: string, isOperational?: boolean) {
    super(message)
    this.statusCode = statusCode
    this.name = name || 'ApiError'
    this.isOperational = isOperational || false
  }
}
