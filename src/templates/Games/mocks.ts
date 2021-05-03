import { QUERY_GAMES } from 'graphql/queries/games'

export const gamesMock = {
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

export const fetchMoreGames = {
  request: {
    query: QUERY_GAMES,
    variables: {
      limit: 15,
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
      ]
    }
  }
}
