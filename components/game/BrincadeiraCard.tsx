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
    <Card className="overflow-hidden border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-[12px] bg-card transition-transform active:scale-[0.98]">
      <CardHeader className="px-4 py-3 flex flex-row items-center justify-between border-none bg-card">
        <Link href={`/recreador/${creator.id}`} className="flex items-center gap-2.5 active:scale-95 transition-all">
          <UserAvatar 
            name={creator.name} 
            src={creator.avatar} 
            rankBadge={creator.rankBadge}
            className="h-10 w-10"
          />
          <div className="flex flex-col">
            <span className="text-[16px] font-bold text-foreground tracking-[-0.01em] leading-tight">
              {creator.name}
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wide">
                {creator.title || getTitleForLevel(creator.level)}
              </span>
              <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wide">
                · Nível {creator.level}
              </span>
            </div>
            <span className="text-[10px] font-extrabold text-muted-foreground/50 uppercase tracking-widest mt-0.5">
              {publishedAt}
            </span>
          </div>
        </Link>
      </CardHeader>

      <CardContent className="px-4 py-0.5 cursor-pointer" onClick={() => router.push(`/brincadeira/${id}`)}>
        <h3 className="text-[16px] font-extrabold leading-snug text-foreground tracking-[-0.01em] mb-1">
          {title}
        </h3>
        <p className="text-[13px] leading-snug text-muted-foreground line-clamp-2 mb-3 font-medium opacity-80 mt-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          <div className="flex items-center gap-1 px-2 py-0.5 bg-[var(--blue-bg)] rounded-[6px] text-[11px] font-bold text-[var(--blue)] border border-[var(--blue)]/10">
            <RiUserVoiceLine size={13} />
            {formatAgeGroup(metadata.ageRange)}
          </div>
          <div className="flex items-center gap-1 px-2 py-0.5 bg-[var(--purple-bg)] rounded-[6px] text-[11px] font-bold text-[var(--purple)] border border-[var(--purple)]/10">
            <RiTimeLine size={13} />
            {metadata.duration}
          </div>
          <div className="flex items-center gap-1 px-2 py-0.5 bg-[var(--yellow-bg)] rounded-[6px] text-[11px] font-bold text-[var(--yellow)] border border-[var(--yellow)]/10">
            <RiGroupLine size={13} />
            {metadata.participants}
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-4 py-2.5 flex justify-between items-center bg-card border-none">
        <div className="flex gap-3.5">
          <button onClick={handleLike} className="flex items-center gap-1.5 text-muted-foreground active:scale-90 transition-all font-bold">
            <motion.div
              key={isLiked ? "liked" : "unliked"}
              initial={{ scale: 0.8 }}
              animate={{ scale: isLiked ? [0.8, 1.2, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              {isLiked ? <RiHeartFill size={24} className="text-[#EF4444]" /> : <RiHeartLine size={24} />}
            </motion.div>
            <span className={isLiked ? "text-[#EF4444]" : "text-muted-foreground"}>{localLikes}</span>
          </button>

          <button onClick={handleUse} className="flex items-center gap-2 text-muted-foreground active:scale-90 transition-all font-medium">
            <motion.div
              key={isUsed ? "used" : "unused"}
              initial={{ scale: 0.8 }}
              animate={{ scale: isUsed ? [0.8, 1.2, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              {isUsed ? <RiCheckboxCircleFill size={24} className="text-[#16A34A]" /> : <RiCheckboxCircleLine size={24} />}
            </motion.div>
            <span className={isUsed ? "text-[#16A34A]" : "text-muted-foreground"}>{localUsed}</span>
          </button>

          <div className="flex items-center gap-2 text-muted-foreground font-medium">
            <RiChat3Line size={24} />
            <span className="text-[15px]">{comments.length || commentsCount}</span>
          </div>
        </div>

        <button onClick={handleSave} className="flex items-center text-muted-foreground active:scale-90 transition-all font-bold p-1">
          <motion.div
            key={isSaved ? "saved" : "unsaved"}
            initial={{ scale: 0.8 }}
            animate={{ scale: isSaved ? [0.8, 1.2, 1] : 1 }}
            transition={{ duration: 0.3 }}
          >
            {isSaved ? <RiBookmarkFill size={24} className="text-purple-500" /> : <RiBookmarkLine size={24} />}
          </motion.div>
        </button>
      </CardFooter>
    </Card>
  )
}
