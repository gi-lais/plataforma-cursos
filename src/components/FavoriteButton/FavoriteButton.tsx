'use client'

import { useEffect, useState } from 'react'
import { Heart, HeartOff } from 'lucide-react'
import { toast } from 'sonner'

interface FavoriteButtonProps {
  courseId: number
}

export default function FavoriteButton({ courseId }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('favorites')
    const favorites = stored ? (JSON.parse(stored) as number[]) : []
    setIsFavorite(favorites.includes(courseId))
  }, [courseId])

  const toggleFavorite = () => {
    const stored = localStorage.getItem('favorites')
    const favorites = stored ? (JSON.parse(stored) as number[]) : []

    let updatedFavorites: number[]
    if (favorites.includes(courseId)) {
      updatedFavorites = favorites.filter(id => id !== courseId)
      setIsFavorite(false)
      toast.success('Curso removido dos favoritos')
    } else {
      updatedFavorites = [...favorites, courseId]
      setIsFavorite(true)
      toast.success('Curso adicionado aos favoritos')
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }

  return (
    <button
      onClick={toggleFavorite}
      aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      className="transition-transform duration-200 hover:scale-110 active:scale-90"
    >
      {isFavorite ? (
        <Heart className="w-6 h-6 fill-red-500 text-red-500" />
      ) : (
        <HeartOff className="w-6 h-6 text-gray-600" />
      )}
    </button>
  )
}
