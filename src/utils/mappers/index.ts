import {
  QueryHome_banners,
  QueryHome_newGames,
  QueryHome_sections_popularGames_highlight
} from 'graphql/generated/QueryHome'

import { QueryGames_games } from 'graphql/generated/QueryGames'
import formatPrice from 'utils/format-price'

export const bannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
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
  }))
}

export const gamesMapper = (games: QueryHome_newGames[] | null | undefined) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        title: game.name,
        slug: game.slug,
        img: `http://localhost:1337${game.cover?.url}`,
        developer: game.developers[0].name,
        price: game.price
      }))
    : []
}

export const highlightMapper = (
  highlight: QueryHome_sections_popularGames_highlight | null | undefined
) => {
  return highlight
    ? {
        title: highlight.title,
        subtitle: highlight.subtitle,
        backgroundImage: `http://localhost:1337${highlight.background?.url}`,
        floatImage: `http://localhost:1337${highlight.floatImage?.url}`,
        buttonLabel: highlight.buttonLabel,
        buttonLink: highlight.buttonLink,
        alignment: highlight.alignment
      }
    : {}
}

export const cartMapper = (items: QueryGames_games[] | null | undefined) => {
  return items
    ? items.map((item) => ({
        id: item.id,
        img: `http://localhost:1337${item.cover?.url}`,
        price: formatPrice(item.price),
        title: item.name
      }))
    : []
}
