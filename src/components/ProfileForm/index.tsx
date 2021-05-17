import * as S from './styles'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Link from 'next/link'
import TextField from 'components/TextField'

export type FormProfileProps = {
  username?: string
  email?: string
}

const ProfileForm = ({ username, email }: FormProfileProps) => (
  <S.Wrapper>
    <Heading color="black" size="small" lineBottom lineColor="primary">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="username"
        placeholder="Username"
        label="Username"
        initialValue={username}
      ></TextField>

      <TextField
        name="email"
        type="email"
        placeholder="Email"
        label="Email"
        initialValue={email}
        disabled
      ></TextField>

      <S.ButtonContainer>
        <Link href={`/forgot-password?email=${email}`} passHref>
          <Button minimal size="medium" as="a">
            Reset password
          </Button>
        </Link>
        <Button size="medium">Save</Button>
      </S.ButtonContainer>
    </S.Form>
  </S.Wrapper>
)

export default ProfileForm
