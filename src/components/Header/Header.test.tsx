import { render, screen } from '@testing-library/react'
import Header from './Header'
import { usePathname } from 'next/navigation'
import '@testing-library/jest-dom'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn()
}))

describe('Header', () => {
  it('renderiza título e navegação', () => {
    (usePathname as jest.Mock).mockReturnValue('/')
    render(<Header />)

    expect(screen.getByText('Plataforma de Cursos')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Favoritos')).toBeInTheDocument()
  })
})
