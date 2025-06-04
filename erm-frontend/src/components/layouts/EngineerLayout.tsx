// src/layouts/EngineerLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

const EngineerLayout = () => {
  return (
    <div>
      <Navbar role="engineer" />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default EngineerLayout;
