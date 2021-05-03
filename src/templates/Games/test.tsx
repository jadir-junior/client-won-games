import GamesTemplate from '.'
import { MockedProvider } from '@apollo/client/testing'
import { QUERY_GAMES } from 'graphql/queries/games'
import filterItemsMock from 'components/ExploreSideBar/mock'
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

const mocks = [
  {
    request: {
      query: QUERY_GAMES,
      variables: {
        limit: 15
      }
    },
    result: {
      data: {
        games: [
          {
            name: 'Time Loader',
            slug: 'time-loader',
            cover: {
              url: '/uploads/time_loader_847dac5db1.jpg'
            },
            developers: [
              {
                name: 'Flazm'
              }
            ],
            price: 554.99,
            __typename: 'Game'
          }
        ]
      }
    }
  }
]

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
      <MockedProvider mocks={mocks} addTypename={false}>
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
})
