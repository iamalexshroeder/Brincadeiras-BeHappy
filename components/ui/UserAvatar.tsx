"use client"

import { useState, useEffect, useRef } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { RiCloseLine, RiUser3Line, RiExpandDiagonalLine, RiZoomInLine, RiZoomOutLine } from "@remixicon/react"

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
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef<{ x: number; y: number; posX: number; posY: number } | null>(null)
  const lastTouches = useRef<React.TouchList | null>(null)
  const lastPinchDist = useRef<number | null>(null)

  useEffect(() => {
    if (isPreviewOpen) {
      document.body.style.overflow = "hidden"
      setScale(1)
      setPosition({ x: 0, y: 0 })
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isPreviewOpen])

  const initials = name
    ? name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "U"

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) onClick(e)
    if (enablePreview) setIsPreviewOpen(true)
  }

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation()
    setScale(s => Math.min(s + 0.5, 4))
  }

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation()
    setScale(s => {
      const next = Math.max(s - 0.5, 1)
      if (next === 1) setPosition({ x: 0, y: 0 })
      return next
    })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return
    e.preventDefault()
    setIsDragging(true)
    dragStart.current = { x: e.clientX, y: e.clientY, posX: position.x, posY: position.y }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !dragStart.current) return
    setPosition({
      x: dragStart.current.posX + (e.clientX - dragStart.current.x),
      y: dragStart.current.posY + (e.clientY - dragStart.current.y),
    })
  }

  const handleMouseUp = () => setIsDragging(false)

  const getPinchDist = (touches: React.TouchList) => {
    const [t1, t2] = [touches[0], touches[1]]
    return Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      lastPinchDist.current = getPinchDist(e.touches)
    } else if (e.touches.length === 1 && scale > 1) {
      dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, posX: position.x, posY: position.y }
      setIsDragging(true)
    }
    lastTouches.current = e.touches
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault()
    if (e.touches.length === 2 && lastPinchDist.current !== null) {
      const dist = getPinchDist(e.touches)
      const delta = dist / lastPinchDist.current
      setScale(s => Math.min(Math.max(s * delta, 1), 4))
      lastPinchDist.current = dist
    } else if (e.touches.length === 1 && isDragging && dragStart.current) {
      setPosition({
        x: dragStart.current.posX + (e.touches[0].clientX - dragStart.current.x),
        y: dragStart.current.posY + (e.touches[0].clientY - dragStart.current.y),
      })
    }
  }

  const handleTouchEnd = () => {
    lastPinchDist.current = null
    setIsDragging(false)
    if (scale <= 1) setPosition({ x: 0, y: 0 })
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
          className="fixed inset-0 z-[100] bg-black flex flex-col animate-in fade-in duration-200"
          onClick={() => { if (scale <= 1) setIsPreviewOpen(false) }}
        >
          {/* Header Bar */}
          <div className="w-full flex items-center justify-between px-4 pt-12 pb-3 z-10 bg-gradient-to-b from-black/80 to-transparent absolute top-0 left-0 right-0">
            <div className="flex flex-col text-left">
              <span className="text-white font-extrabold text-[17px] leading-tight">
                {name || "Foto de Perfil"}
              </span>
              <span className="text-white/50 text-xs font-medium">Visualização em tela cheia</span>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setIsPreviewOpen(false) }}
              className="h-11 w-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 active:scale-95 transition-all cursor-pointer border border-white/10"
              aria-label="Fechar visualização"
            >
              <RiCloseLine size={24} />
            </button>
          </div>

          {/* Main Image View — Square 1:1 full-width */}
          <div
            className="flex-1 flex items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "default", touchAction: "none" }}
          >
            {src ? (
              <div
                className="w-full"
                style={{
                  transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                  transition: isDragging ? "none" : "transform 0.15s ease",
                  willChange: "transform",
                }}
              >
                <img
                  src={src}
                  alt={name || "Foto de perfil em tela cheia"}
                  className="w-full aspect-square object-cover select-none"
                  draggable={false}
                  style={{ imageRendering: "auto" }}
                />
              </div>
            ) : (
              <div className="w-full aspect-square bg-primary/20 flex items-center justify-center text-primary text-6xl font-black animate-in zoom-in-95 duration-200">
                {name ? initials : <RiUser3Line size={72} />}
              </div>
            )}
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 pb-10 flex items-center justify-center gap-4 bg-gradient-to-t from-black/80 to-transparent pt-8">
            <button
              onClick={handleZoomOut}
              className="h-12 w-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 active:scale-95 transition-all border border-white/10 disabled:opacity-30"
              aria-label="Zoom out"
              disabled={scale <= 1}
            >
              <RiZoomOutLine size={22} />
            </button>

            <span className="text-white/70 text-sm font-semibold min-w-[48px] text-center">
              {Math.round(scale * 100)}%
            </span>

            <button
              onClick={handleZoomIn}
              className="h-12 w-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 active:scale-95 transition-all border border-white/10 disabled:opacity-30"
              aria-label="Zoom in"
              disabled={scale >= 4}
            >
              <RiZoomInLine size={22} />
            </button>
          </div>

          {/* Hint */}
          {scale <= 1 && (
            <div className="absolute bottom-32 left-0 right-0 flex justify-center pointer-events-none">
              <span className="text-xs font-semibold text-white/40 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                Use 2 dedos para dar zoom · toque fora para fechar
              </span>
            </div>
          )}
        </div>
      )}
    </>
  )
}
