import { getBrincadeiraById } from "@/lib/actions"
import BrincadeiraForm from "@/components/game/BrincadeiraForm"
import { notFound } from "next/navigation"
import { auth } from "@/auth"

interface EditPageProps {
  params: {
    id: string
  }
}

export default async function EditBrincadeiraPage({ params }: EditPageProps) {
  const session = await auth()
  const brincadeira = await getBrincadeiraById(params.id)

  if (!brincadeira) {
    notFound()
  }

  // Security check: only the owner can edit
  if (brincadeira.creator.id !== session?.user?.id) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F2F2F7] p-6 lg:p-0">
        <div className="bg-white p-8 rounded-[24px] shadow-xl text-center max-w-sm w-full animate-in fade-in zoom-in duration-300">
          <h2 className="text-[20px] font-extrabold text-[#1A1A1A] mb-2">Acesso Negado</h2>
          <p className="text-[14px] text-[#8E8E93] font-medium mb-6">Você não tem permissão para editar esta brincadeira.</p>
          <a href="/perfil" className="inline-flex h-12 px-6 bg-primary text-white font-bold rounded-[14px] items-center justify-center active:scale-95 transition-all">
            Voltar ao Perfil
          </a>
        </div>
      </div>
    )
  }

  return (
    <BrincadeiraForm 
      id={params.id}
      initialData={brincadeira}
      mode="EDIT" 
    />
  )
}
