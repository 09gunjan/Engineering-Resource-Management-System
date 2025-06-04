import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
const Navbar = ({ role }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
        window.location.reload(); // refresh to clean up state
    };
    return (_jsxs("nav", { className: "bg-gray-900 text-white p-4 flex justify-between", children: [_jsxs("div", { className: "flex space-x-4", children: [role === 'manager' && (_jsxs(_Fragment, { children: [_jsx("button", { onClick: () => navigate('/manager/overview'), children: "Team" }), _jsx("button", { onClick: () => navigate('/manager/assign'), children: "Assign" }), _jsx("button", { onClick: () => navigate('/manager/projects'), children: "Projects" })] })), role === 'engineer' && (_jsxs(_Fragment, { children: [_jsx("button", { onClick: () => navigate('/engineer/assignments'), children: "My Assignments" }), _jsx("button", { onClick: () => navigate('/engineer/profile'), children: "Profile" })] }))] }), _jsx("button", { className: "bg-red-600 px-4 py-1 rounded", onClick: handleLogout, children: "Logout" })] }));
};
export default Navbar;
