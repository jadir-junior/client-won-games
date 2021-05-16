import Auth from 'templates/Auth'
import FormForgetPassword from 'components/FormForgetPassword'

export default function ForgotPassword() {
  return (
    <Auth title="Request new password">
      <FormForgetPassword />
    </Auth>
  )
}
