import styled from 'styled-components'
import { LogoProps } from './Logo'

const containerModifiers = {
  normal: () => `
    width: 11rem;
    height: 3.3rem;
  `,
  large: () => `
    width: 20rem;
    height: 5.9rem;
  `
}

export const Container = styled.div<LogoProps>`
  color: ${({ theme, color }) => theme.colors[color!]};

  ${({ size }) => containerModifiers[size!]};
`
