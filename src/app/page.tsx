'use client'

import courses from '@/data/courses.json'
import { useUser } from '@/context/UserContext'
import CourseCard from '@/components/CourseCard/CourseCard'


export default function HomePage() {
  const { hasCourse } = useUser()

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 max-w-3xl">
        Cursos de Tecnologia
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} hasAccess={hasCourse(course.id)} />
        ))}
      </div>
    </main>
  )
}
