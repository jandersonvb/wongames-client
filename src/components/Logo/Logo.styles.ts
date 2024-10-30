import styled from 'styled-components'
import { LogoProps } from './Logo'

export const Container = styled.div<LogoProps>`
  color: ${({ theme, color }) => theme.colors[color!]};
`