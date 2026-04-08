"use client"

import { signIn } from "next-auth/react"
import { RiGoogleFill, RiShieldCheckLine } from "@remixicon/react"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F7] flex flex-col">
      {/* Top Brand Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-16 pb-8">
        
        {/* Logo */}
        <div className="mb-10 flex flex-col items-center">
          <div className="w-[72px] h-[72px] bg-primary rounded-[18px] flex items-center justify-center shadow-lg shadow-primary/25 mb-5">
            <span className="text-white text-[38px] font-black leading-none select-none">B</span>
          </div>
          <h1 className="text-[30px] font-extrabold text-[#1A1A1A] tracking-[-0.04em]">
            BeHappy
          </h1>
          <p className="text-[15px] text-[#8E8E93] font-medium mt-1 text-center leading-snug">
            A plataforma dos recreadores
          </p>
        </div>

        {/* Features */}
        <div className="w-full max-w-[340px] space-y-3 mb-10">
          {[
            {
              icon: "🎮",
              title: "Biblioteca de Brincadeiras",
              desc: "Encontre centenas de atividades para qualquer momento",
            },
            {
              icon: "⭐",
              title: "Ganhe XP e Títulos",
              desc: "Quanto mais você contribui, mais rápido você cresce",
            },
            {
              icon: "🏆",
              title: "Compete no Ranking",
              desc: "Mostre que você é o Deus da Recreação",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 bg-white rounded-[10px] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
            >
              <span className="text-[26px] w-8 text-center shrink-0">{item.icon}</span>
              <div>
                <p className="font-bold text-[14px] text-[#1A1A1A] leading-tight">{item.title}</p>
                <p className="text-[12px] text-[#8E8E93] leading-snug mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action Section */}
      <div className="px-6 pb-12 w-full max-w-[400px] mx-auto">
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full h-[54px] bg-[#1A1A1A] text-white font-bold text-[16px] rounded-[10px] flex items-center justify-center gap-3 active:scale-[0.98] transition-transform shadow-lg shadow-black/10 mb-4"
        >
          <RiGoogleFill size={20} />
          Entrar com Google
        </button>

        <div className="flex items-center justify-center gap-2 text-[12px] text-[#8E8E93]">
          <RiShieldCheckLine size={14} className="text-[#C7C7CC]" />
          <span>
            Ao continuar, você concorda com os{" "}
            <span className="text-primary font-semibold">Termos de Uso</span>
          </span>
        </div>
      </div>
    </div>
  )
}
