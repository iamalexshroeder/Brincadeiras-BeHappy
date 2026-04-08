// Login page has its own minimal layout — no BottomNav, no SessionProvider needed here
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
