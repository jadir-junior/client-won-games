import * as S from './styles'

export type LineColorProps = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  size?: 'small' | 'normal'
  lineColor?: LineColorProps
}

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  size = 'normal',
  lineColor = 'primary'
}: HeadingProps) => (
  <S.Wrapper
    size={size}
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    lineColor={lineColor}
  >
    {children}
  </S.Wrapper>
)

export default Heading
