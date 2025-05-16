'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Film } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Favoritos', href: '/favorites' }
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-white shadow shadow-violet-200 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex gap-3 items-center">
          <Film className="w-6 h-6 text-violet-600" />
          <h1 className="text-xl font-bold text-gray-900">Plataforma de Cursos</h1>
        </Link>
        
        <ul className="flex space-x-6">
          {navItems.map(item => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-sm ${
                  pathname === item.href
                    ? 'text-violet-700 underline font-bold'
                    : 'text-gray-600 hover:text-violet-700'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
