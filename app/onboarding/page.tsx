"use client"

import { useState, useEffect, useTransition } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RiUser3Line, RiImageLine, RiLoader4Line, RiSparklingLine } from "@remixicon/react"
import { getProfile, updateProfile } from "@/lib/actions"
import { toast } from "sonner"
import { RoleBadge } from "@/components/shared/RoleBadge"

const AVAILABLE_ROLES = [
  { id: "MVP", label: "MVP", description: "Destaque e referência na gincana" },
  { id: "TREINADOR", label: "Treinador", description: "Líder e facilitador das atividades" },
  { id: "LEVEL_UP", label: "Level Up", description: "Em constante evolução e crescimento" },
  { id: "TRAINEE", label: "Trainee", description: "Iniciando a jornada com energia" },
]

export default function Onboarding() {
  const router = useRouter()
  const { data: session, update: updateSession } = useSession()
  const [isPending, startTransition] = useTransition()
  
  const [name, setName] = useState("")
  const [avatarUrl, setAvatarUrl] = useState("")
  const [selectedRole, setSelectedRole] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProfile().then(data => {
      if (data) {
        setName(data.name || "")
        setAvatarUrl(data.avatar || "")
        // If they already have a role, they don't need onboarding. Redirect them.
        if (data.role) {
          router.push("/")
          return
        }
      }
      setLoading(false)
    })
  }, [router])

  const handleSave = async () => {
    if (!name.trim()) {
      toast.error("Por favor, digite seu nome de exibição.")
      return
    }
    if (!selectedRole) {
      toast.error("Por favor, selecione o seu cargo/função.")
      return
    }

    startTransition(async () => {
      try {
        const result = await updateProfile({ 
          name, 
          avatar_url: avatarUrl, 
          role: selectedRole 
        })
        if (result?.success) {
          toast.success("Bem-vindo ao BeHappy! Seu perfil foi configurado.")
          try { await updateSession() } catch (e) {}
          router.push("/")
          router.refresh()
        }
      } catch (error) {
        console.error("Erro no onboarding:", error)
        toast.error("Erro ao configurar perfil. Tente novamente.")
      }
    })
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const img = new Image()
        img.onload = () => {
          const canvas = document.createElement("canvas")
          const MAX_WIDTH = 400
          const MAX_HEIGHT = 400
          let width = img.width
          let height = img.height

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width
              width = MAX_WIDTH
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height
              height = MAX_HEIGHT
            }
          }

          canvas.width = width
          canvas.height = height

          const ctx = canvas.getContext("2d")
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height)
            const dataUrl = canvas.toDataURL("image/jpeg", 0.7)
            setAvatarUrl(dataUrl)
          } else {
            setAvatarUrl(reader.result as string)
          }
        }
        img.src = reader.result as string
      }
      reader.readAsDataURL(file)
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-background items-center justify-center">
        <RiLoader4Line className="animate-spin text-primary" size={32} />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-[#1A1A1A]">
      <main className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-2">
              <RiSparklingLine size={28} />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
              Seja bem-vindo!
            </h2>
            <p className="text-[14px] text-muted-foreground">
              Vamos personalizar seu perfil para começar a brincar.
            </p>
          </div>

          <div className="space-y-6">
            {/* Avatar Upload */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <Avatar className="h-24 w-24 border-4 border-white shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <AvatarImage src={avatarUrl} />
                <AvatarFallback className="bg-primary/10 text-primary text-2xl font-bold">
                  {name ? name[0] : <RiUser3Line size={32} />}
                </AvatarFallback>
              </Avatar>
              
              <div className="relative">
                <input 
                  type="file" 
                  id="onboarding-avatar-upload" 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleFileUpload}
                />
                <Button 
                  asChild
                  variant="outline" 
                  className="h-9 px-4 rounded-full border-border text-muted-foreground font-bold text-[12px] bg-card active:bg-gray-50 transition-all cursor-pointer"
                >
                  <label htmlFor="onboarding-avatar-upload">
                    <RiImageLine size={16} className="mr-1.5" />
                    Escolher Foto
                  </label>
                </Button>
              </div>
            </div>

            {/* Name Form */}
            <div className="space-y-2">
              <label className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest pl-1">
                Nome de Exibição
              </label>
              <Card className="p-1 border-none shadow-[0_2px_12px_rgba(0,0,0,0.02)] rounded-[12px] bg-card overflow-hidden">
                <div className="flex items-center px-4 h-12 gap-3">
                  <RiUser3Line size={20} className="text-muted-foreground" />
                  <Input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Como quer ser chamado?"
                    className="border-none bg-transparent h-full px-0 focus-visible:ring-0 text-[15px] font-medium text-foreground"
                  />
                </div>
              </Card>
            </div>

            {/* Role Selection */}
            <div className="space-y-3">
              <label className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest pl-1">
                Selecione seu Cargo
              </label>
              <div className="grid grid-cols-1 gap-3">
                {AVAILABLE_ROLES.map((role) => {
                  const isSelected = selectedRole === role.id
                  return (
                    <button
                      key={role.id}
                      onClick={() => setSelectedRole(role.id)}
                      className={`flex items-center justify-between p-4 rounded-[12px] border text-left transition-all ${
                        isSelected 
                          ? "border-primary bg-primary/[0.03] shadow-[0_4px_12px_rgba(255,149,0,0.05)]" 
                          : "border-border bg-card hover:bg-gray-50"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-[15px] text-foreground">{role.label}</span>
                          <RoleBadge role={role.id} />
                        </div>
                        <p className="text-[12px] text-muted-foreground font-medium">{role.description}</p>
                      </div>
                      
                      <div className={`h-5 w-5 rounded-full border flex items-center justify-center transition-all ${
                        isSelected 
                          ? "border-primary bg-primary text-white" 
                          : "border-muted-foreground/30"
                      }`}>
                        {isSelected && <div className="h-2.5 w-2.5 rounded-full bg-white animate-scale-up" />}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Submit button */}
            <div className="pt-4">
              <Button
                onClick={handleSave}
                disabled={isPending}
                className="btn-primary w-full shadow-[0_8px_20px_rgba(255,149,0,0.2)] active:scale-[0.98] transition-all"
              >
                {isPending ? (
                  <>
                    <RiLoader4Line className="animate-spin" size={20} />
                    <span>Concluindo...</span>
                  </>
                ) : (
                  <span>Concluir Cadastro</span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
