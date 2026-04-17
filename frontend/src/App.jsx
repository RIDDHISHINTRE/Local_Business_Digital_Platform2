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

// Command Centre
import CommandCentreLayout from "./components/layout/CommandCentreLayout";
import Overview from "./pages/commandcentre/Overview";
import Homepage from "./pages/commandcentre/Homepage";
import Services from "./pages/commandcentre/Services";
import Businesses from "./pages/commandcentre/Businesses";
import Pricing from "./pages/commandcentre/Pricing";
import Testimonials from "./pages/commandcentre/Testimonials";
import Analytics from "./pages/commandcentre/Analytics";
import Settings from "./pages/commandcentre/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<LocalBoostHomepage />} />
        <Route path="/verify-email/:token" element={<VerifyEmail />} />
        <Route path="/sign-in" element={<SignInSignUp />} />

        {/* BUSINESS */}
        <Route path="/business-setup" element={<BusinessSetupForm />} />
        <Route path="/business-status" element={<BusinessStatusPending />} />
        <Route path="/flow" element={<LocalBoostFlow />} />

        {/* USER */}
        <Route path="/user-dashboard" element={<UserDashboard />} />

        {/* SERVICE */}
        <Route path="/service/:id" element={<ServiceDetail />} />

        {/* ADMIN */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/:tab" element={<AdminDashboard />} />

        {/* COMMAND CENTRE */}
        <Route path="/admin/commandcentre" element={<CommandCentreLayout />}>
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="homepage" element={<Homepage />} />
          <Route path="services" element={<Services />} />
          <Route path="businesses" element={<Businesses />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;