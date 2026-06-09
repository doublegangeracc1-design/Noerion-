
import { NavLink, useLocation } from "react-router-dom";

import {
    Home,
    Users,
    ClipboardList,
    BarChart3,
    Award,
    User,
    Settings,
    LogOut,
    X,
    Menu,
} from "lucide-react";

function AdminSidebar({ isOpen, setIsOpen }) {
    const location = useLocation();

    const menuItems = [
        { icon: Home, label: "Home", path: "/" },
        { icon: Users, label: "User Management", path: "/users" },
        { icon: ClipboardList, label: "Assessment Management", path: "/assessments" },
        { icon: BarChart3, label: "Results Monitoring", path: "/results" },
        { icon: Award, label: "Certificate Management", path: "/certificates" },
        { icon: User, label: "Profile", path: "/profile" },
        { icon: Settings, label: "Settings", path: "/settings" },
        { icon: LogOut, label: "Logout", path: "/logout" },
    ];

    return (
        <aside
            className={`
        bg-[#001F5B]
        text-white
        h-screen
        transition-all duration-300
        flex
        flex-col
        ${isOpen ? "w-72" : "w-20"}
      `}
        >
            {/* Header */}
            <div className="p-4 flex items-center justify-center">
                {isOpen ? (
                    <div className="flex items-center gap-3 w-full">
                        <img
                            src="/tesda.png"
                            alt="TESDA"
                            className="w-12 h-12 object-contain"
                        />

                        <div className="flex-1">
                            <h2 className="font-bold text-lg leading-none">
                                TESDA
                            </h2>

                            <p className="text-xs text-gray-200">
                                ASSESSMENT SYSTEM
                            </p>
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:bg-blue-800 p-2 rounded-lg"
                        >
                            <X size={20} />
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="hover:bg-blue-800 p-2 rounded-lg"
                    >
                        <Menu size={24} />
                    </button>
                )}
            </div>

            {/* Menu */}
            <nav className="flex-1 px-3 mt-6">
                <ul className="space-y-2">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                to={item.path}
                                end={item.path === "/"}
                                className={({ isActive }) => {
                                    const userManagementActive =
                                        item.path === "/users" &&
                                        (
                                            location.pathname === "/users" ||
                                            location.pathname.startsWith("/user-management")
                                        );

                                    return `w-full flex items-center gap-4 px-4 py-3 rounded-xl transition ${isActive || userManagementActive
                                        ? "bg-blue-800"
                                        : "hover:bg-blue-700"
                                    }`;
                                }}
                            >
                                <item.icon size={22} />

                                {isOpen && (
                                    <span className="text-sm font-medium">
                                        {item.label}
                                    </span>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Footer */}
            {isOpen && (
                <div className="p-4 text-xs text-gray-300 text-center">
                    &copy; 2026 NOERION.
                </div>
            )}
        </aside>
    );
}

export default AdminSidebar;