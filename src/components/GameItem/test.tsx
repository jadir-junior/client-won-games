import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameItem from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00'
}

describe('<GameItem />', () => {
  it('should render the GameItem', () => {
    const { container } = renderWithTheme(<GameItem {...props} />)

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render game content item', () => {
    renderWithTheme(<GameItem {...props} />)

    expect(
      screen.getByRole('img', { name: /red dead redemption 2/i })
    ).toHaveAttribute('src', props.img)
    expect(
      screen.getByRole('heading', { name: /red dead redemption 2/i })
    ).toBeInTheDocument()
    expect(screen.getByText('R$ 215,00')).toBeInTheDocument()
  })

  it('should render game item with link download', () => {
    const downloadLink = 'http://localhost:3000/download/1289102'

    renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render a game item with payment info', () => {
    const paymentInfo = {
      flag: 'mastercard',
      img: '/img/master-card.png',
      number: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }

    renderWithTheme(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img
    )
    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})
