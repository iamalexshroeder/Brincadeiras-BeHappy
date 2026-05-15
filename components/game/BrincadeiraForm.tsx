"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { RiCloseLine, RiAddLine, RiLoader4Line } from "@remixicon/react"
import { cn } from "@/lib/utils"
import { createBrincadeira, updateBrincadeira, deleteBrincadeira } from "@/lib/actions"
import { RiDeleteBinLine } from "@remixicon/react"
import Link from "next/link"
import { toast } from "sonner"

const CATEGORIES = ["Físico", "Musical", "Criativo", "Educativo", "Cooperação"]
const AGE_LABELS: Record<string, string> = {
  "AGE_3_5": "3-5 anos",
  "AGE_6_9": "6-9 anos",
  "AGE_10_PLUS": "10+ anos",
}

interface BrincadeiraFormProps {
  initialData?: any
  mode: "CREATE" | "EDIT" | "VIEW"
  id?: string
  isOwner?: boolean
}

export default function BrincadeiraForm({ initialData, mode, id, isOwner = false }: BrincadeiraFormProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isSubmitting, setIsSubmitting] = useState(false)

  // O BottomNav só aparece fora de /criar e /login
  const hasBottomNav = pathname !== "/criar" && pathname !== "/login"
  const footerBottomClass = hasBottomNav 
    ? "bottom-[calc(64px+env(safe-area-inset-bottom))]" 
    : "bottom-0"

  // Form State
  const [title, setTitle] = useState(initialData?.title || "")
  const [description, setDescription] = useState(initialData?.description || initialData?.short_description || "")
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialData?.tags || [])
  
  const [ageGroups, setAgeGroups] = useState<string[]>(initialData?.rawAgeGroups || initialData?.age_groups || ["AGE_6_9"])
  const [duration, setDuration] = useState(initialData?.rawDuration?.toString() || initialData?.duration_minutes?.toString() || "")
  const [participants, setParticipants] = useState(initialData?.rawParticipants?.toString() || initialData?.min_participants?.toString() || "")

  const [materials, setMaterials] = useState<string[]>(initialData?.materials || [])
  const [newMaterial, setNewMaterial] = useState("")

  const [steps, setSteps] = useState<string[]>(initialData?.steps || [""])

  const handleAddMaterial = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newMaterial.trim() !== "") {
      e.preventDefault()
      setMaterials([...materials, newMaterial.trim()])
      setNewMaterial("")
    }
  }

  const handleRemoveMaterial = (index: number) => {
    setMaterials(materials.filter((_, i) => i !== index))
  }

  const handleStepChange = (index: number, value: string) => {
    const newSteps = [...steps]
    newSteps[index] = value
    setSteps(newSteps)
  }

  const handleAddStep = () => setSteps([...steps, ""])
  const handleRemoveStep = (index: number) => setSteps(steps.filter((_, i) => i !== index))

  const handleDelete = async () => {
    if (confirm("Tem certeza que deseja excluir esta brincadeira permanentemente?")) {
      setIsSubmitting(true)
      try {
        if (id) {
          await deleteBrincadeira(id)
          router.push("/perfil")
          router.refresh()
        }
      } catch (err) {
        console.error(err)
        setIsSubmitting(false)
      }
    }
  }

  const handleSubmit = async () => {
    // Basic Validation
    if (!title.trim()) return toast.error("O título é obrigatório")
    if (!description.trim()) return toast.error("A descrição é obrigatória")
    if (selectedCategories.length === 0) return toast.error("Selecione pelo menos uma categoria")
    if (ageGroups.length === 0) return toast.error("Selecione pelo menos uma faixa etária")
    
    const durationNum = parseInt(duration)
    if (isNaN(durationNum) || durationNum <= 0) return toast.error("Informe um tempo válido (em minutos)")
    
    const participantsNum = parseInt(participants)
    if (isNaN(participantsNum) || participantsNum <= 0) return toast.error("Informe o número mínimo de participantes")

    const filteredSteps = steps.filter(s => s.trim() !== "")
    if (filteredSteps.length === 0) return toast.error("Adicione pelo menos um passo no 'Como Jogar'")

    setIsSubmitting(true)

    try {
      const typeMap: Record<string, string> = {
        "Físico": "FISICA",
        "Musical": "MUSICAL",
        "Criativo": "CRIATIVA",
        "Educativo": "EDUCATIVA",
        "Cooperação": "COOPERATIVA",
      }

      const payload = {
        title: title.trim(),
        short_description: description.trim(),
        type: typeMap[selectedCategories[0]] || "CRIATIVA",
        steps: filteredSteps,
        materials: materials.filter(m => m.trim() !== ""),
        age_groups: ageGroups,
        min_participants: participantsNum,
        duration_minutes: durationNum,
        animator_level: "MEDIO",
        tags: selectedCategories
      }

      if (mode === "CREATE") {
        const newGame = await createBrincadeira(payload)
        if (newGame?.id) {
          toast.success("Brincadeira publicada com sucesso!")
          router.push(`/brincadeira/${newGame.id}`)
          return
        }
      } else if (mode === "EDIT" && id) {
        await updateBrincadeira(id, payload)
        toast.success("Alterações salvas!")
        router.push(`/brincadeira/${id}`)
        return
      }

      router.push("/perfil")
      router.refresh()
    } catch (err) {
      console.error(err)
      toast.error("Ocorreu um erro ao salvar. Tente novamente.")
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Formulário - Corpo */}
      <div className="space-y-8 pb-36">

        {/* Título e Descrição */}
        <div className="space-y-5">
          <div>
            <label className="section-label mb-2 block">Título da Brincadeira</label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Ex: Dança das Cadeiras Musical"
              className={cn("input-base font-bold", mode === "VIEW" && "bg-transparent border-none px-0 shadow-none text-[20px] h-auto")}
              readOnly={mode === "VIEW"}
            />
          </div>

          <div>
            <label className="section-label mb-2 block">Descrição Curta</label>
            {mode === "VIEW" ? (
              <p className="text-[15px] font-medium text-foreground leading-relaxed whitespace-pre-wrap py-1">
                {description || "Sem descrição disponível."}
              </p>
            ) : (
              <div className="space-y-2">
                <textarea
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  placeholder="Seja descritivo! Explique o objetivo e o clima da brincadeira para inspirar outros monitores."
                  className={cn(
                    "textarea-base min-h-[120px] transition-all",
                    description.length > 0 && description.length < 30 && "border-amber-200 focus:border-amber-400"
                  )}
                />
                <p className={cn(
                  "text-[11px] font-bold px-1 transition-all",
                  description.length > 0 && description.length < 30 ? "text-amber-500" : "text-[#8E8E93]"
                )}>
                  {description.length > 0 && description.length < 30 
                    ? "⚠️ Tente descrever um pouco mais para ajudar quem for ler!" 
                    : "Dica: Descrições completas aumentam o engajamento da brincadeira."}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Categorias */}
        <div>
          <label className="section-label mb-3 block">Categoria Principal</label>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => {
              const idx = selectedCategories.indexOf(cat)
              const isFirst = idx === 0
              const isExtra = idx > 0
              const isSelected = idx !== -1
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    if (mode === "VIEW") return
                    if (isSelected) {
                      setSelectedCategories(selectedCategories.filter(c => c !== cat))
                    } else {
                      setSelectedCategories([...selectedCategories, cat])
                    }
                  }}
                  className={cn(
                    "h-9 px-4 rounded-full text-[13px] font-bold border-2 transition-all active:scale-95",
                    isFirst && "bg-[#FF9500] text-white border-[#FF9500]",
                    isExtra && "bg-[#007AFF] text-white border-[#007AFF]",
                    !isSelected && "bg-[#F2F2F7] text-[#8E8E93] border-transparent",
                    mode === "VIEW" && !isSelected && "hidden",
                    mode === "VIEW" && "pointer-events-none"
                  )}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* Faixa Etária */}
        <div>
          <label className="section-label mb-3 block">Faixa Etária</label>
          <div className="flex flex-wrap gap-2">
            {Object.entries(AGE_LABELS).map(([ageId, label]) => (
              <button
                key={ageId}
                type="button"
                onClick={() => {
                  if (mode === "VIEW") return
                  if (ageGroups.includes(ageId)) {
                    setAgeGroups(ageGroups.filter(a => a !== ageId))
                  } else {
                    setAgeGroups([...ageGroups, ageId])
                  }
                }}
                className={cn(
                  "h-9 px-4 rounded-full text-[13px] font-bold border-2 transition-all active:scale-95",
                  ageGroups.includes(ageId)
                    ? "bg-[#6366F1] text-white border-[#6366F1]"
                    : "bg-[#F2F2F7] text-[#8E8E93] border-transparent",
                  mode === "VIEW" && !ageGroups.includes(ageId) && "hidden",
                  mode === "VIEW" && "pointer-events-none"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="section-label mb-2 block">Tempo (min)</label>
            <input
              type="number"
              min="1"
              step="1"
              value={duration}
              onChange={e => setDuration(e.target.value)}
              placeholder="Ex: 30"
              className={cn("input-base", mode === "VIEW" && "bg-transparent border-none px-0 shadow-none pointer-events-none text-[18px]")}
              readOnly={mode === "VIEW"}
              required
            />
          </div>
          <div>
            <label className="section-label mb-2 block">Mín. Pessoas</label>
            <input
              type="number"
              min="1"
              step="1"
              value={participants}
              onChange={e => setParticipants(e.target.value)}
              placeholder="Ex: 5"
              className={cn("input-base", mode === "VIEW" && "bg-transparent border-none px-0 shadow-none pointer-events-none text-[18px]")}
              readOnly={mode === "VIEW"}
              required
            />
          </div>
        </div>

        {/* Materiais */}
        <div className="space-y-3">
          <label className="section-label block">Materiais Necessários</label>
          <div className="flex flex-wrap gap-2 min-h-[36px]">
            {materials.map((m, i) => (
              <div key={i} className="flex items-center gap-1.5 bg-[#FEF9C3] text-[#A16207] text-[13px] font-bold rounded-full pl-4 pr-1.5 py-1.5 animate-in fade-in zoom-in duration-200">
                <span className={mode === "VIEW" ? "pr-3" : ""}>{m}</span>
                {mode !== "VIEW" && (
                  <button type="button" onClick={() => handleRemoveMaterial(i)} className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-[#FDE68A] transition-colors">
                    <RiCloseLine size={14} />
                  </button>
                )}
              </div>
            ))}
            {materials.length === 0 && (
              <span className="text-[14px] text-[#C7C7CC] font-medium pt-1 pl-1">Nenhum material adicionado</span>
            )}
          </div>
          {mode !== "VIEW" && (
            <div className="relative">
              <input
                type="text"
                value={newMaterial}
                onChange={e => setNewMaterial(e.target.value)}
                onKeyDown={handleAddMaterial}
                placeholder="Digite o material e pressione Enter"
                className="input-base pr-12"
              />
              <button
                type="button"
                onClick={() => {
                  if (newMaterial.trim()) {
                    setMaterials([...materials, newMaterial.trim()])
                    setNewMaterial("")
                  }
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white text-primary shadow-sm hover:bg-[#F2F2F7] transition-all"
              >
                <RiAddLine size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Passo a Passo */}
        <div className="space-y-4">
          <label className="section-label block">Como Jogar (Passo a Passo)</label>
          <div className="space-y-3">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-3 animate-in slide-in-from-left-2 duration-300" style={{ animationDelay: `${i * 50}ms` }}>
                <div className="w-8 h-8 rounded-[10px] bg-primary/10 text-primary text-[13px] font-black flex items-center justify-center shrink-0 mt-3">
                  {i + 1}
                </div>
                <div className="flex-1 relative">
                  {mode === "VIEW" ? (
                    <div className="text-[16px] font-medium text-foreground leading-relaxed py-2.5 whitespace-pre-wrap">
                      {step}
                    </div>
                  ) : (
                    <div className="space-y-1.5 w-full">
                      <textarea
                        value={step}
                        onChange={e => handleStepChange(i, e.target.value)}
                        placeholder={`Diga exatamente o que fazer no passo ${i + 1}. Evite textos cortados!`}
                        className={cn(
                          "w-full bg-[#F2F2F7] border-2 border-transparent rounded-[12px] p-4 pr-12 min-h-[100px] text-[15px] font-medium text-[#1A1A1A] placeholder:text-[#C7C7CC] outline-none resize-none focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 transition-all",
                          step.length > 0 && step.length < 20 && "border-amber-200"
                        )}
                      />
                      {step.length > 0 && step.length < 20 && (
                        <p className="text-[10px] font-bold text-amber-500 px-1">
                          Este passo parece muito curto. Tente detalhar mais!
                        </p>
                      )}
                    </div>
                  )}
                  {steps.length > 1 && mode !== "VIEW" && (
                    <button
                      type="button"
                      onClick={() => handleRemoveStep(i)}
                      className="absolute right-2 top-2 text-[#C7C7CC] hover:text-[#FF3B30] p-1.5 hover:bg-red-50 rounded-full transition-all"
                    >
                      <RiCloseLine size={18} />
                    </button>
                  )}
                </div>
              </div>
            ))}
            {mode !== "VIEW" && (
              <button
                type="button"
                onClick={handleAddStep}
                className="h-13 px-4 rounded-[12px] bg-white border-2 border-dashed border-[#E5E5EA] text-[14px] font-bold text-[#8E8E93] flex items-center justify-center w-full gap-2 hover:border-primary/40 hover:text-primary transition-all active:scale-[0.98]"
              >
                <RiAddLine size={18} /> Adicionar Próximo Passo
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Footer de Ação */}
      {(mode !== "VIEW" || (mode === "VIEW" && isOwner)) && (
        <div className={cn(
          "fixed left-0 right-0 px-4 sm:px-5 py-4 border-t border-border bg-white z-40 flex gap-3 pb-safe no-print shadow-[0_-8px_20px_rgba(0,0,0,0.05)]",
          footerBottomClass
        )}>
          {mode === "VIEW" && isOwner && (
            <>
              <button
                type="button"
                onClick={handleDelete}
                disabled={isSubmitting}
                className="flex-1 btn-danger"
              >
                <RiDeleteBinLine size={20} />
                <span>Excluir</span>
              </button>
              <Link href={`/editar/${id}`} className="flex-[2] flex">
                <button type="button" className="btn-secondary w-full">
                  Editar Brincadeira
                </button>
              </Link>
            </>
          )}

          {mode === "EDIT" && (
            <button
              type="button"
              onClick={handleDelete}
              disabled={isSubmitting}
              className="flex-1 btn-danger"
            >
              <RiDeleteBinLine size={20} />
              <span>Excluir</span>
            </button>
          )}

          {(mode === "CREATE" || mode === "EDIT") && (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={cn(
                "btn-primary",
                mode === "EDIT" ? "flex-[2]" : "w-full"
              )}
            >
              {isSubmitting ? (
                <>
                  <RiLoader4Line className="animate-spin" size={20} />
                  <span>{mode === "CREATE" ? "Publicando..." : "Salvando..."}</span>
                </>
              ) : (
                <span>{mode === "CREATE" ? "Publicar Brincadeira" : "Salvar Alterações"}</span>
              )}
            </button>
          )}
        </div>
      )}
    </div>
  )
}
