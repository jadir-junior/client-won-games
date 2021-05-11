import { render, screen } from 'utils/test-utils'

import ProfileMenu from '.'
import theme from 'styles/theme'

describe('<ProfileMenu />', () => {
  it('should render the ProfileMenu', () => {
    const { container } = render(<ProfileMenu />)

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render the 4 links of nav', () => {
    render(<ProfileMenu />)

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /my cards/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /my orders/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })

  it('should render a link active', () => {
    render(<ProfileMenu activeLink="/profile/cards" />)

    expect(screen.getByRole('link', { name: /my cards/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white
    })
  })
})
