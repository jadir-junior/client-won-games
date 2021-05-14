import { render, screen } from 'utils/test-utils'

import FormSignUp from '.'
import { MockedProvider } from '@apollo/client/testing'

describe('<FormSignUp />', () => {
  it('should render the FormSignUp', () => {
    const { container } = render(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the form', () => {
    render(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>
    )
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/confirm password/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign up now/i })
    ).toBeInTheDocument()
  })

  it('should render the text and link to sign up', () => {
    render(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>
    )

    expect(screen.getByText(/already have an account/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign in/i })).toHaveAttribute(
      'href',
      '/sign-in'
    )
  })
})
