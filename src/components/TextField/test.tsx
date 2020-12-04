import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'
import { Email } from '@styled-icons/material-outlined/Email'

import TextField from '.'

describe('<TextField />', () => {
  it('should with label', () => {
    renderWithTheme(<TextField label="Label" name="Field" />)

    expect(screen.getByText(/label/i)).toBeInTheDocument()
  })

  it('should without label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByLabelText(/label/i)).not.toBeInTheDocument()
  })

  it('should renders with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Changes its value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(<TextField label="Label" name="Field" onInput={onInput} />)

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('should render an icon version', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />)

    const input = screen.getByRole('textbox')
    const icon = screen.getByTestId('icon')

    expect(input).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  it('Renderss with Icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('should does not changes its value when disabled', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField onInput={onInput} label="Label" name="Field" disabled />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInput).not.toHaveBeenCalled()
  })

  it('Is not accessible by tab when disabled', () => {
    renderWithTheme(<TextField label="TextField" name="TextField" disabled />)

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  it('Renders with error', () => {
    renderWithTheme(
      <TextField
        icon={<Email data-testid="icon" />}
        label="TextField"
        error="Error message"
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()
  })
})
