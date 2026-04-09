"use client"

import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RiArrowLeftSLine, RiShieldCheckLine, RiLockPasswordLine, RiEyeLine } from "@remixicon/react"
import { useRouter } from "next/navigation"

export default function PrivacidadePage() {
  const router = useRouter()

  const sections = [
    {
      icon: RiShieldCheckLine,
      title: "Uso de Dados",
      content: "No BeHappy, os únicos dados que coletamos são seu e-mail e nome fornecidos pelo login do Google. Coletamos essas informações apenas para identificar suas brincadeiras criadas, curtidas e seu progresso na gamificação (XP)."
    },
    {
      icon: RiLockPasswordLine,
      title: "Segurança",
      content: "Suas informações de login são processadas diretamente pelo Google, não armazenamos sua senha. Seus dados de perfil são protegidos em nossos servidores e nunca compartilhados com terceiros para fins comerciais."
    },
    {
      icon: RiEyeLine,
      title: "Visibilidade das Publicações",
      content: "Ao publicar uma brincadeira, ela se torna visível para todos os outros usuários na aba Explorar. Seu nome e nível de perfil aparecerão como autor da publicação, incentivando a comunidade de recreadores."
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
            Privacidade e Dados
          </h1>
        </div>
      </div>

      <main className="px-5 pt-8 space-y-8 pb-32">
        <section className="space-y-6">
          <div className="text-center space-y-2 mb-10">
            <h2 className="text-[24px] font-black text-[#1A1A1A]">Sua segurança em primeiro lugar</h2>
            <p className="text-[15px] font-medium text-[#8E8E93]">Entenda como cuidamos das suas informações</p>
          </div>

          <div className="space-y-4">
            {sections.map((section, index) => (
              <Card key={index} className="p-6 border-none shadow-[0_4px_24px_rgba(0,0,0,0.02)] rounded-[12px] bg-white space-y-3">
                <div className="flex items-center gap-3 text-primary">
                  <section.icon size={24} />
                  <h3 className="text-[17px] font-extrabold text-[#1A1A1A]">{section.title}</h3>
                </div>
                <p className="text-[14px] leading-relaxed text-[#5C5C5C] font-medium">
                  {section.content}
                </p>
              </Card>
            ))}
          </div>

          <Card className="p-6 border-none bg-[#F5E9FF] rounded-[12px] mt-10">
            <h4 className="text-[15px] font-bold text-[#AF52DE] mb-2 uppercase tracking-wider">Termos de Uso</h4>
            <p className="text-[13px] text-[#AF52DE]/80 leading-relaxed font-medium">
              Ao utilizar o BeHappy, você concorda em compartilhar brincadeiras saudáveis, seguras e apropriadas para crianças. Conteúdo ofensivo será removido e o usuário poderá ser banido.
            </p>
          </Card>
        </section>
      </main>
    </div>
  )
}
