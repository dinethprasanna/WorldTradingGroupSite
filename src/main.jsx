import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";

// Layouts
import RootLayout from "@/layouts/root.layout";
import MainLayout from "@/layouts/main-layout.layout";
import AuthLayout from "@/layouts/auth-layout.layout";
import UserLayout from "@/layouts/user-layout.layout";
import AdminLayout from "@/layouts/admin-layout.layout";

// Site Pages
import HomePage from "@/pages/home.page";
import AboutUsPage from "@/pages/about-us.page";
import MarketPage from "./pages/market.page";
import FAQPage from "./pages/faq.page";
import TradingPlatformPage from "./pages/trading-platform.page";
import PrivacyPolicyPage from "./pages/privacy-policy.page";
import TermsAndConditionsPage from "./pages/terms-and-conditions.page";
import ContactUsPage from "./pages/contact-us.page";

// Auth Pages
//User Auth
import SignInPage from "@/pages/user/sign-in.page";
import SignUpPage from "@/pages/user/sign-up.page";
import ForgotPasswordPage from "./pages/user/forgot-password.page";
// Admin Auth
import AdminSignInPage from "./pages/admin/admin-sign-in.page";


// User Panels Pages
import UserPanelPage from "./pages/user/user-panel.page";
import UserDashboardPanel from "./components/User/user-dashboard-panel";
import UserAccountSettingsPanel from "./components/User/user-account-settings-panel";
import UserPersonalInformationPanel from "./components/User/user-personal-information-panel";
import UserVerifiedDocumentsPanel from "./components/User/user-verified-documents-panel";
import UserDepositPanel from "./components/User/user-deposit-panel";
import UserWithdrawPanel from "./components/User/user-withdraw-panel";
import UserWatchlistPanel from "./components/User/user-watchlist-panel";
import UserInstrumentsPanel from "./components/User/user-instruments-panel";
import UserInquiryPanel from "./components/User/user-inquiry-panel";


// Admin Panels Pages
import AdminPanelPage from "./pages/admin/admin-panel.page";
import AdminDashboardPanel from "./components/Admin/admin-dashboard-panel";
import AdminUsersPanel from "./components/Admin/admin-users-panel";
import AdminWithdrawalRequestsPanel from "./components/Admin/admin-withdrawal-requests-panel";
import AdminDocumentsVerificationPanel from "./components/Admin/admin-documents-verification-panel";
import AdminPromotionsPanel from "./components/Admin/admin-promotions-panel";
import AdminInquiriesPanel from "./components/Admin/admin-inquires-panel";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* Site Mainlayout */}
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/trading-platform" element={<TradingPlatformPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditionsPage />}
            />
            <Route path="/contact-us" element={<ContactUsPage />} />
          </Route>

          {/* Authentications SignIn & SignUp for User and Admin */}
          <Route path="/" element={<AuthLayout />}>
            {/* User Login & Register            */}
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            {/* Admin Login  */}
            <Route path="/admin-login" element={<AdminSignInPage />} />
          </Route>

          {/* User panels Layout */}
          <Route path="/user" element={<UserLayout />}>
            <Route path="/user" element={<UserPanelPage />}>
              <Route path="/user/" element={<UserDashboardPanel />} />
              <Route path="/user/account-settings" element={<UserAccountSettingsPanel />} />
              <Route path="/user/personal-information" element={<UserPersonalInformationPanel />} />
              <Route path="/user/verified-documents" element={<UserVerifiedDocumentsPanel />} />

              <Route path="/user/deposit" element={<UserDepositPanel />} />
              <Route path="/user/withdraw" element={<UserWithdrawPanel />} />

              <Route path="/user/watchlist" element={<UserWatchlistPanel />} />
              <Route path="/user/instruments" element={<UserInstrumentsPanel />} />

              <Route path="/user/inquiry" element={<UserInquiryPanel />} />
            </Route>
          </Route>

          {/* Admin panels Layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin" element={<AdminPanelPage />}>
              <Route path="/admin/" element={<AdminDashboardPanel />} />

              <Route path="/admin/users" element={<AdminUsersPanel />} />
              <Route path="/admin/withdrawal-requests" element={<AdminWithdrawalRequestsPanel />} />
              <Route path="/admin/documents-verification" element={<AdminDocumentsVerificationPanel />} />

              <Route path="/admin/promotions" element={<AdminPromotionsPanel />} />

              <Route path="/admin/inquiries" element={<AdminInquiriesPanel />} />
            </Route>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
