import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
const AssignmentTimeline = ({ assignments = [] }) => (_jsx("div", { className: "border-l border-gray-300 pl-4", children: assignments.map((a, i) => (_jsxs("div", { className: "mb-4", children: [_jsxs("div", { className: "text-sm font-semibold", children: [a.Project?.name, " (", a.role, ")"] }), _jsxs("div", { className: "text-sm text-gray-500", children: [a.startDate?.slice(0, 10), " \u2192 ", a.endDate?.slice(0, 10)] })] }, i))) }));
export default AssignmentTimeline;
