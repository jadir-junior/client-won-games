import ExploreSideBar from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

describe('<ExploreSideBar />', () => {
  it('should render the ExploreSideBar', () => {
    renderWithTheme(<ExploreSideBar />)
  })

  it('should render headings', () => {
    renderWithTheme(<ExploreSideBar />)

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  it('should render inputs', () => {
    renderWithTheme(<ExploreSideBar />)

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('radio', { name: /high to low/i })
    ).toBeInTheDocument()
  })

  it('should render a filter button', () => {
    renderWithTheme(<ExploreSideBar />)

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })
})
