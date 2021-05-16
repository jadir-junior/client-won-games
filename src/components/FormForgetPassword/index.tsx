import * as S from './styles'

import { FormError, FormLoading, FormWrapper } from 'components/Form'

import Button from 'components/Button'
import { Email as EmailIcon } from '@styled-icons/material-outlined/Email'
import { ErrorOutline } from '@styled-icons/material-outlined/ErrorOutline'
import { FieldErrors } from 'utils/validations'
import TextField from 'components/TextField'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useState } from 'react'

const FormForgetPassword = () => {
  const routes = useRouter()
  const { push, query } = routes
  const [values, setValues] = useState({ email: '' })
  const [loading, setLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [formError, setFormError] = useState('')

  const handleInput = (field: string, value: string) => {
    setValues((state) => ({ ...state, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = {}

    if (Object.keys(errors).length) {
      setFieldErrors(errors)
      setLoading(false)
      return
    }

    setFieldErrors({})

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
    })

    if (result?.url) {
      return push(result?.url)
    }

    setLoading(false)
    setFormError('username or password is invalid')
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline />
          {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
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
    </FormWrapper>
  )
}

export default FormForgetPassword
