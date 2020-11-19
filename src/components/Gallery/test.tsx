import 'match-media-mock'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'
import items from './mock'

import Gallery from '.'

describe('<Gallery />', () => {
  it('should render the Gallery as buttons', () => {
    renderWithTheme(<Gallery items={items.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', items[0].src)
    expect(
      screen.getByRole('button', { name: /thumb - Gallery Image 2/i })
    ).toHaveAttribute('src', items[1].src)
  })

  it('should open the modal', () => {
    renderWithTheme(<Gallery items={items.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    expect(modal).toHaveAttribute('aria-hidden', 'true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

    userEvent.click(
      screen.getByRole('button', { name: /thumb - Gallery Image 1/i })
    )

    expect(modal).toHaveAttribute('aria-hidden', 'false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should close the modal', () => {
    renderWithTheme(<Gallery items={items.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    userEvent.click(
      screen.getByRole('button', { name: /thumb - Gallery Image 1/i })
    )
    userEvent.click(screen.getByLabelText(/close modal/i))
    expect(modal).toHaveAttribute('aria-hidden', 'true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should close modal when ESC key is pressed', () => {
    const { container } = renderWithTheme(<Gallery items={items.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    userEvent.click(
      screen.getByRole('button', { name: /thumb - Gallery Image 1/i })
    )

    fireEvent.keyUp(container, { key: 'Escape' })

    expect(modal).toHaveAttribute('aria-hidden', 'true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should open modal with selected image', async () => {
    renderWithTheme(<Gallery items={items.slice(0, 2)} />)

    userEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    )

    const img = await screen.findByRole('img', { name: /Gallery Image 2/i })
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })
})
