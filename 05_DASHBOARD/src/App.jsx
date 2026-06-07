import { Routes, Route } from "react-router-dom";

import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/admin/Home";
import UserManagement from "./pages/admin/UserManagement";
import AssessmentManagement from "./pages/admin/AssessmentManagement";
import ResultsMonitoring from "./pages/admin/ResultsMonitoring";
import CertificateManagement from "./pages/admin/CertificateManagement";
import Profile from "./pages/admin/Profile";
import Settings from "./pages/admin/Settings";
import Logout from "./pages/admin/Logout";

function App() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/assessments" element={<AssessmentManagement />} />
        <Route path="/results" element={<ResultsMonitoring />} />
        <Route path="/certificates" element={<CertificateManagement />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </AdminLayout>
  );
}

export default App;