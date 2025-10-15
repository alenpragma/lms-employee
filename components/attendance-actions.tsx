"use client"

import { LogIn, LogOut, Coffee, Play } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface AttendanceActionsProps {
  status: "clocked-out" | "clocked-in" | "on-break"
  isInsideOffice: boolean
  onClockIn: () => void
  onClockOut: () => void
  onBreakIn: () => void
  onBreakOut: () => void
}

export function AttendanceActions({
  status,
  isInsideOffice,
  onClockIn,
  onClockOut,
  onBreakIn,
  onBreakOut,
}: AttendanceActionsProps) {
  const getStatusBadge = () => {
    switch (status) {
      case "clocked-in":
        return (
          <Badge className="bg-gradient-to-r from-success to-teal text-success-foreground">Currently Working</Badge>
        )
      case "on-break":
        return <Badge className="bg-gradient-to-r from-warning to-orange text-warning-foreground">On Break</Badge>
      default:
        return <Badge variant="secondary">Not Clocked In</Badge>
    }
  }

  return (
    <Card className="p-6 bg-gradient-to-br from-card to-secondary/30">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold">Attendance Actions</h2>
          {getStatusBadge()}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {status === "clocked-out" ? (
            <Button
              size="lg"
              className="h-28 flex-col gap-2 bg-gradient-to-br from-success to-teal hover:from-success/90 hover:to-teal/90 text-success-foreground shadow-lg"
              onClick={onClockIn}
              disabled={!isInsideOffice}
            >
              <LogIn className="h-7 w-7" />
              <span className="text-sm font-semibold">Clock In</span>
            </Button>
          ) : (
            <Button
              size="lg"
              className="h-28 flex-col gap-2 bg-gradient-to-br from-destructive to-orange hover:from-destructive/90 hover:to-orange/90 shadow-lg"
              onClick={onClockOut}
            >
              <LogOut className="h-7 w-7" />
              <span className="text-sm font-semibold">Clock Out</span>
            </Button>
          )}

          {status === "on-break" ? (
            <Button
              size="lg"
              className="h-28 flex-col gap-2 bg-gradient-to-br from-primary to-info hover:from-primary/90 hover:to-info/90 shadow-lg"
              onClick={onBreakOut}
            >
              <Play className="h-7 w-7" />
              <span className="text-sm font-semibold">Break Out</span>
            </Button>
          ) : (
            <Button
              size="lg"
              variant="outline"
              className="h-28 flex-col gap-2 bg-gradient-to-br from-warning/10 to-orange/10 border-warning/30 hover:bg-warning/20"
              onClick={onBreakIn}
              disabled={status === "clocked-out"}
            >
              <Coffee className="h-7 w-7 text-warning" />
              <span className="text-sm font-semibold text-warning">Break In</span>
            </Button>
          )}
        </div>

        {!isInsideOffice && status === "clocked-out" && (
          <p className="text-xs text-center text-muted-foreground bg-warning/10 p-2 rounded-md">
            You must be within office premises to clock in
          </p>
        )}
      </div>
    </Card>
  )
}
