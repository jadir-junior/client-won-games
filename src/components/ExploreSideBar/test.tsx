import ExploreSideBar from '.'
import items from './mock'
import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('<ExploreSideBar />', () => {
  it('should render the ExploreSideBar', () => {
    renderWithTheme(<ExploreSideBar items={items} onFilter={jest.fn} />)
  })

  it('should render headings', () => {
    renderWithTheme(<ExploreSideBar items={items} onFilter={jest.fn} />)

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  it('should render inputs', () => {
    renderWithTheme(<ExploreSideBar items={items} onFilter={jest.fn} />)

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('radio', { name: /high to low/i })
    ).toBeInTheDocument()
  })

  it('should render a filter button', () => {
    renderWithTheme(<ExploreSideBar items={items} onFilter={jest.fn} />)

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should check initial values that are passed', () => {
    renderWithTheme(
      <ExploreSideBar
        onFilter={jest.fn}
        items={items}
        initialValues={{ windows: true, sort_by: 'high-to-low' }}
      />
    )

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()
    expect(screen.getByRole('radio', { name: /high to low/i })).toBeChecked()
  })

  it('should filter with initial values', () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <ExploreSideBar
        items={items}
        initialValues={{ windows: true, sort_by: 'high-to-low' }}
        onFilter={onFilter}
      />
    )

    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toBeCalledWith({
      windows: true,
      sort_by: 'high-to-low'
    })
  })

  it('should filter with checked values', () => {
    const onFilter = jest.fn()

    renderWithTheme(<ExploreSideBar items={items} onFilter={onFilter} />)

    userEvent.click(screen.getByLabelText(/windows/i))
    userEvent.click(screen.getByLabelText(/linux/i))
    userEvent.click(screen.getByLabelText(/low to high/i))

    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toBeCalledWith({
      windows: true,
      linux: true,
      sort_by: 'low-to-high'
    })
  })
})
