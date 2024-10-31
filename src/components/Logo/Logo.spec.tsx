import { renderWithTheme } from '@/utils/tests/helpers'
import { Logo } from './Logo'
import { screen } from '@testing-library/dom'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)
    const container = screen.getByLabelText(/won games/i).parentElement

    expect(container).toHaveStyle({ color: '#FAFAFA' })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    const container = screen.getByLabelText(/won games/i).parentElement

    expect(container).toHaveStyle({ color: '#030517' })
  })
})
