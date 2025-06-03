import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (user?.role === "manager") navigate("/manager/overview");
    else if (user?.role === "engineer") navigate("/engineer/assignments");
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-green-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">
        🚀 Welcome to the ERM System
      </h1>
      <div className="flex space-x-6">
        <button
          onClick={() => navigate("/login?role=manager")}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Login as Manager
        </button>
        <button
          onClick={() => navigate("/login?role=engineer")}
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition"
        >
          Login as Engineer
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
