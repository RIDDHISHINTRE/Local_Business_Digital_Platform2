import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerifyEmail from "./pages/VerifyEmail";
import AdminDashboard from "./pages/AdminDashboard";
import BusinessSetupForm from "./pages/BusinessSetupForm";
import BusinessStatusPending from "./pages/BusinessStatusPending";
import LocalBoostFlow from "./pages/LocalBoostFlow";
import LocalBoostHomepage from "./pages/LocalBoostHomepage";
import ServiceDetail from "./pages/ServiceDetail";
import SignInSignUp from "./pages/SignInSignUp";
import UserDashboard from "./pages/UserDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LocalBoostHomepage />} />
        <Route path="/verify-email/:token" element={<VerifyEmail />} />

        {/* ✅ ADMIN ROUTES */}
        <Route path="/admin/:tab" element={<AdminDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />

        {/* OTHER */}
        <Route path="/sign-in" element={<SignInSignUp />} />
        <Route path="/business-setup" element={<BusinessSetupForm />} />
        <Route path="/business-status" element={<BusinessStatusPending />} />
        <Route path="/flow" element={<LocalBoostFlow />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />

        {/* SERVICE */}
        <Route path="/service/:id" element={<ServiceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;