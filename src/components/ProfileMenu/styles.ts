import styled, { DefaultTheme, css } from 'styled-components'

import media from 'styled-media-query'

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    border-bottom: 0.1rem solid ${theme.colors.lightGray};

    ${media.greaterThan('medium')`
        flex-direction: column;
        border: 0;

        a:not(:last-child) {
            border-bottom: 0.1rem solid ${theme.colors.lightGray}
        }
    `}
  `}
`

type LinkProps = {
  isActive?: boolean
}

const linkModifiers = {
  default: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.black};
  `,
  active: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  `
}

export const Link = styled.a<LinkProps>`
  ${({ theme, isActive }) => css`
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: background, color, ${theme.transition.default};

    &:hover {
      color: ${theme.colors.white};
      background: ${theme.colors.primary};
    }

    > span {
      margin-left: ${theme.spacings.xsmall};
    }

    ${media.lessThan('medium')`
        justify-content: center;
        flex: 1;

        > span {
            display: none;
        }
    `}

    ${!isActive && linkModifiers.default(theme)}
    ${isActive && linkModifiers.active(theme)}
  `}
`
