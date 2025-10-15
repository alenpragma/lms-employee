import { EmployeeHeader } from "@/components/employee-header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, TrendingDown, TrendingUp, Calendar, FileText, PiggyBank } from "lucide-react"

export function PaymentsView() {
  const paymentHistory = [
    {
      date: "10/13/2025",
      month: "October",
      type: "Leave",
      amount: -1866,
      note: "Deduction for 8 unpaid leave days",
    },
    {
      date: "10/11/2025",
      month: "October",
      type: "Payment",
      amount: -5150,
      note: "Salary",
    },
    {
      date: "9/30/2025",
      month: "September",
      type: "Other",
      amount: 5150,
      note: "N/A",
    },
  ]

  return (
    <>
      <EmployeeHeader />

      <main className="container mx-auto px-4 py-6 max-w-2xl space-y-6">
        {/* Balance Card */}
        <Card className="p-6 bg-gradient-to-br from-destructive via-orange to-warning text-destructive-foreground">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm opacity-90 mb-1">Current Balance</p>
              <h1 className="text-4xl font-bold text-balance">-৳1,866</h1>
              <Badge className="mt-3 bg-white/20 backdrop-blur-sm text-white border-white/30">Owes</Badge>
            </div>
            <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <DollarSign className="h-8 w-8" />
            </div>
          </div>
        </Card>

        {/* Salary Information */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 bg-gradient-to-br from-success/10 to-teal/10 border-success/20">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-success/20 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Monthly Salary</p>
                <p className="text-xl font-bold text-success">৳7,000</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-info/10 to-purple/10 border-info/20">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-info/20 flex items-center justify-center">
                <PiggyBank className="h-6 w-6 text-info" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">EPF Fund</p>
                <p className="text-xl font-bold text-info">৳350</p>
              </div>
            </div>
          </Card>
        </div>

        {/* EPF Summary */}
        <Card className="p-6 bg-gradient-to-br from-purple/10 to-accent/10 border-purple/20">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <PiggyBank className="h-5 w-5 text-purple" />
            EPF Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm text-muted-foreground">Total Fund</span>
              <span className="text-sm font-semibold">৳0</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm text-muted-foreground">Salary</span>
              <span className="text-sm font-semibold">৳7,000</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border/50">
              <span className="text-sm text-muted-foreground">EPF Percentage</span>
              <span className="text-sm font-semibold text-purple">5%</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-muted-foreground">Employee Contribution</span>
              <span className="text-sm font-semibold text-purple">৳350</span>
            </div>
          </div>
        </Card>

        {/* Payment History */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Payment History
          </h2>
          <div className="space-y-3">
            {paymentHistory.map((payment, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-secondary/50 to-transparent border border-border/50"
              >
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center ${
                    payment.amount > 0 ? "bg-success/20" : "bg-destructive/20"
                  }`}
                >
                  {payment.amount > 0 ? (
                    <TrendingUp className="h-5 w-5 text-success" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-destructive" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <p className="text-sm font-semibold">{payment.type}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <Calendar className="h-3 w-3" />
                        {payment.date} • {payment.month}
                      </p>
                    </div>
                    <p className={`text-lg font-bold ${payment.amount > 0 ? "text-success" : "text-destructive"}`}>
                      {payment.amount > 0 ? "+" : ""}৳{Math.abs(payment.amount).toLocaleString()}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">{payment.note}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </>
  )
}
