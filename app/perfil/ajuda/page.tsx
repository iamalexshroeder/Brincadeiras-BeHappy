"use client"

import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RiArrowLeftSLine, RiQuestionLine, RiMailLine, RiCustomerService2Line } from "@remixicon/react"
import { useRouter } from "next/navigation"

export default function AjudaPage() {
  const router = useRouter()

  const faqs = [
    {
      q: "Como ganho XP?",
      a: "Você ganha XP cada vez que publica uma brincadeira (50 XP), recebe uma curtida (10 XP) ou alguém marca sua brincadeira como 'utilizada' (20 XP)."
    },
    {
      q: "Como edito minhas brincadeiras?",
      a: "Vá no seu Perfil > Minhas. Abra a brincadeira desejada e você terá as opções de Editar e Excluir no topo da aba de detalhes."
    },
    {
      q: "Posso usar em offline?",
      a: "Atualmente o BeHappy requer conexão com a internet para salvar seu progresso e carregar novas brincadeiras da comunidade."
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header title="Central de Ajuda" showSearch={false} showBackButton={true} />

      <main className="px-5 pt-8 space-y-8 pb-32">
        <section className="space-y-6">
          <div className="text-center space-y-2 mb-10">
            <h2 className="text-[24px] font-black text-foreground">Como podemos ajudar?</h2>
            <p className="text-[15px] font-medium text-muted-foreground">Dúvidas frequentes e suporte</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-[13px] font-bold text-muted-foreground uppercase tracking-widest pl-1">FAQ</h3>
            {faqs.map((faq, index) => (
              <Card key={index} className="p-5 border-none shadow-[0_2px_12px_rgba(0,0,0,0.02)] rounded-[12px] bg-card space-y-2">
                <h4 className="text-[15px] font-extrabold text-foreground">{faq.q}</h4>
                <p className="text-[14px] leading-relaxed text-muted-foreground font-medium">
                  {faq.a}
                </p>
              </Card>
            ))}
          </div>

          <div className="space-y-4 pt-4">
            <h3 className="text-[13px] font-bold text-muted-foreground uppercase tracking-widest pl-1">Ainda com dúvidas?</h3>
            <Card className="p-5 border-none shadow-[0_2px_12px_rgba(0,0,0,0.02)] rounded-[12px] bg-card flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                <RiMailLine size={24} />
              </div>
              <div>
                <h4 className="text-[15px] font-extrabold text-foreground">Suporte por E-mail</h4>
                <p className="text-[13px] text-muted-foreground">responde em até 24h</p>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
