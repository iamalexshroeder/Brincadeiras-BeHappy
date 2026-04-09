"use client"

import { useState, useEffect, useTransition } from "react"
import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { RiArrowLeftSLine, RiUser3Line, RiImageLine, RiLoader4Line } from "@remixicon/react"
import { useRouter } from "next/navigation"
import { getProfile, updateProfile } from "@/lib/actions"
import { useSession } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function EditarPerfil() {
  const router = useRouter()
  const { data: session, update: updateSession } = useSession()
  const [isPending, startTransition] = useTransition()
  
  const [name, setName] = useState("")
  const [avatarUrl, setAvatarUrl] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProfile().then(data => {
      if (data) {
        setName(data.name || "")
        setAvatarUrl(data.avatar || "")
      }
      setLoading(false)
    })
  }, [])

  const handleSave = async () => {
    startTransition(async () => {
      try {
        await updateProfile({ name, avatar_url: avatarUrl })
        // Tenta atualizar a sessão local se o provider suportar
        await updateSession()
        router.push("/perfil/configuracoes")
      } catch (error) {
        console.error("Erro ao atualizar perfil:", error)
      }
    })
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F7]">
      {/* Custom Header with standardized back button */}
      <div className="sticky top-0 z-50 bg-[#F9F9F7]/95 backdrop-blur-md px-5 pt-14 pb-4 border-b border-[#F2F2F7]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
                variant="ghost" 
                size="icon" 
                className="h-10 w-10 rounded-full bg-white shadow-sm text-[#8E8E93]"
                onClick={() => router.back()}
              >
                <RiArrowLeftSLine size={24} />
            </Button>
            <h1 className="text-[20px] font-extrabold tracking-[-0.02em] text-[#1A1A1A]">
              Editar Perfil
            </h1>
          </div>
          <Button 
            onClick={handleSave} 
            disabled={isPending || loading}
            className="bg-primary text-white font-bold h-9 px-4 rounded-[6px] border-none"
          >
            {isPending ? <RiLoader4Line className="animate-spin" size={18} /> : "Salvar"}
          </Button>
        </div>
      </div>

      <main className="px-5 pt-8 space-y-8 pb-32">
        {/* Profile Preview */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <Avatar className="h-24 w-24 border-4 border-white shadow-md">
            <AvatarImage src={avatarUrl} />
            <AvatarFallback className="bg-primary/10 text-primary text-2xl font-bold">
              {name ? name[0] : <RiUser3Line size={32} />}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="space-y-6">
          {/* Name Field */}
          <section className="space-y-2">
            <label className="text-[13px] font-bold text-[#8E8E93] uppercase tracking-widest pl-1">
              Nome de Exibição
            </label>
            <Card className="p-1 border-none shadow-[0_2px_12px_rgba(0,0,0,0.02)] rounded-[12px] overflow-hidden">
              <div className="flex items-center px-4 h-12 gap-3">
                <RiUser3Line size={20} className="text-[#8E8E93]" />
                <Input 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="border-none bg-transparent h-full px-0 focus-visible:ring-0 text-[15px] font-medium"
                />
              </div>
            </Card>
          </section>

          {/* Photo Field */}
          <section className="space-y-2">
            <label className="text-[13px] font-bold text-[#8E8E93] uppercase tracking-widest pl-1">
              URL da Foto de Perfil
            </label>
            <Card className="p-1 border-none shadow-[0_2px_12px_rgba(0,0,0,0.02)] rounded-[12px] overflow-hidden">
              <div className="flex items-center px-4 h-12 gap-3">
                <RiImageLine size={20} className="text-[#8E8E93]" />
                <Input 
                  value={avatarUrl}
                  onChange={(e) => setAvatarUrl(e.target.value)}
                  placeholder="https://exemplo.com/foto.jpg"
                  className="border-none bg-transparent h-full px-0 focus-visible:ring-0 text-[15px] font-medium"
                />
              </div>
            </Card>
            <p className="text-[11px] text-[#8E8E93] pl-1">
              Utilize o link de uma imagem (ex: Google Photos, Dropbox, etc).
            </p>
          </section>

          {/* Read-only Email Field */}
          <section className="space-y-2 opacity-60">
            <label className="text-[13px] font-bold text-[#8E8E93] uppercase tracking-widest pl-1">
              E-mail da Conta
            </label>
            <Card className="p-4 border-none shadow-[0_2px_12px_rgba(0,0,0,0.02)] rounded-[12px] bg-gray-50/50">
              <span className="text-[15px] font-medium text-[#8E8E93]">
                {session?.user?.email}
              </span>
            </Card>
            <p className="text-[11px] text-red-400 pl-1 italic">
              O e-mail não pode ser alterado pois é vinculado ao seu Google Login.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
