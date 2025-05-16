'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Heart, HeartOff } from 'lucide-react' 

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
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('favorites')
    const favorites = stored ? (JSON.parse(stored) as number[]) : []
    setIsFavorite(favorites.includes(course.id))
  }, [course.id])

  const toggleFavorite = () => {
    const stored = localStorage.getItem('favorites')
    const favorites = stored ? (JSON.parse(stored) as number[]) : []

    let updatedFavorites: number[]
    if (favorites.includes(course.id)) {
      updatedFavorites = favorites.filter(id => id !== course.id)
      setIsFavorite(false)
    } else {
      updatedFavorites = [...favorites, course.id]
      setIsFavorite(true)
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }

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

      <button
        onClick={toggleFavorite}
        aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      >
         {isFavorite ? <Heart className="fill-red-500 text-red-500" /> : <HeartOff />}
      </button>
      </div>

     
    </div>
  )
}
