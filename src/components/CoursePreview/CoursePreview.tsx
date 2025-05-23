'use client'

import FavoriteButton from '../FavoriteButton/FavoriteButton'

interface CoursePreviewProps {
  id: number
  title: string
  description: string
  price: number
  created_at: string
}

export function CoursePreview({ id, title, description, price, created_at }: CoursePreviewProps) {
  
  return (
    <div className="p-8 max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-md border border-gray-200 relative">
      <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
        {title}
      </h1>

      <p className="text-gray-700 text-base leading-relaxed mb-6 max-w-3xl">
        {description}
      </p>

      <div className="flex items-center gap-6 flex-wrap">
        <div>
          <p className="text-xl font-extrabold text-black">R$ {price.toFixed(2)}</p>
         
            <p className="text-xs text-gray-500 mt-1">
              Data de criação: {created_at}
            </p>
        
        </div>

        <button className="bg-violet-500 text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-violet-700 transition">
          Comprar Curso
        </button>

        <FavoriteButton courseId={id}/>
      </div>

    </div>
  )
}
