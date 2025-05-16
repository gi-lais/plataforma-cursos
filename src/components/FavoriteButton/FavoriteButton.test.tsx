import { render, screen, fireEvent } from '@testing-library/react'
import FavoriteButton from './FavoriteButton'

describe('FavoriteButton', () => {
  beforeEach(() => {
    localStorage.clear()
  })

    it('marca e desmarca favorito corretamente', () => {
        render(<FavoriteButton courseId={1} />)

        const button = screen.getByRole('button')
        fireEvent.click(button)
        expect(JSON.parse(localStorage.getItem('favorites')!)).toContain(1)

        fireEvent.click(button)
        expect(JSON.parse(localStorage.getItem('favorites')!)).not.toContain(1)
    })

    it('adiciona e remove favoritos corretamente', () => {
        render(<FavoriteButton courseId={1} />)
    
        const button = screen.getByRole('button')
        fireEvent.click(button)
        expect(JSON.parse(localStorage.getItem('favorites')!)).toContain(1)
    
        fireEvent.click(button)
        expect(JSON.parse(localStorage.getItem('favorites')!)).not.toContain(1)
    })
    
    it('inicializa o estado corretamente com base no localStorage', () => {
        localStorage.setItem('favorites', JSON.stringify([1]))
        render(<FavoriteButton courseId={1} />)
    
        const button = screen.getByRole('button')
        expect(button).toHaveAttribute('aria-label', 'Remover dos favoritos')
    })
})