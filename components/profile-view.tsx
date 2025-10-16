"use client";

import { EmployeeHeader } from "@/components/employee-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { formatDate } from "@/lib/date";

const calculateWorkTime = (
  clockIn: string,
  clockOut: string,
  breakMinutes: number
): string => {
  if (!clockIn || !clockOut) return "0h 0m";

  // Parse clockIn and clockOut to Date objects (any date is fine)
  const inDate = new Date(`1970-01-01T${clockIn}:00`);
  const outDate = new Date(`1970-01-01T${clockOut}:00`);

  // Difference in milliseconds
  let diffMs = outDate.getTime() - inDate.getTime();

  // Subtract breakMinutes in ms
  diffMs -= breakMinutes * 60 * 1000;

  if (diffMs < 0) return "0h 0m";

  const totalMinutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}h ${minutes}m`;
};

export function ProfileView() {
  const { isFetching, data: employee } = useQuery({
    queryKey: ["employee"],
    queryFn: async () => {
      const response = await api.get("/employee");
      return response.data.payload.employee;
    },
  });

  return (
    <>
      <EmployeeHeader />

      <main className="container mx-auto px-4 py-6 max-w-2xl space-y-6">
        {/* Profile Header Card */}
        <Card className="p-6 bg-gradient-to-br from-primary via-accent to-purple text-primary-foreground">
          <div className="flex items-start gap-4">
            <div className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl font-bold">
              {isFetching ? (
                <span className="inline-block h-10 w-10 rounded-full bg-white/30 animate-pulse" />
              ) : (
                employee?.name
                  .split(" ")
                  .map((n: any) => n[0])
                  .join("")
                  .toUpperCase()
              )}
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-balance">
                {isFetching ? (
                  <span className="inline-block h-8 w-40 rounded-lg bg-white/30 animate-pulse" />
                ) : (
                  employee?.name
                )}
              </h1>
              <p className="text-sm opacity-90 mt-1">
                {isFetching ? (
                  <span className="inline-block h-4 w-24 rounded-lg bg-white/30 animate-pulse" />
                ) : (
                  employee?.designation
                )}
              </p>
              <Badge className="mt-2 bg-white/20 backdrop-blur-sm text-white border-white/30">
                {isFetching ? (
                  <span className="inline-block h-5 w-20 rounded-lg bg-white/30 animate-pulse" />
                ) : (
                  `Employee ID: ${employee?.employeeId}`
                )}
              </Badge>
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
            <InfoRow
              icon={User}
              label="Full Name"
              value={employee?.name}
              isFetching={isFetching}
            />
            <InfoRow
              icon={Users}
              label="Father's Name"
              value={employee?.fathersName}
              isFetching={isFetching}
            />
            <InfoRow
              icon={Users}
              label="Mother's Name"
              value={employee?.mothersName}
              isFetching={isFetching}
            />
            <InfoRow
              icon={Mail}
              label="Email"
              value={employee?.email}
              isFetching={isFetching}
            />
            <InfoRow
              icon={Phone}
              label="Phone"
              value={employee?.phone}
              isFetching={isFetching}
            />
            <InfoRow
              icon={Droplet}
              label="Blood Group"
              value={employee?.bloodGroup}
              isFetching={isFetching}
            />
            <InfoRow
              icon={Calendar}
              label="Date of Birth"
              value={formatDate(employee?.dateOfBirth)}
              isFetching={isFetching}
            />
          </div>
        </Card>

        {/* Job Information */}
        <Card className="p-6 bg-gradient-to-br from-teal/10 to-info/10 border-teal/20">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-teal" />
            Job Information
          </h2>
          <div className="space-y-3">
            <InfoRow
              icon={Building2}
              label="Department"
              value={employee?.department}
              color="text-teal"
              isFetching={isFetching}
            />
            <InfoRow
              icon={Briefcase}
              label="Designation"
              value={employee?.designation}
              color="text-teal"
              isFetching={isFetching}
            />
            <InfoRow
              icon={Calendar}
              label="Joining Date"
              value={formatDate(employee?.joiningDate)}
              color="text-teal"
              isFetching={isFetching}
            />
            <InfoRow
              icon={DollarSign}
              label="Salary"
              value={employee ? `৳${employee.salary}` : ""}
              color="text-teal"
              isFetching={isFetching}
            />
            <InfoRow
              icon={TrendingUp}
              label="EPF Percentage"
              value={employee ? `${employee.epfPercentage}%` : ""}
              color="text-teal"
              isFetching={isFetching}
            />
            <InfoRow
              icon={MapPin}
              label="Campus"
              value={employee?.campus?.name}
              color="text-teal"
              isFetching={isFetching}
            />
          </div>
        </Card>

        {/* Work Schedule */}
        <Card className="p-6 bg-gradient-to-br from-orange/10 to-warning/10 border-orange/20">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-orange" />
            Work Schedule
          </h2>
          <div className="space-y-3">
            <InfoRow
              icon={Clock}
              label="Total Worktime"
              value={calculateWorkTime(
                employee?.clockIn,
                employee?.clockOut,
                employee?.breakMinutes
              )}
              color="text-orange"
              isFetching={isFetching}
            />
            <InfoRow
              icon={Clock}
              label="Clock In"
              value={
                employee?.clockIn
                  ? new Date(
                      `1970-01-01T${employee.clockIn}:00`
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : ""
              }
              color="text-orange"
              isFetching={isFetching}
            />
            <InfoRow
              icon={Clock}
              label="Clock Out"
              value={
                employee?.clockOut
                  ? new Date(
                      `1970-01-01T${employee.clockOut}:00`
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : ""
              }
              color="text-orange"
              isFetching={isFetching}
            />
            <InfoRow
              icon={Clock}
              label="Break Duration"
              value={employee ? `${employee.breakMinutes} min` : ""}
              color="text-orange"
              isFetching={isFetching}
            />
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
              {isFetching ? (
                <span className="inline-block h-8 w-12 mx-auto rounded-lg bg-purple/30 animate-pulse" />
              ) : (
                <p className="text-3xl font-bold text-purple">
                  {employee?.totalLeaves}
                </p>
              )}
              <p className="text-sm text-muted-foreground mt-1">Total Leaves</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-accent/10">
              {isFetching ? (
                <span className="inline-block h-8 w-12 mx-auto rounded-lg bg-accent/30 animate-pulse" />
              ) : (
                <p className="text-3xl font-bold text-accent">
                  {employee?.maxLeavePerMonth}
                </p>
              )}
              <p className="text-sm text-muted-foreground mt-1">Max/Month</p>
            </div>
          </div>
        </Card>
      </main>
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  color = "text-primary",
  isFetching = false,
}: {
  icon: any;
  label: string;
  value?: string | number;
  color?: string;
  isFetching?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 py-2 border-b border-border/50 last:border-0">
      <Icon className={`h-4 w-4 ${color}`} />
      <div className="flex-1 flex justify-between items-center">
        <span className="text-sm text-muted-foreground">{label}</span>
        {isFetching ? (
          <span className="inline-block h-4 w-24 rounded-lg bg-gray-300/30 animate-pulse" />
        ) : (
          <span className="text-sm font-medium">{value}</span>
        )}
      </div>
    </div>
  );
}
