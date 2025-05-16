'use client'

import { useUser } from '@/context/UserContext'
import courses from '@/data/courses.json'
import CourseCard from '@/components/CourseCard/CourseCard'
import { useEffect, useState } from 'react'

export default function FavoritesPage() {
  const { hasCourse } = useUser()
  const [favoriteCourses, setFavoriteCourses] = useState<typeof courses>([])

  useEffect(() => {
    const stored = localStorage.getItem('favorites')
    const favoriteIds = stored ? (JSON.parse(stored) as number[]) : []
    const favorites = courses.filter(course => favoriteIds.includes(course.id))
    setFavoriteCourses(favorites)
  }, [])

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Meus Cursos Favoritos</h1>

      {favoriteCourses.length === 0 ? (
        <p className="text-gray-600">Você ainda não adicionou nenhum curso.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteCourses.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              hasAccess={hasCourse(course.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}



