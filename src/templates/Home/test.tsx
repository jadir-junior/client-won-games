import 'match-media-mock'

import Home from '.'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighLight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upComingGames: [gamesMock[0]],
  upComingHighLight: highlightMock,
  upComingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeGamesHighLight: highlightMock
}

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Banner Slider"></div>
    }
  }
})

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render the Bannera and Showcases ', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId('Mock Banner Slider')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(4)
  })
})
