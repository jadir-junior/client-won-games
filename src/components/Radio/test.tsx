import { render, screen, waitFor } from 'utils/test-utils'

import Radio from '.'
import userEvent from '@testing-library/user-event'

describe('<Radio />', () => {
  it('should render the Radio with label white', () => {
    const { container } = render(
      <Radio
        label="Radio"
        labelFor="check"
        labelColor="white"
        value="anyValue"
      />
    )

    const label = screen.getByText('Radio')
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the Radio with label black', () => {
    render(<Radio label="Radio" labelFor="check" value="anyValue" />)

    const label = screen.getByText('Radio')
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render without label', () => {
    render(<Radio />)

    expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument()
  })

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn()

    render(
      <Radio
        label="Radio"
        labelFor="check"
        value="anyValue"
        onCheck={onCheck}
      />
    )

    expect(onCheck).not.toBeCalled()

    userEvent.click(screen.getByRole('radio'))
    await waitFor(() => {
      expect(onCheck).toBeCalled()
    })
    expect(onCheck).toHaveBeenCalledWith('anyValue')
  })

  it('should be accessible with tab', () => {
    render(<Radio label="Radio" labelFor="Radio" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByRole('radio')).toHaveFocus()
  })
})
