import { QUERY_GAMES } from 'graphql/queries/games'

export const noGamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: {
      limit: 15,
      where: {}
    }
  },
  result: {
    data: {
      games: [],
      gamesConnection: {
        values: [],
        __typename: 'GameConnection'
      }
    }
  }
}

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: {
      limit: 15,
      where: {}
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
      ],
      gamesConnection: {
        values: [{ id: '1' }, { id: '2' }],
        __typename: 'GameConnection'
      }
    }
  }
}

export const fetchMoreGames = {
  request: {
    query: QUERY_GAMES,
    variables: {
      limit: 15,
      where: {},
      start: 1
    }
  },
  result: {
    data: {
      games: [
        {
          name: 'Minute of Islands',
          slug: 'minute-of-islands',
          cover: {
            url: '/uploads/minute_of_islands_15298b357a.jpg'
          },
          developers: [
            {
              name: 'Studio Fizbin'
            }
          ],
          price: 37.99,
          __typename: 'Game'
        }
      ],
      gamesConnection: {
        values: [{ id: '1' }, { id: '2' }],
        __typename: 'GameConnection'
      }
    }
  }
}
