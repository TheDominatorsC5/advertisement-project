import { BoxesIcon, User2Icon, LogOut, ListCheck } from "lucide-react";
import { Link } from "react-router";

export default function Sidebar() {
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
        <SidebarLink icon={<LogOut />} text="Logout" danger href='#' />
      </div>
    </div>
  );
}

function SidebarLink({ icon, text, href, danger = false }) {
  return (
    <Link
      to={href || "#"}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-emerald-100 transition ${danger ? "text-red-600 hover:bg-red-100" : "text-gray-700"
        }`}
    >
      <span className="text-xl">{icon}</span>
      <span>{text}</span>
    </Link>
  );
}
