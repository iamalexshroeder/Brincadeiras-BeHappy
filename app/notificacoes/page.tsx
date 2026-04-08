import { Header } from "@/components/layout/Header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { RiTrophyFill, RiHeartFill, RiCheckboxCircleFill, RiSettings4Fill } from "@remixicon/react"
import { cn } from "@/lib/utils"
import { getNotifications, markNotificationsRead } from "@/lib/actions"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

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
    case "SOCIAL_USED":
      return (
        <div className="bg-green-50 text-green-600 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
          <RiCheckboxCircleFill size={24} />
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

export default async function Notificacoes() {
  const notifications = await getNotifications()

  // Mock data if no real notifications yet (during dev)
  const displayNotifications =
    notifications.length > 0
      ? notifications
      : [
          {
            id: "mock-1",
            type: "GAMIFICATION",
            title: "Novo Título Alcançado!",
            message: "Parabéns, você acumulou 1.200 XP e agora é um Ajudante de Quadra!",
            created_at: new Date(),
            read: false,
          },
          {
            id: "mock-2",
            type: "SOCIAL",
            title: "Curtiram sua brincadeira",
            message: "Tio Pipoca salvou sua brincadeira como favorito.",
            created_at: new Date(Date.now() - 2 * 60 * 60 * 1000),
            read: true,
          },
          {
            id: "mock-3",
            type: "SOCIAL",
            title: "Sua brincadeira foi usada!",
            message: "Maria Kids marcou como concluído sua brincadeira. Você ganhou +30 XP!",
            created_at: new Date(Date.now() - 24 * 60 * 60 * 1000),
            read: true,
          },
          {
            id: "mock-4",
            type: "SYSTEM",
            title: "Atualização da Plataforma",
            message: "Novos recursos foram adicionados para você criar brincadeiras mais rápido.",
            created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
            read: true,
          },
        ]

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F7]">
      <Header title="Notificações" showSearch={false} showUserCard={false} />

      <main className="px-5 pt-4 pb-32">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[13px] font-extrabold text-[#8E8E93] uppercase tracking-widest pl-1">
            Recentes
          </h2>
          {notifications.some((n) => !n.read) && (
            <form action={markNotificationsRead}>
              <button
                type="submit"
                className="text-[13px] font-bold text-primary active:opacity-70"
              >
                Marcar lidas
              </button>
            </form>
          )}
        </div>

        {displayNotifications.length === 0 ? (
          <div className="text-center py-24 text-[#8E8E93]">
            <RiSettings4Fill size={48} className="mx-auto mb-4 opacity-20" />
            <p className="font-bold text-[16px]">Nenhuma notificação ainda</p>
            <p className="text-[14px] mt-1">Quando houver, elas aparecerão aqui.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {displayNotifications.map((notif) => (
              <Card
                key={notif.id}
                className={cn(
                  "p-4 border-none shadow-[0_2px_8px_rgba(0,0,0,0.02)] rounded-[6px] active:scale-[0.98] transition-all bg-white relative overflow-hidden",
                  !notif.read && "ring-1 ring-primary/20"
                )}
              >
                {!notif.read && (
                  <div className="absolute top-4 right-4 h-2.5 w-2.5 rounded-full bg-primary" />
                )}

                <div className="flex gap-4">
                  {getIcon(notif.type)}

                  <div className={cn("flex flex-col", !notif.read ? "pr-6" : "")}>
                    <span className="text-[16px] font-bold text-[#1A1A1A] leading-tight mb-1">
                      {notif.title}
                    </span>
                    <span className="text-[14px] text-[#8E8E93] leading-snug">
                      {notif.message}
                    </span>
                    <span className="text-[11px] font-bold text-[#8E8E93] mt-2 uppercase tracking-wide">
                      {formatDistanceToNow(new Date(notif.created_at), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
