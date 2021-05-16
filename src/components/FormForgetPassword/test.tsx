import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormForgetPassword from '.'

describe('<FormForgetPassword />', () => {
  it('should render the FormForgetPassword', () => {
    renderWithTheme(<FormForgetPassword />)
  })
})
