import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import gamesMock from 'components/GameCardSlider/mock'
import hightlightMock from 'components/Highlight/mock'

import Wishlist from '.'

const props = {
  games: gamesMock,
  recommededGames: gamesMock,
  recommededHighlight: hightlightMock
}

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase"></div>
  }
}))

jest.mock('components/Menu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Menu"></div>
  }
}))

jest.mock('components/Footer', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Footer"></div>
  }
}))

describe('<Wishlist />', () => {
  it('should render the Wishlist template', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(screen.getByTestId(/mock menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()
    expect(
      screen.getAllByRole('heading', { name: /population zero/i })
    ).toHaveLength(6)
    expect(screen.getByTestId(/mock showcase/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock footer/i)).toBeInTheDocument()
  })

  it('should render a component Empty if games is not passed or array zero', () => {
    renderWithTheme(
      <Wishlist
        recommededGames={props.recommededGames}
        recommededHighlight={props.recommededHighlight}
      />
    )

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
