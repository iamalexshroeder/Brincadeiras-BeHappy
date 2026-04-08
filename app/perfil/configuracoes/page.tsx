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
  RiUser3Line
} from "@remixicon/react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Configuracoes() {
  const settingsGroups = [
    {
      title: "Conta",
      items: [
        { icon: RiUser3Line, label: "Perfil do Google", status: "Conectado" },
        { icon: RiNotification3Line, label: "Notificações", status: "Ativado" },
        { icon: RiShieldCheckLine, label: "Privacidade e Dados", status: "" },
      ]
    },
    {
      title: "Preferências",
      items: [
        { icon: RiSmartphoneLine, label: "Aparência", status: "Sistema" },
      ]
    },
    {
      title: "Suporte & Info",
      items: [
        { icon: RiStarLine, label: "Avaliar o App", status: "" },
        { icon: RiQuestionLine, label: "Central de Ajuda", status: "" },
        { icon: RiInformationLine, label: "Sobre o BeHappy", status: "v1.0.2" },
      ]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F7]">
      <Header title="Configurações" showSearch={false} showUserCard={false} />
      
      <main className="px-5 pb-32 pt-8 space-y-10">
        {settingsGroups.map((group) => (
          <section key={group.title} className="space-y-4">
            <h3 className="text-[13px] font-bold text-[#8E8E93] uppercase tracking-widest pl-1">
              {group.title}
            </h3>
            
            <div className="bg-white rounded-[6px] shadow-[0_2px_12px_rgba(0,0,0,0.02)] overflow-hidden">
              {group.items.map((item, index) => (
                <div 
                  key={item.label}
                  className={cn(
                    "w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors cursor-pointer",
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
                  
                  <div className="flex items-center gap-2">
                    {item.status && (
                      <span className="text-[13px] font-medium text-[#8E8E93]">
                        {item.status}
                      </span>
                    )}
                    <RiArrowRightSLine size={20} className="text-[#8E8E93] opacity-40" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Logout Section */}
        <section className="pt-4">
          <Button 
            variant="ghost" 
            className="w-full h-12 text-[#EF4444] font-bold rounded-[6px] bg-red-50/50 active:bg-red-50 transition-all gap-2"
          >
            <RiLogoutBoxRLine size={20} />
            Sair da Conta Google
          </Button>
          <p className="text-center text-[12px] text-[#8E8E93] mt-4 font-medium px-4">
            Você está conectado como alexs@google.com. 
            Todas as suas brincadeiras e progresso são salvos na sua conta BeHappy.
          </p>
        </section>
      </main>
    </div>
  )
}
