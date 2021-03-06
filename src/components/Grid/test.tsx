import { Grid } from '.'
import { render } from 'utils/test-utils'

describe('<Grid />', () => {
  it('should render the Grid', () => {
    const { container } = render(<Grid>Children</Grid>)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(24rem,1fr));
        grid-gap: 3.2rem;
        margin: 3.2rem 0;
      }

      <div
        class="c0"
      >
        Children
      </div>
    `)
  })
})
