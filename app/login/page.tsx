"use client"

import { signIn } from "next-auth/react"
import { RiShieldCheckLine } from "@remixicon/react"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col p-8">
      {/* Brand Section - Centered in remaining space */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center animate-in fade-in zoom-in duration-700">
          <img 
            src="https://www.recreacaobehappy.com.br/images/behappyLogo.png" 
            alt="BeHappy Logo" 
            className="w-auto h-[120px] object-contain"
          />
          <p className="text-[28px] text-primary font-black tracking-[-0.04em] -mt-2">
            Brincadeiras
          </p>
        </div>
      </div>

      {/* Action Section - Fixed at bottom */}
      <div className="w-full max-w-[400px] mx-auto space-y-6 pb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full h-[64px] bg-[#4285F4] text-white font-black text-[16px] rounded-[16px] uppercase tracking-wider active:scale-[0.95] transition-all shadow-xl shadow-[#4285F4]/25 border-none"
        >
          Entrar com Google
        </button>

        <div className="flex items-center justify-center gap-2 text-[12px] text-muted-foreground font-bold">
          <RiShieldCheckLine size={16} className="text-[#C7C7CC]" />
          <span>
            Ao continuar, você concorda com os{" "}
            <span className="text-foreground font-black border-b border-foreground/30">Termos de Uso</span>
          </span>
        </div>
      </div>
    </div>
  )
}
