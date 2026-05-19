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
      q: "O que significam as Badges de Cargo?",
      a: "As badges indicam a função do recreador: MVP (Vermelho - referência de gincana), Treinador (Laranja - líderes facilitadores), Level Up (Cinza - em evolução contínua) e Trainee (Roxo - iniciando a jornada). Você pode editar seu cargo nas configurações de perfil."
    },
    {
      q: "Como funciona o sistema de Seguir?",
      a: "Você pode seguir outros recreadores acessando o perfil deles ao clicar no nome em qualquer publicação. Isso permite acompanhar as contribuições dos seus colegas de equipe."
    },
    {
      q: "Como funciona a visualização detalhada?",
      a: "Ao clicar em uma brincadeira, um painel compacto desliza de baixo para cima. Nele você pode ler os materiais, o passo a passo completo e interagir (curtir, salvar ou compartilhar) tudo em uma única tela."
    },
    {
      q: "Como edito minhas brincadeiras?",
      a: "Vá no seu Perfil > Minhas. Abra a brincadeira desejada e você terá as opções de Editar e Excluir na parte inferior da aba de detalhes."
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
