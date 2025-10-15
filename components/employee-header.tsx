import { Building2, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EmployeeHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Building2 className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold leading-none text-foreground">Edulife IT Institute</h1>
            <p className="text-xs text-muted-foreground mt-1">Employee Dashboard</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}
