"use client"

export function RefreshButton() {
  return (
    <div className="flex justify-center mt-8 mb-4">
      <button 
        onClick={() => window.location.reload()} 
        className="text-[13px] font-medium text-[#C7C7CC] hover:text-[#8E8E93] active:opacity-70 transition-colors underline underline-offset-4"
      >
        Atualizar Página
      </button>
    </div>
  )
}
