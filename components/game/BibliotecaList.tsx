"use client"

import { useState, useRef, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { 
  RiCloudyLine, RiDropFill, RiTentLine, RiHome4Line, RiUserVoiceLine,
  RiMusicLine, RiArrowRightSLine, RiCloseLine, RiDownload2Line,
  RiShareLine, RiTimeLine, RiGroupLine, RiUser3Line, RiArrowLeftSLine
} from "@remixicon/react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { SYSTEM_COLLECTIONS, SystemGame, Collection } from "@/lib/data/biblioteca"


function GameModal({ game, isOpen, onClose }: { game: SystemGame | null; isOpen: boolean; onClose: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [downloading, setDownloading] = useState(false)

  if (!game) return null;

  const handleDownload = async () => {
    if (!cardRef.current || downloading) return
    setDownloading(true)
    try {
      const html2canvas = (await import("html2canvas")).default
      const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        backgroundColor: "#FFFFFF",
        useCORS: true,
        logging: false,
      })
      const blob = await new Promise<Blob>((resolve) =>
        canvas.toBlob((b) => resolve(b!), "image/png", 1)
      )
      const file = new File([blob], `${game.title}.png`, { type: "image/png" })

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: game.title })
      } else {
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `${game.title}.png`
        a.click()
        URL.revokeObjectURL(url)
      }
    } catch (e) {
      console.error(e)
    } finally {
      setDownloading(false)
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      const shareUrl = `${window.location.origin}/brincadeira/${game.id}`
      await navigator.share({ 
        title: game.title, 
        text: `Confira esta brincadeira no Brincadeiras BeHappy: ${game.title}`,
        url: shareUrl 
      })
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent 
        side="bottom"
        showCloseButton={false}
        className="!max-h-[90dvh] !w-full !inset-x-0 !bottom-0 !rounded-t-[24px] !rounded-b-none p-0 flex flex-col border-0 border-t border-border bg-background overflow-hidden outline-none shadow-2xl transition-all duration-300 ease-in-out"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-white h-16 shrink-0 z-50 shadow-sm">
          <div className="flex items-center gap-3">
             <Button 
               variant="ghost" 
               size="icon" 
               className="h-10 w-10 rounded-full bg-muted text-muted-foreground active:scale-95 transition-all"
               onClick={onClose}
             >
               <RiArrowLeftSLine size={24} />
             </Button>
             <SheetTitle className="text-[17px] font-extrabold text-foreground max-w-[200px] truncate">
               {game.title}
             </SheetTitle>
          </div>
          <div className="flex gap-2">
             <span className="flex items-center gap-1 text-[11px] font-bold bg-muted text-muted-foreground rounded-full px-2.5 py-1">
               <RiTimeLine size={12} /> {game.duration}
             </span>
          </div>
        </div>

        {/* Scrollable Content - Minimalist Document Style */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8 pb-32">
          {/* Main Description */}
          <div className="space-y-2">
            <p className="text-[17px] text-foreground leading-relaxed font-medium opacity-90">
              {game.description}
            </p>
          </div>

          {/* Quick Info - Clean Text Style (No Chips) */}
          <div className="flex flex-col gap-3 pt-2 text-[#8E8E93]">
            <div className="flex items-center gap-3">
              <RiGroupLine size={20} className="text-primary/70" /> 
              <span className="text-[15px] font-bold text-foreground/80">{game.participants} pessoas</span>
            </div>
            <div className="flex items-center gap-3">
              <RiUser3Line size={20} className="text-primary/70" /> 
              <span className="text-[15px] font-bold text-foreground/80">{game.age}</span>
            </div>
            {game.materials.length === 0 && (
              <div className="flex items-center gap-3 text-[#FF3B30]">
                <RiCloseLine size={20} />
                <span className="text-[15px] font-bold">Sem necessidade de material</span>
              </div>
            )}
          </div>

          <hr className="border-border/50" />

          {/* Materials Section - Free Content on White */}
          {game.materials.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-[12px] font-black text-muted-foreground uppercase tracking-[0.1em]">Materiais</h3>
              <p className="text-[16px] font-medium text-foreground/90 leading-relaxed">
                {game.materials.join(", ")}
              </p>
            </div>
          )}

          {/* Steps Section - Minimalist List */}
          <div className="space-y-4">
            <h3 className="text-[12px] font-black text-muted-foreground uppercase tracking-[0.1em]">Como Jogar</h3>
            <div className="space-y-5">
              {game.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-[15px] font-black text-primary pt-0.5">{i + 1}.</span>
                  <p className="text-[16px] text-foreground leading-relaxed font-medium opacity-90 flex-1">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons - Standardized Bottom Action Bar with extra breath */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pt-5 pb-[calc(24px+env(safe-area-inset-bottom))] border-t border-border bg-white flex gap-3 shadow-[0_-12px_30px_rgba(0,0,0,0.06)]">
          <Button
            variant="secondary"
            onClick={handleDownload}
            disabled={downloading}
            className="btn-secondary flex-1 h-12 rounded-[12px] bg-[#F2F2F7] border-none text-[15px] font-bold text-foreground gap-2 active:scale-95 transition-all"
          >
            <RiDownload2Line size={20} />
            {downloading ? "Gerando..." : "Baixar Ficha"}
          </Button>
          <Button
            onClick={handleShare}
            className="btn-primary flex-1 h-12 rounded-[12px] bg-primary text-white text-[15px] font-bold gap-2 active:scale-95 transition-all shadow-lg shadow-primary/20"
          >
            <RiShareLine size={20} />
            Compartilhar
          </Button>
        </div>

        {/* Hidden card for capture - Redesigned for mobile-print perfection */}
        <div className="absolute -left-[9999px] -top-[9999px] pointer-events-none" aria-hidden="true">
          <div ref={cardRef} style={{ width: 800, backgroundColor: "#F9F9F7", padding: "60px", fontFamily: "sans-serif" }}>
            {/* Header / Brand */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 48, borderBottom: "1px solid #E5E5EA", paddingBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: "#FF9500", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(255,149,0,0.2)" }}>
                  <span style={{ color: "#fff", fontWeight: 900, fontSize: 24 }}>B</span>
                </div>
                <div>
                  <h6 style={{ margin: 0, fontSize: 18, fontWeight: 900, color: "#1A1A1A", letterSpacing: "-0.02em" }}>Brincadeiras BeHappy</h6>
                  <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: "#8E8E93", textTransform: "uppercase", letterSpacing: "0.05em" }}>Ficha de Brincadeira</p>
                </div>
              </div>
              <div style={{ marginLeft: "auto", textAlign: "right" }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: "#FF9500", backgroundColor: "#FFF4E5", padding: "6px 14px", borderRadius: 99 }}>Premium Sheet</span>
              </div>
            </div>

            {/* Title & Stats */}
            <h1 style={{ fontSize: 48, fontWeight: 900, color: "#1A1A1A", marginBottom: 24, letterSpacing: "-0.03em", lineHeight: 1.1 }}>{game.title}</h1>
            
            <div style={{ display: "flex", gap: 12, marginBottom: 40, flexWrap: "wrap" }}>
               {[
                 { label: game.duration, icon: "⏱" },
                 { label: `${game.participants} pessoas`, icon: "👥" },
                 { label: game.age, icon: "🎯" }
               ].map((item, i) => (
                 <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 700, backgroundColor: "#FFFFFF", color: "#1A1A1A", borderRadius: 12, padding: "10px 20px", border: "1px solid #E5E5EA", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
                   <span style={{ fontSize: 18 }}>{item.icon}</span>
                   <span>{item.label}</span>
                 </div>
               ))}
            </div>

            {/* Description */}
            <div style={{ backgroundColor: "#FFFFFF", padding: "32px", borderRadius: 24, marginBottom: 40, border: "1px solid #E5E5EA" }}>
              <p style={{ margin: 0, fontSize: 20, color: "#48484A", lineHeight: 1.6, fontWeight: 500 }}>{game.description}</p>
            </div>

            {/* Materials & Steps Layout */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 40 }}>
              {game.materials.length > 0 && (
                <div style={{ backgroundColor: "#F2F2F7", padding: "32px", borderRadius: 24 }}>
                  <p style={{ fontWeight: 800, color: "#8E8E93", textTransform: "uppercase", fontSize: 13, marginBottom: 16, letterSpacing: "0.05em" }}>Materiais Necessários</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                    {game.materials.map((m, i) => (
                      <span key={i} style={{ padding: "10px 20px", background: "#FFFFFF", border: "1px solid #E5E5EA", borderRadius: 12, fontWeight: 800, fontSize: 15, color: "#1A1A1A" }}>{m}</span>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ padding: "8px" }}>
                <p style={{ fontWeight: 800, color: "#8E8E93", textTransform: "uppercase", fontSize: 13, marginBottom: 24, letterSpacing: "0.05em" }}>Como Jogar (Passo a Passo)</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {game.steps.map((s, i) => (
                    <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                      <div style={{ width: 36, height: 36, borderRadius: 12, background: "#FF9500", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 18, flexShrink: 0, boxShadow: "0 4px 8px rgba(255,149,0,0.15)" }}>
                        {i+1}
                      </div>
                      <p style={{ margin: 0, fontSize: 18, fontWeight: 600, color: "#1A1A1A", lineHeight: 1.5, paddingTop: 4 }}>{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Footer */}
            <div style={{ marginTop: 60, paddingTop: 40, borderTop: "1px solid #E5E5EA", textAlign: "center", display: "flex", justifyContent: "center" }}>
               <p style={{ fontSize: 14, fontWeight: 700, color: "#C7C7CC" }}>Gerado via Brincadeiras BeHappy · brisbrincadeiras-behappy.vercel.app</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

function CollectionModal({ collection, isOpen, onClose }: { collection: Collection; isOpen: boolean; onClose: () => void }) {
  const [selectedGame, setSelectedGame] = useState<SystemGame | null>(null)
  const Icon = collection.icon

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent 
        side="bottom"
        showCloseButton={false}
        className="!max-h-[90dvh] !w-full !inset-x-0 !bottom-0 !rounded-t-[24px] !rounded-b-none p-0 flex flex-col border-0 border-t border-border bg-background overflow-hidden outline-none shadow-2xl transition-all duration-300 ease-in-out"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-white h-16 shrink-0 z-50 shadow-sm">
          <div className="flex items-center gap-3">
             <Button 
               variant="ghost" 
               size="icon" 
               className="h-10 w-10 rounded-full bg-muted text-muted-foreground active:scale-95 transition-all"
               onClick={onClose}
             >
               <RiArrowLeftSLine size={24} />
             </Button>
             <SheetTitle className="text-[17px] font-extrabold text-foreground">
               {collection.label}
             </SheetTitle>
          </div>
          <span className="text-[12px] font-bold text-muted-foreground bg-muted rounded-full px-3 py-1">
            {collection.games.length} itens
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-7 pb-24">
          <p className="text-[13px] font-medium text-muted-foreground leading-relaxed pl-1">{collection.description}</p>

          <div className="space-y-3">
            {collection.games.map(game => (
              <div
                key={game.id}
                className="bg-white rounded-[16px] border border-border p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] active:scale-[0.98] transition-all"
                onClick={() => setSelectedGame(game)}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-3">
                    <h4 className="text-[16px] font-extrabold text-foreground leading-tight">{game.title}</h4>
                    <span className="text-[10px] font-extrabold text-primary uppercase bg-primary/5 px-2 py-0.5 rounded-full">Explore</span>
                  </div>
                  <p className="text-[13px] text-muted-foreground line-clamp-2 font-medium">{game.description}</p>
                  <div className="flex gap-2 pt-1">
                    <span className="text-[10px] font-extrabold bg-[#F2F2F7] text-[#8E8E93] rounded-full px-2.5 py-1 uppercase">{game.duration}</span>
                    <span className="text-[10px] font-extrabold bg-[#F2F2F7] text-[#8E8E93] rounded-full px-2.5 py-1 uppercase">{game.participants}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Game Detail Modal overlay */}
        {selectedGame && (
          <GameModal 
            game={selectedGame} 
            isOpen={!!selectedGame} 
            onClose={() => setSelectedGame(null)} 
          />
        )}
      </SheetContent>
    </Sheet>
  )
}

export function BibliotecaList() {
  const [openCollection, setOpenCollection] = useState<string | null>(null)
  const [selectedFlatGame, setSelectedFlatGame] = useState<SystemGame | null>(null)
  const searchParams = useSearchParams()
  const query = (searchParams.get("q") ?? "").toLowerCase()

  const activeCollection = SYSTEM_COLLECTIONS.find(c => c.id === openCollection)

  if (query) {
    const flatGames = SYSTEM_COLLECTIONS.flatMap(c => c.games).filter(g => 
      g.title.toLowerCase().includes(query) || 
      g.description.toLowerCase().includes(query) ||
      g.materials.some(m => m.toLowerCase().includes(query))
    )

    return (
      <>
        <div className="space-y-3 pb-8">
          {flatGames.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <span className="text-[40px] mb-3">🔍</span>
              <p className="text-[15px] font-bold text-[#1A1A1A]">Nenhuma brincadeira encontrada</p>
              <p className="text-[13px] text-[#8E8E93] mt-1">Tente palavras diferentes como piscina, gincana ou bambolê.</p>
            </div>
          ) : (
            flatGames.map(game => (
              <div
                key={game.id}
                className="bg-white rounded-[12px] border border-border p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <span className="block text-[15px] font-extrabold text-foreground truncate leading-tight">{game.title}</span>
                    <span className="block text-[12px] text-muted-foreground mt-0.5 line-clamp-1 font-medium">{game.description}</span>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      <span className="text-[10px] font-extrabold bg-[#F2F2F7] text-[#8E8E93] rounded-full px-2 py-0.5 uppercase">{game.duration}</span>
                      <span className="text-[10px] font-extrabold bg-[#F2F2F7] text-[#8E8E93] rounded-full px-2 py-0.5 uppercase">{game.participants}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedFlatGame(game)}
                  className="mt-3 w-full h-9 rounded-[10px] border border-border bg-[#F9F9F7] text-[12px] font-extrabold text-foreground flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
                >
                  Abrir brincadeira
                </button>
              </div>
            ))
          )}
        </div>

        {selectedFlatGame && (
          <GameModal 
            game={selectedFlatGame} 
            isOpen={!!selectedFlatGame} 
            onClose={() => setSelectedFlatGame(null)} 
          />
        )}
      </>
    )
  }

  return (
    <>
      <div className="space-y-4">
        {SYSTEM_COLLECTIONS.map((col) => {
          const Icon = col.icon
          return (
            <div
              key={col.id}
              onClick={() => setOpenCollection(col.id)}
              className="bg-white rounded-[12px] border border-border p-4 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex items-center gap-4 active:scale-[0.98] transition-all cursor-pointer group"
            >
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center shrink-0 transition-transform group-active:scale-90"
                style={{ backgroundColor: col.bg }}
              >
                <Icon size={22} style={{ color: col.color }} />
              </div>

              <div className="flex-1 min-w-0">
                <span className="block text-[16px] font-extrabold text-foreground leading-tight">{col.label}</span>
                <span className="block text-[12px] text-muted-foreground font-medium mt-0.5">{col.games.length} brincadeiras</span>
              </div>

              <div className="flex items-center gap-0.5 shrink-0 opacity-40 group-active:opacity-100 transition-opacity">
                <RiArrowRightSLine size={22} className="text-muted-foreground" />
              </div>
            </div>
          )
        })}
      </div>

      {/* Collection Modal */}
      {activeCollection && (
        <CollectionModal
          collection={activeCollection}
          isOpen={!!openCollection}
          onClose={() => setOpenCollection(null)}
        />
      )}
    </>
  )
}
