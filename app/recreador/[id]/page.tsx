"use client"

import { Header } from "@/components/layout/Header"
import { Card } from "@/components/ui/card"
import { UserAvatar } from "@/components/ui/UserAvatar"
import { LibraryList } from "@/components/game/LibraryList"
import { getPublicProfile, toggleFollow } from "@/lib/actions"
import { useEffect, useState, use, useTransition } from "react"
import { RiFileList3Line, RiShieldUserLine, RiLoader4Line } from "@remixicon/react"
import { useSession } from "next-auth/react"
import { RoleBadge } from "@/components/shared/RoleBadge"
import { toast } from "sonner"
import { getAchievements } from "@/lib/achievements"
import { AchievementsSection } from "@/components/shared/AchievementsSection"

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

  const [isPending, startTransition] = useTransition()

  const handleFollowToggle = async () => {
    if (!session?.user?.id) {
      toast.error("Você precisa estar logado para seguir.")
      return
    }
    startTransition(async () => {
      try {
        await toggleFollow(profileData.id)
        refreshProfile()
      } catch (e: any) {
        toast.error(e.message || "Erro ao realizar ação")
      }
    })
  }

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
        <Card className="p-4 border border-border shadow-[0_4px_12px_rgba(0,0,0,0.03)] rounded-[12px] bg-card flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <UserAvatar
              src={profileData.avatar}
              name={profileData.name}
              className="h-12 w-12 border border-border/50 shrink-0"
            />
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[17px] font-extrabold text-foreground leading-tight">
                  {profileData.name}
                </span>
                <RoleBadge role={profileData.role} />
              </div>
              <span className="text-[12px] font-medium text-muted-foreground mt-0.5">
                {profileData.created_at ? `Entrou ${new Date(profileData.created_at).toLocaleDateString('pt-BR')}` : "Autor da Comunidade"}
              </span>
              
              {/* Followers/Following Info */}
              <div className="flex items-center gap-3 mt-1.5 text-[12px] font-bold text-foreground">
                <div>
                  <span className="text-foreground">{profileData.followersCount || 0}</span>{" "}
                  <span className="text-muted-foreground font-medium">seguidores</span>
                </div>
                <div className="h-3 w-[1px] bg-border" />
                <div>
                  <span className="text-foreground">{profileData.followingCount || 0}</span>{" "}
                  <span className="text-muted-foreground font-medium">seguindo</span>
                </div>
              </div>
            </div>
          </div>
          
          {session?.user?.id !== profileData.id && (
            <button 
              onClick={handleFollowToggle}
              disabled={isPending}
              className={`px-4 py-1.5 rounded-full text-[12px] font-extrabold transition-all shrink-0 active:scale-95 flex items-center gap-1.5 ${
                profileData.userIsFollowing
                  ? "border border-border text-muted-foreground bg-card hover:bg-gray-50"
                  : "bg-primary text-white hover:bg-primary-dark shadow-[0_4px_12px_rgba(255,149,0,0.2)]"
              }`}
            >
              {isPending ? (
                <RiLoader4Line size={14} className="animate-spin" />
              ) : profileData.userIsFollowing ? (
                "Seguindo"
              ) : (
                "Seguir"
              )}
            </button>
          )}
        </Card>

        {/* Achievements Section */}
        <AchievementsSection 
          achievements={getAchievements(
            profileData.totalContributions || 0,
            profileData.likesReceivedCount || 0
          )}
          title="Conquistas"
          className="px-0"
        />

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
