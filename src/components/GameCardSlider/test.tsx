import 'match-media-mock'

import { render, screen } from 'utils/test-utils'

import GameCardSlider from '.'
import items from './mock'

describe('<GameCardSlider />', () => {
  it('should render the GameCardSlider', () => {
    const { container } = render(<GameCardSlider items={items} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    render(<GameCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/next game/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/previous game/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
