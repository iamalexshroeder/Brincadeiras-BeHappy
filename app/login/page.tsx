"use client"

import { signIn } from "next-auth/react"
import { RiGoogleFill, RiShieldCheckLine } from "@remixicon/react"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#F9F9F7] flex flex-col">
      {/* Top Brand Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-16 pb-8">
        
        {/* Logo */}
        <div className="mb-14 flex flex-col items-center">
          <img 
            src="https://www.recreacaobehappy.com.br/images/behappyLogo.png" 
            alt="BeHappy Logo" 
            className="w-auto h-[100px] object-contain mb-4"
          />
          <p className="text-[16px] text-[#8E8E93] font-medium text-center leading-snug">
            A plataforma dos recreadores
          </p>
        </div>

        {/* Features */}
        <div className="w-full max-w-[340px] space-y-4 mb-12">
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
              className="flex items-center gap-5 bg-white rounded-[12px] p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
            >
              <span className="text-[28px] w-10 text-center shrink-0">{item.icon}</span>
              <div>
                <p className="font-bold text-[15px] text-[#1A1A1A] leading-tight">{item.title}</p>
                <p className="text-[13px] text-[#8E8E93] leading-snug mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action Section */}
      <div className="px-6 pb-16 w-full max-w-[400px] mx-auto">
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full h-[56px] bg-[#4285F4] text-white font-medium text-[14px] rounded-[12px] flex items-center justify-center gap-3 active:scale-[0.95] transition-all shadow-lg shadow-[#4285F4]/20 mb-5 border-none"
        >
          <div className="bg-white p-2 rounded-full flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
              <path d="M3.964 10.706c-.18-.54-.282-1.117-.282-1.706s.102-1.166.282-1.706V4.962H.957C.347 6.177 0 7.551 0 9s.347 2.823.957 4.038l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.443 2.019.957 4.962L3.964 7.294C4.672 5.167 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
          </div>
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
