'use client'

interface CoursePreviewProps {
  title: string
  description: string
  price: number
}

export function CoursePreview({ title, description, price }: CoursePreviewProps) {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="mb-4 text-gray-700">{description}</p>
      <p className="mb-4 font-semibold">Preço: R$ {price.toFixed(2)}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">Comprar Curso</button>
    </div>
  )
}
