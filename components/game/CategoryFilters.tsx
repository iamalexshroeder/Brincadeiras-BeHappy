"use client"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { cn } from "@/lib/utils"
import { useRouter, useSearchParams } from "next/navigation"

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
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category") || "todos"

  const handleCategoryChange = (value: string) => {
    if (!value) return
    const params = new URLSearchParams(searchParams.toString())
    if (value === "todos") {
      params.delete("category")
    } else {
      params.set("category", value)
    }
    router.push(`/?${params.toString()}`)
  }

  return (
    <div className="w-full overflow-x-auto no-scrollbar py-2 px-5 bg-transparent">
      <ToggleGroup 
        type="single" 
        value={currentCategory}
        onValueChange={handleCategoryChange}
        className="justify-start gap-2 min-w-max"
      >
        {CATEGORIES.map((cat) => (
          <ToggleGroupItem 
            key={cat} 
            value={cat.toLowerCase()}
            className={cn(
              "rounded-[6px] px-5 h-8 text-[16px] font-bold transition-all border-none shadow-none",
              "bg-transparent text-muted-foreground opacity-60",
              "data-[state=on]:bg-transparent data-[state=on]:text-[#FF9500] data-[state=on]:opacity-100 data-[state=on]:font-extrabold",
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
