import Joi from 'joi'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'

const fieldsValidations = {
  username: Joi.string().min(5).required(),
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().required(),
  confirm_password: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({ 'any.only': 'confirm password does not match with password' })
}

export type FieldErrors = {
  [key: string]: string
}

function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

export function signUpValidate(values: UsersPermissionsRegisterInput) {
  const schema = Joi.object(fieldsValidations)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type SingInValues = Omit<UsersPermissionsRegisterInput, 'username'>
export function signInValidate(values: SingInValues) {
  const { email, password } = fieldsValidations

  const schema = Joi.object({ email, password })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type ForgetValidadeParams = Pick<UsersPermissionsRegisterInput, 'email'>
export function forgotValidate(values: ForgetValidadeParams) {
  const { email } = fieldsValidations

  const schema = Joi.object({ email })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type ResetValidadeParams = {
  password: string
  confirm_password: string
}
export function resetValidate(values: ResetValidadeParams) {
  const { password, confirm_password } = fieldsValidations

  const schema = Joi.object({ password, confirm_password })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
