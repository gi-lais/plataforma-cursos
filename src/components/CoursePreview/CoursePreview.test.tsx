import { render, screen } from '@testing-library/react'
import { CoursePreview } from './CoursePreview'

describe('CoursePreview', () => {
  it('renderiza dados do curso', () => {
    render(
      <CoursePreview
        id={1}
        title="Curso de Tailwind"
        description="Design moderno com Tailwind"
        price={99.9}
        created_at="2024-01-01"
      />
    )

    expect(screen.getByText('Curso de Tailwind')).toBeInTheDocument()
    expect(screen.getByText('R$ 99.90')).toBeInTheDocument()
    expect(screen.getByText('Data de criação: 2024-01-01')).toBeInTheDocument()
  })
    it('renderiza botão de favoritar', () => {
        render(
        <CoursePreview
            id={1}
            title="Curso de Tailwind"
            description="Design moderno com Tailwind"
            price={99.9}
            created_at="2024-01-01"
        />
        )
    
        expect(screen.getByRole('button', { name: 'Adicionar aos favoritos' })).toBeInTheDocument()
    })
    it('renderiza botão de comprar', () => {
        render(
        <CoursePreview
            id={1}
            title="Curso de Tailwind"
            description="Design moderno com Tailwind"
            price={99.9}
            created_at="2024-01-01"
        />
        )
    
        expect(screen.getByRole('button', { name: 'Comprar Curso' })).toBeInTheDocument()
    })
})
