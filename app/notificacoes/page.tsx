"use client"

import { Header } from "@/components/layout/Header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { RiTrophyFill, RiHeartFill, RiSettings4Fill, RiDeleteBin7Line } from "@remixicon/react"
import { cn } from "@/lib/utils"
import { getNotifications, markNotificationsRead, deleteNotification, clearAllNotifications } from "@/lib/actions"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"


// Force dynamic rendering so notifications are always fresh
export const dynamic = "force-dynamic"

function getIcon(type: string) {
  switch (type) {
    case "GAMIFICATION":
      return (
        <div className="bg-yellow-50 text-yellow-500 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
          <RiTrophyFill size={24} />
        </div>
      )
    case "SOCIAL_LIKE":
      return (
        <div className="bg-red-50 text-red-500 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
          <RiHeartFill size={24} />
        </div>
      )

    default:
      return (
        <div className="bg-blue-50 text-blue-500 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
          <RiSettings4Fill size={24} />
        </div>
      )
  }
}

export default function Notificacoes() {
  const router = useRouter()
  const [notifications, setNotifications] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchNotifications()
    markNotificationsRead() // Mark as read when opening the page
  }, [])

  const fetchNotifications = async () => {
    const data = await getNotifications()
    setNotifications(data)
    setLoading(false)
  }

  const handleDelete = async (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
    await deleteNotification(id)
  }

  const handleClearAll = async () => {
    setNotifications([])
    await clearAllNotifications()
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header title="Notificações" showSearch={false} showUserCard={false} showBackButton={true} />

      <main className="px-5 pt-2 pb-32">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[13px] font-extrabold text-muted-foreground uppercase tracking-widest pl-1">
            Recentes
          </h2>
        </div>

        {notifications.length === 0 && !loading ? (
          <div className="text-center py-24 text-muted-foreground">
            <RiSettings4Fill size={48} className="mx-auto mb-4 opacity-20" />
            <p className="font-bold text-[16px]">Nenhuma notificação ainda</p>
            <p className="text-[14px] mt-1">Quando houver, elas aparecerão aqui.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {notifications.map((notif) => (
              <Card
                key={notif.id}
                className={cn(
                  "p-4 border border-border shadow-[0_4px_12px_rgba(0,0,0,0.03)] rounded-[12px] active:scale-[0.98] transition-all bg-card relative overflow-hidden",
                  !notif.read && "ring-1 ring-primary/20"
                )}
              >
                <div className="flex gap-4">
                  {getIcon(notif.type)}

                  <div className="flex-1 min-w-0 pr-8">
                    <span className="text-[16px] font-bold text-foreground leading-tight mb-1 block truncate">
                      {notif.title}
                    </span>
                    <span className="text-[14px] text-muted-foreground leading-snug">
                      {notif.message}
                    </span>
                    <span className="text-[11px] font-bold text-muted-foreground mt-2 uppercase tracking-wide block">
                      {formatDistanceToNow(new Date(notif.created_at), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </span>
                  </div>

                  <button
                    onClick={() => handleDelete(notif.id)}
                    className="absolute top-4 right-4 p-1 text-[#C7C7CC] active:text-[#EF4444] transition-colors"
                  >
                    <RiDeleteBin7Line size={18} />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>

      {/* Ações fixas no rodapé */}
      {/* Floating Action Buttons */}
      {notifications.length > 0 && (
        <div className="fixed bottom-[64px] left-0 right-0 px-5 py-4 bg-white border-t border-border z-40 flex gap-3 no-print shadow-[0_-8px_20px_rgba(0,0,0,0.05)]">
          <button
            onClick={async () => {
              await markNotificationsRead()
              fetchNotifications()
            }}
            className="flex-1 h-12 rounded-[12px] border border-[#E5E5EA] bg-white text-[15px] font-bold text-[#1A1A1A] active:scale-[0.98] transition-all shadow-sm"
          >
            Marcar como lidas
          </button>
          <button
            onClick={handleClearAll}
            className="flex-1 h-12 rounded-[12px] border border-[#EF4444]/30 bg-white text-[15px] font-bold text-[#EF4444] active:scale-[0.98] transition-all shadow-sm"
          >
            Limpar tudo
          </button>
        </div>
      )}
    </div>
  )
}
