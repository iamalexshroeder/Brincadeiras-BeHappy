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
  if (rankBadge === "gold") {
    return (
      <div className="relative inline-block shrink-0 h-fit w-fit">
        {/* Animated gradient ring */}
        <div
          className="absolute inset-0 rounded-full animate-gold-glow"
          style={{
            background: "conic-gradient(from 0deg, #F59E0B, #FCD34D, #FDE68A, #FBBF24, #F59E0B, #D97706, #F59E0B)",
            padding: "3px",
            borderRadius: "9999px",
          }}
        />
        <Avatar
          className={cn(
            "transition-all duration-300 relative z-10 ring-[3px] ring-yellow-400 border-2 border-white",
            className
          )}
          {...props}
        >
          <AvatarImage src={src ?? undefined} alt={name} className="object-cover" />
          <AvatarFallback className={cn("font-bold", fallbackClassName)}>
            {name ? name[0].toUpperCase() : "?"}
          </AvatarFallback>
        </Avatar>
      </div>
    )
  }

  const getBadgeStyles = () => {
    switch (rankBadge) {
      case "silver":
        return "ring-[3px] ring-slate-400 border-2 border-white shadow-md"
      case "bronze":
        return "ring-[3px] ring-amber-600 border-2 border-white shadow-sm"
      default:
        return "border-2 border-[#E5E5EA]"
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
    </div>
  )
}
