import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)
    const menu = screen.getByLabelText(/open menu/i)
    const search = screen.getByLabelText(/search/i)
    const shoppingCart = screen.getByLabelText(/open shopping cart/i)
    const logo = screen.getByLabelText(/won games/i)

    expect(menu).toBeInTheDocument()
    expect(search).toBeInTheDocument()
    expect(shoppingCart).toBeInTheDocument()
    expect(logo).toBeInTheDocument()
  })
})
