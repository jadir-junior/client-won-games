import 'match-media-mock'

import { render, screen } from 'utils/test-utils'

import Cart from '.'
import cardsMock from 'components/PaymentOptions/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import itemsMock from 'components/CartList/mock'

const props = {
  items: itemsMock,
  total: '$ 400,00',
  cards: cardsMock,
  recommendedTitle: 'You may like these games',
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

describe('<Cart />', () => {
  it('should render the Cart', () => {
    const { container } = render(<Cart {...props} />)

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render the components in template', () => {
    render(<Cart {...props} />)

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
})
