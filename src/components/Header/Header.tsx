'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Favoritos', href: '/favorites' }
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">Plataforma de Cursos</h1>
        <ul className="flex space-x-6">
          {navItems.map(item => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-sm font-medium ${
                  pathname === item.href
                    ? 'text-blue-600 underline'
                    : 'text-gray-600 hover:text-blue-600'
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
