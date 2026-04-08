"use client"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { cn } from "@/lib/utils"

const CATEGORIES = [
  "Todos", 
  "Musical", 
  "Físico", 
  "Criativo", 
  "Educativo",
  "Sensorial",
  "Cooperativo"
]

export function CategoryFilters() {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-2 px-5 bg-transparent">
      <ToggleGroup 
        type="single" 
        defaultValue="todos" 
        className="justify-start gap-2 min-w-max"
      >
        {CATEGORIES.map((cat) => (
          <ToggleGroupItem 
            key={cat} 
            value={cat.toLowerCase()}
            className={cn(
              "rounded-[6px] px-5 h-8 text-[16px] font-bold transition-all border-none shadow-none",
              "bg-transparent text-[#8E8E93] opacity-60",
              "data-[state=on]:bg-transparent data-[state=on]:text-primary data-[state=on]:opacity-100 data-[state=on]:font-extrabold",
              "active:opacity-90"
            )}
          >
            {cat}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}
