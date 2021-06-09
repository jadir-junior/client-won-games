import * as S from './styles'

import Button from 'components/Button'
import Image from 'next/image'
import Link from 'next/link'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper data-cy="empty">
    <Image
      src="/img/empty.svg"
      alt="a gamer in a couch playing videogame"
      width={380}
      height={285}
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    {hasLink && (
      <Link href="/" passHref>
        <Button as="a">Go back to store</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
