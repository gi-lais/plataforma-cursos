'use client'

import { use } from 'react'
import { CoursePlayer } from '@/components/CoursePlayer/CoursePlayer'
import { CoursePreview } from '@/components/CoursePreview/CoursePreview'
import { useUser } from '@/context/UserContext'
import courses from '@/data/courses.json'
import { notFound } from 'next/navigation'

interface Params {
  id: string
}

export default function CoursePage({ params }: { params: Promise<Params> }) {
  const { hasCourse } = useUser()
  const { id } = use(params)
  const courseId = Number(id)
  const course = courses.find(c => c.id === courseId)

  if (!course) return notFound()

  return hasCourse(courseId)
    ? <CoursePlayer title={course.title} description={course.description} />
    : (
      <CoursePreview
        id={course.id}
        title={course.title}
        description={course.description}
        price={course.price}
        created_at={course.created_at}
      />
    )
}
