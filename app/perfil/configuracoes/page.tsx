"use client"

import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { 
  RiNotification3Line, 
  RiShieldCheckLine, 
  RiSmartphoneLine, 
  RiStarLine, 
  RiQuestionLine, 
  RiInformationLine,
  RiArrowRightSLine,
  RiLogoutBoxRLine,
  RiUser3Line,
  RiCheckboxCircleFill
} from "@remixicon/react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useTheme } from "next-themes"

interface SettingsItem {
  icon: any
  label: string
  status?: string
  href?: string
  showArrow?: boolean
  isInfoOnly?: boolean
  showCheck?: boolean
  faded?: boolean
  onClick?: () => void
}

export default function Configuracoes() {
  const { theme, setTheme } = useTheme()

  const settingsGroups: { title: string; items: SettingsItem[] }[] = [
    {
      title: "Conta",
      items: [
        { icon: RiUser3Line, label: "Editar Perfil", status: "", href: "/perfil/editar", showArrow: true },
        { 
          icon: RiUser3Line, 
          label: "Perfil do Google", 
          status: "Conectado", 
          isInfoOnly: true, 
          showCheck: true,
          faded: true,
          showArrow: false 
        },
        { icon: RiShieldCheckLine, label: "Privacidade e Dados", status: "", href: "/perfil/privacidade", showArrow: true },
      ]
    },
    {
      title: "Preferências",
      items: [
        { 
          icon: RiSmartphoneLine, 
          label: "Aparência", 
          status: theme === "dark" ? "Modo Escuro" : "Modo Claro", 
          showArrow: false,
          onClick: () => setTheme(theme === "dark" ? "light" : "dark")
        },
      ]
    },
    {
      title: "Suporte & Info",
      items: [
        { icon: RiStarLine, label: "Avaliar o App", status: "", showArrow: true },
        { icon: RiQuestionLine, label: "Central de Ajuda", status: "", href: "/perfil/ajuda", showArrow: true },
        { icon: RiInformationLine, label: "Sobre o Aplicativo", status: "v1.0.2", showArrow: false },
      ]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header title="Configurações" showSearch={false} showUserCard={false} showBackButton={true} />
      
      <main className="page-main pt-8 space-y-10">
        {settingsGroups.map((group) => (
          <section key={group.title} className="space-y-4">
            <h3 className="text-[13px] font-bold text-muted-foreground uppercase tracking-widest pl-1">
              {group.title}
            </h3>
            
            <div className="bg-card rounded-[6px] shadow-[0_2px_12px_rgba(0,0,0,0.02)] overflow-hidden">
              {group.items.map((item, index) => {
                const content = (
                  <div 
                    onClick={item.onClick}
                    className={cn(
                      "w-full flex items-center justify-between p-4 transition-colors",
                      (!item.isInfoOnly || item.onClick) && "active:bg-gray-50 cursor-pointer",
                      item.faded && "opacity-50",
                      index !== group.items.length - 1 && "border-b border-border"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-foreground opacity-70">
                        <item.icon size={20} />
                      </div>
                      <span className="text-[15px] font-bold text-foreground">
                        {item.label}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {item.showCheck && (
                        <RiCheckboxCircleFill size={18} className="text-[#34C759]" />
                      )}
                      {item.status && (
                        <span className="text-[13px] font-medium text-muted-foreground">
                          {item.status}
                        </span>
                      )}
                      {item.showArrow && (
                        <RiArrowRightSLine size={20} className="text-muted-foreground opacity-40" />
                      )}
                    </div>
                  </div>
                )

                return item.href ? (
                  <Link key={item.label} href={item.href}>
                    {content}
                  </Link>
                ) : (
                  <div key={item.label}>
                    {content}
                  </div>
                )
              })}
            </div>
          </section>
        ))}

        {/* Logout Section */}
        <section className="pt-4">
          <Button 
            variant="ghost" 
            className="w-full h-12 text-[#EF4444] font-bold rounded-[12px] bg-red-50/50 active:bg-red-50 transition-all gap-2"
          >
            <RiLogoutBoxRLine size={20} />
            Sair da Conta Google
          </Button>
          <p className="text-center text-[12px] text-muted-foreground mt-4 font-medium px-4">
            Você está conectado como alexs@google.com. 
            Todas as suas brincadeiras e progresso são salvos na sua conta BeHappy.
          </p>
        </section>
      </main>
    </div>
  )
}
