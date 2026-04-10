import { Header } from "@/components/layout/Header"
import BrincadeiraForm from "@/components/game/BrincadeiraForm"

export default function CreateBrincadeiraPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header title="Nova Brincadeira" showSearch={false} showBackButton={true} />
      
      <main className="page-main">
        <BrincadeiraForm mode="CREATE" />
      </main>
    </div>
  )
}
