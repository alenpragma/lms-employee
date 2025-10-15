"use client"

import { useState } from "react"
import { DashboardView } from "@/components/dashboard-view"
import { ProfileView } from "@/components/profile-view"
import { PaymentsView } from "@/components/payments-view"
import { BottomNav } from "@/components/bottom-nav"

export default function EmployeeDashboard() {
  const [currentView, setCurrentView] = useState<"dashboard" | "profile" | "payments">("dashboard")

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background pb-20">
      {currentView === "dashboard" && <DashboardView />}
      {currentView === "profile" && <ProfileView />}
      {currentView === "payments" && <PaymentsView />}

      <BottomNav currentView={currentView} onViewChange={setCurrentView} />
    </div>
  )
}
