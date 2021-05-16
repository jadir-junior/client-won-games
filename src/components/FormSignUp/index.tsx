import { FieldErrors, signUpValidate } from 'utils/validations'
import { FormLink, FormLoading, FormWrapper } from 'components/Form'
import React, { useState } from 'react'

import { AccountCircle as AccountCircleIcon } from '@styled-icons/material-outlined/AccountCircle'
import Button from 'components/Button'
import { Email as EmailIcon } from '@styled-icons/material-outlined/Email'
import Link from 'next/link'
import { Lock as LockIcon } from '@styled-icons/material-outlined/Lock'
import { MUTATION_REGISTER } from 'graphql/mutations/register'
import TextField from 'components/TextField'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { signIn } from 'next-auth/client'
import { useMutation } from '@apollo/client'

const FormSignUp = () => {
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: ''
  })
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  })

  const [createUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
    onError: (err) => console.error(err),
    onCompleted: () => {
      !error &&
        signIn('credentials', {
          email: values.email,
          password: values.password,
          callbackUrl: '/'
        })
    }
  })

  const handleInput = (field: string, value: string) => {
    setValues((state) => ({ ...state, [field]: value }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const errors = signUpValidate(values)

    if (Object.keys(errors).length) {
      setFieldErrors(errors)
      return
    }

    setFieldErrors({})

    createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    })
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          error={fieldErrors?.username}
          onInputChange={(value) => handleInput('username', value)}
          icon={<AccountCircleIcon />}
        />
        <TextField
          name="email"
          placeholder="email"
          type="email"
          error={fieldErrors?.email}
          onInputChange={(value) => handleInput('email', value)}
          icon={<EmailIcon />}
        />
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
          {loading ? <FormLoading /> : <span>Sign up now</span>}
        </Button>

        <FormLink>
          Already have an account?{' '}
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignUp
