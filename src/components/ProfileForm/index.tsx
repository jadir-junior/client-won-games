import * as S from './styles'

import Button from 'components/Button'
import Heading from 'components/Heading'
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

      <TextField
        name="password"
        type="password"
        placeholder="Type your password"
        label="Password"
      ></TextField>

      <TextField
        name="newpassword"
        type="password"
        placeholder="New password"
        label="New password"
      ></TextField>

      <Button size="large">Save</Button>
    </S.Form>
  </S.Wrapper>
)

export default ProfileForm
