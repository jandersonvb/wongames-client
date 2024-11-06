import React from 'react'
import { Container } from './Button.styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
}

export const Button = ({
  children,
  size = 'medium',
  fullWidth = false
}: ButtonProps) => {
  return (
    <Container size={size} fullWidth={fullWidth}>
      {!!children && <span>{children}</span>}
    </Container>
  )
}
