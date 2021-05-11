import { render, screen } from 'utils/test-utils'

import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = render(<Button>Buy now</Button>)

    const button = screen.getByRole('button', { name: /buy now/i })

    expect(button).toHaveStyle({
      height: '4rem',
      'font-size': '1.4rem',
      padding: '0.8rem 3.2rem'
    })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    render(<Button size="small">Buy now</Button>)

    const button = screen.getByRole('button', { name: /buy now/i })

    expect(button).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the small size', () => {
    render(<Button size="large">Buy now</Button>)

    const button = screen.getByRole('button', { name: /buy now/i })

    expect(button).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem'
    })
  })

  it('should render a fullWidth version', () => {
    render(<Button fullWidth>Buy now</Button>)

    const button = screen.getByRole('button', { name: /buy now/i })

    expect(button).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
    )

    const button = screen.getByText(/buy now/i)
    const icon = screen.getByTestId('icon')

    expect(button).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  it('should render Button as a link', () => {
    render(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })

  it('should render a minimal version', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Buy now
      </Button>
    )

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      background: 'none',
      color: '#F231A5'
    })
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover'
      }
    )
  })

  it('should render a button disabled', () => {
    render(<Button disabled>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })
})
