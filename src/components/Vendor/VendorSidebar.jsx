import { BoxesIcon, User2Icon, LogOut, ListCheck } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { apiClient } from "../../api/client";

export default function Sidebar() {
  const navigate = useNavigate()
  const logout = async () => {
    await apiClient.post("/signout", null, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
      }
    })
    localStorage.clear()
    navigate("/login")
  }

  return (
    <div className="col-span-2 min-h-screen bg-white border-r shadow-lg p-4 flex flex-col">
      {/* Logo */}
      <div className="text-2xl font-bold text-gold-700 mb-8 text-center">VendorPanel</div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4 text-gray-700 font-medium">
        <SidebarLink icon={<BoxesIcon />} text="My Products" href="/vendors/products" />
        <SidebarLink icon={<ListCheck />} text="Orders" href="#" />
        <SidebarLink icon={<User2Icon />} text="Profile" href='/vendors/profile' />
      </nav>

      {/* Logout */}
      <div className="mt-auto">
        <button onClick={() => logout()} className="flex items-center gap-3 px-4 py-2 rounded-lg transition cursor-pointer text-red-600 hover:bg-red-100">
          <span className="text-xl"><LogOut /></span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

function SidebarLink({ icon, text, href }) {
  return (
    <Link
      to={href || "#"}
      className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-emerald-100 transition text-gray-700"
    >
      <span className="text-xl">{icon}</span>
      <span>{text}</span>
    </Link>
  );
}
