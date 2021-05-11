import { fireEvent, render, screen } from 'utils/test-utils'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    render(<Menu />)
    const search = screen.getByLabelText(/search/i)
    const shoppingCart = screen.getAllByLabelText(/shopping cart/i)
    const logo = screen.getByLabelText(/won games/i)
    const menuIcon = screen.getByLabelText(/open menu/i)

    expect(menuIcon).toBeInTheDocument()
    expect(search).toBeInTheDocument()
    expect(shoppingCart).toHaveLength(2)
    expect(logo).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    render(<Menu />)
    const menuIcon = screen.getByLabelText(/open menu/i)
    const closeMenuIcon = screen.getByLabelText(/close menu/i)

    // selectiona o novo MenuFull
    const fullMenu = screen.getByRole('navigation', { hidden: true })

    // verificar se o menu ta escondido
    expect(fullMenu.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenu).toHaveStyle({ opacity: 0 })

    // clicar no botão de abrir o menu e verificar se ele abriu
    fireEvent.click(menuIcon)
    expect(fullMenu.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenu).toHaveStyle({ opacity: 1 })

    // clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(closeMenuIcon)
    expect(fullMenu.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenu).toHaveStyle({ opacity: 0 })
  })

  it('should show registerBox if user is not logged', () => {
    render(<Menu />)

    const myAccount = screen.queryByText(/my profile/i)
    const wishlist = screen.queryByText('/wishlist/i')
    const logIn = screen.getByText(/log in now/i)
    const register = screen.getByText(/sign up/i)

    expect(myAccount).not.toBeInTheDocument()
    expect(wishlist).not.toBeInTheDocument()
    expect(logIn).toBeInTheDocument()
    expect(register).toBeInTheDocument()
  })

  it('should show on menu nav wishlist and my account and register box hide', () => {
    render(<Menu username="mick" />)

    const myAccount = screen.getAllByText(/my profile/i)
    const wishlist = screen.getAllByText(/wishlist/i)
    const logIn = screen.queryByText(/log in now/i)
    const register = screen.queryByText(/sign up/i)

    expect(myAccount).toHaveLength(2)
    expect(wishlist).toHaveLength(2)
    expect(logIn).not.toBeInTheDocument()
    expect(register).not.toBeInTheDocument()
  })
})
