import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user") || "null");
        if (user?.role === "manager")
            navigate("/manager/overview");
        else if (user?.role === "engineer")
            navigate("/engineer/assignments");
    }, [navigate]);
    return (_jsxs("div", { className: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-green-100", children: [_jsx("h1", { className: "text-4xl font-bold text-gray-800 mb-10", children: "\uD83D\uDE80 Welcome to the ERM System" }), _jsxs("div", { className: "flex space-x-6", children: [_jsx("button", { onClick: () => navigate("/login?role=manager"), className: "px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition", children: "Login as Manager" }), _jsx("button", { onClick: () => navigate("/login?role=engineer"), className: "px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition", children: "Login as Engineer" })] })] }));
};
export default Dashboard;
