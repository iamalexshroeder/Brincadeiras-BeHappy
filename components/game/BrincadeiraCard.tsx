"use client"

import { useState, useTransition } from "react"
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
  RiCheckboxCircleLine,
  RiCheckboxCircleFill,
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
import { toggleLike, toggleUsed, deleteBrincadeira, toggleSave } from "@/lib/actions"


const AGE_GROUP_LABELS: Record<string, string> = {
  "AGE_3_5": "3\u20135 anos",
  "AGE_6_9": "6\u20139 anos",
  "AGE_10_PLUS": "10+ anos",
}

function formatAgeGroup(age?: string) {
  if (!age) return "Qualquer idade"
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
  usedCount: number
  commentsCount?: number
  comments?: any[]
  initialLiked?: boolean
  initialUsed?: boolean
  initialSaved?: boolean
  steps?: string[]
  materials?: string[]
  publishedAt?: string
  currentUserId?: string
}

export function BrincadeiraCard({
  id,
  title,
  description,
  creator,
  metadata,
  tags,
  likesCount = 0,
  usedCount = 0,
  commentsCount = 0,
  comments = [],
  initialLiked = false,
  initialUsed = false,
  initialSaved = false,
  currentUserId,
  steps = [],
  materials = [],
  publishedAt = "Recentemente",
}: BrincadeiraCardProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isLiked, setIsLiked] = useState(initialLiked)
  const [isUsed, setIsUsed] = useState(initialUsed)
  const [isSaved, setIsSaved] = useState(initialSaved)
  const [localLikes, setLocalLikes] = useState(likesCount)
  const [localUsed, setLocalUsed] = useState(usedCount)

  const isOwner = currentUserId === creator.id

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
        await toggleLike(id)
        router.refresh()
      } catch (error) {
        setIsLiked(isLiked)
        setLocalLikes(localLikes)
      }
    })
  }

  const handleUse = async (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsUsed(!isUsed)
    setLocalUsed(prev => isUsed ? prev - 1 : prev + 1)

    startTransition(async () => {
      try {
        await toggleUsed(id)
        router.refresh()
      } catch (error) {
        setIsUsed(isUsed)
        setLocalUsed(localUsed)
      }
    })
  }

  const handleSave = async (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsSaved(!isSaved)

    startTransition(async () => {
      try {
        await toggleSave(id)
        router.refresh()
      } catch (error) {
        setIsSaved(isSaved)
      }
    })
  }

  return (
    <Card className="overflow-hidden p-0 gap-0 border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-[12px] bg-card transition-transform active:scale-[0.98]">
      <CardHeader className="px-4 pt-4 pb-2 flex flex-row items-center justify-between border-none bg-card">
        <Link href={`/recreador/${creator.id}`} className="flex items-center gap-2.5 active:scale-95 transition-all">
          <UserAvatar 
            name={creator.name} 
            src={creator.avatar} 
            rankBadge={creator.rankBadge}
            className={cn("h-10 w-10 overflow-hidden", creator.name === "BeHappyinha" && "bg-[#F9F9F7] p-2 border border-border")}
          />
          <div className="flex flex-col">
            <span className="text-h3 leading-tight">
              {creator.name}
            </span>
            {creator.name !== "BeHappyinha" && (
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-caption">
                  {creator.title || getTitleForLevel(creator.level)}
                </span>
                <span className="text-caption opacity-60">
                  · Nível {creator.level}
                </span>
              </div>
            )}
            
            <span className={cn("text-caption opacity-70", creator.name === "BeHappyinha" ? "mt-0.5" : "mt-0.5")}>
              {publishedAt}
            </span>
          </div>
        </Link>
      </CardHeader>

      <CardContent className="px-4 pb-4 pt-2 cursor-pointer" onClick={() => router.push(`/brincadeira/${id}`)}>
        <h3 className="text-h3 mb-2">
          {title}
        </h3>
        <p className="text-body text-muted-foreground line-clamp-2 mb-4 opacity-90">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[var(--blue-bg)] rounded-[6px] text-caption text-[var(--blue)] border border-[var(--blue)]/10 lowercase">
            <RiUserVoiceLine size={14} />
            {formatAgeGroup(metadata.ageRange)}
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[var(--purple-bg)] rounded-[6px] text-caption text-[var(--purple)] border border-[var(--purple)]/10 lowercase">
            <RiTimeLine size={14} />
            {metadata.duration}
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[var(--yellow-bg)] rounded-[6px] text-caption text-[var(--yellow)] border border-[var(--yellow)]/10 lowercase">
            <RiGroupLine size={14} />
            {metadata.participants}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 flex justify-between items-center bg-card border-t border-border/40">
        <div className="flex items-center gap-4">
          <button onClick={handleLike} className="flex items-center gap-1.5 text-muted-foreground active:scale-90 transition-all">
            <motion.div
              key={isLiked ? "liked" : "unliked"}
              initial={{ scale: 0.8 }}
              animate={{ scale: isLiked ? [0.8, 1.2, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              {isLiked ? <RiHeartFill size={22} className="text-[#EF4444]" /> : <RiHeartLine size={22} />}
            </motion.div>
            <span className={cn("text-[14px] font-bold", isLiked ? "text-[#EF4444]" : "text-muted-foreground")}>{localLikes}</span>
          </button>

          <button onClick={handleUse} className="flex items-center gap-1.5 text-muted-foreground active:scale-90 transition-all">
            <motion.div
              key={isUsed ? "used" : "unused"}
              initial={{ scale: 0.8 }}
              animate={{ scale: isUsed ? [0.8, 1.2, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              {isUsed ? <RiCheckboxCircleFill size={22} className="text-[#16A34A]" /> : <RiCheckboxCircleLine size={22} />}
            </motion.div>
            <span className={cn("text-[14px] font-bold", isUsed ? "text-[#16A34A]" : "text-muted-foreground")}>{localUsed}</span>
          </button>

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

          <div className="flex items-center gap-1.5 text-muted-foreground opacity-60">
            <RiChat3Line size={20} />
            <span className="text-[14px] font-bold">{comments.length || commentsCount}</span>
          </div>
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
