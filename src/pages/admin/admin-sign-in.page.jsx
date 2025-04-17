import { AdminLoginForm } from "@/components/Admin/admin-login-form";

function AdminSignInPage() {
  return (
    <main>
      <section className="admin-login  px-5 lg:px-4 mx-auto max-w-7xl">
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm">
            <AdminLoginForm />
          </div>
        </div>
      </section>
    </main>
  );
}

export default AdminSignInPage;
