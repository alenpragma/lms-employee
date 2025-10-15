import { MapPin, Navigation, AlertCircle, Loader2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface LocationStatusProps {
  location: { latitude: number; longitude: number } | null
  distance: number | null
  isInsideOffice: boolean
  loading: boolean
  error: string | null
}

export function LocationStatus({ location, distance, isInsideOffice, loading, error }: LocationStatusProps) {
  if (loading) {
    return (
      <Card className="p-6 bg-gradient-to-br from-info/10 to-primary/10 border-info/20">
        <div className="flex items-center justify-center gap-3 text-info">
          <Loader2 className="h-5 w-5 animate-spin" />
          <p className="text-sm font-medium">Getting your location...</p>
        </div>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="p-6 bg-gradient-to-br from-destructive/10 to-orange/10 border-destructive/20">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-full bg-destructive/20 flex items-center justify-center">
            <AlertCircle className="h-5 w-5 text-destructive" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-destructive">Location Access Required</p>
            <p className="text-xs text-muted-foreground mt-1">
              Please enable location services to use attendance features.
            </p>
          </div>
        </div>
      </Card>
    )
  }

  if (!location || distance === null) {
    return null
  }

  return (
    <Card
      className={`p-6 bg-gradient-to-br ${
        isInsideOffice
          ? "from-success/10 to-teal/10 border-success/20"
          : "from-warning/10 to-orange/10 border-warning/20"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Navigation className={`h-5 w-5 ${isInsideOffice ? "text-success" : "text-warning"}`} />
            <h2 className="text-base font-semibold">Your Location</h2>
          </div>

          <div className="space-y-2">
            <Badge
              className={`${
                isInsideOffice ? "bg-success text-success-foreground" : "bg-warning text-warning-foreground"
              }`}
            >
              {isInsideOffice ? "Inside Office" : "Outside Office"}
            </Badge>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>
                {distance < 1000
                  ? `${Math.round(distance)} meters from office`
                  : `${(distance / 1000).toFixed(2)} km from office`}
              </span>
            </div>
          </div>
        </div>

        <div
          className={`h-16 w-16 rounded-full flex items-center justify-center ${
            isInsideOffice ? "bg-success/20" : "bg-warning/20"
          }`}
        >
          <MapPin className={`h-8 w-8 ${isInsideOffice ? "text-success" : "text-warning"}`} />
        </div>
      </div>
    </Card>
  )
}
