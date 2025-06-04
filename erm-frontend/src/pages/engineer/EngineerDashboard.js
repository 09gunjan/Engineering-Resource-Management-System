import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import api from "../../lib/api";
export default function EngineerDashboard() {
    const [assignments, setAssignments] = useState([]);
    useEffect(() => {
        api.get('/assignments/my').then((res) => setAssignments(res.data));
    }, []);
    return (_jsxs("div", { className: "p-6", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "My Assignments" }), _jsx("div", { className: "space-y-4", children: assignments.map((a) => (_jsxs("div", { className: "border p-4 rounded", children: [_jsx("div", { className: "text-lg font-semibold", children: a.project.name }), _jsxs("div", { className: "text-sm", children: ["Role: ", a.role] }), _jsxs("div", { className: "text-sm", children: ["Duration: ", new Date(a.project.startDate).toLocaleDateString(), " - ", new Date(a.project.endDate).toLocaleDateString()] }), _jsxs("div", { className: "text-sm", children: ["Allocation: ", a.allocationPercentage, "%"] })] }, a.id))) })] }));
}
