import { render, screen } from 'utils/test-utils'

import ProfileForm from '.'

describe('<ProfileForm />', () => {
  it('should render the ProfileForm', () => {
    const { container } = render(<ProfileForm />)

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render all the component of the profile form', () => {
    render(<ProfileForm />)

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
