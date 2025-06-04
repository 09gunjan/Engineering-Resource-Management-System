// src/layouts/EngineerLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useAuthStore } from "@/store/authStore";

const EngineerLayout = () => {
  const { user } = useAuthStore();
  return (
    <div>
      <Navbar role={user?.role || "engineer"} />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default EngineerLayout;
