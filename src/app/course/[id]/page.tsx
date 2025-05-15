'use client'

import { useUser } from '@/context/UserContext'
import courses from '@/data/courses.json'
import { notFound } from 'next/navigation'

interface Props {
  params: { id: string }
}

export default function CoursePage({ params }: Props) {
  const { hasCourse } = useUser()
  const courseId = Number(params.id)
  const course = courses.find(c => c.id === courseId)

  if (!course) return notFound()

  if (hasCourse(courseId)) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
        <video className="w-full rounded" controls>
          <source src="/video-placeholder.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
        <div className="mt-4 space-x-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded">Continuar</button>
          <button className="bg-gray-300 text-black px-4 py-2 rounded">Reiniciar</button>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
      <p className="mb-4 text-gray-700">{course.description}</p>
      <p className="mb-4 font-semibold">Preço: R$ {course.price.toFixed(2)}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Comprar Curso</button>
    </div>
  )
}
