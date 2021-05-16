import { FieldErrors, resetValidate } from 'utils/validations'
import { FormError, FormLoading, FormWrapper } from 'components/Form'

import Button from 'components/Button'
import { ErrorOutline } from '@styled-icons/material-outlined/ErrorOutline'
import { Lock as LockIcon } from '@styled-icons/material-outlined/Lock'
import TextField from 'components/TextField'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useState } from 'react'

const FormResetPassword = () => {
  const routes = useRouter()
  const { push, query } = routes
  const [values, setValues] = useState({ password: '', confirm_password: '' })
  const [loading, setLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [formError, setFormError] = useState('')

  const handleInput = (field: string, value: string) => {
    setValues((state) => ({ ...state, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = resetValidate(values)

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
          name="password"
          placeholder="password"
          type="password"
          error={fieldErrors?.password}
          onInputChange={(value) => handleInput('password', value)}
          icon={<LockIcon />}
        />
        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          error={fieldErrors?.confirm_password}
          onInputChange={(value) => handleInput('confirm_password', value)}
          icon={<LockIcon />}
        />

        <Button type="submit" fullWidth size="large" disabled={loading}>
          {loading ? <FormLoading /> : <span>Reset password</span>}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormResetPassword
