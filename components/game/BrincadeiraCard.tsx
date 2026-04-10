"use client" // Trigger rebuild for Vercel deployment verification

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { 
  RiHistoryLine, 
  RiHeartFill, 
  RiStarFill, 
  RiChat3Line, 
  RiTimeLine, 
  RiGroupLine, 
  RiEditLine, 
  RiDeleteBinLine, 
  RiLoader4Line,
  RiArrowLeftSLine,
  RiCheckLine,
  RiCloseLine,
  RiHeartLine,
  RiCheckboxCircleLine,
  RiCheckboxCircleFill,
  RiUserVoiceLine,
  RiAddLine,
  RiShieldUserLine
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
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import { getTitleForLevel } from "@/utils/gamification"
import { addComment, deleteComment, updateComment, toggleLike, toggleUsed, deleteBrincadeira, updateBrincadeira } from "@/lib/actions"


const AGE_GROUP_LABELS: Record<string, string> = {
  "AGE_3_5": "3–5 anos",
  "AGE_6_9": "6–9 anos",
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
  // Raw values for editing
  rawType?: string
  rawAgeGroups?: string[]
  rawDuration?: number
  rawParticipants?: number
  publishedAt?: string
  currentUserId?: string
}

const MOCK_COMMENTS: any[] = []


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
  rawType = "CRIATIVA",
  rawAgeGroups = ["AGE_6_9"],
  rawDuration = 30,
  rawParticipants = 2,
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

  const [isEditingBrincadeira, setIsEditingBrincadeira] = useState(false)
  const [editedTitle, setEditedTitle] = useState(title)
  const [editedDescription, setEditedDescription] = useState(description)
  const [editedSteps, setEditedSteps] = useState<string[]>(steps.length > 0 ? steps : [""])
  const [editedMaterials, setEditedMaterials] = useState<string[]>(materials)
  
  // New Edit States
  const [editedType, setEditedType] = useState(rawType)
  const [editedAgeGroups, setEditedAgeGroups] = useState<string[]>(rawAgeGroups)
  const [editedDuration, setEditedDuration] = useState(rawDuration.toString())
  const [editedParticipants, setEditedParticipants] = useState(rawParticipants.toString())
  const [editedSelectedCategories, setEditedSelectedCategories] = useState<string[]>(tags)

  const handleUpdateBrincadeira = async () => {
    startTransition(async () => {
      try {
        const durationVal = parseInt(editedDuration) || 30
        const minP = parseInt(editedParticipants) || 2

        await updateBrincadeira(id, {
          title: editedTitle,
          short_description: editedDescription,
          type: editedType,
          steps: editedSteps.filter(s => s.trim() !== ""),
          materials: editedMaterials.filter(m => m.trim() !== ""),
          age_groups: editedAgeGroups,
          duration_minutes: durationVal,
          min_participants: minP,
          tags: editedSelectedCategories
        })
        setIsEditingBrincadeira(false)
        router.refresh()
      } catch (error) {
        console.error("Erro ao atualizar brincadeira:", error)
      }
    })
  }

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
    // Optimistic UI
    setIsLiked(!isLiked)
    setLocalLikes(prev => isLiked ? prev - 1 : prev + 1)
    
    startTransition(async () => {
      try {
        await toggleLike(id)
        router.refresh()
      } catch (error) {
        // Rollback on error
        setIsLiked(isLiked)
        setLocalLikes(localLikes)
      }
    })
  }

  const handleUse = async (e: React.MouseEvent) => {
    e.stopPropagation()
    // Optimistic UI
    setIsUsed(!isUsed)
    setLocalUsed(prev => isUsed ? prev - 1 : prev + 1)

    startTransition(async () => {
      try {
        await toggleUsed(id)
        router.refresh()
      } catch (error) {
        // Rollback on error
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
                • {creator.title || getTitleForLevel(creator.level)}
              </span>
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-tight">
                • Nível {creator.level}
              </span>
              <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-tight">
                • {publishedAt}
              </span>
            </div>
          </div>
        </Link>
      </CardHeader>

      <CardContent className="px-4 py-0.5">
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

        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest bg-secondary/30 px-1.5 py-0.5 rounded">
              #{tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="px-4 py-2.5 flex justify-between items-center bg-card border-none">
        <div className="flex gap-3.5">
          <button 
            onClick={handleLike}
            className="flex items-center gap-1.5 text-muted-foreground active:scale-90 transition-all font-bold"
          >
            <motion.div
              key={isLiked ? "liked" : "unliked"}
              initial={{ scale: 0.8 }}
              animate={{ scale: isLiked ? [0.8, 1.2, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              {isLiked ? (
                <RiHeartFill size={24} className="text-[#EF4444]" />
              ) : (
                <RiHeartLine size={24} />
              )}
            </motion.div>
            <span className={isLiked ? "text-[#EF4444]" : "text-muted-foreground"}>{localLikes}</span>
          </button>

          <button 
            onClick={handleUse}
            className="flex items-center gap-2 text-muted-foreground active:scale-90 transition-all font-medium"
          >
            <motion.div
              key={isUsed ? "used" : "unused"}
              initial={{ scale: 0.8 }}
              animate={{ scale: isUsed ? [0.8, 1.2, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              {isUsed ? (
                <RiCheckboxCircleFill size={24} className="text-[#16A34A]" />
              ) : (
                <RiCheckboxCircleLine size={24} />
              )}
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
            <Button variant="ghost" className="text-muted-foreground active:bg-gray-100 text-[14px] h-9 px-4 font-bold rounded-[6px] transition-colors">
               Ver Detalhes
             </Button>
           </SheetTrigger>
           <SheetContent side="bottom" className="h-[92dvh] rounded-t-[24px] p-0 flex flex-col border-none bg-background overflow-hidden outline-none">
              {/* Header Fixo (Top Bar) - Padronizado */}
              <div className="flex items-center justify-between h-16 bg-background/95 backdrop-blur-md border-b border-border px-5 shrink-0 z-50">
                <div className="flex items-center gap-3">
                  <SheetClose asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-10 w-10 rounded-full bg-muted text-muted-foreground active:scale-90 transition-all"
                      onClick={() => setIsEditingBrincadeira(false)}
                    >
                      <RiArrowLeftSLine size={24} />
                    </Button>
                  </SheetClose>
                  {isEditingBrincadeira ? (
                    <span className="text-[17px] font-extrabold text-foreground">Editando</span>
                  ) : (
                    <span className="text-[17px] font-extrabold text-foreground max-w-[200px] truncate">{title}</span>
                  )}
                </div>

                {isOwner && (
                  <div className="flex items-center gap-2">
                    {!isEditingBrincadeira ? (
                      <div className="flex items-center gap-1.5">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-10 w-10 text-muted-foreground active:bg-muted rounded-full transition-colors"
                          onClick={() => setIsEditingBrincadeira(true)}
                        >
                          <RiEditLine size={22} />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-10 w-10 text-muted-foreground active:text-red-500 active:bg-red-50 rounded-full transition-colors"
                          onClick={handleDeleteBrincadeira}
                        >
                          <RiDeleteBinLine size={22} />
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="ghost" 
                          className="h-9 px-4 text-muted-foreground font-bold text-[14px] hover:bg-transparent"
                          onClick={() => setIsEditingBrincadeira(false)}
                        >
                          Cancelar
                        </Button>
                        <Button 
                          className="h-9 px-6 bg-primary text-white font-bold text-[14px] rounded-full shadow-md border-none active:scale-95 transition-all"
                          onClick={handleUpdateBrincadeira}
                          disabled={isPending}
                        >
                          {isPending ? <RiLoader4Line className="animate-spin" size={18} /> : "Salvar"}
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Scrollable Content */}
              <div className={cn(
                "flex-1 overflow-y-auto px-5 py-6 space-y-8",
                isEditingBrincadeira ? "pb-24" : "pb-32"
              )}>
                <div className="space-y-6">
                <Link href={`/recreador/${creator.id}`} className="flex items-center gap-4 active:opacity-70 transition-opacity">
                  <UserAvatar 
                    src={creator.avatar} 
                    name={creator.name} 
                    rankBadge={creator.rankBadge}
                    className="h-10 w-10"
                    fallbackClassName="bg-primary/10 text-primary px-3"
                  />
                  <div className="flex flex-col">
                    <span className="text-[17px] font-extrabold text-foreground leading-tight">
                      {creator.name}
                    </span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[11px] font-bold uppercase tracking-tight text-muted-foreground">
                        {creator.title || getTitleForLevel(creator.level)}
                      </span>
                      <span className="text-[12px] font-extrabold text-primary uppercase tracking-wider">
                        • Nível {creator.level}
                      </span>
                    </div>
                  </div>
                </Link>

                {isEditingBrincadeira ? (
                    <div className="space-y-6">
                      {/* Name and Description */}
                      <div className="space-y-4">
                        <div>
                          <label className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest mb-2 block">Título</label>
                          <input 
                            className="w-full h-11 px-4 bg-[#F2F2F7] rounded-[10px] text-[15px] font-bold text-foreground border-none outline-none focus:ring-2 focus:ring-primary/20"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest mb-2 block">Descrição Curta</label>
                          <textarea 
                            className="w-full p-4 bg-[#F2F2F7] rounded-[10px] text-[14px] font-medium text-foreground border-none outline-none focus:ring-2 focus:ring-primary/20 min-h-[80px] resize-none"
                            value={editedDescription}
                            onChange={(e) => setEditedDescription(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Categories */}
                      <div>
                        <label className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest mb-3 block">Categoria</label>
                        <div className="flex flex-wrap gap-2">
                          {["Físico", "Musical", "Criativo", "Educativo", "Cooperação"].map(cat => (
                            <button
                              key={cat}
                              onClick={() => setEditedSelectedCategories([cat])}
                              className={cn(
                                "text-[12px] font-bold rounded-full px-4 py-2 transition-all border",
                                editedSelectedCategories.includes(cat) 
                                  ? "bg-primary text-white border-primary" 
                                  : "bg-[#F2F2F7] text-[#8E8E93] border-transparent"
                              )}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest mb-2 block">Tempo (min)</label>
                          <input 
                            type="number"
                            className="w-full h-10 px-3 bg-[#F2F2F7] rounded-[8px] text-[14px] font-bold text-foreground border-none"
                            value={editedDuration}
                            onChange={(e) => setEditedDuration(e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest mb-2 block">Pessoas (min)</label>
                          <input 
                            type="number"
                            className="w-full h-10 px-3 bg-[#F2F2F7] rounded-[8px] text-[14px] font-bold text-foreground border-none"
                            value={editedParticipants}
                            onChange={(e) => setEditedParticipants(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Age groups */}
                      <div>
                        <label className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest mb-3 block">Faixa Etária</label>
                        <div className="flex flex-wrap gap-2">
                          {[
                            { id: "AGE_3_5", label: "3-5 anos" },
                            { id: "AGE_6_9", label: "6-9 anos" },
                            { id: "AGE_10_PLUS", label: "10+ anos" }
                          ].map(age => (
                            <button
                              key={age.id}
                              onClick={() => setEditedAgeGroups([age.id])}
                              className={cn(
                                "text-[12px] font-bold rounded-full px-4 py-2 transition-all border",
                                editedAgeGroups.includes(age.id) 
                                  ? "bg-primary text-white border-primary" 
                                  : "bg-[#F2F2F7] text-[#8E8E93] border-transparent"
                              )}
                            >
                              {age.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Materials */}
                      <div className="space-y-3">
                        <label className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest block">Materiais</label>
                        <div className="space-y-2">
                          {editedMaterials.map((mat, index) => (
                            <div key={`edit-mat-${index}`} className="flex items-center gap-2">
                              <input 
                                className="flex-1 h-10 px-3 bg-[#F2F2F7] rounded-[8px] text-[14px] text-foreground font-medium border-none"
                                value={mat}
                                onChange={(e) => {
                                  const newMats = [...editedMaterials]
                                  newMats[index] = e.target.value
                                  setEditedMaterials(newMats)
                                }}
                              />
                              <button 
                                onClick={() => setEditedMaterials(editedMaterials.filter((_, i) => i !== index))}
                                className="text-muted-foreground p-1 hover:text-red-500"
                              >
                                <RiCloseLine size={20} />
                              </button>
                            </div>
                          ))}
                          <button 
                            onClick={() => setEditedMaterials([...editedMaterials, ""])}
                            className="text-[13px] font-extrabold text-primary flex items-center gap-1 mt-1"
                          >
                            <RiAddLine size={18} /> Adicionar Material
                          </button>
                        </div>
                      </div>

                      {/* Steps */}
                      <div className="space-y-3">
                         <label className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest block">Passo a Passo</label>
                         <div className="space-y-3">
                           {editedSteps.map((step, index) => (
                             <div key={`edit-step-${index}`} className="flex gap-2">
                               <div className="shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary font-extrabold text-[12px] flex items-center justify-center mt-2">
                                 {index + 1}
                               </div>
                               <textarea 
                                 className="flex-1 p-3 bg-[#F2F2F7] rounded-[8px] text-[14px] text-foreground font-medium border-none min-h-[60px] resize-none"
                                 value={step}
                                 onChange={(e) => {
                                   const newSteps = [...editedSteps]
                                   newSteps[index] = e.target.value
                                   setEditedSteps(newSteps)
                                 }}
                               />
                               <button 
                                 onClick={() => setEditedSteps(editedSteps.filter((_, i) => i !== index))}
                                 className="text-muted-foreground p-1 hover:text-red-500"
                               >
                                 <RiCloseLine size={20} />
                               </button>
                             </div>
                           ))}
                           <button 
                            onClick={() => setEditedSteps([...editedSteps, ""])}
                            className="text-[13px] font-extrabold text-primary flex items-center gap-1 mt-1"
                           >
                             <RiAddLine size={18} /> Adicionar Passo
                           </button>
                         </div>
                      </div>
                    </div>
                ) : (
                  <>
                    <h3 className="text-[24px] font-extrabold leading-tight text-foreground tracking-[-0.03em]">
                      {title}
                    </h3>
                    
                    <p className="text-[16px] leading-relaxed text-foreground font-medium opacity-80">
                      {description}
                    </p>

                    {materials.length > 0 && (
                      <div className="space-y-3 pt-2">
                        <label className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest">Materiais</label>
                        <div className="flex flex-wrap gap-2">
                          {materials.map((mat, i) => (
                            <span key={i} className="px-3 py-1.5 bg-[#F2F2F7] rounded-full text-[13px] font-medium text-foreground">
                              • {mat}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {steps.length > 0 && (
                      <div className="space-y-4 pt-2">
                        <label className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest">Passo a Passo</label>
                        <div className="space-y-4">
                          {steps.map((step, i) => (
                            <div key={i} className="flex gap-4">
                              <div className="shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary font-extrabold text-[12px] flex items-center justify-center mt-1">
                                {i + 1}
                              </div>
                              <p className="text-[15px] text-foreground leading-relaxed font-medium opacity-90">
                                {step}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}

                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-[var(--blue-bg)] rounded-[4px] text-[13px] font-bold text-[var(--blue)]">
                    <RiUserVoiceLine size={16} />
                    {formatAgeGroup(metadata.ageRange)}
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-[var(--purple-bg)] rounded-[4px] text-[13px] font-bold text-[var(--purple)]">
                    <RiTimeLine size={16} />
                    {metadata.duration}
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-[var(--yellow-bg)] rounded-[4px] text-[13px] font-bold text-[var(--yellow)]">
                    <RiGroupLine size={16} />
                    {metadata.participants}
                  </div>
                </div>

                {!isEditingBrincadeira && (
                  <div className="pt-8 border-t border-border">
                    <h4 className="text-[18px] font-extrabold text-foreground mb-6 tracking-[-0.02em]">
                      Comentários ({comments.length})
                    </h4>
                    
                    {comments.length === 0 ? (
                      <p className="text-[14px] text-muted-foreground text-center py-8">Nenhum comentário ainda. Seja o primeiro a comentar!</p>
                    ) : (
                      <div className="space-y-6">
                        {comments.map((comment: any) => {
                          const isOwner = currentUserId === comment.user_id
                          const isEditing = editingCommentId === comment.id
                          const isDeleting = isDeletingId === comment.id

                          return (
                            <div key={comment.id} className={cn("flex gap-4 group", isDeleting && "opacity-50 grayscale transition-all")}>
                              <Avatar className="h-8 w-8 flex-shrink-0">
                                <AvatarImage src={comment.user.avatar_url || comment.user.image} />
                                <AvatarFallback className="font-bold">{comment.user.name[0]}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1 flex flex-col gap-1">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <span className="text-[14px] font-bold text-foreground">{comment.user.name}</span>
                                    <span className="text-[12px] text-muted-foreground">
                                      {new Date(comment.created_at).toLocaleDateString("pt-BR")}
                                    </span>
                                  </div>
                                  {isOwner && !isEditing && (
                                    <div className="flex items-center gap-2 transition-opacity">
                                      <button 
                                        onClick={() => {
                                          setEditingCommentId(comment.id)
                                          setEditingCommentText(comment.text)
                                        }}
                                        className="text-muted-foreground active:text-primary transition-colors"
                                      >
                                        <RiEditLine size={16} />
                                      </button>
                                      <button 
                                        onClick={async () => {
                                          if (confirm("Deseja excluir seu comentário?")) {
                                            setIsDeletingId(comment.id)
                                            await deleteComment(comment.id)
                                            setIsDeletingId(null)
                                            router.refresh()
                                          }
                                        }}
                                        className="text-muted-foreground active:text-red-500 transition-colors"
                                      >
                                        {isDeleting ? <RiLoader4Line size={16} className="animate-spin" /> : <RiDeleteBinLine size={16} />}
                                      </button>
                                    </div>
                                  )}
                                </div>
                                
                                {isEditing ? (
                                  <div className="space-y-2 mt-1">
                                    <textarea
                                      className="w-full p-3 rounded-[8px] bg-[#F2F2F7] text-foreground text-[14px] font-medium border-none focus:ring-1 ring-primary/20 resize-none"
                                      value={editingCommentText}
                                      onChange={(e) => setEditingCommentText(e.target.value)}
                                      autoFocus
                                    />
                                    <div className="flex gap-2">
                                      <Button 
                                        size="sm" 
                                        className="h-8 bg-primary text-white font-bold rounded-[4px]"
                                        onClick={async () => {
                                          await updateComment(comment.id, editingCommentText)
                                          setEditingCommentId(null)
                                          router.refresh()
                                        }}
                                      >
                                        Salvar
                                      </Button>
                                      <Button 
                                        variant="ghost" 
                                        size="sm" 
                                        className="h-8 text-muted-foreground font-bold"
                                        onClick={() => setEditingCommentId(null)}
                                      >
                                        Cancelar
                                      </Button>
                                    </div>
                                  </div>
                                ) : (
                                  <p className="text-[14px] text-foreground leading-relaxed opacity-90">
                                    {comment.text}
                                  </p>
                                )}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )}
               </div>
             </div>

             {/* Fixed Footer Action Area */}
             {!isEditingBrincadeira && (
               <div className="px-5 py-4 border-t border-border bg-card safe-area-bottom">
                 {isAddingComment ? (
                   <div className="space-y-4">
                     <textarea
                       autoFocus
                       placeholder="Sua experiência com essa brincadeira..."
                       className="w-full h-24 p-4 rounded-[12px] bg-[#F2F2F7] border-none text-[15px] text-foreground focus:ring-1 focus:ring-primary/20 transition-all resize-none font-medium"
                       value={commentText}
                       onChange={(e) => setCommentText(e.target.value)}
                     />
                     <div className="flex gap-3">
                       <Button 
                         variant="ghost"
                         onClick={() => setIsAddingComment(false)}
                         className="flex-1 h-11 font-bold text-muted-foreground"
                       >
                         Cancelar
                       </Button>
                        <Button 
                          className="flex-2 h-11 bg-primary text-white font-bold rounded-[6px] px-8"
                          onClick={async () => {
                            if (!commentText.trim()) return
                            
                            startTransition(async () => {
                              try {
                                await addComment(id, commentText)
                                setIsAddingComment(false)
                                setCommentText("")
                                router.refresh()
                                // Success feedback: we keep it open so user can see their comment
                              } catch (error) {
                                console.error("Erro ao postar comentário:", error)
                              }
                            })
                          }}
                          disabled={!commentText.trim() || isPending}
                        >
                          {isPending ? (
                            <RiLoader4Line className="animate-spin" size={20} />
                          ) : (
                            "Postar"
                          )}
                        </Button>
                     </div>
                   </div>
                 ) : (
                   <Button 
                     onClick={() => setIsAddingComment(true)}
                     className="w-full h-12 bg-[#FF9500] text-white font-bold rounded-[6px] shadow-sm active:scale-[0.98] transition-all text-[15px]"
                   >
                     Adicionar Comentário
                   </Button>
                 )}
               </div>
             )}
           </SheetContent>
        </Sheet>
      </CardFooter>
    </Card>
  )
}
