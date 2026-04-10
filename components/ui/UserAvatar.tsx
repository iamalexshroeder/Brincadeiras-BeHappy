"use client"

import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface UserAvatarProps extends React.ComponentProps<typeof Avatar> {
  src?: string | null
  name?: string
  rankBadge?: "gold" | "silver" | "bronze" | null
  fallbackClassName?: string
}

export function UserAvatar({
  src,
  name,
  rankBadge,
  className,
  fallbackClassName,
  ...props
}: UserAvatarProps) {
  // Gold: animated gradient border with glow
  const getBadgeStyles = () => {
    switch (rankBadge) {
      case "gold":
        return "ring-[4px] ring-[#EAB308] border-2 border-white shadow-md shadow-[#EAB308]/20"
      case "silver":
        return "ring-[3px] ring-slate-400 border-2 border-white shadow-md"
      case "bronze":
        return "ring-[3px] ring-amber-600 border-2 border-white shadow-sm"
      default:
        return "border-2 border-[#E5E5EA]"
    }
  }

  const isSystem = name === "BeHappyinha"
  
  return (
    <div className="relative inline-block shrink-0 h-fit w-fit">
      <Avatar
        className={cn(
          "transition-all duration-300",
          getBadgeStyles(),
          isSystem && "bg-[#FEF9C3] border-[#EAB308]",
          className
        )}
        {...props}
      >
        <AvatarImage src={isSystem ? undefined : (src ?? undefined)} alt={name} className="object-cover" />
        <AvatarFallback className={cn("font-bold", isSystem ? "bg-[#FEF9C3] text-[#EAB308]" : fallbackClassName)}>
          {name ? name[0].toUpperCase() : "?"}
        </AvatarFallback>
      </Avatar>
    </div>
  )
}
