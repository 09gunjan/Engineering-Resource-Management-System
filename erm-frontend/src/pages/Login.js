import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const role = new URLSearchParams(location.search).get("role");
    const handleLogin = () => {
        const user = { email, role };
        localStorage.setItem("user", JSON.stringify(user));
        if (role === "manager")
            navigate("/manager/overview");
        else if (role === "engineer")
            navigate("/engineer/assignments");
        else
            navigate("/");
    };
    return (_jsx("div", { className: "flex flex-col items-center justify-center min-h-screen bg-white", children: _jsxs("div", { className: "w-80 p-6 bg-gray-100 rounded-lg shadow-lg", children: [_jsxs("h2", { className: "text-xl font-bold text-center mb-4", children: ["Login as ", role?.toUpperCase()] }), _jsx("input", { type: "email", placeholder: "Email", className: "w-full p-2 mb-3 border rounded", value: email, onChange: (e) => setEmail(e.target.value) }), _jsx("input", { type: "password", placeholder: "Password", className: "w-full p-2 mb-4 border rounded", value: password, onChange: (e) => setPassword(e.target.value) }), _jsx("button", { onClick: handleLogin, className: "w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition", children: "Login" }), _jsx("button", { onClick: () => navigate("/"), className: "mt-4 text-sm text-blue-500 hover:underline", children: "\u2190 Back to Home" })] }) }));
};
export default Login;
