import { Inter } from "next/font/google"
import { SessionProvider } from "next-auth/react"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { BottomNav } from "@/components/layout/BottomNav"
import { Toaster } from "@/components/ui/sonner"
import { NotificationPoller } from "@/components/shared/NotificationPoller"

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata = {
  title: "BeHappy - Brincadeiras para Recreadores",
  description: "Descubra, compartilhe e crie brincadeiras incríveis. A plataforma dos melhores recreadores.",
  openGraph: {
    title: "BeHappy - Brincadeiras para Recreadores",
    description: "Descubra, compartilhe e crie brincadeiras incríveis.",
    type: "website",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#FFFFFF",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn("antialiased flex min-h-screen flex-col bg-background text-foreground", inter.variable, "font-sans")}
    >
      <body className="flex-1 pb-[64px] md:pb-0 bg-background text-foreground">
        <SessionProvider>
          <ThemeProvider>
            <main className="flex-1">
              {children}
            </main>
            <BottomNav />
            <Toaster position="top-center" richColors theme="light" />
            <NotificationPoller />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
