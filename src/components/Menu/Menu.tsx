import React, { useState } from 'react'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import { Logo } from '../Logo'

import {
  Container,
  IconContainer,
  LogoContainer,
  MenuFull,
  MenuGroup
} from './Menu.styles'

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <IconContainer onClick={() => setIsOpen(true)}>
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

      <MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
      </MenuFull>
    </Container>
  )
}
