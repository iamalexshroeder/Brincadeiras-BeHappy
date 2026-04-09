"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { 
  RiHistoryLine, 
  RiHeartFill, 
  RiStarFill, 
  RiChat3Line, 
  RiTimeLine, 
  RiUserGroupLine, 
  RiEditLine, 
  RiDeleteBinLine, 
  RiLoader4Line,
  RiArrowLeftSLine,
  RiCheckLine,
  RiCloseLine,
  RiHeartLine,
  RiCheckboxCircleLine,
  RiCheckboxCircleFill,
  RiUserVoiceLine
} from "@remixicon/react"
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
  "AGE_3_5": "3 a 5 anos",
  "AGE_6_9": "6 a 9 anos",
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
  currentUserId
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

  const handleUpdateBrincadeira = async () => {
    startTransition(async () => {
      try {
        await updateBrincadeira(id, {
          title: editedTitle,
          short_description: editedDescription
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
    <Card className="overflow-hidden border-none shadow-[0_8px_24px_rgba(0,0,0,0.04)] rounded-[6px] bg-white transition-transform active:scale-[0.98]">
      <CardHeader className="p-6 pb-2">
        <div className="flex items-center gap-4">
          <Avatar className="h-10 w-10 border-2 border-[#F2F2F7]">
            <AvatarImage src={creator.avatar} />
            <AvatarFallback className="bg-primary/10 text-primary font-bold">{creator.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col flex-1">
            <span className="text-[16px] font-extrabold text-[#1A1A1A] tracking-[-0.02em] leading-tight">
              {creator.name}
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[12px] font-bold uppercase tracking-tight text-[#8E8E93]">
                {getTitleForLevel(creator.level)}
              </span>
              <span className="text-[12px] font-extrabold text-primary uppercase tracking-wider">
                • Nível {creator.level}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 pt-2">
        <h3 className="text-[18px] font-extrabold leading-tight text-[#1A1A1A] mb-4 tracking-[-0.03em]">
          {title}
        </h3>
        <p className="text-[14px] leading-relaxed text-[#8E8E93] line-clamp-3 mb-6 font-medium opacity-90">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[var(--blue-bg)] rounded-[4px] text-[13px] font-bold text-[var(--blue)]">
            <RiUserVoiceLine size={16} />
            {formatAgeGroup(metadata.ageRange)}
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[var(--purple-bg)] rounded-[4px] text-[13px] font-bold text-[var(--purple)]">
            <RiTimeLine size={16} />
            {metadata.duration}
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[var(--yellow-bg)] rounded-[4px] text-[13px] font-bold text-[var(--yellow)]">
            <RiUserGroupLine size={16} />
            {metadata.participants}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[12px] text-primary font-bold uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="px-6 py-4 flex justify-between items-center bg-white border-none">
        <div className="flex gap-6">
          <button 
            onClick={handleLike}
            className="flex items-center gap-2 text-[#8E8E93] active:scale-90 transition-all font-medium"
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
            <span className={isLiked ? "text-[#EF4444]" : "text-[#8E8E93]"}>{localLikes}</span>
          </button>

          <button 
            onClick={handleUse}
            className="flex items-center gap-2 text-[#8E8E93] active:scale-90 transition-all font-medium"
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
            <span className={isUsed ? "text-[#16A34A]" : "text-[#8E8E93]"}>{localUsed}</span>
          </button>

          <div className="flex items-center gap-2 text-[#8E8E93] font-medium">
            <RiChat3Line size={24} />
            <span className="text-[15px]">{comments.length || commentsCount}</span>
          </div>
        </div>

         <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
           <SheetTrigger asChild>
             <Button variant="ghost" className="text-[#AF52DE] active:bg-[#AF52DE]/5 text-[15px] h-9 px-4 font-bold rounded-[6px] transition-colors">
               Ver Detalhes
             </Button>
           </SheetTrigger>
           <SheetContent side="bottom" className="h-[95vh] rounded-t-[24px] p-0 flex flex-col border-none bg-white overflow-hidden">
              {/* Header Fixo Robusto */}
              <div className="sticky top-0 z-[70] bg-white border-b border-[#F2F2F7] px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <SheetClose asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-10 w-10 rounded-full bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] text-[#8E8E93] active:scale-95 transition-all"
                      onClick={() => {
                        if (isEditingBrincadeira) setIsEditingBrincadeira(false)
                      }}
                    >
                      <RiArrowLeftSLine size={24} />
                    </Button>
                  </SheetClose>
                  {isEditingBrincadeira && (
                    <span className="text-[17px] font-extrabold text-[#1A1A1A]">Editando</span>
                  )}
                </div>

                {isOwner && (
                  <div className="flex items-center gap-2">
                    {!isEditingBrincadeira ? (
                      <>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-10 w-10 text-[#8E8E93] active:bg-gray-50 rounded-full"
                          onClick={() => setIsEditingBrincadeira(true)}
                        >
                          <RiEditLine size={20} />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-10 w-10 text-[#8E8E93] active:text-red-500 active:bg-red-50 rounded-full"
                          onClick={handleDeleteBrincadeira}
                        >
                          <RiDeleteBinLine size={20} />
                        </Button>
                      </>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="ghost" 
                          className="h-9 px-4 text-[#8E8E93] font-bold text-[14px]"
                          onClick={() => setIsEditingBrincadeira(false)}
                        >
                          Cancelar
                        </Button>
                        <Button 
                          className="h-9 px-5 bg-primary text-white font-bold text-[14px] rounded-full shadow-sm border-none"
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
             <div className="flex-1 overflow-y-auto px-5 py-6">
               <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10 border-2 border-[#F2F2F7]">
                    <AvatarImage src={creator.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary font-bold">{creator.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-[17px] font-extrabold text-[#1A1A1A] leading-tight">
                      {creator.name}
                    </span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[11px] font-bold uppercase tracking-tight text-[#8E8E93]">
                        {getTitleForLevel(creator.level)}
                      </span>
                      <span className="text-[12px] font-extrabold text-primary uppercase tracking-wider">
                        • Nível {creator.level}
                      </span>
                    </div>
                  </div>
                </div>

                {isEditingBrincadeira ? (
                  <div className="space-y-4">
                    <div className="space-y-2">
                       <label className="text-[12px] font-bold text-[#8E8E93] uppercase tracking-wider">Título da Brincadeira</label>
                       <input 
                         className="w-full h-12 px-4 rounded-[8px] bg-[#F2F2F7] text-[16px] text-[#1A1A1A] font-bold border-none focus:ring-1 ring-primary/20"
                         value={editedTitle}
                         onChange={(e) => setEditedTitle(e.target.value)}
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[12px] font-bold text-[#8E8E93] uppercase tracking-wider">Descrição</label>
                       <textarea 
                         className="w-full h-32 p-4 rounded-[8px] bg-[#F2F2F7] text-[14px] text-[#1A1A1A] font-medium border-none focus:ring-1 ring-primary/20 resize-none"
                         value={editedDescription}
                         onChange={(e) => setEditedDescription(e.target.value)}
                       />
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-[24px] font-extrabold leading-tight text-[#1A1A1A] tracking-[-0.03em]">
                      {title}
                    </h3>
                    
                    <p className="text-[16px] leading-relaxed text-[#1A1A1A] font-medium opacity-80">
                      {description}
                    </p>
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
                    <RiUserGroupLine size={16} />
                    {metadata.participants}
                  </div>
                </div>

                <div className="pt-8 border-t border-[#F2F2F7]">
                  <h4 className="text-[18px] font-extrabold text-[#1A1A1A] mb-6 tracking-[-0.02em]">
                    Comentários ({comments.length})
                  </h4>
                  
                  {comments.length === 0 ? (
                    <p className="text-[14px] text-[#8E8E93] text-center py-8">Nenhum comentário ainda. Seja o primeiro a comentar!</p>
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
                                  <span className="text-[14px] font-bold text-[#1A1A1A]">{comment.user.name}</span>
                                  <span className="text-[12px] text-[#8E8E93]">
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
                                      className="text-[#8E8E93] active:text-primary transition-colors"
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
                                      className="text-[#8E8E93] active:text-red-500 transition-colors"
                                    >
                                      {isDeleting ? <RiLoader4Line size={16} className="animate-spin" /> : <RiDeleteBinLine size={16} />}
                                    </button>
                                  </div>
                                )}
                              </div>
                              
                              {isEditing ? (
                                <div className="space-y-2 mt-1">
                                  <textarea
                                    className="w-full p-3 rounded-[8px] bg-[#F2F2F7] text-[#1A1A1A] text-[14px] font-medium border-none focus:ring-1 ring-primary/20 resize-none"
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
                                      className="h-8 text-[#8E8E93] font-bold"
                                      onClick={() => setEditingCommentId(null)}
                                    >
                                      Cancelar
                                    </Button>
                                  </div>
                                </div>
                              ) : (
                                <p className="text-[14px] text-[#1A1A1A] leading-relaxed opacity-90">
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
               </div>
             </div>

             {/* Fixed Footer Action Area */}
             <div className="px-5 py-4 border-t border-[#F2F2F7] bg-white safe-area-bottom">
               {isAddingComment ? (
                 <div className="space-y-4">
                   <textarea
                     autoFocus
                     placeholder="Sua experiência com essa brincadeira..."
                     className="w-full h-24 p-4 rounded-[12px] bg-[#F2F2F7] border-none text-[15px] text-[#1A1A1A] focus:ring-1 focus:ring-primary/20 transition-all resize-none font-medium"
                     value={commentText}
                     onChange={(e) => setCommentText(e.target.value)}
                   />
                   <div className="flex gap-3">
                     <Button 
                       variant="ghost"
                       onClick={() => setIsAddingComment(false)}
                       className="flex-1 h-11 font-bold text-[#8E8E93]"
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
           </SheetContent>
        </Sheet>
      </CardFooter>
    </Card>
  )
}
