import {
  LayoutDashboard,
  Settings,
  Landmark,
  BarChart3,
  ArrowRightLeft,
  type LucideIcon
} from "lucide-react"

export interface NavItem {
  title: string
  href: string
  icon: LucideIcon
}

export const navigationItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Cryptocurrencies",
    href: "/cryptocurrencies",
    icon: BarChart3,
  },
  {
    title: "Exchanges",
    href: "/exchanges",
    icon: Landmark,
  },
  {
    title: "Compare",
    href: "/compare",
    icon: ArrowRightLeft,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]