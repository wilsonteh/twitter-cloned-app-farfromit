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
        {children}
      </body>
    </html>
  )
}
