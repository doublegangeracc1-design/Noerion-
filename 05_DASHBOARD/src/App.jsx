import { Routes, Route } from "react-router-dom";

import AdminLayout from "./layouts/AdminLayout";

import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import Loading from "./pages/loading/Loading";
import Privacy from "./pages/privacy/Privacy";
import Home from "./pages/admin/Home";
import UserManagement from "./pages/admin/user-management/UserManagement";
import TraineeManagement from "./pages/admin/user-management/TraineeManagement";
import AssessorManagement from "./pages/admin/user-management/AssessorManagement";
import AssessmentManagement from "./pages/admin/AssessmentManagement";
import ResultsMonitoring from "./pages/admin/ResultsMonitoring";
import CertificateManagement from "./pages/admin/CertificateManagement";
import Profile from "./pages/admin/Profile";
import Settings from "./pages/admin/Settings";
import Logout from "./pages/admin/Logout";

function App() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login />} />

      <Route path="/loading" element={<Loading />} />

      <Route path="/privacy" element={<Privacy />} />

      {/* Dashboard/Admin Pages */}
      <Route
        path="/dashboard/*"
        element={
          <AdminLayout>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/users" element={<UserManagement />} />

              <Route
                path="/user-management/trainees"
                element={<TraineeManagement />}
              />

              <Route
                path="/user-management/assessors"
                element={<AssessorManagement />}
              />

              <Route
                path="/assessments"
                element={<AssessmentManagement />}
              />

              <Route path="/results" element={<ResultsMonitoring />} />

              <Route
                path="/certificates"
                element={<CertificateManagement />}
              />

              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </AdminLayout>
        }
      />
    </Routes>
  );
}

export default App;