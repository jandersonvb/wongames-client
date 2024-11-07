import React from 'react'

import { screen } from '@testing-library/react'
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
})
