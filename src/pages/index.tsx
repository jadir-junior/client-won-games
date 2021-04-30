import Home, { HomeTemplateProps } from 'templates/Home'

import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'
import { initializeApollo } from 'utils/apollo'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newGames, upComingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome>({
    query: QUERY_HOME
  })

  return {
    props: {
      revalidate: 60,
      banners: banners.map((banner) => ({
        img: `http://localhost:1337${banner.image?.url}`,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonLink: banner.button?.link,
        ...(banner.ribbon && {
          ribbon: banner.ribbon.text,
          ribbonColor: banner.ribbon.color,
          ribbonSize: banner.ribbon.size
        })
      })),
      newGamesTitle: sections?.newGames?.title,
      newGames: newGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        img: `http://localhost:1337${game.cover?.url}`,
        developer: game.developers[0].name,
        price: game.price
      })),
      mostPopularTitle: sections?.popularGames?.title,
      mostPopularHighLight: {
        title: sections?.popularGames?.highlight?.title,
        subtitle: sections?.popularGames?.highlight?.subtitle,
        backgroundImage: `http://localhost:1337${sections?.popularGames?.highlight?.background?.url}`,
        floatImage: `http://localhost:1337${sections?.popularGames?.highlight?.floatImage?.url}`,
        buttonLabel: sections?.popularGames?.highlight?.buttonLabel,
        buttonLink: sections?.popularGames?.highlight?.buttonLink,
        alignment: sections?.popularGames?.highlight?.alignment
      },
      mostPopularGames: sections!.popularGames!.games.map((game) => ({
        title: game.name,
        slug: game.slug,
        img: `http://localhost:1337${game.cover?.url}`,
        developer: game.developers[0].name,
        price: game.price
      })),
      upComingTitle: sections?.upcomingGames?.title,
      upComingGames: upComingGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        img: `http://localhost:1337${game.cover?.url}`,
        developer: game.developers[0].name,
        price: game.price
      })),
      upComingHighLight: {
        title: sections?.upcomingGames?.highlight?.title,
        subtitle: sections?.upcomingGames?.highlight?.subtitle,
        backgroundImage: `http://localhost:1337${sections?.upcomingGames?.highlight?.background?.url}`,
        floatImage: `http://localhost:1337${sections?.upcomingGames?.highlight?.floatImage?.url}`,
        buttonLabel: sections?.upcomingGames?.highlight?.buttonLabel,
        buttonLink: sections?.upcomingGames?.highlight?.buttonLink,
        alignment: sections?.upcomingGames?.highlight?.alignment
      },
      freeGamesTitle: sections?.freeGames?.title,
      freeGames: freeGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        img: `http://localhost:1337${game.cover?.url}`,
        developer: game.developers[0].name,
        price: game.price
      })),
      freeGamesHighLight: {
        title: sections?.freeGames?.highlight?.title,
        subtitle: sections?.freeGames?.highlight?.subtitle,
        backgroundImage: `http://localhost:1337${sections?.freeGames?.highlight?.background?.url}`,
        floatImage: `http://localhost:1337${sections?.freeGames?.highlight?.floatImage?.url}`,
        buttonLabel: sections?.freeGames?.highlight?.buttonLabel,
        buttonLink: sections?.freeGames?.highlight?.buttonLink,
        alignment: sections?.freeGames?.highlight?.alignment
      }
    }
  }
}
