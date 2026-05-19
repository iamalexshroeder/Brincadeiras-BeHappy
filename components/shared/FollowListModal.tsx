"use client"

import { useEffect, useState, useTransition } from "react"
import { RiCloseLine, RiSearchLine, RiLoader4Line } from "@remixicon/react"
import { UserAvatar } from "@/components/ui/UserAvatar"
import { RoleBadge } from "@/components/shared/RoleBadge"
import { getUserFollowers, getUserFollowing, toggleFollow } from "@/lib/actions"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import Link from "next/link"

interface UserConnection {
  id: string
  name: string
  avatar?: string
  role: string
  created_at: Date
  isFollowing: boolean
}

interface FollowListModalProps {
  isOpen: boolean
  onClose: () => void
  userId: string
  type: "followers" | "following"
  currentUserId?: string
  onUpdate?: () => void
}

export function FollowListModal({ isOpen, onClose, userId, type, currentUserId, onUpdate }: FollowListModalProps) {
  const [users, setUsers] = useState<UserConnection[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [isPending, startTransition] = useTransition()
  const [pendingUserId, setPendingUserId] = useState<string | null>(null)

  const loadUsers = async () => {
    setLoading(true)
    try {
      const data = type === "followers" 
        ? await getUserFollowers(userId)
        : await getUserFollowing(userId)
      setUsers(data)
    } catch (e) {
      toast.error("Erro ao carregar lista")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      loadUsers()
    }
  }, [isOpen, userId, type])

  if (!isOpen) return null

  const handleFollowToggle = async (targetUser: UserConnection) => {
    if (!currentUserId) {
      toast.error("Você precisa estar logado para realizar esta ação.")
      return
    }
    setPendingUserId(targetUser.id)
    startTransition(async () => {
      try {
        await toggleFollow(targetUser.id)
        
        // Update local state
        setUsers(prev => prev.map(u => 
          u.id === targetUser.id 
            ? { ...u, isFollowing: !u.isFollowing } 
            : u
        ))

        // Notify parent to refresh counts if necessary
        if (onUpdate) onUpdate()
      } catch (e: any) {
        toast.error(e.message || "Erro ao realizar ação")
      } finally {
        setPendingUserId(null)
      }
    })
  }

  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm transition-all duration-300">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full sm:max-w-md bg-card border-t sm:border border-border/80 rounded-t-[24px] sm:rounded-[24px] shadow-[0_-8px_30px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col max-h-[85vh] sm:max-h-[75vh] animate-in slide-in-from-bottom duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border/60">
          <span className="text-[17px] font-black text-foreground">
            {type === "followers" ? "Seguidores" : "Seguindo"}
          </span>
          <button 
            onClick={onClose} 
            className="h-8 w-8 flex items-center justify-center rounded-full bg-muted/60 text-muted-foreground hover:bg-muted active:scale-90 transition-all"
          >
            <RiCloseLine size={20} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-5 py-3 border-b border-border/40">
          <div className="relative flex items-center">
            <RiSearchLine size={16} className="absolute left-3 text-muted-foreground" />
            <input
              type="text"
              placeholder="Pesquisar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-[14px] bg-muted/65 border border-transparent focus:border-primary/30 rounded-xl focus:outline-none transition-all placeholder:text-muted-foreground/60 text-foreground font-semibold"
            />
          </div>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 min-h-[250px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
              <RiLoader4Line size={32} className="animate-spin text-primary mb-2" />
              <span className="text-[13px] font-bold">Carregando conexões...</span>
            </div>
          ) : filteredUsers.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-muted-foreground text-center">
              <span className="text-[14px] font-bold">Nenhum recreador encontrado.</span>
            </div>
          ) : (
            filteredUsers.map((user) => {
              const isCurrentUser = currentUserId === user.id
              const isPendingUser = isPending && pendingUserId === user.id

              return (
                <div key={user.id} className="flex items-center justify-between gap-3">
                  <Link 
                    href={`/recreador/${user.id}`} 
                    onClick={onClose}
                    className="flex items-center gap-3 flex-1 min-w-0 group"
                  >
                    <UserAvatar
                      src={user.avatar}
                      name={user.name}
                      className="h-10 w-10 border border-border/50 shrink-0 group-hover:opacity-85 transition-opacity"
                    />
                    <div className="flex flex-col text-left min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[14px] font-black text-foreground leading-tight group-hover:text-primary transition-colors truncate">
                          {user.name}
                        </span>
                        <RoleBadge role={user.role} />
                      </div>
                      <span className="text-[11px] font-semibold text-muted-foreground truncate">
                        Entrou {new Date(user.created_at).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                  </Link>

                  {/* Follow / Following Button */}
                  {!isCurrentUser && currentUserId && (
                    <button
                      onClick={() => handleFollowToggle(user)}
                      disabled={isPendingUser}
                      className={cn(
                        "px-4 py-1.5 rounded-full text-[12px] font-extrabold transition-all active:scale-95 shrink-0 min-w-[90px] text-center",
                        user.isFollowing
                          ? "border border-border text-muted-foreground bg-card hover:bg-gray-50"
                          : "bg-primary text-white hover:bg-primary-dark shadow-[0_4px_10px_rgba(255,149,0,0.15)]"
                      )}
                    >
                      {isPendingUser ? (
                        <RiLoader4Line size={14} className="animate-spin mx-auto" />
                      ) : user.isFollowing ? (
                        "Seguindo"
                      ) : (
                        "Seguir"
                      )}
                    </button>
                  )}
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
