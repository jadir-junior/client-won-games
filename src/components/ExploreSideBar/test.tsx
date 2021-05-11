import { render, screen } from 'utils/test-utils'

import ExploreSideBar from '.'
import { Overlay } from './styles'
import { css } from 'styled-components'
import items from './mock'
import userEvent from '@testing-library/user-event'

describe('<ExploreSideBar />', () => {
  it('should render the ExploreSideBar', () => {
    render(<ExploreSideBar items={items} onFilter={jest.fn} />)
  })

  it('should render headings', () => {
    render(<ExploreSideBar items={items} onFilter={jest.fn} />)

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  it('should render inputs', () => {
    render(<ExploreSideBar items={items} onFilter={jest.fn} />)

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('radio', { name: /high to low/i })
    ).toBeInTheDocument()
  })

  it('should render a filter button', () => {
    render(<ExploreSideBar items={items} onFilter={jest.fn} />)

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should check initial values that are passed', () => {
    render(
      <ExploreSideBar
        onFilter={jest.fn}
        items={items}
        initialValues={{ platforms: ['windows'], sort_by: 'high-to-low' }}
      />
    )

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()
    expect(screen.getByRole('radio', { name: /high to low/i })).toBeChecked()
  })

  it('should filter with initial values', () => {
    const onFilter = jest.fn()

    render(
      <ExploreSideBar
        items={items}
        initialValues={{ platforms: ['windows'], sort_by: 'high-to-low' }}
        onFilter={onFilter}
      />
    )

    expect(onFilter).toBeCalledWith({
      platforms: ['windows'],
      sort_by: 'high-to-low'
    })
  })

  it('should filter with checked values', () => {
    const onFilter = jest.fn()

    render(<ExploreSideBar items={items} onFilter={onFilter} />)

    userEvent.click(screen.getByLabelText(/windows/i))
    userEvent.click(screen.getByLabelText(/linux/i))
    userEvent.click(screen.getByLabelText(/low to high/i))

    // 1st render (initialValue) + 3 clicks
    expect(onFilter).toHaveBeenCalledTimes(4)

    expect(onFilter).toBeCalledWith({
      platforms: ['windows', 'linux'],
      sort_by: 'low-to-high'
    })
  })

  it('should altern between radio options', () => {
    const onFilter = jest.fn()
    render(<ExploreSideBar items={items} onFilter={onFilter} />)

    userEvent.click(screen.getByLabelText(/low to high/i))
    userEvent.click(screen.getByLabelText(/high to low/i))

    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toBeCalledWith({
      sort_by: 'high-to-low'
    })
  })

  it('should open/close sidebar wehn filtering on mobile', () => {
    const { container } = render(
      <ExploreSideBar items={items} onFilter={jest.fn} />
    )

    const variant = {
      media: '(max-width: 768px)',
      modifier: String(
        css`
          ${Overlay}
        `
      )
    }

    const Element = container.firstChild

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)

    userEvent.click(screen.getByLabelText(/open filters/))

    expect(Element).toHaveStyleRule('opacity', '1', variant)

    userEvent.click(screen.getByLabelText(/close filters/))

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)

    userEvent.click(screen.getByLabelText(/open filters/i))

    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)
  })
})
