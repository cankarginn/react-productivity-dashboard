import {
  Home,
  BarChart3,
  FolderKanban,
  CalendarDays,
  MessageSquare,
  Target,
  Users,
  Bell,
  Settings,
} from "lucide-react";

import "./Sidebar.css";

function Sidebar() {
  const menuItems = [
    { name: "Home", icon: Home },
    { name: "Analytics", icon: BarChart3 },
    { name: "Projects", icon: FolderKanban },
    { name: "Calendar", icon: CalendarDays },
    { name: "Messages", icon: MessageSquare },
    { name: "Goals", icon: Target },
    { name: "Team", icon: Users },
  ];

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <span>R</span>
      </div>

      {/* Main navigation */}
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={`sidebar-item ${
                item.name === "Home" ? "active" : ""
              }`}
              title={item.name}
            >
              <Icon size={20} strokeWidth={1.8} />
            </button>
          );
        })}
      </nav>

      {/* Bottom navigation */}
      <div className="sidebar-bottom">
        <button className="sidebar-item" title="Notifications">
          <Bell size={20} strokeWidth={1.8} />
        </button>

        <button className="sidebar-item" title="Settings">
          <Settings size={20} strokeWidth={1.8} />
        </button>

        {/* Profile */}
        <div className="sidebar-profile">
          <span>C</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;