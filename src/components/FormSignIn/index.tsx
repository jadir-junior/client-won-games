import Link from 'next/link'
import { Email as EmailIcon } from '@styled-icons/material-outlined/Email'
import { Lock as LockIcon } from '@styled-icons/material-outlined/Lock'

import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'

const FormSignIn = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="email"
        placeholder="email"
        type="email"
        icon={<EmailIcon />}
      />
      <TextField
        name="password"
        placeholder="password"
        type="password"
        icon={<LockIcon />}
      />
      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

      <Button fullWidth size="large">
        Sign in now
      </Button>

      <S.FormLink>
        Don’t have an account?{' '}
        <Link href="/sign-up">
          <a>Sign up</a>
        </Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignIn
