import { Card } from "@/components/ui/card"
import { Calendar, Clock, Coffee, TrendingUp } from "lucide-react"

export function QuickStats() {
  const stats = [
    {
      label: "This Month",
      value: "20d",
      subtext: "Working Days",
      icon: Calendar,
      gradient: "from-primary to-info",
      iconBg: "bg-primary/20",
      iconColor: "text-primary",
    },
    {
      label: "Total Hours",
      value: "160h",
      subtext: "This Month",
      icon: Clock,
      gradient: "from-success to-teal",
      iconBg: "bg-success/20",
      iconColor: "text-success",
    },
    {
      label: "Break Time",
      value: "20h",
      subtext: "This Month",
      icon: Coffee,
      gradient: "from-warning to-orange",
      iconBg: "bg-warning/20",
      iconColor: "text-warning",
    },
    {
      label: "Leave Balance",
      value: "4",
      subtext: "Days Remaining",
      icon: TrendingUp,
      gradient: "from-purple to-accent",
      iconBg: "bg-purple/20",
      iconColor: "text-purple",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card
            key={index}
            className={`p-4 bg-gradient-to-br ${stat.gradient} bg-opacity-10 border-opacity-20 relative overflow-hidden`}
          >
            <div className="relative z-10">
              <div className={`h-10 w-10 rounded-full ${stat.iconBg} flex items-center justify-center mb-3`}>
                <Icon className={`h-5 w-5 ${stat.iconColor}`} />
              </div>
              <p className="text-2xl font-bold text-balance">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.subtext}</p>
            </div>
            <div className={`absolute -right-4 -bottom-4 h-24 w-24 rounded-full ${stat.iconBg} opacity-20`} />
          </Card>
        )
      })}
    </div>
  )
}
