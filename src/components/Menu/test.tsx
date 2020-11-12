import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)
    const search = screen.getByLabelText(/search/i)
    const shoppingCart = screen.getByLabelText(/open shopping cart/i)
    const logo = screen.getByLabelText(/won games/i)
    const menuIcon = screen.getByLabelText(/open menu/i)

    expect(menuIcon).toBeInTheDocument()
    expect(search).toBeInTheDocument()
    expect(shoppingCart).toBeInTheDocument()
    expect(logo).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)
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
})
