import Link from 'next/link'
import { Email as EmailIcon } from '@styled-icons/material-outlined/Email'
import { Lock as LockIcon } from '@styled-icons/material-outlined/Lock'
import { AccountCircle as AccountCircleIcon } from '@styled-icons/material-outlined/AccountCircle'

import { FormWrapper, FormLink } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'

const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField
        name="name"
        placeholder="name"
        type="name"
        icon={<AccountCircleIcon />}
      />
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
      <TextField
        name="confirmPassword"
        placeholder="Confirm password"
        type="password"
        icon={<LockIcon />}
      />

      <Button fullWidth size="large">
        Sign up now
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

export default FormSignUp
