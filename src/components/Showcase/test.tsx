import 'match-media-mock'

import { render, screen } from 'utils/test-utils'

import Showcase from '.'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: [gamesMock[0]]
}

describe('<Showcase />', () => {
  it('should render the Showcase', () => {
    const { container } = render(<Showcase {...props} />)

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render full showcase', () => {
    render(<Showcase {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.highlight.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.games[0].title })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    render(<Showcase highlight={props.highlight} games={props.games} />)

    expect(
      screen.queryByRole('heading', { name: props.title })
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.highlight.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.games[0].title })
    ).toBeInTheDocument()
  })

  it('should render without highlight', () => {
    render(<Showcase title={props.title} games={props.games} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: props.highlight.title })
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.games[0].title })
    ).toBeInTheDocument()
  })

  it('should render without games', () => {
    render(<Showcase title={props.title} highlight={props.highlight} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.highlight.title })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: props.games[0].title })
    ).not.toBeInTheDocument()
  })
})
