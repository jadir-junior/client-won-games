import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { GameDetailsProps } from 'components/GameDetails'

import gameInfoMock from 'components/GameInfo/mock'
import galleryMock from 'components/Gallery/mock'
import detailsMock from 'components/GameDetails/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Game, { GameTemplateProps } from '.'

const props: GameTemplateProps = {
  cover: 'bg-theme.jpg',
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  description: '<h1>Custom HTML</h1>',
  details: detailsMock as GameDetailsProps,
  upcomingGames: gamesMock,
  upcominghighlight: highlightMock,
  recommendedGames: gamesMock
}

jest.mock('components/Menu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Menu"></div>
  }
}))

jest.mock('components/GameInfo', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameInfo"></div>
  }
}))

jest.mock('components/Gallery', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Gallery"></div>
  }
}))

jest.mock('components/TextContent', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock TextContent"></div>
  }
}))

jest.mock('components/GameDetails', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameDetails"></div>
  }
}))

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase"></div>
  }
}))

jest.mock('components/Footer', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Footer"></div>
  }
}))

describe('<Game />', () => {
  it('should render the Game', () => {
    const { container } = renderWithTheme(<Game {...props} />)

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render the template with components', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.getByTestId(/mock menu/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock gameinfo/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock gallery/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock textcontent/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock gamedetails/i)).toBeInTheDocument()
    expect(screen.getAllByTestId(/mock showcase/i)).toHaveLength(2)
    expect(screen.getByTestId(/mock footer/i)).toBeInTheDocument()
  })

  it('should not render gallery images if no images', () => {
    renderWithTheme(<Game {...props} gallery={undefined} />)

    expect(screen.queryByTestId(/mock gallery/i)).not.toBeInTheDocument()
  })

  it('should not render gallery on mobile', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.getByTestId(/mock gallery/i).parentElement).toHaveStyle({
      display: 'none'
    })

    expect(screen.getByTestId(/mock gallery/i).parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 768px)'
      }
    )
  })

  it('should render the cover', () => {
    renderWithTheme(<Game {...props} />)

    const cover = screen.getByLabelText(/cover/i)

    expect(cover).toBeInTheDocument()
    expect(cover).toHaveStyle({
      backgroundImage: 'url(bg-theme.jpg)',
      height: '39.5rem'
    })
    expect(cover).toHaveStyleRule('height', '70rem', {
      media: '(min-width: 768px)'
    })
  })
})
