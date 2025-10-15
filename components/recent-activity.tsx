import { Calendar, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const mockActivity = [
  {
    date: "October 14, 2025",
    clockIn: "1:52 PM",
    clockOut: "--:--",
    status: "late",
    worktime: "0h 0m",
  },
  {
    date: "October 13, 2025",
    clockIn: "9:00 AM",
    clockOut: "6:00 PM",
    status: "on-time",
    worktime: "8h 0m",
  },
  {
    date: "October 12, 2025",
    clockIn: "8:55 AM",
    clockOut: "5:58 PM",
    status: "on-time",
    worktime: "8h 3m",
  },
]

export function RecentActivity() {
  return (
    <Card className="p-6">
      <h2 className="text-base font-semibold text-foreground mb-4">Recent Activity</h2>

      <div className="space-y-3">
        {mockActivity.map((activity, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm font-medium text-foreground">{activity.date}</p>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>In: {activity.clockIn}</span>
                <span>Out: {activity.clockOut}</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <Badge
                variant={activity.status === "late" ? "destructive" : "default"}
                className={activity.status === "on-time" ? "bg-success text-success-foreground" : ""}
              >
                {activity.status === "late" ? "Late" : "On Time"}
              </Badge>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{activity.worktime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
