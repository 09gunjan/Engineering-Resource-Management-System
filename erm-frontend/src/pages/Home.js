import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    return (_jsxs("div", { className: "text-center space-y-6 mt-20", children: [_jsx("h1", { className: "text-3xl font-bold", children: "Welcome to ERM System" }), _jsxs("div", { className: "space-x-4", children: [_jsx("button", { onClick: () => navigate('/login?role=manager'), className: "px-6 py-3 bg-blue-600 text-white rounded-lg", children: "Login as Manager" }), _jsx("button", { onClick: () => navigate('/login?role=engineer'), className: "px-6 py-3 bg-green-600 text-white rounded-lg", children: "Login as Engineer" })] })] }));
};
export default Home;
