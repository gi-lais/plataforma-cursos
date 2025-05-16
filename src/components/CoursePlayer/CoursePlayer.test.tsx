import { render, screen } from '@testing-library/react'
import { CoursePlayer } from './CoursePlayer'

describe('CoursePlayer', () => {
    it('renderiza título, descrição e vídeo', () => {
        render(<CoursePlayer title="Curso React" description="Aprenda React do zero" />)

        expect(screen.getByText('Curso React')).toBeInTheDocument()
        expect(screen.getByText('Aprenda React do zero')).toBeInTheDocument()
        expect(screen.getByTestId('video')).toBeInTheDocument()
    })
    it('renderiza botões de continuar e reiniciar', () => {
        render(<CoursePlayer title="Curso React" description="Aprenda React do zero" />)
    
        expect(screen.getByRole('button', { name: 'Continuar' })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: 'Reiniciar' })).toBeInTheDocument()
    })

})
