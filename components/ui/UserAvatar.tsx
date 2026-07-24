"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { RiCloseLine, RiUser3Line, RiExpandDiagonalLine } from "@remixicon/react"

interface UserAvatarProps {
  src?: string
  name?: string
  className?: string
  fallbackClassName?: string
  enablePreview?: boolean
  onClick?: (e: React.MouseEvent) => void
}

export function UserAvatar({
  src,
  name,
  className,
  fallbackClassName,
  enablePreview = false,
  onClick
}: UserAvatarProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  useEffect(() => {
    if (isPreviewOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isPreviewOpen])

  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "U"

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e)
    }
    if (enablePreview) {
      setIsPreviewOpen(true)
    }
  }

  return (
    <>
      <div className="relative inline-block group">
        <Avatar 
          className={cn(
            "rounded-full overflow-hidden transition-all duration-200 select-none",
            enablePreview && "cursor-pointer hover:opacity-90 active:scale-95 hover:ring-2 hover:ring-primary/40",
            className
          )}
          onClick={handleClick}
        >
          <AvatarImage src={src} className="aspect-square object-cover rounded-full" />
          <AvatarFallback className={cn("rounded-full font-bold text-[13px]", fallbackClassName)}>
            {initials}
          </AvatarFallback>
        </Avatar>

        {enablePreview && (
          <span className="absolute bottom-0 right-0 p-0.5 rounded-full bg-primary text-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <RiExpandDiagonalLine size={10} />
          </span>
        )}
      </div>

      {/* Fullscreen Image Preview Modal */}
      {isPreviewOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setIsPreviewOpen(false)}
        >
          {/* Header Bar */}
          <div className="w-full max-w-lg flex items-center justify-between pt-2 px-2 z-10">
            <div className="flex flex-col text-left">
              <span className="text-white font-extrabold text-lg leading-tight">
                {name || "Foto de Perfil"}
              </span>
              <span className="text-white/60 text-xs font-medium">Visualização em tela cheia</span>
            </div>
            
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsPreviewOpen(false)
              }}
              className="h-11 w-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 active:scale-95 transition-all cursor-pointer border border-white/10"
              aria-label="Fechar visualização"
            >
              <RiCloseLine size={24} />
            </button>
          </div>

          {/* Main Image View */}
          <div 
            className="flex-1 w-full max-w-lg flex items-center justify-center my-auto p-2"
            onClick={(e) => e.stopPropagation()}
          >
            {src ? (
              <img
                src={src}
                alt={name || "Foto de perfil em tela cheia"}
                className="max-w-full max-h-[70dvh] object-contain rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/15 animate-in zoom-in-95 duration-200"
              />
            ) : (
              <div className="w-56 h-56 rounded-full bg-primary/20 border-4 border-primary/40 flex items-center justify-center text-primary text-6xl font-black shadow-2xl animate-in zoom-in-95 duration-200">
                {name ? initials : <RiUser3Line size={72} />}
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="pb-4 text-center">
            <span className="text-xs font-semibold text-white/50 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              Toque em qualquer lugar fora para fechar
            </span>
          </div>
        </div>
      )}
    </>
  )
}
