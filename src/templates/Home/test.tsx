import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

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

describe('<Home />', () => {
  it('should render the Menu and Footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText('Menu')).toBeInTheDocument()
    expect(screen.getByLabelText(/footer/i)).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /upcoming/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()

    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
    expect(screen.getAllByText(/read dead is back/i)).toHaveLength(3)
  })
})
