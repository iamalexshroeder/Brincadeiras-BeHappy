"use client"

import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  RiHistoryLine, 
  RiHeartLine, 
  RiStarLine, 
  RiSettings4Line, 
  RiNotification3Line, 
  RiShieldCheckLine, 
  RiQuestionLine, 
  RiInformationLine,
  RiArrowRightSLine,
  RiLogoutBoxRLine
} from "@remixicon/react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { getProfile } from "@/lib/actions"

export default function Perfil() {
  const { data: session } = useSession()
  const [profileData, setProfileData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (session?.user?.id) {
      getProfile().then(data => {
        setProfileData(data)
        setLoading(false)
      })
    }
  }, [session])

  const activities = [
    { 
      label: "Favoritas", 
      count: profileData?.stats?.favorites?.toString() || "0", 
      icon: RiHeartLine, 
      color: "text-red-500",
      description: "Salvas por você"
    },
    { 
      label: "Minhas", 
      count: profileData?.stats?.contributions?.toString() || "0", 
      icon: RiHistoryLine, 
      color: "text-blue-500",
      description: "Suas contribuições"
    },
    { 
      label: "Conquistas", 
      count: profileData?.stats?.achievements?.toString() || "0", 
      icon: RiStarLine, 
      color: "text-yellow-500",
      description: "Medalhas ganhas"
    },
  ]

  const settingsGroups = [
    {
      title: "Preferências",
      items: [
        { icon: RiNotification3Line, label: "Notificações", href: "/perfil/configuracoes" },
        { icon: RiShieldCheckLine, label: "Privacidade", href: "/perfil/configuracoes" },
        { icon: RiSettings4Line, label: "Configurações", href: "/perfil/configuracoes" },
      ]
    },
    {
      title: "Suporte & Info",
      items: [
        { icon: RiQuestionLine, label: "Central de Ajuda", href: "#" },
        { icon: RiInformationLine, label: "Sobre o App", href: "#" },
      ]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F7]">
      <Header title="Perfil" showSearch={false} />
      
      <main className="pb-32 pt-8">
        {/* Horizontal Activities Section */}
        <section className="mb-10">
          <div className="px-5 mb-4">
            <h2 className="text-[20px] font-extrabold text-[#1A1A1A] tracking-[-0.03em]">
              Minhas Atividades
            </h2>
          </div>
          
          <div className="flex overflow-x-auto no-scrollbar gap-4 px-5">
            {activities.map((activity) => {
              const href = activity.label === "Favoritas" ? "/perfil/favoritas" : 
                           activity.label === "Minhas" ? "/perfil/minhas" : "/ranking"
              
              return (
                <Link key={activity.label} href={href} className="flex-shrink-0">
                  <Card 
                    className="w-[160px] p-4 border-none shadow-[0_2px_12px_rgba(0,0,0,0.02)] rounded-[6px] bg-white active:scale-95 transition-all text-left"
                  >
                    <div className={cn("h-10 w-10 flex items-center justify-center mb-3", activity.color)}>
                      <activity.icon size={28} />
                    </div>
                    <div className="space-y-0.5">
                      <span className="block text-[18px] font-extrabold text-[#1A1A1A]">
                        {activity.count}
                      </span>
                      <span className="block text-[14px] font-bold text-[#1A1A1A]">
                        {activity.label}
                      </span>
                      <span className="block text-[11px] text-[#8E8E93] font-medium leading-tight">
                        {activity.description}
                      </span>
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Vertical Grouped Lists Section */}
        <div className="px-5 space-y-10">
          {settingsGroups.map((group) => (
            <section key={group.title} className="space-y-4">
              <h3 className="text-[12px] font-bold text-[#8E8E93] uppercase tracking-widest pl-1">
                {group.title}
              </h3>
              
              <div className="bg-white rounded-[6px] shadow-[0_2px_12px_rgba(0,0,0,0.02)] overflow-hidden">
                {group.items.map((item, index) => (
                  <Link 
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors",
                      index !== group.items.length - 1 && "border-b border-[#F2F2F7]"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-[#1A1A1A] opacity-70">
                        <item.icon size={20} />
                      </div>
                      <span className="text-[15px] font-bold text-[#1A1A1A]">
                        {item.label}
                      </span>
                    </div>
                    
                    <RiArrowRightSLine size={20} className="text-[#8E8E93] opacity-40" />
                  </Link>
                ))}
              </div>
            </section>
          ))}

          {/* Logout Button */}
          <section className="pt-4">
            <Button 
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="w-full h-12 bg-[#FF9500] text-white font-medium text-[14px] rounded-[6px] shadow-sm active:scale-[0.98] transition-all gap-2 border-none"
            >
              <RiLogoutBoxRLine size={20} />
              Sair da Conta
            </Button>
          </section>
        </div>
      </main>
    </div>
  )
}
