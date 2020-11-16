import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import Radio from '.'

describe('<Radio />', () => {
  it('should render the Radio with label white', () => {
    const { container } = renderWithTheme(
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
    renderWithTheme(<Radio label="Radio" labelFor="check" value="anyValue" />)

    const label = screen.getByText('Radio')
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render without label', () => {
    renderWithTheme(<Radio />)

    expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument()
  })

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(
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
    renderWithTheme(<Radio label="Radio" labelFor="Radio" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByRole('radio')).toHaveFocus()
  })
})
