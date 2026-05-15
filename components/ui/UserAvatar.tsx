"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface UserAvatarProps {
  src?: string
  name?: string
  className?: string
  fallbackClassName?: string
}

export function UserAvatar({
  src,
  name,
  className,
  fallbackClassName
}: UserAvatarProps) {
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "U"

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <Avatar className="h-full w-full border-none bg-transparent">
        <AvatarImage src={src} className="object-cover" />
        <AvatarFallback className={cn("font-bold text-[13px] bg-muted text-muted-foreground", fallbackClassName)}>
          {initials}
        </AvatarFallback>
      </Avatar>
    </div>
  )
}
