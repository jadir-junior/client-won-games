import * as S from './styles'

import { FormLink, FormLoading, FormWrapper } from 'components/Form'

import Button from 'components/Button'
import { Email as EmailIcon } from '@styled-icons/material-outlined/Email'
import Link from 'next/link'
import { Lock as LockIcon } from '@styled-icons/material-outlined/Lock'
import TextField from 'components/TextField'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useState } from 'react'

const FormSignIn = () => {
  const { push } = useRouter()
  const [values, setValues] = useState({})
  const [loading, setLoading] = useState(false)

  const handleInput = (field: string, value: string) => {
    setValues((state) => ({ ...state, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    })

    if (result?.url) {
      return push(result?.url)
    }

    setLoading(false)
    console.log('email ou senha invalida')
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="email"
          type="email"
          icon={<EmailIcon />}
          onInputChange={(value) => handleInput('email', value)}
        />
        <TextField
          name="password"
          placeholder="password"
          type="password"
          icon={<LockIcon />}
          onInputChange={(value) => handleInput('password', value)}
        />
        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button type="submit" fullWidth size="large" disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign in now</span>}
        </Button>

        <FormLink>
          Don’t have an account?{' '}
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
