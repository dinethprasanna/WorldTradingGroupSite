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

export function LoginForm({
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
                <Label htmlFor="email" className="text-(--yellow-text)">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-(--yellow-text)">Password</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full cursor-pointer">
                  Sign In
                </Button>
              </div>
            </div>
            <div className="mt-6 text-center text-sm">
              Or<br/>
              Don&apos;t have an account?{" "}
              <a href="/sign-up" className="underline underline-offset-4 text-(--yellow-text)">
                Sign up
              </a>
              <br/>
              <a
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-(--light-green)">
                    Forgot your password?
                  </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>)
  );
}
