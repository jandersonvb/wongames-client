import { renderWithTheme } from '@/utils/tests/helpers'
import { screen } from '@testing-library/react'
import { Button } from './Button'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    renderWithTheme(<Button>Buy now</Button>)

    const button = screen.getByRole('button', { name: /Buy now/i })

    expect(button).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Buy now</Button>)

    const button = screen.getByRole('button', { name: /Buy now/i })

    expect(button).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Buy now</Button>)

    const button = screen.getByRole('button', { name: /Buy now/i })

    expect(button).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem'
    })
  })
})
