"use client"

import { Clock, Timer, Coffee } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

interface TodaySummaryProps {
  clockInTime: Date | null
  breakStartTime: Date | null
  status: "clocked-out" | "clocked-in" | "on-break"
}

export function TodaySummary({ clockInTime, breakStartTime, status }: TodaySummaryProps) {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  }

  const calculateDuration = (startTime: Date) => {
    const diff = currentTime.getTime() - startTime.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    return `${hours}h ${minutes}m`
  }

  return (
    <Card className="p-6">
      <h2 className="text-base font-semibold text-foreground mb-4">Today's Summary</h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between py-3 border-b">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Clock In</p>
              <p className="text-xs text-muted-foreground">Start time</p>
            </div>
          </div>
          <p className="text-sm font-semibold text-foreground">{clockInTime ? formatTime(clockInTime) : "--:--"}</p>
        </div>

        <div className="flex items-center justify-between py-3 border-b">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
              <Timer className="h-5 w-5 text-success" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Total Worktime</p>
              <p className="text-xs text-muted-foreground">{status === "clocked-in" ? "Active" : "Inactive"}</p>
            </div>
          </div>
          <p className="text-sm font-semibold text-foreground">
            {clockInTime ? calculateDuration(clockInTime) : "0h 0m"}
          </p>
        </div>

        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
              <Coffee className="h-5 w-5 text-warning" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Break Time</p>
              <p className="text-xs text-muted-foreground">{status === "on-break" ? "On break" : "Not on break"}</p>
            </div>
          </div>
          <p className="text-sm font-semibold text-foreground">
            {breakStartTime ? calculateDuration(breakStartTime) : "0h 0m"}
          </p>
        </div>
      </div>
    </Card>
  )
}
