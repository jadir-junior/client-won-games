import * as S from './styles'

import { useState } from 'react'

export type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
}

const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title onClick={() => setIsOpen(!isOpen)}>{title}</S.Title>
      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
      <S.Overlay
        data-cy="overlay"
        aria-hidden={!isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
    </S.Wrapper>
  )
}

export default Dropdown
