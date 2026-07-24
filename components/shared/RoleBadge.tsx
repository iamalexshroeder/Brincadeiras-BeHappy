import { cn } from "@/lib/utils"

export function RoleBadge({ role, className }: { role?: string | null; className?: string }) {
  if (!role) return null

  const normalized = role.toUpperCase().trim()
  
  let styles = ""
  let label = role

  if (normalized === "MVP") {
    styles = "text-[#FF3B30] bg-[#FF3B30]/10 border-[#FF3B30]/20"
    label = "MVP"
  } else if (normalized === "TREINADOR") {
    styles = "text-[#FF9500] bg-[#FF9500]/10 border-[#FF9500]/20"
    label = "Treinador"
  } else if (normalized === "LEVEL_UP" || normalized === "LEVEL UP" || normalized === "LEVELUP") {
    styles = "text-[#8E8E93] bg-[#8E8E93]/10 border-[#8E8E93]/20"
    label = "Level Up"
  } else if (normalized === "TRAINEE") {
    styles = "text-[#5AC8FA] bg-[#5AC8FA]/10 border-[#5AC8FA]/20"
    label = "Trainee"
  } else {
    return null
  }

  return (
    <span className={cn(
      "inline-flex items-center justify-center px-1.5 py-0.5 rounded-md text-[9px] font-extrabold tracking-wide border border-solid select-none align-middle",
      styles,
      className
    )}>
      {label}
    </span>
  )
}

