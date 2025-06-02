'use client';

import { navigationItems } from "@/config/navigation"
import { NavItem } from "./NavItem"

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-background">
      <div className="flex h-full flex-col gap-2">
        <div className="px-6 py-4">
          <h2 className="text-lg font-semibold">BlockStream</h2>
        </div>
        <div className="flex-1 px-3">
          <nav className="grid gap-1">
            {navigationItems.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
} 