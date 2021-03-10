import GamesTemplate, { GamesTemplateProps } from 'templates/Games'

import filterItemsMock from 'components/ExploreSideBar/mock'
import gamesMock from 'components/GameCardSlider/mock'
import { gql } from '@apollo/client'
import { initializeApollo } from 'utils/apollo'

export default function Index(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: gql`
      query QueryGames {
        games {
          name
          slug
          cover {
            url
          }
          developers {
            name
          }
          price
        }
      }
    `
  })

  return {
    props: {
      revalidate: 60,
      games: data.games.map((game) => ({
        title: game.name,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover!.url}`,
        price: new Intl.NumberFormat('en', {
          styel: 'currency',
          currency: 'USD'
        }).format(game.price)
      })),
      filterItems: filterItemsMock
    }
  }
}
