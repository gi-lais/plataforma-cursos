'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import userData from '@/data/user.json'

type CoursePurchase = { courseId: number; dateJoined: string }

interface User {
  id: number
  name: string
  courses: CoursePurchase[]
}

interface UserContextType {
  user: User
  hasCourse: (courseId: number) => boolean
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user] = useState<User>(userData)

  const hasCourse = (courseId: number) =>
    user.courses.some(course => course.courseId === courseId)

  return (
    <UserContext.Provider value={{ user, hasCourse }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) throw new Error('useUser must be used within UserProvider')
  return context
}
