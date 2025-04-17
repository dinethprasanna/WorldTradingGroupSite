import { ForgotPasswordForm } from "@/components/User/forgot-password";

function ForgotPasswordPage() {
  return (
    <main>
      <section className="user-login  px-5 lg:px-4 mx-auto max-w-7xl">
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm">
            <ForgotPasswordForm />
          </div>
        </div>
      </section>
    </main>
  );
}

export default ForgotPasswordPage;
