"use client"

import { signIn } from "next-auth/react"
import { RiShieldCheckLine } from "@remixicon/react"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      {/* Brand Section */}
      <div className="flex flex-col items-center justify-center px-6 w-full max-w-[400px]">
        
        {/* Logo */}
        <div className="mb-14 flex flex-col items-center">
          <img 
            src="https://www.recreacaobehappy.com.br/images/behappyLogo.png" 
            alt="BeHappy Logo" 
            className="w-auto h-[110px] object-contain mb-6"
          />
          <p className="text-[17px] text-foreground font-black text-center leading-snug uppercase tracking-widest">
            A plataforma dos recreadores
          </p>
        </div>

        {/* Bottom Action Section */}
        <div className="w-full space-y-6">
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full h-[60px] bg-[#4285F4] text-white font-black text-[15px] rounded-[14px] uppercase tracking-wider active:scale-[0.95] transition-all shadow-xl shadow-[#4285F4]/25 border-none"
          >
            Entrar com Google
          </button>

          <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground font-bold">
            <RiShieldCheckLine size={14} className="text-[#C7C7CC]" />
            <span>
              Ao continuar, você concorda com os{" "}
              <span className="text-foreground font-black border-b border-foreground/20">Termos de Uso</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
