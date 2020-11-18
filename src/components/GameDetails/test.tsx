import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails, { GameDetailsProps } from '.'

const props: GameDetailsProps = {
  developer: 'Different Tales',
  releaseDate: '2020-11-21T23:00:00',
  platforms: ['windows', 'mac', 'linux'],
  rating: 'BR0',
  genres: ['Role-playing', 'Narrative'],
  publisher: 'Walkabout'
}

describe('<GameDetails />', () => {
  it('should render the GameDetails', () => {
    const { container } = renderWithTheme(<GameDetails {...props} />)

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render all the blocks labels', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(
      screen.getByRole('heading', { name: /developer/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /release date/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /publisher/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /rating/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genres/i })).toBeInTheDocument()
    expect(screen.getAllByRole('heading')).toHaveLength(6)
  })

  it('should render the platforms icons', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(3)
  })

  it('should render the formated date', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
  })

  it('should render if rating BR0 equal FREE', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('should render rating if BR18 to 18+', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />)

    expect(screen.getByText(/18\+/i)).toBeInTheDocument()
  })

  it('should render genres with / separator when array is more than one', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument()
  })

  it('should render genres without / if array is length one', () => {
    renderWithTheme(
      <GameDetails {...props} rating="BR18" genres={['Role-playing']} />
    )

    expect(screen.getByText('Role-playing')).toBeInTheDocument()
  })

  it('should render a developer', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/different tales/i)).toBeInTheDocument()
  })

  it('should render a publisher', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/walkabout/i)).toBeInTheDocument()
  })
})
