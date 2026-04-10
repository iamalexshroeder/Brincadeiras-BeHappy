"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { RiCloseLine, RiAddLine, RiLoader4Line } from "@remixicon/react"
import { cn } from "@/lib/utils"
import { createBrincadeira, updateBrincadeira, deleteBrincadeira } from "@/lib/actions"
import { RiDeleteBinLine } from "@remixicon/react"

const CATEGORIES = ["Físico", "Musical", "Criativo", "Educativo", "Cooperação"]
const AGE_LABELS: Record<string, string> = {
  "AGE_3_5": "3-5 anos",
  "AGE_6_9": "6-9 anos",
  "AGE_10_PLUS": "10+ anos",
}

interface BrincadeiraFormProps {
  initialData?: any
  mode: "CREATE" | "EDIT"
  id?: string
}

export default function BrincadeiraForm({ initialData, mode, id }: BrincadeiraFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

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
    if (!title) return alert("Adicione um título para a brincadeira")
    setIsSubmitting(true)

    try {
      const typeMap: Record<string, string> = {
        "Físico": "FISICA",
        "Musical": "MUSICAL",
        "Criativo": "CRIATIVA",
        "Educativo": "EDUCATIVA",
        "Cooperação": "COOPERATIVA",
      }

      // Parse text duration/participants if they contain non-numeric chars
      const durationVal = typeof duration === 'string' ? (duration.match(/(\d+)/g) ? parseInt(duration.match(/(\d+)/g)!.pop()!) : 30) : Number(duration)
      const minP = typeof participants === 'string' ? (participants.match(/(\d+)/g) ? parseInt(participants.match(/(\d+)/g)![0]) : 2) : Number(participants)

      const payload = {
        title,
        short_description: description,
        type: typeMap[selectedCategories[0]] || "CRIATIVA",
        steps: steps.filter(s => s.trim() !== ""),
        materials: materials.filter(m => m.trim() !== ""),
        age_groups: ageGroups,
        min_participants: minP,
        duration_minutes: durationVal,
        animator_level: "MEDIO",
        tags: selectedCategories
      }

      if (mode === "CREATE") {
        await createBrincadeira(payload)
      } else if (mode === "EDIT" && id) {
        await updateBrincadeira(id, payload)
      }

      router.push("/perfil")
      router.refresh()
    } catch (err) {
      console.error(err)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F2F2F7] flex flex-col md:pt-10 transition-colors duration-500">
      {/* Container Principal - Estética de Card Premium */}
      <div className="flex-1 bg-white md:rounded-[32px] shadow-xl flex flex-col md:max-w-3xl md:mx-auto md:w-full md:mb-10 w-full mt-14 md:mt-0 relative mb-0 overflow-hidden">
        
        {/* Header Fixo - Padronizado com o App */}
        <div className="sticky top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-5 border-b border-[#E5E5EA] bg-white lg:bg-white/80 lg:backdrop-blur-md">
          <div>
            <h2 className="text-[20px] font-extrabold text-[#1A1A1A] leading-tight tracking-tight">
              {mode === "CREATE" ? "Nova Brincadeira" : "Editar Brincadeira"}
            </h2>
            <p className="text-[14px] text-[#8E8E93] font-medium mt-0.5">
              {mode === "CREATE" ? "Compartilhe sua diversão com o mundo" : "Ajuste os detalhes da sua criação"}
            </p>
          </div>
          <button
            onClick={() => router.back()}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F2F2F7] text-[#8E8E93] active:scale-90 transition-all shrink-0 hover:bg-[#E5E5EA]"
          >
            <RiCloseLine size={24} />
          </button>
        </div>

        {/* Formulário - Corpo com Scroll Suave */}
        <div className="flex-1 overflow-y-auto px-6 py-8 space-y-10 pb-32 bg-white">
          
          {/* Título e Descrição */}
          <div className="space-y-6">
            <div className="group">
              <label className="text-[12px] font-bold text-[#8E8E93] uppercase tracking-widest mb-2.5 block px-1">Título da Brincadeira</label>
              <input 
                type="text" 
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Ex: Dança das Cadeiras Musical"
                className="w-full bg-[#F2F2F7] border-2 border-transparent rounded-[16px] h-14 px-5 text-[16px] font-bold text-[#1A1A1A] placeholder:text-[#C7C7CC] focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 outline-none transition-all"
              />
            </div>
            
            <div>
              <label className="text-[12px] font-bold text-[#8E8E93] uppercase tracking-widest mb-2.5 block px-1">Descrição Curta</label>
              <textarea 
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Qual o objetivo principal desta brincadeira?"
                className="w-full bg-[#F2F2F7] border-2 border-transparent rounded-[16px] p-5 min-h-[120px] text-[16px] font-medium text-[#1A1A1A] placeholder:text-[#C7C7CC] focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 outline-none resize-none transition-all"
              />
            </div>
          </div>

          {/* Categorias - Seleção Estilizada */}
          <div>
            <label className="text-[12px] font-bold text-[#8E8E93] uppercase tracking-widest mb-4 block px-1">Categoria Principal</label>
            <div className="flex flex-wrap gap-2.5">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategories([cat])}
                  className={cn(
                    "text-[14px] font-bold rounded-full px-5 py-2.5 transition-all border-2",
                    selectedCategories.includes(cat) 
                      ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105" 
                      : "bg-[#F2F2F7] text-[#8E8E93] border-transparent hover:bg-[#E5E5EA]"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Faixa Etária */}
          <div>
            <label className="text-[12px] font-bold text-[#8E8E93] uppercase tracking-widest mb-4 block px-1">Faixa Etária</label>
            <div className="flex flex-wrap gap-2.5">
              {Object.entries(AGE_LABELS).map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => setAgeGroups([id])}
                  className={cn(
                    "text-[14px] font-bold rounded-full px-5 py-2.5 transition-all border-2",
                    ageGroups.includes(id) 
                      ? "bg-[#6366F1] text-white border-[#6366F1] shadow-lg shadow-[#6366F1]/20 scale-105" 
                      : "bg-[#F2F2F7] text-[#8E8E93] border-transparent hover:bg-[#E5E5EA]"
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Stats Grid - Tempo e Pessoas */}
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="text-[12px] font-bold text-[#8E8E93] uppercase tracking-widest mb-2.5 block px-1">Tempo (min)</label>
              <input 
                type="number"
                value={duration}
                onChange={e => setDuration(e.target.value)}
                placeholder="Ex: 30"
                className="w-full bg-[#F2F2F7] border-2 border-transparent rounded-[16px] h-14 px-5 text-[15px] font-bold text-[#1A1A1A] placeholder:text-[#C7C7CC] outline-none focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 transition-all"
              />
            </div>
            <div>
              <label className="text-[12px] font-bold text-[#8E8E93] uppercase tracking-widest mb-2.5 block px-1">Mín. Pessoas</label>
              <input 
                type="number"
                value={participants}
                onChange={e => setParticipants(e.target.value)}
                placeholder="Ex: 5"
                className="w-full bg-[#F2F2F7] border-2 border-transparent rounded-[16px] h-14 px-5 text-[15px] font-bold text-[#1A1A1A] placeholder:text-[#C7C7CC] outline-none focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 transition-all"
              />
            </div>
          </div>

          {/* Materiais - Tags Estilizadas */}
          <div className="space-y-4">
            <label className="text-[12px] font-bold text-[#8E8E93] uppercase tracking-widest block px-1">Materiais Necessários</label>
            <div className="flex flex-wrap gap-2 min-h-[44px]">
              {materials.map((m, i) => (
                <div key={i} className="flex items-center gap-1.5 bg-[#FEF9C3] text-[#A16207] text-[13px] font-bold rounded-xl pl-4 pr-1.5 py-2 animate-in fade-in zoom-in duration-200">
                  {m}
                  <button onClick={() => handleRemoveMaterial(i)} className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-[#FDE68A] transition-colors">
                    <RiCloseLine size={16} />
                  </button>
                </div>
              ))}
              {materials.length === 0 && (
                <span className="text-[14px] text-[#C7C7CC] font-medium pt-2 pl-1">Nenhum material adicionado</span>
              )}
            </div>
            <div className="relative">
              <input 
                type="text" 
                value={newMaterial}
                onChange={e => setNewMaterial(e.target.value)}
                onKeyDown={handleAddMaterial}
                placeholder="Digite o material e aperte Enter"
                className="w-full bg-[#F2F2F7] border-2 border-transparent rounded-[16px] h-14 px-5 text-[15px] font-semibold text-[#1A1A1A] placeholder:text-[#C7C7CC] outline-none focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 transition-all"
              />
              <button 
                onClick={() => {
                  if (newMaterial.trim()) {
                    setMaterials([...materials, newMaterial.trim()])
                    setNewMaterial("")
                  }
                }}
                className="absolute right-3 top-2.5 w-9 h-9 flex items-center justify-center rounded-full bg-white text-primary shadow-sm hover:bg-[#F2F2F7] transition-all"
              >
                <RiAddLine size={20} />
              </button>
            </div>
          </div>

          {/* Passo a Passo - Lista Interativa */}
          <div className="space-y-6">
            <label className="text-[12px] font-bold text-[#8E8E93] uppercase tracking-widest block px-1">Como Jogar (Passo a Passo)</label>
            <div className="space-y-4">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4 group animate-in slide-in-from-left-2 duration-300" style={{ animationDelay: `${i * 50}ms` }}>
                  <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary text-[14px] font-black flex items-center justify-center shrink-0 mt-2.5">
                    {i + 1}
                  </div>
                  <div className="flex-1 relative">
                    <textarea
                      value={step}
                      onChange={e => handleStepChange(i, e.target.value)}
                      placeholder={`O que fazer no etapa ${i + 1}?`}
                      className="w-full bg-[#F2F2F7] border-2 border-transparent rounded-[20px] p-5 pt-4.5 pr-12 min-h-[80px] text-[15px] font-medium text-[#1A1A1A] placeholder:text-[#C7C7CC] outline-none resize-none focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 transition-all"
                    />
                    {steps.length > 1 && (
                      <button 
                        onClick={() => handleRemoveStep(i)}
                        className="absolute right-3 top-3 text-[#C7C7CC] hover:text-[#FF3B30] p-2 hover:bg-red-50 rounded-full transition-all"
                      >
                        <RiCloseLine size={20} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <button 
                onClick={handleAddStep}
                className="h-14 px-6 rounded-[20px] bg-white border-2 border-dashed border-[#E5E5EA] text-[15px] font-bold text-[#8E8E93] flex items-center justify-center w-full gap-2 hover:border-primary/40 hover:text-primary transition-all active:scale-[0.98]"
              >
                <RiAddLine size={20} /> Adicionar Próximo Passo
              </button>
            </div>
          </div>

        </div>

        {/* Footer Fixo de Ação */}
        <div className="sticky bottom-0 left-0 right-0 px-6 py-5 border-t border-[#E5E5EA] bg-white lg:bg-white/80 lg:backdrop-blur-md z-20 flex flex-col sm:flex-row gap-3">
          {mode === "EDIT" && (
            <button
              onClick={handleDelete}
              disabled={isSubmitting}
              className="flex-1 h-14 bg-red-50 text-red-500 text-[16px] font-bold rounded-[20px] flex items-center justify-center gap-2 hover:bg-red-100 active:scale-[0.98] transition-all"
            >
              <RiDeleteBinLine size={20} />
              <span>Excluir</span>
            </button>
          )}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || !title || steps.every(s => s.trim() === "")}
            className={cn(
              "h-14 bg-primary disabled:bg-[#FFE0B2] text-white text-[16px] font-extrabold rounded-[20px] flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-[0.98] transition-all",
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
        </div>

      </div>
    </div>
  )
}
