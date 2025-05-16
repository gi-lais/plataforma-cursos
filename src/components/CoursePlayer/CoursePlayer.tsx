'use client'

interface CoursePlayerProps {
  title: string
  description: string
}

export function CoursePlayer({ title, description}: CoursePlayerProps) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="text-gray-700 mb-4">{description}</p>
        
      <video className="w-full rounded-xl" controls data-testid="video">
        <source src="/video-placeholder.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      <div className="mt-4 flex gap-4">
        <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-violet-700 transition">Continuar</button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded-xl hover:bg-gray-400 transition">Reiniciar</button>
      </div>
    </div>
  )
}
