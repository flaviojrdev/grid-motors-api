import Joi from 'joi'

const userValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.base': 'Name should be a string',
    'string.empty': 'Name cannot be empty',
    'any.required': 'Name is required',
  }),
  cpf: Joi.string()
    .pattern(/^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/)
    .required()
    .messages({
      'string.pattern.base': 'CPF should be in the format XXX.XXX.XXX-XX',
      'any.required': 'CPF is required',
    }),
  birth: Joi.string()
    .pattern(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/)
    .custom((value, helpers) => {
      const birthDate = new Date(value)
      const ageInMs = Date.now() - birthDate.getTime()
      const ageInYears = ageInMs / (1000 * 3600 * 24 * 365.25)
      if (ageInYears < 18) {
        return helpers.message({
          custom: 'You must be at least 18 years old',
        })
      }
      return value
    })
    .required()
    .messages({
      'string.pattern.base': 'Birth date should be in the format DD/MM/YYYY',
      'any.required': 'Birth date is required',
    }),
  email: Joi.string().email().required().messages({
    'string.email': 'Email should be a valid email address',
    'any.required': 'Email is required',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Password should have at least {#limit} characters',
    'any.required': 'Password is required',
  }),
  cep: Joi.string()
    .pattern(/^([0-9]){8}$/)
    .required()
    .messages({
      'string.pattern.base': 'CEP should have 8 digits',
      'any.required': 'CEP is required',
    }),
  qualified: Joi.boolean().truthy('sim', 'yes').falsy('não', 'no').required().messages({
    'any.only': 'Qualified should be either "sim/yes" or "não/no"',
    'any.required': 'Qualified is required',
  }),
  patio: Joi.string().required().messages({
    'string.base': 'Patio should be a string',
    'string.empty': 'Patio cannot be empty',
    'any.required': 'Patio is required',
  }),
  complement: Joi.string().required().messages({
    'string.base': 'Complement should be a string',
    'string.empty': 'Complement cannot be empty',
    'any.required': 'Complement is required',
  }),
  neighborhood: Joi.string().required().messages({
    'string.base': 'Neighborhood should be a string',
    'string.empty': 'Neighborhood cannot be empty',
    'any.required': 'Neighborhood is required',
  }),
  locality: Joi.string().required().messages({
    'string.base': 'Locality should be a string',
    'string.empty': 'Locality cannot be empty',
    'any.required': 'Locality is required',
  }),
})

export default userValidationSchema
