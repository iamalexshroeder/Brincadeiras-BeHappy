"use client"

import { useState, useTransition, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { 
  RiHeartFill, 
  RiStarFill, 
  RiChat3Line, 
  RiTimeLine, 
  RiGroupLine, 
  RiEditLine, 
  RiDeleteBinLine, 
  RiLoader4Line,
  RiArrowLeftSLine,
  RiHeartLine,
  RiUserVoiceLine,
  RiCloseLine,
  RiBookmarkLine,
  RiBookmarkFill
} from "@remixicon/react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UserAvatar } from "@/components/ui/UserAvatar"
import { getTitleForLevel } from "@/utils/gamification"
import { toggleLike, deleteBrincadeira, toggleSave, toggleSystemLike, toggleSystemSave } from "@/lib/actions"


const AGE_GROUP_LABELS: Record<string, string> = {
  "AGE_3_5": "3\u20135 anos",
  "AGE_6_9": "6\u20139 anos",
  "AGE_10_PLUS": "10+ anos",
}

function formatAgeGroup(age?: any) {
  if (typeof age !== "string" || !age) return "Qualquer idade"
  return AGE_GROUP_LABELS[age] || age.replace(/AGE_/, "").replace(/_/g, " ")
}

interface BrincadeiraCardProps {
  id: string
  title: string
  description: string
  creator: {
    id: string
    name: string
    avatar?: string
    level: number
    title?: string
    rankBadge?: "gold" | "silver" | "bronze" | null
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
  likesCount = 0,
  commentsCount = 0,
  comments = [],
  initialLiked = false,
  initialSaved = false,
  currentUserId,
  steps = [],
  materials = [],
  publishedAt = "Recentemente",
  isSystemGame = false,
}: BrincadeiraCardProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isLiked, setIsLiked] = useState(initialLiked)
  const [isSaved, setIsSaved] = useState(initialSaved)
  const [localLikes, setLocalLikes] = useState(likesCount)

  // Sync local state when server re-renders with new data (after router.refresh)
  useEffect(() => {
    setIsLiked(initialLiked)
  }, [initialLiked])

  useEffect(() => {
    setIsSaved(initialSaved)
  }, [initialSaved])

  useEffect(() => {
    setLocalLikes(likesCount)
  }, [likesCount])

  const isOwner = currentUserId === creator?.id

  const handleDeleteBrincadeira = async (e: React.MouseEvent) => {
    e.stopPropagation()
    if (confirm("Tem certeza que deseja excluir esta brincadeira permanentemente?")) {
      startTransition(async () => {
        try {
          await deleteBrincadeira(id)
          router.refresh()
        } catch (error) {
          console.error("Erro ao excluir brincadeira:", error)
        }
      })
    }
  }

  const handleLike = async (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsLiked(!isLiked)
    setLocalLikes(prev => isLiked ? prev - 1 : prev + 1)
    
    startTransition(async () => {
      try {
        if (isSystemGame) {
          await toggleSystemLike(id)
        } else {
          await toggleLike(id)
        }
        router.refresh()
      } catch (error) {
        setIsLiked(isLiked)
        setLocalLikes(localLikes)
      }
    })
  }


  const handleSave = async (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsSaved(!isSaved)

    startTransition(async () => {
      try {
        if (isSystemGame) {
          await toggleSystemSave(id)
        } else {
          await toggleSave(id)
        }
        router.refresh()
      } catch (error) {
        setIsSaved(isSaved)
      }
    })
  }

  return (
    <Card className="overflow-hidden p-0 gap-0 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-[4px] bg-card transition-transform active:scale-[0.98]">
      <CardHeader className="px-3 pt-3 pb-1.5 flex flex-row items-center justify-between border-none bg-card">
        <Link href={`/recreador/${creator.id}`} className="flex items-center gap-2.5 active:scale-95 transition-all">
          <UserAvatar 
            name={creator.name} 
            src={creator.avatar} 
            rankBadge={creator.rankBadge}
            className={cn("h-10 w-10 overflow-hidden", creator.name === "BeHappyinha" && "bg-[#F9F9F7] p-2 border border-border")}
          />
          <div className="flex flex-col">
            <span className="text-[14px] font-bold leading-tight text-foreground">
              {creator?.name || "BeHappyinha"}
            </span>
            {creator?.name !== "BeHappyinha" && (
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[10px] font-bold text-muted-foreground">
                  {creator?.title || getTitleForLevel(creator?.level || 0)}
                </span>
                <span className="text-[10px] font-bold text-muted-foreground opacity-60">
                  · Nível {creator?.level || 0}
                </span>
              </div>
            )}
            
            <span className={cn("text-[10px] font-medium text-muted-foreground opacity-70", creator?.name === "BeHappyinha" ? "mt-0" : "mt-0.5")}>
              {publishedAt}
            </span>
          </div>
        </Link>
      </CardHeader>

      <CardContent className="px-3 pb-3 pt-1.5 cursor-pointer" onClick={() => router.push(`/brincadeira/${id}`)}>
        <h3 className="text-[15px] font-bold mb-1.5 text-foreground leading-snug">
          {title}
        </h3>
        <p className="text-[13px] font-medium text-muted-foreground mb-3 leading-relaxed opacity-90">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-1">
          <div className="flex items-center gap-1 px-2.5 py-1 bg-[var(--blue-bg)] rounded-[4px] text-[10px] font-bold text-[var(--blue)] border border-[var(--blue)]/10 lowercase">
            <RiUserVoiceLine size={12} />
            {formatAgeGroup(metadata?.ageRange)}
          </div>
          <div className="flex items-center gap-1 px-2.5 py-1 bg-[var(--purple-bg)] rounded-[4px] text-[10px] font-bold text-[var(--purple)] border border-[var(--purple)]/10 lowercase">
            <RiTimeLine size={12} />
            {metadata?.duration || "Variável"}
          </div>
          <div className="flex items-center gap-1 px-2.5 py-1 bg-[var(--yellow-bg)] rounded-[4px] text-[10px] font-bold text-[var(--yellow)] border border-[var(--yellow)]/10 lowercase">
            <RiGroupLine size={12} />
            {metadata?.participants || "Qualquer quant."}
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-3 py-2.5 flex justify-between items-center bg-card border-t border-border/40">
        <div className="flex items-center gap-3">
          <button onClick={handleLike} className="flex items-center gap-1.5 text-muted-foreground active:scale-90 transition-all">
            <motion.div
              key={isLiked ? "liked" : "unliked"}
              initial={{ scale: 0.8 }}
              animate={{ scale: isLiked ? [0.8, 1.2, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              {isLiked ? <RiHeartFill size={20} className="text-[#EF4444]" /> : <RiHeartLine size={20} />}
            </motion.div>
            <span className={cn("text-[13px] font-bold", isLiked ? "text-[#EF4444]" : "text-muted-foreground")}>{localLikes}</span>
          </button>


          <div className="flex items-center gap-1.5 text-muted-foreground opacity-60">
            <RiChat3Line size={20} />
            <span className="text-[14px] font-bold">{(comments?.length || 0) || (commentsCount || 0)}</span>
          </div>

          <button onClick={handleSave} className="flex items-center text-muted-foreground active:scale-90 transition-all p-1">
            <motion.div
              key={isSaved ? "saved" : "unsaved"}
              initial={{ scale: 0.8 }}
              animate={{ scale: isSaved ? [0.8, 1.2, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              {isSaved ? <RiBookmarkFill size={22} className="text-[var(--purple)]" /> : <RiBookmarkLine size={22} />}
            </motion.div>
          </button>
        </div>

        <Link 
          href={`/brincadeira/${id}`}
          className="text-muted-foreground font-bold text-[13px] active:scale-95 transition-all hover:text-foreground"
        >
          Ver detalhes
        </Link>
      </CardFooter>
    </Card>
  )
}
