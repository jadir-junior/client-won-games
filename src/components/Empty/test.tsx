import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Empty from '.'

const props = {
  title: 'A simple title',
  description: 'A simple description'
}

describe('<Empty />', () => {
  it('should render the Empty', () => {
    const { container } = renderWithTheme(<Empty {...props} hasLink />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the Empty, image, title, description and button(link)', () => {
    renderWithTheme(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('image', {
        name: /a gamer in a couch playing videogame/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /a simple title/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/a simple description/i)).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/')
  })

  it('should not render a link if hasnt', () => {
    renderWithTheme(<Empty {...props} />)

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })
})
