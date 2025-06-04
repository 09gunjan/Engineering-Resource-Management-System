import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import api from '../lib/api';
import CapacityBar from '../components/CapacityBar';
export default function ManagerDashboard() {
    const [engineers, setEngineers] = useState([]);
    const [capacities, setCapacities] = useState({});
    const [assignments, setAssignments] = useState({});
    useEffect(() => {
        api.get('/engineers').then((res) => {
            setEngineers(res.data);
            res.data.forEach((eng) => {
                // Get capacity
                api.get(`/engineers/${eng.id}/capacity`).then((r) => setCapacities((prev) => ({ ...prev, [eng.id]: r.data })));
                // Get current assignments
                api.get(`/engineers/${eng.id}/assignments`).then((r) => setAssignments((prev) => ({ ...prev, [eng.id]: r.data })));
            });
        });
    }, []);
    return (_jsxs("div", { className: "p-6 space-y-4", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "Team Overview" }), _jsx("ul", { className: "space-y-4", children: engineers.map((e) => (_jsxs("li", { className: "p-4 border rounded bg-white shadow-sm", children: [_jsxs("div", { className: "font-semibold text-lg", children: [e.name, " \u2013 ", e.skills.join(', ')] }), _jsxs("div", { className: "text-sm mb-1", children: ["Capacity: ", capacities[e.id]?.allocated ?? 0, "% allocated"] }), _jsx(CapacityBar, { percent: capacities[e.id]?.allocated ?? 0 }), assignments[e.id]?.length > 0 ? (_jsxs("ul", { className: "text-sm mt-2 space-y-1", children: [_jsx("p", { className: "font-medium mt-2", children: "Current Assignments:" }), assignments[e.id].map((a) => (_jsxs("li", { className: "ml-2", children: ["\u2022 ", _jsx("strong", { children: a.projectName }), " \u2013 ", a.allocationPercentage, "% from", ' ', _jsx("span", { className: "text-gray-600", children: formatDate(a.startDate) }), " to", ' ', _jsx("span", { className: "text-gray-600", children: formatDate(a.endDate) })] }, a.id)))] })) : (_jsx("p", { className: "text-sm mt-2 text-gray-500", children: "No current assignments" }))] }, e.id))) })] }));
}
// Helper to format ISO date to readable format
function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString();
}
