'use client'

import { useUser } from '@/context/UserContext'
import courses from '@/data/courses.json'
import Link from 'next/link'

export default function FavoritesPage() {
  const { user } = useUser()

  const favoriteCourses = user.courses.map(c =>
    courses.find(course => course.id === c.courseId)
  ).filter(Boolean)

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Meus Cursos Favoritos</h1>
      {favoriteCourses.length === 0 ? (
        <p className="text-gray-600">Você ainda não adicionou nenhum curso.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteCourses.map(course => (
            <div key={course!.id} className="border rounded-xl p-4 shadow-sm">
              <h2 className="text-xl font-semibold">{course!.title}</h2>
              <p className="text-gray-600 mb-2">{course!.description}</p>
              <Link
                href={`/course/${course!.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Acessar
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
