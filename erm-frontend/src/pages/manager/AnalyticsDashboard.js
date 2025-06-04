import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
// Dummy data
const teamUtilization = [
    { name: "Alice", allocation: 70 },
    { name: "Bob", allocation: 50 },
    { name: "Charlie", allocation: 90 },
    { name: "Diana", allocation: 40 },
];
const skillDistribution = [
    { name: "React", value: 4 },
    { name: "Node.js", value: 3 },
    { name: "Python", value: 2 },
    { name: "SQL", value: 1 },
];
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];
const AnalyticsDashboard = () => {
    return (_jsxs("div", { className: "p-6 space-y-6", children: [_jsx("h2", { className: "text-2xl font-semibold", children: "Analytics Dashboard" }), _jsx(Card, { children: _jsxs(CardContent, { className: "p-6", children: [_jsx("h3", { className: "text-lg font-medium mb-4", children: "Team Utilization" }), _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(BarChart, { data: teamUtilization, children: [_jsx(XAxis, { dataKey: "name" }), _jsx(YAxis, {}), _jsx(Tooltip, {}), _jsx(Bar, { dataKey: "allocation", fill: "#8884d8" })] }) })] }) }), _jsx(Card, { children: _jsxs(CardContent, { className: "p-6", children: [_jsx("h3", { className: "text-lg font-medium mb-4", children: "Skill Distribution" }), _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(PieChart, { children: [_jsx(Pie, { data: skillDistribution, dataKey: "value", nameKey: "name", cx: "50%", cy: "50%", outerRadius: 100, label: true, children: skillDistribution.map((entry, index) => (_jsx(Cell, { fill: COLORS[index % COLORS.length] }, `cell-${index}`))) }), _jsx(Tooltip, {}), _jsx(Legend, {})] }) })] }) })] }));
};
export default AnalyticsDashboard;
