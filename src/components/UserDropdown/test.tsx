import { render, screen } from 'utils/test-utils'

import UserDropdown from '.'
import userEvent from '@testing-library/user-event'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  push: jest.fn()
}))

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="Mick" />)

    expect(screen.getByText(/mick/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    render(<UserDropdown username="Mick" />)

    //open menu
    userEvent.click(screen.getByText(/mick/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign out/i })
    ).toBeInTheDocument()
  })
})
