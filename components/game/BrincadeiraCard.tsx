"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  RiHeartLine, 
  RiHeartFill, 
  RiCheckboxCircleLine, 
  RiCheckboxCircleFill,
  RiTimeLine,
  RiGroupLine,
  RiUserVoiceLine,
  RiChat3Line,
  RiCloseLine
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
} from "@/components/ui/sheet"
import { getTitleForLevel } from "@/utils/gamification"

interface BrincadeiraCardProps {
  id: string
  title: string
  description: string
  creator: {
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
}

const MOCK_COMMENTS = [
  {
    id: "1",
    user: "Maria Kids",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    text: "As crianças adoraram! Fizemos no final de semana e foi um sucesso.",
    date: "2 dias atrás"
  },
  {
    id: "2",
    user: "João Recreador",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao",
    text: "Ótima variação para grupos grandes. Recomendo usar um apito para o comando.",
    date: "1 semana atrás"
  },
  {
    id: "3",
    user: "Ana Paula",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
    text: "Muito simples de preparar, não precisa de quase nenhum material.",
    date: "2 semanas atrás"
  }
]

export function BrincadeiraCard({
  title,
  description,
  creator,
  metadata,
  tags,
  likesCount,
  usedCount,
  commentsCount = 0
}: BrincadeiraCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isUsed, setIsUsed] = useState(false)
  const [localLikes, setLocalLikes] = useState(likesCount)
  const [localUsed, setLocalUsed] = useState(usedCount)

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsLiked(!isLiked)
    setLocalLikes(prev => isLiked ? prev - 1 : prev + 1)
  }

  const handleUse = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsUsed(!isUsed)
    setLocalUsed(prev => isUsed ? prev - 1 : prev + 1)
  }

  return (
    <Card className="overflow-hidden border-none shadow-[0_8px_24px_rgba(0,0,0,0.04)] rounded-[6px] bg-white transition-transform active:scale-[0.98]">
      <CardHeader className="p-6 pb-2">
        <div className="flex items-center gap-4">
          <Avatar className="h-10 w-10 border-2 border-[#F2F2F7]">
            <AvatarImage src={creator.avatar} />
            <AvatarFallback className="bg-primary/10 text-primary font-bold">{creator.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-[17px] font-extrabold text-[#1A1A1A] tracking-[-0.02em] leading-tight">
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
      </CardHeader>

      <CardContent className="p-6 pt-2">
        <h3 className="text-[20px] font-extrabold leading-tight text-[#1A1A1A] mb-4 tracking-[-0.03em]">
          {title}
        </h3>
        <p className="text-[15px] leading-relaxed text-[#8E8E93] line-clamp-3 mb-6 font-medium">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[var(--blue-bg)] rounded-[4px] text-[13px] font-bold text-[var(--blue)]">
            <RiUserVoiceLine size={16} />
            {metadata.ageRange}
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

        <div className="flex flex-wrap gap-3">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[12px] text-primary font-bold uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="px-6 py-4 flex justify-between items-center">
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
            <span className="text-[15px]">{commentsCount}</span>
          </div>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="text-[#FF9500] active:bg-[#FF9500]/10 text-[15px] h-9 px-4 font-bold rounded-[6px]">
              Ver Detalhes
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[90vh] rounded-t-[20px] px-5 pt-8 overflow-y-auto border-none bg-white">
            <SheetHeader className="mb-6">
              <SheetTitle className="text-[24px] font-extrabold tracking-[-0.03em] text-[#1A1A1A] text-left">
                Ficha da Brincadeira
              </SheetTitle>
            </SheetHeader>

            {/* Reusing the same layout logic for a seamless transition */}
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

              <h3 className="text-[22px] font-extrabold leading-tight text-[#1A1A1A] tracking-[-0.03em]">
                {title}
              </h3>
              
              <p className="text-[16px] leading-relaxed text-[#1A1A1A] font-medium opacity-80">
                {description}
              </p>

              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-[var(--blue-bg)] rounded-[4px] text-[13px] font-bold text-[var(--blue)]">
                  <RiUserVoiceLine size={16} />
                  {metadata.ageRange}
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

              <div className="pt-8 border-t border-[#F2F2F7]">
                <h4 className="text-[18px] font-extrabold text-[#1A1A1A] mb-6 tracking-[-0.02em]">
                  Comentários ({MOCK_COMMENTS.length})
                </h4>
                
                <div className="space-y-6">
                  {MOCK_COMMENTS.map((comment) => (
                    <div key={comment.id} className="flex gap-4">
                      <Avatar className="h-8 w-8 flex-shrink-0">
                        <AvatarImage src={comment.avatar} />
                        <AvatarFallback className="font-bold">{comment.user[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[14px] font-bold text-[#1A1A1A]">{comment.user}</span>
                          <span className="text-[11px] text-[#8E8E93]">{comment.date}</span>
                        </div>
                        <p className="text-[14px] text-[#1A1A1A] leading-relaxed opacity-90">
                          {comment.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button className="w-full h-10 bg-primary text-white font-medium rounded-[6px]">
                    Adicionar Comentário
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </CardFooter>
    </Card>
  )
}
