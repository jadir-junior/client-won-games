import { render, screen } from 'utils/test-utils'

import OrdersList from '.'
import itemsMock from './mock'

jest.mock('components/Empty', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Empty"></div>
    }
  }
})

jest.mock('components/GameItem', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameItem"></div>
    }
  }
})

describe('<OrdersList />', () => {
  it('should render the OrdersList', () => {
    const { container } = render(<OrdersList />)

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render heading my orders', () => {
    render(<OrdersList />)

    expect(
      screen.getByRole('heading', { name: /my orders/i })
    ).toBeInTheDocument()
  })

  it('should render games items (2) on my orders', () => {
    render(<OrdersList items={itemsMock} />)

    expect(screen.getAllByTestId(/mock gameitem/i)).toHaveLength(2)
    expect(screen.queryByTestId(/mock empty/i)).not.toBeInTheDocument()
  })

  it('should a render empty component if no games items', () => {
    render(<OrdersList />)

    expect(screen.getByTestId(/mock empty/i)).toBeInTheDocument()
  })
})
