"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { DashboardView } from "@/components/dashboard-view";
import { ProfileView } from "@/components/profile-view";
import { PaymentsView } from "@/components/payments-view";
import { BottomNav } from "@/components/bottom-nav";

export default function EmployeeDashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab") as
    | "dashboard"
    | "profile"
    | "payments"
    | null;

  const [currentView, setCurrentView] = useState<
    "dashboard" | "profile" | "payments"
  >(tabParam ?? "dashboard");

  useEffect(() => {
    if (tabParam && tabParam !== currentView) {
      setCurrentView(tabParam);
    }
  }, [tabParam]);

  const handleViewChange = (view: "dashboard" | "profile" | "payments") => {
    setCurrentView(view);
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", view);
    router.push(`/dashboard/?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background pb-20">
      {currentView === "dashboard" && <DashboardView />}
      {currentView === "profile" && <ProfileView />}
      {currentView === "payments" && <PaymentsView />}

      <BottomNav currentView={currentView} onViewChange={handleViewChange} />
    </div>
  );
}
