import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ProfileForm from '.'

describe('<ProfileForm />', () => {
  it('should render the ProfileForm', () => {
    const { container } = renderWithTheme(<ProfileForm />)

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render all the component of the profile form', () => {
    renderWithTheme(<ProfileForm />)

    expect(
      screen.getByRole('heading', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()

    expect(
      screen.getByPlaceholderText(/type your password/i)
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/new password/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument()
  })
})
