import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

const EngineerLayout = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar role={user?.role || "engineer"} />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default EngineerLayout; 