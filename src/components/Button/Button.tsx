import React from 'react'
import { Container } from './Button.styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
}

export const Button = ({ children, size = 'medium' }: ButtonProps) => {
  return (
    <Container size={size}>{!!children && <span>{children}</span>}</Container>
  )
}
