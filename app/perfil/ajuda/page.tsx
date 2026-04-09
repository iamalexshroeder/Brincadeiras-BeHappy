"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RiArrowLeftSLine, RiQuestionLine, RiMailLine, RiChatHelpLine } from "@remixicon/react"
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
    <div className="flex flex-col min-h-screen bg-[#F9F9F7]">
      <div className="sticky top-0 z-50 bg-[#F9F9F7]/95 backdrop-blur-md px-5 pt-14 pb-4 border-b border-[#F2F2F7]">
        <div className="flex items-center gap-4">
          <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 rounded-full bg-white shadow-sm text-[#8E8E93]"
              onClick={() => router.back()}
            >
              <RiArrowLeftSLine size={24} />
          </Button>
          <h1 className="text-[20px] font-extrabold tracking-[-0.02em] text-[#1A1A1A]">
            Central de Ajuda
          </h1>
        </div>
      </div>

      <main className="px-5 pt-8 space-y-8 pb-32">
        <section className="space-y-6">
          <div className="text-center space-y-2 mb-10">
            <h2 className="text-[24px] font-black text-[#1A1A1A]">Como podemos ajudar?</h2>
            <p className="text-[15px] font-medium text-[#8E8E93]">Dúvidas frequentes e suporte</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-[13px] font-bold text-[#8E8E93] uppercase tracking-widest pl-1">FAQ</h3>
            {faqs.map((faq, index) => (
              <Card key={index} className="p-5 border-none shadow-[0_2px_12px_rgba(0,0,0,0.02)] rounded-[12px] bg-white space-y-2">
                <h4 className="text-[15px] font-extrabold text-[#1A1A1A]">{faq.q}</h4>
                <p className="text-[14px] leading-relaxed text-[#8E8E93] font-medium">
                  {faq.a}
                </p>
              </Card>
            ))}
          </div>

          <div className="space-y-4 pt-4">
            <h3 className="text-[13px] font-bold text-[#8E8E93] uppercase tracking-widest pl-1">Ainda com dúvidas?</h3>
            <Card className="p-5 border-none shadow-[0_2px_12px_rgba(0,0,0,0.02)] rounded-[12px] bg-white flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                <RiMailLine size={24} />
              </div>
              <div>
                <h4 className="text-[15px] font-extrabold text-[#1A1A1A]">Suporte por E-mail</h4>
                <p className="text-[13px] text-[#8E8E93]">responde em até 24h</p>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
