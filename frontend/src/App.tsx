import { NavLink, Navigate, Outlet, Route, Routes } from "react-router-dom";

import { Icons } from "@/lib/icons";
import Login from "@/screens/Login";
import Dashboard from "@/screens/Dashboard";
import MyProfile from "@/screens/MyProfile";
import Team from "@/screens/Team";
import Employees from "@/screens/Employees";
import HrAdmin from "@/screens/HrAdmin";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "flex items-center gap-2 rounded-[var(--brand-radius)] px-3 py-2 text-sm font-medium transition-colors",
    isActive ? "bg-[var(--brand-hover)] text-[var(--brand-fg)]" : "text-[var(--brand-fg-muted)]",
  ].join(" ");

// The app's menu, drawn around every screen except the ones routed outside it below.
function AppShellLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header
        className="border-b"
        style={{
          backgroundColor: "var(--brand-surface)",
          borderColor: "var(--brand-border)",
        }}
      >
        <div className="flex items-center gap-6 px-6 py-2">
          <p
            className="shrink-0 text-sm font-semibold"
            style={{ fontFamily: "var(--brand-font-heading)" }}
          >
            {"HRM System"}
          </p>
          <nav aria-label="App menu" className="flex flex-wrap items-center gap-1">
            <NavLink to="/dashboard" className={navLinkClass}>
              <Icons.Home size={16} />
              {"My Dashboard"}
            </NavLink>
            <NavLink to="/my-profile" className={navLinkClass}>
              <Icons.User size={16} />
              {"My Profile"}
            </NavLink>
            <NavLink to="/team" className={navLinkClass}>
              {"My Team"}
            </NavLink>
            <NavLink to="/employees" className={navLinkClass}>
              {"Employee Records"}
            </NavLink>
            <NavLink to="/hr-admin" className={navLinkClass}>
              <Icons.Settings size={16} />
              {"HR Admin"}
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppShellLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/team" element={<Team />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/hr-admin" element={<HrAdmin />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
