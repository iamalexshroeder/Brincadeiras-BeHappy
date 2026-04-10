"use client"

import { Header } from "@/components/layout/Header"
import { Card } from "@/components/ui/card"
import { UserAvatar } from "@/components/ui/UserAvatar"
import { LibraryList } from "@/components/game/LibraryList"
import { getPublicProfile, toggleFollow } from "@/lib/actions"
import { getTitleForLevel } from "@/utils/gamification"
import { useEffect, useState, use } from "react"
import { RiFileList3Line, RiShieldUserLine, RiUserAddLine, RiUserFollowLine } from "@remixicon/react"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function RecreadorProfile({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const { data: session } = useSession()
  const [profileData, setProfileData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [isFollowing, setIsFollowing] = useState(false)
  const [isActionLoading, setIsActionLoading] = useState(false)

  const refreshProfile = () => {
    getPublicProfile(resolvedParams.id).then(data => {
      setProfileData(data)
      setIsFollowing(data?.userIsFollowing || false)
      setLoading(false)
    })
  }

  useEffect(() => {
    refreshProfile()
  }, [resolvedParams.id])

  const handleFollow = async () => {
    if (!session) return 
    setIsActionLoading(true)
    try {
      await toggleFollow(resolvedParams.id)
      refreshProfile()
    } catch (e) {
      console.error(e)
    } finally {
      setIsActionLoading(false)
    }
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
        <main className="flex flex-col items-center justify-center py-32 px-5 text-center">
          <RiShieldUserLine size={48} className="text-[#C7C7CC] mb-4" />
          <h2 className="text-[18px] font-extrabold text-foreground">Recreador não encontrado</h2>
          <p className="text-[14px] text-muted-foreground mt-1">Este perfil pode ter sido removido ou o ID está incorreto.</p>
        </main>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header title={`Perfil de ${profileData.name}`} showBackButton={true} showSearch={false} showUserCard={false} />
      
      <main className="px-5 pt-2 pb-32 space-y-6">
        {/* Profile Card */}
        <Card className="p-5 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-[12px] bg-card overflow-hidden relative">
           <div className="absolute top-0 right-0 p-4 opacity-5">
              <RiShieldUserLine size={80} />
           </div>
           
           <div className="flex flex-col items-center text-center mb-6 pt-2">
              <UserAvatar 
                src={profileData.avatar}
                name={profileData.name}
                rankBadge={profileData.rankBadge}
                className="h-24 w-24 border-4 border-white shadow-md mb-4"
                fallbackClassName="bg-primary/10 text-primary text-[32px]"
              />
              
              <h1 className="text-[22px] font-black text-foreground tracking-tight">
                {profileData.name}
              </h1>
              
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[12px] font-bold uppercase tracking-wider text-primary bg-primary/5 px-3 py-1 rounded-full">
                  {profileData.title}
                </span>
                <span className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest">
                  • Nível {profileData.level}
                </span>
              </div>

              {session?.user?.id !== resolvedParams.id && (
                <div className="mt-6 w-full max-w-[200px]">
                  <Button 
                    variant={isFollowing ? "outline" : "default"}
                    className={cn(
                      "w-full h-11 rounded-[12px] font-bold text-[14px] shadow-sm transition-all",
                      isFollowing ? "bg-white border-[#E5E5EA] text-foreground" : "bg-[#FF9500] hover:bg-[#E68600] text-white border-none"
                    )}
                    onClick={handleFollow}
                    disabled={isActionLoading}
                  >
                    {isActionLoading ? (
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    ) : isFollowing ? (
                      <>
                        <RiUserFollowLine size={18} className="mr-2" />
                        Seguindo
                      </>
                    ) : (
                      <>
                        <RiUserAddLine size={18} className="mr-2" />
                        Seguir
                      </>
                    )}
                  </Button>
                </div>
              )}
           </div>

           <div className="grid grid-cols-4 gap-2 pt-4 border-t border-border">
              <div className="flex flex-col items-center p-2 rounded-[8px] bg-background/50">
                 <span className="text-[15px] font-black text-foreground">{profileData.xp}</span>
                 <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-tight">XP</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-[8px] bg-background/50">
                 <span className="text-[15px] font-black text-foreground">{profileData.totalContributions}</span>
                 <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-tight">Posts</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-[8px] bg-background/50">
                 <span className="text-[15px] font-black text-foreground">{profileData.followersCount}</span>
                 <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-tight">Seguidores</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-[8px] bg-background/50">
                 <span className="text-[15px] font-black text-foreground">{profileData.followingCount}</span>
                 <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-tight">Seguindo</span>
              </div>
           </div>
        </Card>

        {/* Contributions Section */}
        <section className="space-y-4">
          <div className="flex items-baseline justify-between pl-1">
            <h2 className="text-[18px] font-extrabold text-foreground tracking-[-0.03em]">
              Brincadeiras Criadas
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
            <LibraryList items={profileData.brincadeiras} initialDisplay={20} />
          )}
        </section>
      </main>
    </div>
  )
}
