import { useLocation } from "react-router-dom";

function AdminNavbar() {
  const location = useLocation();

  const pageTitles = {
    "/": "Home",
    "/users": "User Management",
    "/user-management/trainees": "Trainee Management",
    "/user-management/assessors": "Assessor Management",
    "/assessments": "Assessment Management",
    "/results": "Results Monitoring",
    "/certificates": "Certificate Management",
    "/profile": "Profile",
    "/settings": "Settings",
    "/logout": "Logout",
  };

  const currentTitle =
    pageTitles[location.pathname] || "Admin Dashboard";

  return (
    <header
      className="
        h-16
        bg-white
        shadow-[0_2px_8px_rgba(0,0,0,0.15)]
        flex
        items-center
        justify-between
        px-6
      "
    >
      <h1 className="text-xl font-semibold text-gray-400">
        {pageTitles[location.pathname] || "Admin Dashboard"}
      </h1>
      
      <div className="flex items-center gap-3">
        <img
          src="/admin.jpg"
          alt="Admin"
          className="w-10 h-10 rounded-full"
        />

        <span className="font-medium">
          Admin [Ash]
        </span>
      </div>
    </header>
  );
}

export default AdminNavbar;