import { render, screen, waitFor } from 'utils/test-utils'

import { Email } from '@styled-icons/material-outlined/Email'
import TextField from '.'
import userEvent from '@testing-library/user-event'

describe('<TextField />', () => {
  it('should with label', () => {
    render(<TextField label="Label" name="Field" />)

    expect(screen.getByText(/label/i)).toBeInTheDocument()
  })

  it('should without label', () => {
    render(<TextField />)

    expect(screen.queryByLabelText(/label/i)).not.toBeInTheDocument()
  })

  it('should renders with placeholder', () => {
    render(<TextField placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Changes its value when typing', async () => {
    const onInput = jest.fn()
    render(<TextField label="Label" name="Field" onInput={onInput} />)

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
    render(<TextField icon={<Email data-testid="icon" />} />)

    const input = screen.getByRole('textbox')
    const icon = screen.getByTestId('icon')

    expect(input).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  it('Renderss with Icon on the right side', () => {
    render(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('should does not changes its value when disabled', async () => {
    const onInput = jest.fn()
    render(<TextField onInput={onInput} label="Label" name="Field" disabled />)

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
    render(<TextField label="TextField" name="TextField" disabled />)

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  it('Renders with error', () => {
    render(
      <TextField
        icon={<Email data-testid="icon" />}
        label="TextField"
        error="Error message"
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()
  })
})
