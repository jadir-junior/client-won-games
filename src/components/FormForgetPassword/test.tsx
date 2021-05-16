import FormForgetPassword from '.'
import { render } from 'utils/test-utils'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

describe('<FormForgetPassword />', () => {
  it('should render the FormForgetPassword', () => {
    render(<FormForgetPassword />)
  })
})
