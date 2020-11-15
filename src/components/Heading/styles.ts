import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps, LineColorProps } from '.'

const wrapperModifier = {
  lineLeft: (theme: DefaultTheme, lineColor: LineColorProps) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,
  lineBottom: (theme: DefaultTheme, lineColor: LineColorProps) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
    }
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    &::after {
      width: 3rem;
    }
  `,
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.xxlarge}
    `};
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom, size, lineColor }) => css`
    color: ${theme.colors[color!]};
    ${lineLeft && wrapperModifier.lineLeft(theme, lineColor!)}
    ${lineBottom && wrapperModifier.lineBottom(theme, lineColor!)}
    ${!!size && wrapperModifier[size](theme)}
  `}
`
