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
  const getBadgeStyles = () => {
    switch (rankBadge) {
      case "gold":
        return "ring-[4px] ring-yellow-400 border-2 border-white shadow-[0_0_20px_rgba(250,204,21,0.4)] animate-gold-glow"
      case "silver":
        return "ring-[3px] ring-slate-400 border-2 border-white shadow-md"
      case "bronze":
        return "ring-[3px] ring-amber-600 border-2 border-white shadow-md"
      default:
        return "border-2 border-[#F2F2F7] shadow-sm"
    }
  }

  return (
    <div className="relative inline-block shrink-0 h-fit w-fit">
      <Avatar
        className={cn(
          "transition-all duration-300",
          getBadgeStyles(),
          className
        )}
        {...props}
      >
        <AvatarImage src={src ?? undefined} alt={name} className="object-cover" />
        <AvatarFallback className={cn("font-bold", fallbackClassName)}>
          {name ? name[0].toUpperCase() : "?"}
        </AvatarFallback>
      </Avatar>
      
      {/* Rank Indicator Badge (Optional small number badge can be added here if needed) */}
    </div>
  )
}
