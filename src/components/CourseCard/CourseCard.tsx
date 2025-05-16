'use client'

import Link from 'next/link'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import { motion } from 'framer-motion'

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
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02, boxShadow: '0px 8px 20px rgba(0,0,0,0.08)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="relative flex flex-col bg-gray-200 p-6 rounded-xl"
    >
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
            className="w-fit self-start bg-violet-500 text-white text-sm px-4 py-2 rounded-2xl hover:bg-violet-800 transition-shadow"
          >
            <motion.span
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Acessar Curso
            </motion.span>
          </Link>

          <FavoriteButton courseId={course.id} />
        </div>

      </div>
    </motion.div>
  )
}
