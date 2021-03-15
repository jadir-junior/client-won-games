import 'match-media-mock'

import GameCardSlider from '.'
import items from './mock'
import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

describe('<GameCardSlider />', () => {
  it('should render the GameCardSlider', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/next game/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/previous game/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
