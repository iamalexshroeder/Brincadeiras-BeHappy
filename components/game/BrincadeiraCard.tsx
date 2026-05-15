"use client"

import { useState, useTransition } from "react"
import { motion } from "framer-motion"
import { 
  RiHeartFill, 
  RiChat3Line, 
  RiTimeLine, 
  RiGroupLine, 
  RiHeartLine, 
  RiUserVoiceLine,
  RiBookmarkLine,
  RiBookmarkFill,
  RiShareLine,
  RiDeleteBinLine
} from "@remixicon/react"
import { Card } from "@/components/ui/card"
import { UserAvatar } from "@/components/ui/UserAvatar"
import { cn } from "@/lib/utils"
import { toggleLike, toggleSave, deleteBrincadeira } from "@/lib/actions"
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
  }
  metadata: {
    ageRange: string
    duration: string
    participants: string
  }
  tags: string[]
  likesCount: number
  commentsCount?: number
  comments?: any[]
  initialLiked?: boolean
  initialSaved?: boolean
  steps?: string[]
  materials?: string[]
  publishedAt?: string
  currentUserId?: string
  isSystemGame?: boolean
}

export function BrincadeiraCard({
  id,
  title,
  description,
  creator,
  metadata,
  tags,
  likesCount,
  comments = [],
  initialLiked = false,
  initialSaved = false,
  currentUserId,
  isSystemGame = false,
  publishedAt
}: BrincadeiraCardProps) {
  const [isPending, startTransition] = useTransition()
  
  const [isLiked, setIsLiked] = useState(initialLiked)
  const [localLikes, setLocalLikes] = useState(likesCount)
  const [isSaved, setIsSaved] = useState(initialSaved)
  
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

  const handleDelete = () => {
    setPopup({
      isOpen: true,
      type: "confirm",
      title: "Excluir Brincadeira",
      message: "Tem certeza que deseja excluir esta brincadeira?",
      onConfirm: () => {
        startTransition(async () => {
          try {
            await deleteBrincadeira(id)
            setPopup({
              isOpen: true,
              type: "success",
              title: "Excluída",
              message: "Brincadeira excluída com sucesso.",
              onConfirm: () => {
                window.location.replace("/")
              }
            })
          } catch (error) {
            setPopup({
              isOpen: true,
              type: "error",
              title: "Erro",
              message: "Erro ao excluir brincadeira."
            })
          }
        })
      }
    })
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
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="group"
    >
      <Link href={`/brincadeira/${id}`}>
        <Card className="overflow-hidden p-0 gap-0 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-[12px] bg-card transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] active:scale-[0.98]">
          <div className="p-4 sm:p-5 flex flex-col gap-4">
            
            {/* Header Section */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <UserAvatar 
                  src={creator.avatar} 
                  name={creator.name} 
                  className="h-9 w-9 border border-border/50"
                />
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-foreground leading-tight">
                    {creator.name}
                  </span>
                  <span className="text-[11px] font-medium text-muted-foreground">
                    {publishedAt || "Manual de Brincadeiras"}
                  </span>
                </div>
              </div>

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
            <div className="space-y-2">
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
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <RiChat3Line size={20} />
                  <span className="text-[13px] font-bold">{comments.length}</span>
                </div>
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
      </Link>

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
    </motion.div>
  )
}
