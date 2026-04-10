import { getBrincadeiraById } from "@/lib/actions"
import BrincadeiraForm from "@/components/game/BrincadeiraForm"
import { notFound } from "next/navigation"
import { Header } from "@/components/layout/Header"

export const revalidate = 0 // Disable cache for this page so it's always up-to-date

interface ViewPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ViewBrincadeiraPage(props: ViewPageProps) {
  const params = await props.params;
  const brincadeira = await getBrincadeiraById(params.id)

  if (!brincadeira) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header title="Detalhes da Brincadeira" showSearch={false} showBackButton={true} />
      
      <main className="page-main">
        <BrincadeiraForm 
          id={params.id}
          initialData={brincadeira}
          mode="VIEW" 
        />
      </main>
    </div>
  )
}
