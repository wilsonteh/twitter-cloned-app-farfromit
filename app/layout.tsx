import SupabaseProvider from '@/supabase-provider'
import './globals.css'

export const metadata = {
  title: 'Twitter Cloned App',
  description: 'My shitty attempt to make a twitter cloned app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">
        <SupabaseProvider> 
          {children} 
        </SupabaseProvider>
      </body>
    </html>
  )
}
