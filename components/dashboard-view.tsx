"use client";

import { useState, useEffect } from "react";
import { EmployeeHeader } from "@/components/employee-header";
import { LocationStatus } from "@/components/location-status";
import { AttendanceActions } from "@/components/attendance-actions";
import { TodaySummary } from "@/components/today-summary";
import { QuickStats } from "@/components/quick-stats";
import { RecentActivity } from "@/components/recent-activity";
import { useGeolocation } from "@/hooks/use-geolocation";
import { calculateDistance } from "@/lib/location-utils";

const OFFICE_LOCATION = {
  latitude: 23.110722,
  longitude: 91.979137,
};

const OFFICE_RADIUS = 30;

export function DashboardView() {
  const { location, error, loading } = useGeolocation();
  const [distance, setDistance] = useState<number | null>(null);
  const [isInsideOffice, setIsInsideOffice] = useState(false);
  const [attendanceStatus, setAttendanceStatus] = useState<
    "clocked-out" | "clocked-in" | "on-break"
  >("clocked-out");
  const [clockInTime, setClockInTime] = useState<Date | null>(null);
  const [breakStartTime, setBreakStartTime] = useState<Date | null>(null);

  useEffect(() => {
    if (location) {
      const dist = calculateDistance(
        location.latitude,
        location.longitude,
        OFFICE_LOCATION.latitude,
        OFFICE_LOCATION.longitude
      );
      setDistance(dist);
      setIsInsideOffice(dist <= OFFICE_RADIUS);
    }
  }, [location]);

  const handleClockIn = () => {
    setAttendanceStatus("clocked-in");
    setClockInTime(new Date());
  };

  const handleClockOut = () => {
    setAttendanceStatus("clocked-out");
    setClockInTime(null);
    setBreakStartTime(null);
  };

  const handleBreakIn = () => {
    setAttendanceStatus("on-break");
    setBreakStartTime(new Date());
  };

  const handleBreakOut = () => {
    setAttendanceStatus("clocked-in");
    setBreakStartTime(null);
  };

  return (
    <>
      <EmployeeHeader />

      <main className="container mx-auto px-4 py-6 max-w-2xl space-y-6">
        <LocationStatus
          location={location}
          distance={distance}
          isInsideOffice={isInsideOffice}
          loading={loading}
          error={error}
        />

        <AttendanceActions
          status={attendanceStatus}
          isInsideOffice={isInsideOffice}
          onClockIn={handleClockIn}
          onClockOut={handleClockOut}
          onBreakIn={handleBreakIn}
          onBreakOut={handleBreakOut}
        />

        <TodaySummary
          clockInTime={clockInTime}
          breakStartTime={breakStartTime}
          status={attendanceStatus}
        />

        <QuickStats />

        <RecentActivity />
      </main>
    </>
  );
}
