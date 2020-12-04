import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

const ProfileForm = () => (
  <S.Wrapper>
    <Heading color="black" size="small" lineBottom lineColor="primary">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="John Cage"
      ></TextField>

      <TextField
        name="email"
        type="email"
        placeholder="Email"
        label="Email"
        initialValue="john.cage@gmail.com"
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
