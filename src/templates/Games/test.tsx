import { fetchMoreGames, gamesMock } from './mocks'

import GamesTemplate from '.'
import { MockedProvider } from '@apollo/client/testing'
import apolloCache from 'utils/apolloCache'
import filterItemsMock from 'components/ExploreSideBar/mock'
import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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

describe('<Games />', () => {
  it('should render loading when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <GamesTemplate filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument()
  })

  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <GamesTemplate filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument()

    expect(await screen.findByTestId('Mock ExploreSideBar')).toBeInTheDocument()
    expect(await screen.findByText(/Time Loader/i)).toBeInTheDocument()
    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreGames]} cache={apolloCache}>
        <GamesTemplate filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(await screen.findByText(/Time Loader/i)).toBeInTheDocument()

    userEvent.click(await screen.findByRole('button', { name: /show more/i }))

    expect(await screen.findByText(/Minute of Islands/i)).toBeInTheDocument()
  })
})
