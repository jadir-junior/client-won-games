import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Profile from '.'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/profile/me' }))
}))

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ProfileMenu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ProfileMenu"></div>
  }
}))

describe('<Profile />', () => {
  it('should render the Profile', () => {
    const { container } = renderWithTheme(
      <Profile>
        <div>children</div>
      </Profile>
    )

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render all the components (Base, Heading, Profile Menu) on the page', () => {
    renderWithTheme(
      <Profile>
        <div>children</div>
      </Profile>
    )

    expect(screen.getByTestId(/mock base/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /my account/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId(/mock profilemenu/i)).toBeInTheDocument()
  })
})
