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
    <Avatar className={cn("rounded-full overflow-hidden", className)}>
      <AvatarImage src={src} className="aspect-square object-cover rounded-full" />
      <AvatarFallback className={cn("rounded-full font-bold text-[13px]", fallbackClassName)}>
        {initials}
      </AvatarFallback>
    </Avatar>
  )
}
