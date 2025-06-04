import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import axios from '@/lib/axios';
const MyAssignments = () => {
    const [assignments, setAssignments] = useState([]);
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        axios.get('/assignments').then(res => {
            const mine = res.data.filter((a) => a.engineerId === user.id);
            setAssignments(mine);
        });
    }, []);
    return (_jsxs("div", { className: "max-w-3xl mx-auto p-6", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "My Assignments" }), assignments.length === 0 ? (_jsx("p", { className: "text-gray-500", children: "No current assignments found." })) : (_jsx("ul", { className: "space-y-4", children: assignments.map((a) => (_jsxs("li", { className: "p-4 border rounded bg-white shadow-sm", children: [_jsx("p", { className: "font-semibold text-lg", children: a.Project?.name || 'Unnamed Project' }), _jsxs("p", { children: [_jsx("strong", { children: "Role:" }), " ", a.role] }), _jsxs("p", { children: [_jsx("strong", { children: "From:" }), " ", a.startDate?.slice(0, 10), " ", _jsx("strong", { children: "to" }), " ", a.endDate?.slice(0, 10)] }), _jsxs("p", { children: [_jsx("strong", { children: "Allocation:" }), " ", a.allocationPercentage, "%"] })] }, a.id))) }))] }));
};
export default MyAssignments;
