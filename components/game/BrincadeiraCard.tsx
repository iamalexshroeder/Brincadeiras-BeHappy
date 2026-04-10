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
  RiCloseLine
} from "@remixicon/react"
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UserAvatar } from "@/components/ui/UserAvatar"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger
} from "@/components/ui/sheet"
import { getTitleForLevel } from "@/utils/gamification"
import { addComment, deleteComment, updateComment, toggleLike, toggleUsed, deleteBrincadeira } from "@/lib/actions"


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
  currentUserId,
  steps = [],
  materials = [],
  publishedAt = "Recentemente",
}: BrincadeiraCardProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [isLiked, setIsLiked] = useState(initialLiked)
  const [isUsed, setIsUsed] = useState(initialUsed)
  const [localLikes, setLocalLikes] = useState(likesCount)
  const [localUsed, setLocalUsed] = useState(usedCount)
  const [isAddingComment, setIsAddingComment] = useState(false)
  const [commentText, setCommentText] = useState("")

  const [editingCommentId, setEditingCommentId] = useState<string | null>(null)
  const [editingCommentText, setEditingCommentText] = useState("")
  const [isDeletingId, setIsDeletingId] = useState<string | null>(null)

  const isOwner = currentUserId === creator.id

  const handleDeleteBrincadeira = async (e: React.MouseEvent) => {
    e.stopPropagation()
    if (confirm("Tem certeza que deseja excluir esta brincadeira permanentemente?")) {
      startTransition(async () => {
        try {
          await deleteBrincadeira(id)
          router.refresh()
          setIsSheetOpen(false)
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
            <span className="text-[14px] font-extrabold text-foreground leading-tight">{creator.name}</span>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-tight">
                \u2022 {creator.title || getTitleForLevel(creator.level)}
              </span>
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-tight">
                \u2022 N\u00edvel {creator.level}
              </span>
              <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-tight">
                \u2022 {publishedAt}
              </span>
            </div>
          </div>
        </Link>
      </CardHeader>

      <CardContent className="px-4 py-0.5" onClick={() => setIsSheetOpen(true)}>
        <h3 className="text-[16px] font-extrabold leading-snug text-foreground mb-1 tracking-[-0.01em]">
          {title}
        </h3>
        <p className="text-[13px] leading-snug text-muted-foreground line-clamp-2 mb-3 font-medium opacity-80">
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

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <button className="btn-chip text-muted-foreground font-bold">
              Ver Detalhes
            </button>
          </SheetTrigger>
          <SheetContent 
            side="bottom" 
            className="h-[92dvh] w-full inset-x-0 bottom-0 rounded-t-[24px] p-0 flex flex-col border border-border bg-background overflow-hidden outline-none shadow-2xl"
          >
            {/* Cabeçalho do Modal - idêntico ao Header global */}
            <div className="sticky top-0 z-50 bg-[#F9F9F7]/95 backdrop-blur-md px-4 pt-5 pb-3 border-b border-[#E5E5EA] shrink-0">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <SheetClose asChild>
                    <button className="shrink-0 h-10 w-10 flex items-center justify-center rounded-full text-[#8E8E93] active:bg-[#F2F2F7] transition-all">
                      <RiArrowLeftSLine size={24} />
                    </button>
                  </SheetClose>
                  <h1 className="text-[20px] font-bold tracking-[-0.02em] text-[#1A1A1A] truncate">
                    {title}
                  </h1>
                </div>

                {isOwner && (
                  <div className="flex items-center gap-1 shrink-0">
                    <Link href={`/editar/${id}`}>
                      <button className="h-10 w-10 flex items-center justify-center rounded-full text-[#8E8E93] active:bg-[#F2F2F7] transition-colors">
                        <RiEditLine size={22} />
                      </button>
                    </Link>
                    <button 
                      className="h-10 w-10 flex items-center justify-center rounded-full text-[#8E8E93] active:text-red-500 active:bg-red-50 transition-colors"
                      onClick={handleDeleteBrincadeira}
                    >
                      <RiDeleteBinLine size={22} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Conteúdo interno com scroll */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-6 space-y-7 pb-32">
              <div className="space-y-6">
                <Link href={`/recreador/${creator.id}`} className="flex items-center gap-3 border-b border-border/50 pb-6 active:opacity-70 transition-opacity">
                  <UserAvatar src={creator.avatar} name={creator.name} rankBadge={creator.rankBadge} className="h-10 w-10 shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-[16px] font-extrabold text-foreground leading-tight truncate">{creator.name}</span>
                    <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                      <span className="text-[11px] font-bold uppercase tracking-tight text-muted-foreground">{creator.title || getTitleForLevel(creator.level)}</span>
                      <span className="text-[12px] font-extrabold text-primary uppercase tracking-wider">• Nível {creator.level}</span>
                    </div>
                  </div>
                </Link>

                <p className="text-[16px] leading-relaxed text-foreground font-medium opacity-80">{description}</p>

                {materials.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <label className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest">Materiais</label>
                    <div className="flex flex-wrap gap-2">
                      {materials.map((mat, i) => (
                        <span key={i} className="px-3 py-1.5 bg-[#F2F2F7] rounded-full text-[13px] font-medium text-foreground">• {mat}</span>
                      ))}
                    </div>
                  </div>
                )}

                {steps.length > 0 && (
                  <div className="space-y-4 pt-2">
                    <label className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest">Passo a Passo</label>
                    <div className="space-y-4 border-l-2 border-primary/10 pl-4 ml-1">
                      {steps.map((step, i) => (
                        <div key={i} className="flex gap-3">
                          <div className="shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary font-extrabold text-[12px] flex items-center justify-center mt-1">{i + 1}</div>
                          <p className="text-[15px] text-foreground leading-relaxed font-medium opacity-90">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-2">
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-[var(--blue-bg)] rounded-[8px] text-[13px] font-bold text-[var(--blue)] border border-[var(--blue)]/10">
                    <RiUserVoiceLine size={16} />
                    {formatAgeGroup(metadata.ageRange)}
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-[var(--purple-bg)] rounded-[8px] text-[13px] font-bold text-[var(--purple)] border border-[var(--purple)]/10">
                    <RiTimeLine size={16} />
                    {metadata.duration}
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-[var(--yellow-bg)] rounded-[8px] text-[13px] font-bold text-[var(--yellow)] border border-[var(--yellow)]/10">
                    <RiGroupLine size={16} />
                    {metadata.participants}
                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <h4 className="text-[18px] font-extrabold text-foreground mb-6 tracking-[-0.02em]">Comentários ({comments.length})</h4>
                  {comments.length === 0 ? (
                    <div className="text-center py-10 bg-[#F2F2F7] rounded-[20px] border border-dashed border-border/60">
                      <RiChat3Line size={32} className="text-muted-foreground mx-auto mb-2 opacity-20" />
                      <p className="text-[14px] text-muted-foreground">Nenhum comentário ainda. Seja o primeiro a comentar!</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {comments.map((comment: any) => (
                        <div key={comment.id} className="flex gap-3 group">
                          <Avatar className="h-9 w-9 shrink-0 border-2 border-white shadow-sm">
                            <AvatarImage src={comment.user.avatar_url || comment.user.image} />
                            <AvatarFallback className="font-bold bg-primary/10 text-primary">{comment.user.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-[14px] font-extrabold text-foreground">{comment.user.name}</span>
                              <span className="text-[11px] font-bold text-muted-foreground uppercase opacity-60">• {new Date(comment.created_at).toLocaleDateString("pt-BR")}</span>
                            </div>
                            <p className="text-[14px] text-foreground leading-relaxed font-medium opacity-80 mt-0.5">{comment.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Rodapé com caixa de comentário */}
            <div className="px-4 py-4 border-t border-border bg-white shrink-0">
              {isAddingComment ? (
                <div className="space-y-3">
                  <textarea
                    autoFocus
                    placeholder="Sua experiência com essa brincadeira..."
                    className="textarea-base min-h-[96px]"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  />
                  <div className="flex gap-3">
                    <button onClick={() => setIsAddingComment(false)} className="flex-1 btn-ghost">Cancelar</button>
                    <button
                      className="flex-[2] btn-primary"
                      onClick={async () => {
                        if (!commentText.trim()) return
                        startTransition(async () => {
                          try {
                            await addComment(id, commentText)
                            setIsAddingComment(false)
                            setCommentText("")
                            router.refresh()
                          } catch (error) {
                            console.error(error)
                          }
                        })
                      }}
                      disabled={isPending}
                    >
                      {isPending ? <RiLoader4Line className="animate-spin" size={20} /> : "Publicar"}
                    </button>
                  </div>
                </div>
              ) : (
                <button onClick={() => setIsAddingComment(true)} className="btn-primary">
                  Adicionar Comentário
                </button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </CardFooter>
    </Card>
  )
}
