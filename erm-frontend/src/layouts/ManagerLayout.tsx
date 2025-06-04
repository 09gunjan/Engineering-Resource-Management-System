import { Link, Outlet } from "react-router-dom";

const ManagerLayout = () => {
  return (
    <div>
      <nav className="bg-gray-900 text-white p-4 flex justify-between">
        <div className="flex gap-6">
          <Link to="/manager/overview">Team</Link>
          <Link to="/manager/assign">Assign</Link>
          <Link to="/manager/projects">Projects</Link>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="bg-red-600 px-4 py-1 rounded"
        >
          Logout
        </button>
      </nav>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default ManagerLayout; 