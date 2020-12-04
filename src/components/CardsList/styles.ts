import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 100%;
    background: ${theme.colors.white};
    padding: ${theme.spacings.small};
    display: grid;
    gap: ${theme.spacings.xxsmall};
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    background: ${theme.colors.lightGray};
    display: flex;
    align-items: center;

    > span {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`
