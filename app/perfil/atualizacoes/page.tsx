"use client"

import { Header } from "@/components/layout/Header"
import { RiMagicLine, RiRocketLine, RiStarLine } from "@remixicon/react"
import { cn } from "@/lib/utils"

const UPDATES = [
  {
    date: "15 de Maio",
    version: "v2.0.0",
    icon: RiMagicLine,
    color: "text-primary",
    bgColor: "bg-primary/10",
    features: [
      "Nova experiência focada no conteúdo: o app agora é um verdadeiro Manual de Brincadeiras.",
      "Interface mais limpa, rápida e sem distrações visuais.",
      "Organização inteligente: suas próprias brincadeiras agora aparecem integradas aos Kits Sugeridos.",
      "Novo padrão de cores vibrantes e exclusivas para cada Categoria e Faixa Etária.",
      "Pop-ups e alertas padronizados para uma navegação muito mais fluida."
    ]
  }
]

export default function AtualizacoesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header title="Novidades" showSearch={false} showBackButton={true} />

      <main className="px-5 py-6 pb-32">
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-border/50 text-center space-y-2 mb-8">
          <p className="text-[12px] font-bold text-muted-foreground uppercase tracking-wider">Histórico de Versões</p>
          <p className="text-[22px] font-extrabold text-primary leading-tight">
            Acompanhe a Evolução do App
          </p>
        </div>

        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {UPDATES.map((update, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Icon / Bullet */}
              <div className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full border-4 border-background shrink-0 z-10 shadow-sm",
                update.bgColor, update.color
              )}>
                <update.icon size={18} />
              </div>

              {/* Card Content */}
              <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-[20px] bg-white border border-border shadow-sm">
                <div className="flex items-center justify-between mb-3 border-b border-border pb-3">
                  <span className="text-[12px] font-extrabold text-foreground uppercase tracking-widest">{update.date}</span>
                  <span className={cn("text-[10px] font-black uppercase px-2 py-0.5 rounded-full", update.bgColor, update.color)}>
                    {update.version}
                  </span>
                </div>
                
                <ul className="space-y-2.5">
                  {update.features.map((entry, fixIdx) => (
                    <li key={fixIdx} className="text-[14px] font-medium text-muted-foreground leading-snug flex items-start gap-2">
                       <span className="text-primary font-bold mt-0.5">•</span>
                       <span className="flex-1 opacity-90">{entry}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
      </main>
    </div>
  )
}
