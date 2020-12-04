import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as GameItemStyles from 'components/GameItem/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};

    ${GameItemStyles.Wrapper} {
    padding: ${theme.spacings.small} 0;
      &:last-child {
        border-bottom none;
      }
    }

    ${media.greaterThan('medium')`
        padding: ${theme.spacings.small}
    `}
  `}
`

export const Content = styled.div``
