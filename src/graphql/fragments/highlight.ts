import { gql } from '@apollo/client'

export const HighligthFragment = gql`
  fragment HighligthFragment on ComponentPageHighlight {
    title
    subtitle
    background {
      url
    }
    floatImage {
      url
    }
    buttonLabel
    buttonLink
    alignment
  }
`
