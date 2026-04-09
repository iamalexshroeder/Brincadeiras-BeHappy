"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { RiCloseLine } from "@remixicon/react"
import { cn } from "@/lib/utils"

const CATEGORIES = ["Físico", "Musical", "Criativo", "Educativo", "Cooperação"]
const AGE_RANGES = ["3-5 anos", "6-9 anos", "10+ anos", "Livre"]

export default function CreateBrincadeiraForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Form State
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  
  const [age, setAge] = useState("")
  const [duration, setDuration] = useState("")
  const [participants, setParticipants] = useState("")

  const [materials, setMaterials] = useState<string[]>([])
  const [newMaterial, setNewMaterial] = useState("")

  const [steps, setSteps] = useState<string[]>([""])

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

      const durationVal = duration.match(/(\d+)/g) ? parseInt(duration.match(/(\d+)/g)!.pop()!) : 30
      const minP = participants.match(/(\d+)/g) ? parseInt(participants.match(/(\d+)/g)![0]) : 2

      const { createBrincadeira } = await import("@/lib/actions")

      await createBrincadeira({
        title,
        short_description: description,
        type: typeMap[selectedCategories[0]] || "CRIATIVA",
        steps: steps.filter(s => s.trim() !== ""),
        materials: materials.filter(m => m.trim() !== ""),
        age_groups: ["AGE_6_9"], // simplified for now
        min_participants: minP,
        duration_minutes: durationVal,
        animator_level: "MEDIO",
        tags: selectedCategories
      })

      router.push("/perfil")
    } catch (err) {
      console.error(err)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black/40 flex flex-col md:pt-10">
      {/* Container imitando painel modal da Biblioteca, fundo branco */}
      <div className="flex-1 bg-white md:rounded-[20px] shadow-sm flex flex-col md:max-w-3xl md:mx-auto md:w-full md:mb-10 w-full mt-14 md:mt-0 relative mb-0">
        
        {/* Header Fixo */}
        <div className="sticky top-0 left-0 right-0 z-20 flex items-start justify-between px-5 py-5 border-b border-[#E5E5EA] bg-white md:rounded-t-[20px]">
          <div>
            <h2 className="text-[18px] font-extrabold text-[#1A1A1A] leading-tight mb-1">Criar Brincadeira</h2>
            <p className="text-[14px] text-[#8E8E93] font-medium">Preencha os detalhes para a comunidade</p>
          </div>
          <button
            onClick={() => router.back()}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F2F2F7] text-[#8E8E93] active:scale-90 transition-all shrink-0"
          >
            <RiCloseLine size={18} />
          </button>
        </div>

        {/* Formulário - Corpo */}
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-8 pb-32 bg-white">
          
          {/* Título e Desc */}
          <div className="space-y-4">
            <div>
              <label className="text-[12px] font-extrabold text-[#8E8E93] uppercase tracking-widest mb-2 block">Título da Brincadeira</label>
              <input 
                type="text" 
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Ex: Dança das Cadeiras Musical"
                className="w-full bg-[#F2F2F7] border-0 rounded-[12px] h-12 px-4 text-[15px] font-semibold text-[#1A1A1A] placeholder:text-[#C7C7CC] focus:ring-2 focus:ring-[#EAB308] outline-none"
              />
            </div>
            
            <div>
              <label className="text-[12px] font-extrabold text-[#8E8E93] uppercase tracking-widest mb-2 block">Descrição Curta</label>
              <textarea 
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Explique rapidamente qual o objetivo..."
                className="w-full bg-[#F2F2F7] border-0 rounded-[12px] p-4 min-h-[100px] text-[15px] text-[#1A1A1A] placeholder:text-[#C7C7CC] focus:ring-2 focus:ring-[#EAB308] outline-none resize-none"
              />
            </div>
          </div>

          {/* Categorias Flat */}
          <div>
            <label className="text-[12px] font-extrabold text-[#8E8E93] uppercase tracking-widest mb-3 block">Categoria</label>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategories([cat])}
                  className={cn(
                    "text-[13px] font-bold rounded-full px-4 py-2 transition-all",
                    selectedCategories.includes(cat) 
                      ? "bg-[#FF9500] text-white" 
                      : "bg-[#F2F2F7] text-[#8E8E93] active:bg-[#E5E5EA]"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Inputs Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="text-[12px] font-extrabold text-[#8E8E93] uppercase tracking-widest mb-2 block">Tempo</label>
              <input 
                type="text"
                value={duration}
                onChange={e => setDuration(e.target.value)}
                placeholder="Ex: 15 min"
                className="w-full bg-[#F2F2F7] border-0 rounded-[12px] h-11 px-4 text-[14px] font-bold text-[#1A1A1A] placeholder:text-[#C7C7CC] outline-none focus:ring-2 focus:ring-[#EAB308]"
              />
            </div>
            <div>
              <label className="text-[12px] font-extrabold text-[#8E8E93] uppercase tracking-widest mb-2 block">Pessoas</label>
              <input 
                type="text"
                value={participants}
                onChange={e => setParticipants(e.target.value)}
                placeholder="Ex: 5-10"
                className="w-full bg-[#F2F2F7] border-0 rounded-[12px] h-11 px-4 text-[14px] font-bold text-[#1A1A1A] placeholder:text-[#C7C7CC] outline-none focus:ring-2 focus:ring-[#EAB308]"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <label className="text-[12px] font-extrabold text-[#8E8E93] uppercase tracking-widest mb-2 block">Idade</label>
              <input 
                type="text"
                value={age}
                onChange={e => setAge(e.target.value)}
                placeholder="Ex: 6+"
                className="w-full bg-[#F2F2F7] border-0 rounded-[12px] h-11 px-4 text-[14px] font-bold text-[#1A1A1A] placeholder:text-[#C7C7CC] outline-none focus:ring-2 focus:ring-[#EAB308]"
              />
            </div>
          </div>

          {/* Materiais Necessários */}
          <div>
            <label className="text-[12px] font-extrabold text-[#8E8E93] uppercase tracking-widest mb-2 block">Materiais</label>
            <div className="flex flex-wrap gap-2 mb-3">
              {materials.map((m, i) => (
                <div key={i} className="flex items-center gap-1 bg-[#FEF9C3] text-[#EAB308] text-[13px] font-bold rounded-[8px] pl-3 pr-1 py-1">
                  {m}
                  <button onClick={() => handleRemoveMaterial(i)} className="w-5 h-5 flex items-center justify-center opacity-60 hover:opacity-100">
                    <RiCloseLine size={14} />
                  </button>
                </div>
              ))}
            </div>
            <input 
              type="text" 
              value={newMaterial}
              onChange={e => setNewMaterial(e.target.value)}
              onKeyDown={handleAddMaterial}
              placeholder="Digite o material e aperte Enter"
              className="w-full bg-[#F2F2F7] border-0 rounded-[12px] h-11 px-4 text-[14px] font-semibold text-[#1A1A1A] placeholder:text-[#C7C7CC] outline-none focus:border focus:border-[#EAB308]"
            />
          </div>

          {/* Passo a Passo */}
          <div>
            <label className="text-[12px] font-extrabold text-[#8E8E93] uppercase tracking-widest mb-3 block">Como Jogar</label>
            <div className="space-y-3">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#EAB308] text-white text-[11px] font-black flex items-center justify-center shrink-0 mt-2">
                    {i + 1}
                  </div>
                  <div className="flex-1 relative">
                    <textarea
                      value={step}
                      onChange={e => handleStepChange(i, e.target.value)}
                      placeholder={`Passo ${i + 1}...`}
                      className="w-full bg-[#F2F2F7] border-0 rounded-[12px] p-4 pt-3.5 pr-10 min-h-[60px] text-[14px] text-[#1A1A1A] placeholder:text-[#C7C7CC] outline-none resize-none focus:ring-2 focus:ring-[#EAB308]"
                    />
                    {steps.length > 1 && (
                      <button 
                        onClick={() => handleRemoveStep(i)}
                        className="absolute right-3 top-3 text-[#C7C7CC] hover:text-[#FF3B30] p-1"
                      >
                        <RiCloseLine size={16} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <button 
                onClick={handleAddStep}
                className="h-11 px-4 rounded-[12px] bg-[#F9F9F7] border border-[#E5E5EA] text-[13px] font-bold text-[#1A1A1A] flex items-center justify-center w-full active:bg-[#F2F2F7]"
              >
                + Adicionar Passo
              </button>
            </div>
          </div>

        </div>

        {/* Fixed Footer para Salvar */}
        <div className="sticky bottom-0 left-0 right-0 px-5 py-4 border-t border-[#E5E5EA] bg-white md:rounded-b-[20px] z-20">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || !title || steps[0] === ""}
            className="w-full h-12 bg-[#FF9500] disabled:bg-[#FFE0B2] text-white text-[15px] font-bold rounded-[14px] flex items-center justify-center transition-all"
          >
            {isSubmitting ? "Publicando..." : "Publicar Brincadeira"}
          </button>
        </div>

      </div>
    </div>
  )
}
