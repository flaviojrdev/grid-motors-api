import Joi from 'joi'

const reserveValidationSchema = Joi.object({
  start_date: Joi.string()
    .regex(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/)
    .required()
    .messages({
      'any.required': 'Start date is required',
      'string.base': 'Start date must be a string',
      'string.pattern.base': 'Start date must be in the format DD/MM/YYYY',
    }),
  end_date: Joi.string()
    .regex(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/)
    .required()
    .messages({
      'any.required': 'End date is required',
      'string.base': 'End date must be a string',
      'string.pattern.base': 'End date must be in the format DD/MM/YYYY',
    }),
  final_value: Joi.number().required().messages({
    'any.required': 'Final value is required',
    'number.base': 'Final value must be a number',
  }),
  id_car: Joi.string().required().messages({
    'any.required': 'Car ID is required',
    'string.base': 'Car ID must be a string',
  }),
  id_user: Joi.string().required().messages({
    'any.required': 'User ID is required',
    'string.base': 'User ID must be a string',
  }),
})

export default reserveValidationSchema
