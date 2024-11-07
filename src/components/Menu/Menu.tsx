import React from 'react'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'

import { Logo } from '../Logo'

import {
  Container,
  IconContainer,
  LogoContainer,
  MenuGroup
} from './Menu.styles'

export const Menu = () => {
  return (
    <Container>
      <IconContainer>
        <MenuIcon aria-label="Open Menu" />
      </IconContainer>
      <LogoContainer>
        <Logo $hideOnMobile />
      </LogoContainer>
      <MenuGroup>
        <IconContainer>
          <SearchIcon aria-label="Search" />
        </IconContainer>
        <IconContainer>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </IconContainer>
      </MenuGroup>
    </Container>
  )
}
