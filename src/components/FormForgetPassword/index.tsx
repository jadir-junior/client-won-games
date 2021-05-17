import { FieldErrors, forgotValidate } from 'utils/validations'
import {
  FormError,
  FormLoading,
  FormSuccess,
  FormWrapper
} from 'components/Form'

import Button from 'components/Button'
import { CheckCircleOutline } from '@styled-icons/material-outlined/CheckCircleOutline'
import { Email as EmailIcon } from '@styled-icons/material-outlined/Email'
import { ErrorOutline } from '@styled-icons/material-outlined/ErrorOutline'
import TextField from 'components/TextField'
import { forgotAndResetPasswordError } from 'utils/graphqlErrors'
import { useState } from 'react'

const FormForgetPassword = () => {
  const [values, setValues] = useState({ email: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [formError, setFormError] = useState('')

  const handleInput = (field: string, value: string) => {
    setValues((state) => ({ ...state, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = forgotValidate(values)

    if (Object.keys(errors).length) {
      setFieldErrors(errors)
      setLoading(false)
      return
    }

    setFieldErrors({})

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(values)
      }
    )

    const data = await response.json()
    setLoading(false)

    if (data.error) {
      setFormError(forgotAndResetPasswordError(data))
    } else {
      setSuccess(true)
    }
  }

  return (
    <FormWrapper>
      {success ? (
        <FormSuccess>
          <CheckCircleOutline />
          You just received an email!
        </FormSuccess>
      ) : (
        <>
          {!!formError && (
            <FormError>
              <ErrorOutline />
              {formError}
            </FormError>
          )}
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              name="email"
              placeholder="email"
              type="email"
              error={fieldErrors?.email}
              icon={<EmailIcon />}
              onInputChange={(value) => handleInput('email', value)}
            />

            <Button type="submit" fullWidth size="large" disabled={loading}>
              {loading ? <FormLoading /> : <span>Send email</span>}
            </Button>
          </form>
        </>
      )}
    </FormWrapper>
  )
}

export default FormForgetPassword
