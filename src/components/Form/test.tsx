import { FormLink, FormWrapper } from '.'

import { render } from 'utils/test-utils'

describe('<Form />', () => {
  it('should render the Form', () => {
    const { container } = render(
      <FormWrapper>
        <FormLink>link</FormLink>
      </FormWrapper>
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 .sc-gsTCUz {
        margin: 0.8rem 0;
      }

      .c0 .sc-bdfBwQ {
        margin: 3.2rem auto 1.6rem;
      }

      .c1 {
        font-size: 1.4rem;
        color: #030517;
        text-align: center;
      }

      .c1 a {
        color: #3CD3C1;
        -webkit-text-decoration: none;
        text-decoration: none;
        border-bottom: 0.1rem solid #3CD3C1;
        -webkit-transition: color,border,0.1s ease-in-out;
        transition: color,border,0.1s ease-in-out;
      }

      .c1 a:hover {
        color: #29b3a3;
        border-bottom: 0.1rem solid #29b3a3;
      }

      <div
        class="c0"
      >
        <div
          class="c1"
        >
          link
        </div>
      </div>
    `)
  })
})
