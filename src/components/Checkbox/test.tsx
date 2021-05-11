import { render, screen, waitFor } from 'utils/test-utils'

import Checkbox from '.'
import userEvent from '@testing-library/user-event'

describe('<Checkbox />', () => {
  it('should render the Checkbox', () => {
    const { container } = render(<Checkbox />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the Checkbox and label', () => {
    render(<Checkbox label="checkbox label" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it('should not render label if label is not passed', () => {
    render(<Checkbox labelFor="check" />)

    expect(screen.queryByLabelText('checkbox')).not.toBeInTheDocument()
  })

  it('should render a label with a white color', () => {
    render(
      <Checkbox label="checkbox label" labelFor="check" labelColor="white" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    render(
      <Checkbox label="checkbox label" labelFor="check" onCheck={onCheck} />
    )

    expect(onCheck).not.toBeCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toBeCalledTimes(1)
    })
    expect(onCheck).toHaveBeenLastCalledWith(true)
  })

  it('should dispatch onCheck when status isChecked', async () => {
    const onCheck = jest.fn()

    render(
      <Checkbox
        label="checkbox label"
        labelFor="check"
        onCheck={onCheck}
        isChecked
      />
    )

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toBeCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(false)
  })
})
