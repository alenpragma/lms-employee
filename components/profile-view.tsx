import { EmployeeHeader } from "@/components/employee-header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Mail,
  Phone,
  Calendar,
  Briefcase,
  Building2,
  Clock,
  Droplet,
  MapPin,
  Users,
  DollarSign,
  TrendingUp,
} from "lucide-react"

export function ProfileView() {
  return (
    <>
      <EmployeeHeader />

      <main className="container mx-auto px-4 py-6 max-w-2xl space-y-6">
        {/* Profile Header Card */}
        <Card className="p-6 bg-gradient-to-br from-primary via-accent to-purple text-primary-foreground">
          <div className="flex items-start gap-4">
            <div className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl font-bold">
              AB
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-balance">Anupam Banik</h1>
              <p className="text-sm opacity-90 mt-1">Video Editor</p>
              <Badge className="mt-2 bg-white/20 backdrop-blur-sm text-white border-white/30">Employee ID: 0046</Badge>
            </div>
          </div>
        </Card>

        {/* Personal Information */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            Personal Information
          </h2>
          <div className="space-y-3">
            <InfoRow icon={User} label="Full Name" value="Anupam Banik" />
            <InfoRow icon={Users} label="Father's Name" value="Amar Krishna Banik" />
            <InfoRow icon={Users} label="Mother's Name" value="Monju Rani Banik" />
            <InfoRow icon={Mail} label="Email" value="anupambanik4400@gmail.com" />
            <InfoRow icon={Phone} label="Phone" value="01767692145" />
            <InfoRow icon={Droplet} label="Blood Group" value="AB+" />
            <InfoRow icon={Calendar} label="Date of Birth" value="8/21/2007" />
          </div>
        </Card>

        {/* Job Information */}
        <Card className="p-6 bg-gradient-to-br from-teal/10 to-info/10 border-teal/20">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-teal" />
            Job Information
          </h2>
          <div className="space-y-3">
            <InfoRow icon={Building2} label="Department" value="Agency" color="text-teal" />
            <InfoRow icon={Briefcase} label="Designation" value="Video Editor" color="text-teal" />
            <InfoRow icon={Calendar} label="Joining Date" value="2/1/2024" color="text-teal" />
            <InfoRow icon={DollarSign} label="Salary" value="৳6,000" color="text-teal" />
            <InfoRow icon={TrendingUp} label="EPF Percentage" value="5%" color="text-teal" />
            <InfoRow icon={MapPin} label="Campus" value="Khagrachari" color="text-teal" />
          </div>
        </Card>

        {/* Work Schedule */}
        <Card className="p-6 bg-gradient-to-br from-orange/10 to-warning/10 border-orange/20">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-orange" />
            Work Schedule
          </h2>
          <div className="space-y-3">
            <InfoRow icon={Clock} label="Total Worktime" value="8h 0m" color="text-orange" />
            <InfoRow icon={Clock} label="Clock In" value="09:00" color="text-orange" />
            <InfoRow icon={Clock} label="Clock Out" value="18:00" color="text-orange" />
            <InfoRow icon={Clock} label="Break Duration" value="60 min" color="text-orange" />
          </div>
        </Card>

        {/* Leave Information */}
        <Card className="p-6 bg-gradient-to-br from-purple/10 to-accent/10 border-purple/20">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-purple" />
            Leave Information
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 rounded-lg bg-purple/10">
              <p className="text-3xl font-bold text-purple">24</p>
              <p className="text-sm text-muted-foreground mt-1">Total Leaves</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-accent/10">
              <p className="text-3xl font-bold text-accent">2</p>
              <p className="text-sm text-muted-foreground mt-1">Max/Month</p>
            </div>
          </div>
        </Card>
      </main>
    </>
  )
}

function InfoRow({
  icon: Icon,
  label,
  value,
  color = "text-primary",
}: {
  icon: any
  label: string
  value: string
  color?: string
}) {
  return (
    <div className="flex items-center gap-3 py-2 border-b border-border/50 last:border-0">
      <Icon className={`h-4 w-4 ${color}`} />
      <div className="flex-1 flex justify-between items-center">
        <span className="text-sm text-muted-foreground">{label}</span>
        <span className="text-sm font-medium">{value}</span>
      </div>
    </div>
  )
}
