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
import ServiceForm from "./pages/ServiceForm";

// Command Centre
import CommandCentreLayout from "./components/layout/CommandCentreLayout";
import Businesses from "./pages/commandcentre/Businesses";
import Testimonials from "./pages/commandcentre/Testimonials";
import Settings from "./pages/commandcentre/Settings";
import Emailing from "./pages/commandcentre/Emailing";
import CreateTemplate from "./pages/commandcentre/CreateTemplate";

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
        <Route path="/admin/service/new" element={<ServiceForm />} />
        <Route path="/admin/service/edit/:id" element={<ServiceForm />} />

        {/* COMMAND CENTRE */}
        <Route path="/admin/commandcentre" element={<CommandCentreLayout />}>
          <Route index element={<Businesses />} />
          <Route path="businesses" element={<Businesses />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="emailing" element={<Emailing />} />
          <Route path="emailing/create-template" element={<CreateTemplate />} />
          <Route path="settings" element={<Settings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;