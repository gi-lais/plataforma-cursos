'use client'

import courses from '@/data/courses.json'
import { useUser } from '@/context/UserContext'
import Link from 'next/link'

export default function HomePage() {
  const { hasCourse } = useUser()

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Meus Cursos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <div key={course.id} className="border rounded-xl p-4 shadow-sm">
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600 mb-2">{course.description}</p>
            <p className="text-sm text-gray-500 mb-2">R$ {course.price.toFixed(2)}</p>
            <Link
              href={`/course/${course.id}`}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {hasCourse(course.id) ? 'Acessar Curso' : 'Ver Detalhes'}
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
