"use client"

import { Home, User, Wallet } from "lucide-react"

interface BottomNavProps {
  currentView: "dashboard" | "profile" | "payments"
  onViewChange: (view: "dashboard" | "profile" | "payments") => void
}

export function BottomNav({ currentView, onViewChange }: BottomNavProps) {
  const navItems = [
    { id: "dashboard" as const, label: "Dashboard", icon: Home },
    { id: "profile" as const, label: "Profile", icon: User },
    { id: "payments" as const, label: "Payments", icon: Wallet },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-50">
      <div className="container mx-auto max-w-2xl">
        <div className="grid grid-cols-3 gap-1 p-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = currentView === item.id

            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`flex flex-col items-center justify-center gap-1 py-3 px-4 rounded-lg transition-all ${
                  isActive
                    ? "bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? "scale-110" : ""}`} />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
