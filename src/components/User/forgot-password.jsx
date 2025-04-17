import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ForgotPasswordForm({
  className,
  ...props
}) {
  return (
    (<div className={cn("flex flex-col gap-6 bg-(--dark-grey) rounded-xl", className)} {...props}>
      <Card className="bg-(--dark-grey) text-white border-transparent" >
        <CardHeader>
          <div className="flex flex-row items-center justify-center gap-3">
            <img src="/SiteAssests/FX_logo-small.png" alt="Fx-Logo" width="75px" height="auto" />
          <CardTitle >Worldwide Link<br/>Currency
          Exchange Group</CardTitle>
          </div>
          
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email" className="text-(--yellow-text)">Enter Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full cursor-pointer">
                Send Password Reset Link
                </Button>
              </div>
            </div>
            <div className="mt-6 text-center text-sm">
            We will send a password reset link to your Email
            </div>
          </form>
        </CardContent>
      </Card>
    </div>)
  );
}
