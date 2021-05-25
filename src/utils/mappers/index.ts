import {
  QueryHome_banners,
  QueryHome_newGames,
  QueryHome_sections_popularGames_highlight
} from 'graphql/generated/QueryHome'

import { QueryGames_games } from 'graphql/generated/QueryGames'
import { QueryOrders_orders } from 'graphql/generated/QueryOrders'
import formatPrice from 'utils/format-price'
import { getImageUrl } from 'utils/getImageUrl'

export const bannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
    img: `${getImageUrl(banner.image?.url)}`,
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
        img: `${getImageUrl(game.cover?.url)}`,
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
        backgroundImage: `${getImageUrl(highlight.background?.url)}`,
        floatImage: `${getImageUrl(highlight.floatImage?.url)}`,
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
        img: `${getImageUrl(item.cover?.url)}`,
        price: formatPrice(item.price),
        title: item.name
      }))
    : []
}

export const ordersMapper = (
  orders: QueryOrders_orders[] | null | undefined
) => {
  return orders
    ? orders.map((order) => {
        return {
          id: order.id,
          paymentInfo: {
            flag: order.card_brand ? order.card_brand : null,
            img: order.card_brand ? `/img/cards/${order.card_brand}.png` : null,
            number: order.card_last4
              ? `**** **** **** ${order.card_last4}`
              : 'Free Game',
            purchaseDate: `Purchase made on ${new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(order.created_at))}`
          },
          games: order.games.map((game) => ({
            id: game.id,
            title: game.name,
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: `${getImageUrl(game.cover?.url)}`,
            price: formatPrice(game.price)
          }))
        }
      })
    : []
}
