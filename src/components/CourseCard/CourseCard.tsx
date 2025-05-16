'use client'

import Link from 'next/link'
import FavoriteButton from '../FavoriteButton/FavoriteButton'

interface Course {
  id: number
  title: string
  description: string
}

interface Props {
  course: Course
  hasAccess: boolean
}

export default function CourseCard({ course, hasAccess }: Props) {

  return (
    <div className="relative flex flex-col bg-gray-200 p-6 rounded-xl">

      <div className="flex items-center mb-2">
        <div className="w-6 h-6 bg-black rounded-full mr-2" />
        <h2 className="text-lg font-semibold text-black">{course.title}</h2>
      </div>

      <p className="text-sm text-black mb-2">{course.description}</p>

      {hasAccess && (
        <span className="text-sm text-green-800 mb-2">Acesso Liberado</span>
      )}

      <div className="mt-auto flex justify-between items-center pt-4">
        <Link
          href={`/course/${course.id}`}
          className="w-fit self-start bg-violet-500 text-white text-sm px-4 py-2 rounded-2xl hover:bg-violet-800 transition"
        >
          Acessar Curso
        </Link>

        <FavoriteButton courseId={course.id} />
      </div>

    </div>
  )
}
