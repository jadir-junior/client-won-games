import 'match-media-mock'
import 'session.mock'

import { render, screen } from 'utils/test-utils'

import Wishlist from '.'
import { WishlistContextDefaultValues } from 'hooks/use-wishlist'
import gamesMock from 'components/GameCardSlider/mock'
import hightlightMock from 'components/Highlight/mock'

const props = {
  games: gamesMock,
  recommendedTitle: 'You may like these games',
  recommededGames: gamesMock,
  recommededHighlight: hightlightMock
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

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
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      items: [gamesMock[0]]
    }

    render(<Wishlist {...props} />, { wishlistProviderProps })

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/population zero/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock showcase/i)).toBeInTheDocument()
  })

  it('should render a component Empty if games is not passed or array zero', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      items: []
    }

    render(
      <Wishlist
        recommendedTitle="You may like these games"
        recommededGames={props.recommededGames}
        recommededHighlight={props.recommededHighlight}
      />,
      { wishlistProviderProps }
    )

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
