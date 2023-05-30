import { TextInput, TextInputProps } from 'react-native'
import { Container } from './styles'

import { useTheme } from 'styled-components'
import React, { RefObject } from 'react'

type InputProps = TextInputProps & {
  inputRef?: RefObject<TextInput>
}

export function Input({ inputRef, ...rest }: InputProps) {
  const { COLORS } = useTheme()

  return (
    <Container
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  )
}
