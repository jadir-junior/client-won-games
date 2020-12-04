import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import itemsMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'

const props = {
  items: itemsMock,
  total: '$ 400,00',
  cards: cardsMock,
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/CartList', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock CartList"></div>
  }
}))

jest.mock('components/PaymentOptions', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock PaymentOptions"></div>
  }
}))

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase"></div>
  }
}))

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty"></div>
  }
}))

import Cart from '.'

describe('<Cart />', () => {
  it('should render the Cart', () => {
    const { container } = renderWithTheme(<Cart {...props} />)

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render the components in template', () => {
    renderWithTheme(<Cart {...props} />)

    expect(screen.getByTestId(/mock base/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /my cart/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId(/mock cartlist/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock paymentoptions/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock showcase/i)).toBeInTheDocument()
    expect(screen.queryByTestId(/mock empty/i)).not.toBeInTheDocument()
    expect(screen.getByText(/your purchase is protected/i)).toBeInTheDocument()
  })

  it('should render the component empty if items is empty', () => {
    renderWithTheme(<Cart {...props} items={[]} />)

    expect(screen.getByTestId(/mock empty/i)).toBeInTheDocument()
  })
})