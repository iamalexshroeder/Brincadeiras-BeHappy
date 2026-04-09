"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { RiArrowLeftSLine, RiAddLine, RiCloseLine } from "@remixicon/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { cn } from "@/lib/utils"

const CATEGORIES = ["Físico", "Musical", "Criativo", "Educativo", "Cooperação", "Concentração"]
const AGE_RANGES = ["3-5 anos", "6-9 anos", "10+ anos", "Todas as idades"]
const DURATIONS = ["5-10 min", "15-30 min", "30-60 min", "Livre"]
const PARTICIPANTS = ["Duplas", "4-10", "10-20", "Grupos grandes"]

export default function CreateBrincadeiraForm() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const totalSteps = 3

  // Form State
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  
  const [age, setAge] = useState("")
  const [duration, setDuration] = useState("")
  const [participants, setParticipants] = useState("")

  const [materials, setMaterials] = useState<string[]>([])
  const [steps, setSteps] = useState<string[]>([""])

  const progress = (step / totalSteps) * 100

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1)
    else handleSubmit()
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
    else router.back()
  }

  const handleAddMaterial = () => setMaterials([...materials, ""])
  const handleMaterialChange = (index: number, value: string) => {
    const newMaterials = [...materials]
    newMaterials[index] = value
    setMaterials(newMaterials)
  }
  const handleRemoveMaterial = (index: number) => {
    setMaterials(materials.filter((_, i) => i !== index))
  }

  const handleAddStep = () => setSteps([...steps, ""])
  const handleStepChange = (index: number, value: string) => {
    const newSteps = [...steps]
    newSteps[index] = value
    setSteps(newSteps)
  }
  const handleRemoveStep = (index: number) => {
    setSteps(steps.filter((_, i) => i !== index))
  }

  const handleSubmit = () => {
    // In the future: backend API call here
    router.push("/perfil")
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-5 pt-12 pb-4 bg-white sticky top-0 z-10 border-b border-[#F2F2F7]">
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleBack}
            className="h-10 w-10 text-[#1A1A1A] -ml-2 active:bg-gray-100 rounded-full"
          >
            <RiArrowLeftSLine size={28} />
          </Button>
          <span className="text-[15px] font-bold text-[#1A1A1A]">
            Passo {step} de {totalSteps}
          </span>
          <div className="w-10" /> {/* Spacer for alignment */}
        </div>
        <Progress value={progress} className="h-1.5 bg-[#F2F2F7]" indicatorClassName="bg-[#AF52DE]" />
      </header>

      <main className="flex-1 px-5 py-8 overflow-y-auto pb-40">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-[28px] font-extrabold text-[#1A1A1A] tracking-[-0.03em] leading-tight mb-2">
                  Qual é a ideia de hoje?
                </h2>
                <p className="text-[15px] text-[#8E8E93] font-medium leading-relaxed">
                  Comece com o básico. Um bom título chama toda atenção.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-[14px] font-extrabold text-[#1A1A1A]">Título da Brincadeira</label>
                  <Input 
                    value={title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                    placeholder="Ex: Pega-Pega Congelado" 
                    className="h-14 bg-[#F9F9F7] border-none rounded-[8px] text-[16px] font-bold px-4 focus-visible:ring-2 ring-primary/20"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[14px] font-extrabold text-[#1A1A1A]">Pequeno Resumo</label>
                  <Textarea 
                    value={description}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                    placeholder="Conte resumidamente como funciona..." 
                    className="min-h-[120px] bg-[#F9F9F7] border-none rounded-[8px] text-[16px] font-medium p-4 resize-none focus-visible:ring-2 ring-primary/20"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[14px] font-extrabold text-[#1A1A1A]">Categoria Principal</label>
                  <ToggleGroup 
                    type="single" 
                    value={category}
                    onValueChange={setCategory}
                    className="flex-wrap justify-start gap-2"
                  >
                    {CATEGORIES.map(cat => (
                      <ToggleGroupItem 
                        key={cat} 
                        value={cat}
                        className={cn(
                          "rounded-[6px] px-5 h-10 text-[14px] font-bold transition-all border border-[#E5E5EA]",
                          "bg-white text-[#8E8E93]",
                          "data-[state=on]:bg-[#FF9500] data-[state=on]:border-[#FF9500] data-[state=on]:text-white data-[state=on]:shadow-sm"
                        )}
                      >
                        {cat}
                      </ToggleGroupItem>
                    ))}
                  </ToggleGroup>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-[28px] font-extrabold text-[#1A1A1A] tracking-[-0.03em] leading-tight mb-2">
                  Detalhes Técnicos
                </h2>
                <p className="text-[15px] text-[#8E8E93] font-medium leading-relaxed">
                  Avalie o perfil dessa atividade para ajudar outros recreadores.
                </p>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <label className="text-[14px] font-extrabold text-[#1A1A1A] uppercase tracking-wider text-[#8E8E93]">Faixa Etária</label>
                  <div className="grid grid-cols-2 gap-3">
                    {AGE_RANGES.map(r => (
                      <button
                        key={r}
                        onClick={() => setAge(r)}
                        className={cn(
                          "h-12 rounded-[8px] font-bold text-[14px] border-2 transition-all",
                          age === r ? "border-primary text-primary bg-primary/5" : "border-[#F2F2F7] text-[#8E8E93] bg-white"
                        )}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[14px] font-extrabold text-[#1A1A1A] uppercase tracking-wider text-[#8E8E93]">Tempo Estimado</label>
                  <div className="grid grid-cols-2 gap-3">
                    {DURATIONS.map(d => (
                      <button
                        key={d}
                        onClick={() => setDuration(d)}
                        className={cn(
                          "h-12 rounded-[8px] font-bold text-[14px] border-2 transition-all",
                          duration === d ? "border-[var(--purple)] text-[var(--purple)] bg-[var(--purple-bg)]" : "border-[#F2F2F7] text-[#8E8E93] bg-white"
                        )}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[14px] font-extrabold text-[#1A1A1A] uppercase tracking-wider text-[#8E8E93]">Tamanho do Grupo</label>
                  <div className="grid grid-cols-2 gap-3">
                    {PARTICIPANTS.map(p => (
                      <button
                        key={p}
                        onClick={() => setParticipants(p)}
                        className={cn(
                          "h-12 rounded-[8px] font-bold text-[14px] border-2 transition-all",
                          participants === p ? "border-[var(--yellow)] text-[var(--yellow)] bg-[var(--yellow-bg)]" : "border-[#F2F2F7] text-[#8E8E93] bg-white"
                        )}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-[28px] font-extrabold text-[#1A1A1A] tracking-[-0.03em] leading-tight mb-2">
                  Como Brincar?
                </h2>
                <p className="text-[15px] text-[#8E8E93] font-medium leading-relaxed">
                  A melhor parte! Descreva os passos com clareza.
                </p>
              </div>

              <div className="space-y-8">
                {/* Materiais */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-[14px] font-extrabold text-[#1A1A1A]">Materiais (Opcional)</label>
                    <Button onClick={handleAddMaterial} variant="ghost" size="sm" className="text-primary font-bold h-8 px-2">
                      <RiAddLine size={18} className="mr-1" /> Adicionar
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {materials.length === 0 && (
                      <div className="text-[14px] text-[#8E8E93] italic bg-[#F9F9F7] p-4 rounded-[8px]">
                        Nenhum material necessário? Pule esta parte!
                      </div>
                    )}
                    {materials.map((mat, index) => (
                      <div key={`mat-${index}`} className="flex items-center gap-2">
                        <Input 
                          value={mat}
                          onChange={(e) => handleMaterialChange(index, e.target.value)}
                          placeholder="Ex: 5 Cones, 1 Bola" 
                          className="h-12 bg-[#F9F9F7] border-none rounded-[6px] text-[15px]"
                        />
                        <Button 
                          onClick={() => handleRemoveMaterial(index)}
                          variant="ghost" 
                          size="icon" 
                          className="text-[#EF4444] shrink-0"
                        >
                          <RiCloseLine size={20} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full h-[1px] bg-[#F2F2F7]" />

                {/* Passo a Passo */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-[14px] font-extrabold text-[#1A1A1A]">Passo a Passo (Crucial)</label>
                  </div>
                  <div className="space-y-4">
                    {steps.map((s, index) => (
                      <div key={`step-${index}`} className="flex gap-3">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 text-primary font-black text-[14px] flex items-center justify-center mt-1">
                          {index + 1}
                        </div>
                        <div className="flex-1 relative">
                          <Textarea 
                            value={s}
                            onChange={(e) => handleStepChange(index, e.target.value)}
                            placeholder={`Explique o passo ${index + 1}...`} 
                            className="min-h-[80px] bg-[#F9F9F7] border-none rounded-[8px] text-[15px] p-3 resize-none focus-visible:ring-2 ring-primary/20 pr-10"
                          />
                          {steps.length > 1 && (
                            <Button 
                              onClick={() => handleRemoveStep(index)}
                              variant="ghost" 
                              size="icon" 
                              className="absolute top-1 right-1 text-[#8E8E93] hover:text-[#EF4444] h-8 w-8"
                            >
                              <RiCloseLine size={18} />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                    
                    <Button 
                      onClick={handleAddStep}
                      className="w-full h-12 border-2 border-dashed border-[#E5E5EA] bg-transparent text-[#8E8E93] font-bold rounded-[8px] hover:bg-[#F9F9F7]"
                    >
                      <RiAddLine size={20} className="mr-2" />
                      Adicionar Regra
                    </Button>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-[24px] left-0 right-0 px-5 bg-gradient-to-t from-[#F9F9F7] via-[#F9F9F7] to-transparent pt-8 z-[60]">
        <Button 
          onClick={handleNext}
          disabled={
            (step === 1 && (!title || !description || !category)) ||
            (step === 2 && (!age || !duration || !participants)) ||
            (step === 3 && steps[0].trim() === "")
          }
          className="w-full h-12 bg-[#FF9500] text-white font-medium text-[14px] rounded-[6px] shadow-sm disabled:opacity-50 disabled:bg-gray-300 border-none active:scale-[0.97] transition-all"
        >
          {step === totalSteps ? "Publicar Brincadeira" : "Continuar"}
        </Button>
      </div>
    </div>
  )
}
