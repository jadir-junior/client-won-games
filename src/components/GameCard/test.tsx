import { fireEvent, render, screen } from 'utils/test-utils'

import GameCard from '.'
import theme from 'styles/theme'

const props = {
  slug: 'population-zero',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 235
}

const gameFree = {
  slug: 'population-zero',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 0.0
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    render(<GameCard {...props} />)

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
    )
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument()
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
    expect(screen.getByText('$235.00')).toBeInTheDocument()
  })

  it('should render price in label', () => {
    render(<GameCard {...props} />)

    const price = screen.getByText('$235.00')

    expect(price).not.toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(price).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
  })

  it('should render a line-through in price when promotional', () => {
    render(<GameCard {...props} promotionalPrice={15} />)

    expect(screen.getByText('$235.00')).toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(screen.getByText('$15.00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    render(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    render(<GameCard {...props} onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render a ribbon', () => {
    render(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )

    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem',
      padding: '0 1.6rem'
    })
  })

  it('should show price with text free if price 0.00', () => {
    render(
      <GameCard
        {...gameFree}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )

    expect(screen.getByText('FREE')).toBeInTheDocument()
  })
})
