"use client"

import { Header } from "@/components/layout/Header"
import { Card } from "@/components/ui/card"
import { UserAvatar } from "@/components/ui/UserAvatar"
import { LibraryList } from "@/components/game/LibraryList"
import { getPublicProfile } from "@/lib/actions"
import { useEffect, useState, use } from "react"
import { RiFileList3Line, RiShieldUserLine } from "@remixicon/react"
import { useSession } from "next-auth/react"

export default function RecreadorProfile({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const { data: session } = useSession()
  const [profileData, setProfileData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const refreshProfile = () => {
    getPublicProfile(resolvedParams.id).then(data => {
      setProfileData(data)
      setLoading(false)
    })
  }

  useEffect(() => {
    refreshProfile()
  }, [resolvedParams.id])

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Header title="Perfil do Recreador" showSearch={false} showUserCard={false} />
        <main className="flex flex-col items-center justify-center py-32">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </main>
      </div>
    )
  }

  if (!profileData) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Header title="Inexistente" showSearch={false} showUserCard={false} />
        <main className="flex flex-col items-center justify-center py-32 px-6 text-center">
          <RiShieldUserLine size={48} className="text-[#C7C7CC] mb-6" />
          <h2 className="text-h2">Recreador não encontrado</h2>
          <p className="text-body text-muted-foreground mt-2">Este perfil pode ter sido removido ou o ID está incorreto.</p>
        </main>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header title={`Perfil de ${profileData.name}`} showBackButton={true} showSearch={false} showUserCard={false} />
      
      <main className="px-4 sm:px-6 pt-2 pb-32 space-y-8">
        {/* Profile Card */}
        <Card className="p-5 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-[24px] bg-card overflow-hidden relative">
           <div className="absolute top-0 right-0 p-4 opacity-5">
              <RiShieldUserLine size={80} />
           </div>
           
           <div className="flex flex-col items-center text-center mb-2 pt-2">
              <UserAvatar 
                src={profileData.avatar}
                name={profileData.name}
                className="h-24 w-24 border-4 border-white shadow-md mb-4"
                fallbackClassName="bg-primary/10 text-primary text-[32px]"
              />
              
              <h1 className="text-h1">
                {profileData.name}
              </h1>
              
              <div className="mt-2">
                <span className="text-caption text-muted-foreground font-bold uppercase tracking-widest">
                  Autor da Comunidade
                </span>
              </div>
           </div>

           <div className="flex items-center justify-center gap-8 mb-4 border-t border-border/50 pt-6 mt-6">
              <div className="text-center group">
                <span className="block text-h2 leading-none mb-1">{profileData.totalContributions}</span>
                <span className="text-caption lowercase">brincadeiras publicadas</span>
              </div>
            </div>
        </Card>

        {/* Contributions Section */}
        <section className="space-y-4">
          <div className="flex items-baseline justify-between pl-1">
            <h2 className="text-[18px] font-extrabold text-foreground tracking-[-0.03em]">
              Galeria de Brincadeiras
            </h2>
            <span className="text-[13px] font-bold text-muted-foreground">
              {profileData.brincadeiras.length} itens
            </span>
          </div>

          {profileData.brincadeiras.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 bg-card rounded-[12px] border border-dashed border-border">
              <RiFileList3Line size={32} className="text-[#C7C7CC] mb-2" />
              <p className="text-[14px] font-bold text-muted-foreground">Nenhuma brincadeira publicada ainda.</p>
            </div>
          ) : (
            <LibraryList items={profileData.brincadeiras} initialDisplay={20} currentUserId={session?.user?.id} />
          )}
        </section>
      </main>
    </div>
  )
}
