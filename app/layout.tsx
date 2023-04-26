import "server-only";
import SupabaseProvider from '@/supabase-provider'
import './globals.css'
import { createServerClient } from "@/lib/supabase/supabase-server";

export const metadata = {
  title: 'Twitter Cloned App',
  description: 'My shitty attempt to make a twitter cloned app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const supabase = createServerClient();
  const { 
    data: { session }
  } = await supabase.auth.getSession();
  

  return (
    <html lang="en">
      <body className="">
        <SupabaseProvider session={session}> 
          {children} 
        </SupabaseProvider>
      </body>
    </html>
  )
}
