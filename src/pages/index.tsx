import Home, { HomeTemplateProps } from 'templates/Home'

import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newGames }
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
      newGames: newGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        img: `http://localhost:1337${game.cover?.url}`,
        developer: game.developers[0].name,
        price: game.price
      })),
      mostPopularHighLight: highlightMock,
      mostPopularGames: gamesMock,
      upComingGames: gamesMock,
      upComingHighLight: highlightMock,
      upComingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeGamesHighLight: highlightMock
    }
  }
}

// name: string;
// slug: string;
// cover: QueryHome_newGames_cover | null;
// developers: QueryHome_newGames_developers[];
// price: number;

// {
//   title: 'Population Zero',
//   slug: 'population-zero',
//   developer: 'Rockstar Games',
//   img: 'https://source.unsplash.com/user/willianjusten/300x140',
//   price: 235,
//   promotionalPrice: 215
// },
