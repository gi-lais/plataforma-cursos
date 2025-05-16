import { render, screen } from '@testing-library/react'
import CourseCard from './CourseCard'

describe('CourseCard', () => {
  const course = {
    id: 1,
    title: 'Curso Next.js',
    description: 'Aprenda a usar Next.js'
  }

  it('mostra informações do curso e botão de acesso', () => {
    render(<CourseCard course={course} hasAccess={true} />)

    expect(screen.getByText('Curso Next.js')).toBeInTheDocument()
    expect(screen.getByText('Aprenda a usar Next.js')).toBeInTheDocument()
    expect(screen.getByText('Acesso Liberado')).toBeInTheDocument()
    expect(screen.getByText('Acessar Curso')).toBeInTheDocument()
  })
})
