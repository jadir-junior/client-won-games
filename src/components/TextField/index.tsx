import * as S from './styles'

import { InputHTMLAttributes, useState } from 'react'

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: string
  error?: string
  disabled?: boolean
  iconPosition?: 'left' | 'right'
  name?: string
  icon?: React.ReactNode
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  iconPosition = 'left',
  initialValue = '',
  disabled = false,
  label,
  onInputChange,
  icon,
  error,
  name,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          onChange={onChange}
          type="text"
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
