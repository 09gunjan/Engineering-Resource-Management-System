import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import api from '@/lib/api';
export default function AvailabilityPlanning() {
    const [engineers, setEngineers] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await api.get('/engineers');
            const data = await Promise.all(res.data.map(async (eng) => {
                const assignmentsRes = await api.get(`/engineers/${eng.id}/assignments`);
                return { ...eng, assignments: assignmentsRes.data };
            }));
            setEngineers(data);
        }
        fetchData();
    }, []);
    return (_jsxs("div", { className: "p-6 space-y-6", children: [_jsx("h2", { className: "text-2xl font-bold", children: "Availability Planning" }), engineers.map((eng) => (_jsxs("div", { className: "border p-4 rounded shadow", children: [_jsx("h3", { className: "font-semibold text-lg", children: eng.name }), _jsx("ul", { className: "mt-2 space-y-2", children: eng.assignments.map((a, i) => (_jsxs("li", { className: "text-sm", children: [_jsx("strong", { children: a.projectName }), " \u2014 ", a.allocationPercentage, "% from", ' ', new Date(a.startDate).toLocaleDateString(), " to", ' ', new Date(a.endDate).toLocaleDateString()] }, i))) }), eng.assignments.length === 0 && _jsx("p", { className: "text-gray-500 text-sm", children: "Fully available" })] }, eng.id)))] }));
}
