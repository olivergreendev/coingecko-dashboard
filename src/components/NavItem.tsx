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
  const isActive = pathname === href

  return (
    <Button
      asChild
      variant={variant}
      className={cn(
        "w-full justify-start gap-2",
        isActive && "bg-accent text-accent-foreground"
      )}
    >
      <Link href={href}>
        <Icon className="h-4 w-4" />
        {title}
      </Link>
    </Button>
  )
} 