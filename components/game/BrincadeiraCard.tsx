"use client"

import { useState, useTransition } from "react"
import { motion } from "framer-motion"
import { 
  RiHeartFill, 
  RiTimeLine, 
  RiGroupLine, 
  RiHeartLine, 
  RiUserVoiceLine,
  RiBookmarkLine,
  RiBookmarkFill,
  RiShareLine,
  RiCloseLine
} from "@remixicon/react"
import { Card } from "@/components/ui/card"
import { UserAvatar } from "@/components/ui/UserAvatar"
import { cn } from "@/lib/utils"
import { toggleLike, toggleSave, deleteBrincadeira, revalidateAll } from "@/lib/actions"
import { RoleBadge } from "@/components/shared/RoleBadge"
import { toast } from "sonner"
import Link from "next/link"

interface BrincadeiraCardProps {
  id: string
  title: string
  description: string
  creator: {
    id: string
    name: string
    avatar?: string
    role?: string | null
  }
  metadata: {
    ageRange: string
    duration: string
    participants: string
  }
  tags: string[]
  likesCount: number
  initialLiked?: boolean
  initialSaved?: boolean
  steps?: string[]
  materials?: string[]
  publishedAt?: string
  currentUserId?: string
  isSystemGame?: boolean
  comments?: any[]
}

export function BrincadeiraCard({
  id,
  title,
  description,
  creator,
  metadata,
  tags,
  likesCount,
  initialLiked = false,
  initialSaved = false,
  currentUserId,
  isSystemGame = false,
  publishedAt,
  steps = [],
  materials = [],
  comments = []
}: BrincadeiraCardProps) {
  const [isPending, startTransition] = useTransition()
  
  const [isLiked, setIsLiked] = useState(initialLiked)
  const [localLikes, setLocalLikes] = useState(likesCount)
  const [isSaved, setIsSaved] = useState(initialSaved)
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  
  const [popup, setPopup] = useState<{
    isOpen: boolean;
    title?: string;
    message: string;
    type: "error" | "success" | "confirm";
    onConfirm?: () => void;
  }>({ isOpen: false, message: "", type: "error" })

  const isOwner = currentUserId === creator.id && !isSystemGame

  const handleLike = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (!currentUserId) {
      toast.error("Entre para curtir esta brincadeira")
      return
    }

    const newLikedState = !isLiked
    setIsLiked(newLikedState)
    setLocalLikes(prev => newLikedState ? prev + 1 : prev - 1)

    try {
      await toggleLike(id)
    } catch (error) {
      setIsLiked(!newLikedState)
      setLocalLikes(prev => !newLikedState ? prev + 1 : prev - 1)
      toast.error("Erro ao curtir")
    }
  }

  const handleSave = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (!currentUserId) {
      toast.error("Entre para salvar esta brincadeira")
      return
    }

    const newSavedState = !isSaved
    setIsSaved(newSavedState)

    try {
      await toggleSave(id)
      toast.success(newSavedState ? "Salvo em sua coleção" : "Removido da coleção")
    } catch (error) {
      setIsSaved(!newSavedState)
      toast.error("Erro ao salvar")
    }
  }

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const url = `${window.location.origin}/brincadeira/${id}`
    try {
      await navigator.clipboard.writeText(url)
      toast.success("Link copiado!")
    } catch (err) {
      toast.error("Erro ao copiar link")
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="group"
        onClick={() => setIsDetailOpen(true)}
      >
        <Card className="overflow-hidden p-0 gap-0 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-[12px] bg-card transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] active:scale-[0.98] cursor-pointer">
          <div className="p-4 sm:p-5 flex flex-col gap-4">
            
            {/* Header Section */}
            <div className="flex items-start justify-between gap-4">
              {creator.id !== "system" && creator.name !== "BeHappyinha" ? (
                <Link 
                  href={`/recreador/${creator.id}`} 
                  className="flex items-center gap-3 hover:opacity-85 transition-opacity"
                  onClick={(e) => e.stopPropagation()}
                >
                  <UserAvatar 
                    src={creator.avatar} 
                    name={creator.name} 
                    className="h-11 w-11 border border-border/50 shrink-0"
                  />
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[14px] font-bold text-foreground leading-tight">
                        {creator.name}
                      </span>
                      <RoleBadge role={creator.role} />
                    </div>
                    <span className="text-[11px] font-medium text-muted-foreground">
                      {publishedAt || "Manual de Brincadeiras"}
                    </span>
                  </div>
                </Link>
              ) : (
                <div className="flex items-center gap-3">
                  <UserAvatar 
                    src={creator.avatar} 
                    name={creator.name} 
                    className="h-11 w-11 border border-border/50 shrink-0"
                  />
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[14px] font-bold text-foreground leading-tight">
                        {creator.name}
                      </span>
                      <RoleBadge role={creator.role} />
                    </div>
                    <span className="text-[11px] font-medium text-muted-foreground">
                      {publishedAt || "Manual de Brincadeiras"}
                    </span>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-1">
                <button 
                  onClick={handleShare}
                  className="h-8 w-8 flex items-center justify-center text-muted-foreground hover:bg-gray-100 rounded-full transition-colors"
                >
                  <RiShareLine size={18} />
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-2 text-left">
              <h3 className="text-[18px] font-black text-foreground tracking-[-0.02em] leading-tight group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-[14px] text-muted-foreground line-clamp-2 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Metadata Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F2F2F7] text-[#8E8E93] text-[11px] font-bold">
                <RiUserVoiceLine size={12} />
                {metadata.ageRange}
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F2F2F7] text-[#8E8E93] text-[11px] font-bold">
                <RiTimeLine size={12} />
                {metadata.duration}
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F2F2F7] text-[#8E8E93] text-[11px] font-bold">
                <RiGroupLine size={12} />
                {metadata.participants}
              </div>
            </div>

            {/* Footer / Stats */}
            <div className="flex items-center justify-between pt-2 border-t border-border/50">
              <div className="flex items-center gap-4">
                <button 
                  onClick={handleLike}
                  className={cn(
                    "flex items-center gap-1.5 transition-colors",
                    isLiked ? "text-red-500" : "text-muted-foreground hover:text-red-500"
                  )}
                >
                  {isLiked ? <RiHeartFill size={20} /> : <RiHeartLine size={20} />}
                  <span className="text-[13px] font-bold">{localLikes}</span>
                </button>
              </div>

              <button 
                onClick={handleSave}
                className={cn(
                  "flex items-center gap-1.5 transition-colors",
                  isSaved ? "text-primary" : "text-muted-foreground hover:text-primary"
                )}
              >
                {isSaved ? <RiBookmarkFill size={20} /> : <RiBookmarkLine size={20} />}
              </button>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Detail Modal */}
      {isDetailOpen && (
        <div 
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4 overscroll-contain animate-in fade-in duration-200"
          onClick={() => setIsDetailOpen(false)}
        >
          <div 
            className="relative w-full max-h-[85dvh] sm:max-h-[85vh] sm:max-w-lg bg-card border-t sm:border border-border/80 rounded-t-[28px] sm:rounded-[24px] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Drag Handle for mobile */}
            <div className="w-12 h-1.5 bg-muted/60 rounded-full mx-auto my-3 sm:hidden shrink-0" />

            {/* Close button */}
            <button
              onClick={() => setIsDetailOpen(false)}
              className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-full bg-muted/60 text-muted-foreground hover:bg-muted active:scale-95 transition-all z-10"
            >
              <RiCloseLine size={20} />
            </button>

            {/* Scrollable Container */}
            <div className="overflow-y-auto px-6 pb-24 pt-2 sm:pt-6 space-y-8 flex-1 no-scrollbar overscroll-y-contain">
              {/* Creator Info Header */}
              <div className="flex items-center justify-between">
                {creator.id !== "system" && creator.name !== "BeHappyinha" ? (
                  <Link 
                    href={`/recreador/${creator.id}`} 
                    className="flex items-center gap-3 hover:opacity-85 transition-opacity"
                    onClick={() => setIsDetailOpen(false)}
                  >
                    <UserAvatar 
                      src={creator.avatar} 
                      name={creator.name} 
                      className="h-11 w-11 border border-border/50 shrink-0"
                    />
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5 flex-wrap text-left">
                        <span className="text-[14px] font-bold text-foreground leading-tight">
                          {creator.name}
                        </span>
                        <RoleBadge role={creator.role} />
                      </div>
                      <span className="text-[11px] font-medium text-muted-foreground">
                        {publishedAt || "Manual de Brincadeiras"}
                      </span>
                    </div>
                  </Link>
                ) : (
                  <div className="flex items-center gap-3">
                    <UserAvatar 
                      src={creator.avatar} 
                      name={creator.name} 
                      className="h-11 w-11 border border-border/50 shrink-0"
                    />
                    <div className="flex flex-col text-left">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[14px] font-bold text-foreground leading-tight">
                          {creator.name}
                        </span>
                        <RoleBadge role={creator.role} />
                      </div>
                      <span className="text-[11px] font-medium text-muted-foreground">
                        {publishedAt || "Manual de Brincadeiras"}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Title & Description */}
              <div className="space-y-2 text-left">
                <h3 className="text-[22px] font-black text-foreground tracking-tight leading-tight">
                  {title}
                </h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {description}
                </p>
              </div>

              {/* Metadata stats */}
              <div className="flex flex-wrap gap-2 pt-1 border-t border-b border-border/50 py-3.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F2F2F7] text-[#8E8E93] text-[12px] font-bold">
                  <RiUserVoiceLine size={14} />
                  {metadata.ageRange}
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F2F2F7] text-[#8E8E93] text-[12px] font-bold">
                  <RiTimeLine size={14} />
                  {metadata.duration}
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F2F2F7] text-[#8E8E93] text-[12px] font-bold">
                  <RiGroupLine size={14} />
                  {metadata.participants}
                </div>
              </div>

              {/* Tags / Collections */}
              {tags && tags.length > 0 && (
                <div className="space-y-2 text-left">
                  <h4 className="text-[12px] font-extrabold text-[#8E8E93] uppercase tracking-widest">Tags & Coleções</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2.5 py-1 bg-primary/5 text-primary border border-primary/10 text-[11px] font-extrabold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Materials */}
              {materials && materials.length > 0 && (
                <div className="space-y-2 text-left">
                  <h4 className="text-[12px] font-extrabold text-[#8E8E93] uppercase tracking-widest">Materiais Necessários</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {materials.map((material) => (
                      <span 
                        key={material}
                        className="px-3 py-1 bg-[#FEF9C3] text-[#A16207] text-[12px] font-bold rounded-full"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Como Jogar / Passo a Passo */}
              {steps && steps.length > 0 && (
                <div className="space-y-3 text-left">
                  <h4 className="text-[12px] font-extrabold text-[#8E8E93] uppercase tracking-widest">Como Jogar</h4>
                  <div className="space-y-3">
                    {steps.map((step, index) => (
                      <div key={index} className="flex gap-3 items-start">
                        <div className="w-6 h-6 rounded-lg bg-primary/10 text-primary text-[12px] font-black flex items-center justify-center shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-[14px] text-foreground font-semibold leading-relaxed whitespace-pre-wrap text-left">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Floating Action Buttons */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none z-20">
              <div className="pointer-events-auto">
                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                    handleLike(e)
                  }}
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-border/80 shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all hover:scale-105 active:scale-95",
                    isLiked ? "text-red-500" : "text-muted-foreground hover:text-red-500"
                  )}
                >
                  {isLiked ? <RiHeartFill size={20} className="scale-110" /> : <RiHeartLine size={20} />}
                  <span className="text-[13px] font-black">{localLikes}</span>
                </button>
              </div>

              <div className="flex items-center gap-2 pointer-events-auto">
                {isOwner && (
                  <Link 
                    href={`/editar/${id}`} 
                    onClick={() => setIsDetailOpen(false)}
                    className="px-4 py-2 bg-primary text-white border border-primary text-[12px] font-extrabold shadow-[0_4px_16px_rgba(255,149,0,0.15)] hover:bg-primary/95 transition-all active:scale-95 shrink-0 rounded-full"
                  >
                    Editar
                  </Link>
                )}
                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                    handleSave(e)
                  }}
                  className={cn(
                    "flex items-center justify-center h-10 w-10 rounded-full bg-white/95 backdrop-blur-md border border-border/80 shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all hover:scale-105 active:scale-95",
                    isSaved ? "text-primary" : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {isSaved ? <RiBookmarkFill size={20} /> : <RiBookmarkLine size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Popup Modal */}
      {popup.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A1A1A]/40 backdrop-blur-sm p-4 animate-in fade-in duration-200" onClick={(e) => e.stopPropagation()}>
          <div className="bg-white rounded-[12px] p-6 w-full max-w-[320px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex flex-col items-center text-center zoom-in-95 animate-in duration-200" onClick={(e) => e.stopPropagation()}>
            {popup.title && <h3 className="text-[18px] font-black text-[#1A1A1A] mb-2">{popup.title}</h3>}
            <p className="text-[15px] font-medium text-[#8E8E93] mb-6">{popup.message}</p>
            
            {popup.type === "confirm" ? (
              <div className="flex w-full gap-3">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setPopup({ ...popup, isOpen: false })
                  }}
                  className="flex-1 btn-secondary"
                >
                  Cancelar
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setPopup({ ...popup, isOpen: false })
                    popup.onConfirm?.()
                  }}
                  className="flex-1 btn-danger"
                >
                  Excluir
                </button>
              </div>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setPopup({ ...popup, isOpen: false })
                  popup.onConfirm?.()
                }}
                className="w-full btn-primary"
              >
                Ok
              </button>
            )}
          </div>
        </div>
      )}
    </>
  )
}
