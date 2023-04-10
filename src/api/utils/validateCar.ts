import Joi from 'joi'

const accessoryValidationSchema = Joi.object({
  description: Joi.string().required().messages({
    'string.base': 'Description must be a string',
    'string.empty': 'Description cannot be empty',
    'any.required': 'Description is required',
  }),
})

const carValidationSchema = Joi.object({
  model: Joi.string().required().messages({
    'string.base': 'Model must be a string',
    'string.empty': 'Model cannot be empty',
    'any.required': 'Model is required',
  }),
  color: Joi.string().required().messages({
    'string.base': 'Color must be a string',
    'string.empty': 'Color cannot be empty',
    'any.required': 'Color is required',
  }),
  year: Joi.number().required().min(1950).max(2023).messages({
    'number.base': 'Year must be a number',
    'number.empty': 'Year cannot be empty',
    'number.min': 'Year must be between 1950 and 2023',
    'number.max': 'Year must be between 1950 and 2023',
    'any.required': 'Year is required',
  }),
  values_per_day: Joi.number().required().messages({
    'number.base': 'Values per day must be a number',
    'number.empty': 'Values per day cannot be empty',
    'any.required': 'Values per day is required',
  }),
  accessories: Joi.array().items(accessoryValidationSchema).min(1).required().unique('description').messages({
    'array.base': 'Accessories must be an array',
    'array.empty': 'Accessories cannot be empty',
    'array.min': 'At least one accessory is required',
    'any.required': 'Accessories is required',
    'array.unique': 'Cannot have two accessories with the same description',
  }),
  number_of_passengers: Joi.number().required().messages({
    'number.base': 'Number of passengers must be a number',
    'number.empty': 'Number of passengers cannot be empty',
    'any.required': 'Number of passengers is required',
  }),
})

export default carValidationSchema
