'use client'

import { CoursePlayer } from '@/components/CoursePlayer/CoursePlayer'
import { CoursePreview } from '@/components/CoursePreview/CoursePreview'
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

  return hasCourse(courseId)
    ? <CoursePlayer title={course.title} description={course.description}/>
    : <CoursePreview title={course.title} description={course.description} price={course.price} />
}
