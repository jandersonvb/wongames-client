import React from 'react'

import { fireEvent, screen } from '@testing-library/react'
import { Menu } from './Menu'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Menu />', () => {
  it('should render the Menu', () => {
    renderWithTheme(<Menu />)

    const openMenu = screen.getByLabelText(/open menu/i)
    const search = screen.getByLabelText(/search/i)

    const logo = screen.getByRole('img', { name: /won games/i })
    const openShoppingCart = screen.getByLabelText(/open shopping cart/i)

    expect(openMenu).toBeInTheDocument()
    expect(search).toBeInTheDocument()
    expect(openShoppingCart).toBeInTheDocument()
    expect(logo).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    //Selecionar o nosso MenuFull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    //Verificar se o menu está escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    //Clicar no botão de abrir o menu e verificar se ele abriu
    const openMenu = screen.getByLabelText(/open menu/i)

    fireEvent.click(openMenu)

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    //Selecionar o botão de abrir o menu
    const closeMenu = screen.getByLabelText(/close menu/i)

    //Clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(closeMenu)
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })
})
