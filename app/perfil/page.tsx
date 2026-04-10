"use client"

import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  RiHistoryLine, 
  RiHeartFill, 
  RiStarFill, 
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

interface SettingItem {
  icon: any;
  label: string;
  href?: string;
  onClick?: () => void;
}

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
      icon: RiHeartFill, 
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
      icon: RiStarFill, 
      color: "text-yellow-500",
      description: "Títulos e Medalhas"
    },
  ]

  const settingsGroups: { title: string; items: SettingItem[] }[] = [
    {
      title: "Preferências",
      items: [
        { icon: RiSettings4Line, label: "Configurações Globais", href: "/perfil/configuracoes" },
      ]
    },
    {
      title: "Suporte & Info",
      items: [
        { icon: RiQuestionLine, label: "Central de Ajuda", href: "/perfil/ajuda" },
        { icon: RiInformationLine, label: "Novidades do App", href: "/perfil/atualizacoes" },
      ]
    },
    {
      title: "Conta",
      items: [
        { 
          icon: RiLogoutBoxRLine, 
          label: "Sair da Conta", 
          onClick: () => signOut({ callbackUrl: "/login" }) 
        },
      ]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header title="Perfil" showSearch={false} showUserCard={true} />
      
      <main className="pb-32 pt-2">
        {/* Horizontal Activities Section */}
        <section className="mb-10">
          <div className="px-5 mb-4">
            <h2 className="text-[12px] font-extrabold text-[#8E8E93] uppercase tracking-widest text-left">
              Minhas Atividades
            </h2>
          </div>
          
          <div className="flex overflow-x-auto no-scrollbar gap-4 px-5 py-2 -my-2">
            {activities.map((activity) => {
              const href = activity.label === "Favoritas" ? "/perfil/favoritas" : 
                           activity.label === "Minhas" ? "/perfil/minhas" : "/perfil/titulos"
              
              return (
                <Link key={activity.label} href={href} className="flex-shrink-0 cursor-pointer">
                  <Card 
                    className="w-[160px] p-4 border border-border shadow-[0_4px_12px_rgba(0,0,0,0.03)] rounded-[12px] bg-card hover:bg-gray-50 active:bg-gray-100 transition-all text-left"
                  >
                    <div className={cn("h-10 w-10 flex items-center justify-center mb-3", activity.color)}>
                      <activity.icon size={28} />
                    </div>
                    <div className="space-y-0.5">
                      <span className="block text-[18px] font-extrabold text-foreground">
                        {activity.count}
                      </span>
                      <span className="block text-[14px] font-bold text-foreground">
                        {activity.label}
                      </span>
                      <span className="block text-[11px] text-muted-foreground font-medium leading-tight">
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
              <h3 className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest pl-1">
                {group.title}
              </h3>
              
              <div className="bg-card rounded-[12px] border border-border shadow-[0_4px_12px_rgba(0,0,0,0.03)] overflow-hidden">
                {group.items.map((item, index) => {
                  const content = (
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "text-foreground opacity-70",
                        item.label === "Sair da Conta" && "text-[#EF4444]"
                      )}>
                        <item.icon size={20} />
                      </div>
                      <span className={cn(
                        "text-[15px] font-bold",
                        item.label === "Sair da Conta" ? "text-[#EF4444]" : "text-foreground"
                      )}>
                        {item.label}
                      </span>
                    </div>
                  )

                  const commonClasses = cn(
                    "w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors text-left",
                    index !== group.items.length - 1 && "border-b border-border"
                  )

                  if (item.onClick) {
                    return (
                      <button 
                        key={item.label}
                        onClick={item.onClick}
                        className={commonClasses}
                      >
                        {content}
                        <RiArrowRightSLine size={20} className="text-muted-foreground opacity-40" />
                      </button>
                    )
                  }

                  return (
                    <Link 
                      key={item.label}
                      href={item.href || "#"}
                      className={commonClasses}
                    >
                      {content}
                      <RiArrowRightSLine size={20} className="text-muted-foreground opacity-40" />
                    </Link>
                  )
                })}
              </div>
            </section>
          ))}

        </div>
      </main>
    </div>
  )
}
