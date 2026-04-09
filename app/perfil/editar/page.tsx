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
        await updateSession()
        router.push("/perfil/configuracoes")
      } catch (error) {
        console.error("Erro ao atualizar perfil:", error)
      }
    })
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatarUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
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
            className="bg-primary text-white font-bold h-9 px-4 rounded-[6px] border-none shadow-sm active:scale-95 transition-all"
          >
            {isPending ? <RiLoader4Line className="animate-spin" size={18} /> : "Salvar"}
          </Button>
        </div>
      </div>

      <main className="px-5 pt-8 space-y-8 pb-32">
        {/* Profile Preview & Upload */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <Avatar className="h-28 w-28 border-4 border-white shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <AvatarImage src={avatarUrl} />
            <AvatarFallback className="bg-primary/10 text-primary text-3xl font-bold">
              {name ? name[0] : <RiUser3Line size={40} />}
            </AvatarFallback>
          </Avatar>
          
          <div className="relative">
            <input 
              type="file" 
              id="avatar-upload" 
              className="hidden" 
              accept="image/*"
              onChange={handleFileUpload}
            />
            <Button 
              asChild
              variant="outline" 
              className="h-10 px-6 rounded-full border-[#E5E5EA] text-[#8E8E93] font-bold text-[13px] bg-white active:bg-gray-50 transition-all cursor-pointer"
            >
              <label htmlFor="avatar-upload">
                <RiImageLine size={18} className="mr-2" />
                Escolher da Galeria
              </label>
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          {/* Name Field */}
          <section className="space-y-2">
            <label className="text-[13px] font-bold text-[#8E8E93] uppercase tracking-widest pl-1">
              Nome de Exibição
            </label>
            <Card className="p-1 border-none shadow-[0_2px_12px_rgba(0,0,0,0.02)] rounded-[12px] bg-white overflow-hidden">
              <div className="flex items-center px-4 h-12 gap-3">
                <RiUser3Line size={20} className="text-[#8E8E93]" />
                <Input 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="border-none bg-transparent h-full px-0 focus-visible:ring-0 text-[15px] font-medium text-[#1A1A1A]"
                />
              </div>
            </Card>
          </section>

          {/* Photo Field (Hidden from user or kept as optional) */}
          <section className="space-y-2 opacity-50">
            <label className="text-[13px] font-bold text-[#8E8E93] uppercase tracking-widest pl-1">
              Link da Foto (Opcional)
            </label>
            <Card className="p-1 border-none shadow-[0_2px_12px_rgba(0,0,0,0.02)] rounded-[12px] bg-white overflow-hidden">
              <div className="flex items-center px-4 h-12 gap-3">
                <RiImageLine size={20} className="text-[#8E8E93]" />
                <Input 
                  value={avatarUrl}
                  onChange={(e) => setAvatarUrl(e.target.value)}
                  placeholder="Link da imagem..."
                  className="border-none bg-transparent h-full px-0 focus-visible:ring-0 text-[13px] font-medium"
                />
              </div>
            </Card>
          </section>

          {/* Read-only Email Field */}
          <section className="space-y-2 opacity-60">
            <label className="text-[13px] font-bold text-[#8E8E93] uppercase tracking-widest pl-1">
              E-mail da Conta
            </label>
            <Card className="p-4 border-none shadow-[0_2px_12px_rgba(0,0,0,0.02)] rounded-[12px] bg-white">
              <span className="text-[15px] font-medium text-[#8E8E93]">
                {session?.user?.email}
              </span>
            </Card>
          </section>
        </div>
      </main>
    </div>
  )
}
