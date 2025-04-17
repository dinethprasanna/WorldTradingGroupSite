import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export function RegistrationForm({ className, ...props }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 bg-(--dark-grey) rounded-xl",
        className
      )}
      {...props}
    >
      <Card className="bg-(--dark-grey) text-white border-transparent">
        <CardHeader>
          <div className="flex flex-row items-center justify-center gap-3">
            <img
              src="/SiteAssests/FX_logo-small.png"
              alt="Fx-Logo"
              width="75px"
              height="auto"
            />
            <CardTitle>
            Worldwide Link
              <br />
              Currency Exchange Group
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="first-name" className="text-(--yellow-text)">
                  First Name
                </Label>
                <Input
                  id="first-name"
                  type="text"
                  placeholder="First name"
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="last-name" className="text-(--yellow-text)">
                  Last Name
                </Label>
                <Input
                  id="last-name"
                  type="text"
                  placeholder="Last name"
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="dob" className="text-(--yellow-text)">
                  Date of Birth
                </Label>
                <Input id="dob" type="Date" placeholder="" required />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="country" className="text-(--yellow-text)">
                  Country
                </Label>
                <Input
                  id="country"
                  type="text"
                  placeholder="Country"
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="phone" className="text-(--yellow-text)">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone number"
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="email" className="text-(--yellow-text)">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="password" className="text-(--yellow-text)">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label
                  htmlFor="confirm-password"
                  className="text-(--yellow-text)"
                >
                  Confirm Password
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm password"
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="referral-code" className="text-(--yellow-text)">
                  Referral Code
                </Label>
                <Input
                  id="referral-code"
                  type="text"
                  placeholder="Referral code"
                  required
                />
              </div>

              <div className="grid gap-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-thin"
                  >
                    I agree with Customer Agreement and agree with Terms and conditions
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full cursor-pointer">
                  Sign Up
                </Button>
              </div>
            </div>
            <div className="mt-6 text-center text-sm">
              Or
              <br />
              Already have an account?{" "}
              <a
                href="/sign-in"
                className="underline underline-offset-4 text-(--yellow-text)"
              >
                Sign in
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
