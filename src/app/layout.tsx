import Header from '@/components/Header/Header'
import './globals.css'
import { UserProvider } from '@/context/UserContext'
import { Toaster } from 'sonner'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <UserProvider>
          <Header/>
            <main>
              {children}
            </main>
            <Toaster richColors position="top-right" />
        </UserProvider>
      </body>
    </html>
  )
}
