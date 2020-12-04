import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import itemsMock from './mock'

import OrdersList from '.'

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
    const { container } = renderWithTheme(<OrdersList />)

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render heading my orders', () => {
    renderWithTheme(<OrdersList />)

    expect(
      screen.getByRole('heading', { name: /my orders/i })
    ).toBeInTheDocument()
  })

  it('should render games items (2) on my orders', () => {
    renderWithTheme(<OrdersList items={itemsMock} />)

    expect(screen.getAllByTestId(/mock gameitem/i)).toHaveLength(2)
    expect(screen.queryByTestId(/mock empty/i)).not.toBeInTheDocument()
  })

  it('should a render empty component if no games items', () => {
    renderWithTheme(<OrdersList />)

    expect(screen.getByTestId(/mock empty/i)).toBeInTheDocument()
  })
})
