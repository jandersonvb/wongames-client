import React, { useState } from 'react'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import { Logo } from '../Logo'

import {
  Container,
  CreateAccount,
  IconContainer,
  LogoContainer,
  MenuFull,
  MenuGroup,
  MenuLink,
  MenuNav,
  RegisterBox
} from './Menu.styles'
import { Button } from '../Button'

export type MenuProps = {
  username?: string
}

export const Menu = ({ username }: MenuProps) => {
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
        <MenuNav>
          <MenuLink href="#">Home</MenuLink>
          <MenuLink href="#">Explore</MenuLink>

          {!!username && (
            <>
              <MenuLink href="#">My account</MenuLink>
              <MenuLink href="#">Wishlist</MenuLink>
            </>
          )}
        </MenuNav>

        {!username && (
          <RegisterBox title="Sign In">
            <Button fullWidth size="large">
              Log in now
            </Button>
            <span>or</span>
            <CreateAccount href="#" title="Sign Up">
              Sign Up
            </CreateAccount>
          </RegisterBox>
        )}
      </MenuFull>
    </Container>
  )
}
