import GamesTemplate from '.'
import filterItemsMock from 'components/ExploreSideBar/mock'
import gamesMock from 'components/GameCardSlider/mock'
import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSideBar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSideBar">{children}</div>
  }
}))

jest.mock('components/GameCard', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameCard" />
  }
}))

describe('<Games />', () => {
  it('should render the sections', () => {
    renderWithTheme(
      <GamesTemplate filterItems={filterItemsMock} games={[gamesMock[0]]} />
    )

    expect(screen.getByTestId('Mock ExploreSideBar')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameCard')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
