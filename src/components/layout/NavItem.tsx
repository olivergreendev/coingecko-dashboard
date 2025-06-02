"use client";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LucideIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavItemProps {
  title: string
  href: string
  icon: LucideIcon
  variant?: "default" | "ghost"
}

export function NavItem({ title, href, icon: Icon, variant = "ghost" }: NavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href || pathname.startsWith(`${href}/`)

  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "w-full justify-start gap-2",
        !isActive && "hover:bg-accent hover:text-accent-foreground",
        isActive && "!bg-primary !text-primary-foreground hover:!bg-primary hover:!text-primary-foreground"
      )}
    >
      <Link href={href}>
        <Icon className="h-4 w-4" />
        {title}
      </Link>
    </Button>
  )
} 