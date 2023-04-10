import Joi from 'joi'
import moment from 'moment'

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
}).custom((value, helpers) => {
  const startDate = moment(value.start_date, 'DD/MM/YYYY');
  const endDate = moment(value.end_date, 'DD/MM/YYYY');
  if (!startDate.isBefore(endDate)) {
    return helpers.error('any.invalid');
  }
  return value;
}).messages({
  'any.invalid': 'Start date must be before end date',
});

export default reserveValidationSchema
