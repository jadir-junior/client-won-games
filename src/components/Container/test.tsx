import { Container } from '.'
import { render } from 'utils/test-utils'
import theme from 'styles/theme'

describe('<Container />', () => {
  it('should render the Container', () => {
    const { container } = render(
      <Container>
        <span>Won Games</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyle({
      maxWidth: theme.grid.container
    })

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      >
        <span>
          Won Games
        </span>
      </div>
    `)
  })
})
