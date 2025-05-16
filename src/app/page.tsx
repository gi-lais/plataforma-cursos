'use client'

import courses from '@/data/courses.json'
import { useUser } from '@/context/UserContext'
import CourseCard from '@/components/CourseCard/CourseCard'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

export default function HomePage() {
  const { hasCourse } = useUser()

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Explore os melhores cursos de tecnologia
        </motion.h1>

        <p className="text-xl text-gray-700 mb-3">
          <Typewriter
            words={[
              'Cursos de Frontend.',
              'Cursos de Backend.',
              'Cursos de Mobile.',
              'Construa projetos reais.',
              'Aprenda no seu ritmo.'
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} hasAccess={hasCourse(course.id)} />
        ))}
      </div>
    </main>
  )
}
