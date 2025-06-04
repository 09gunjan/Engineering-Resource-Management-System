import { jsx as _jsx } from "react/jsx-runtime";
export default function CapacityBar({ percent }) {
    return (_jsx("div", { className: "w-full bg-gray-200 rounded-full h-4 overflow-hidden", children: _jsx("div", { className: `h-4 ${percent > 80 ? 'bg-red-500' : percent > 50 ? 'bg-yellow-500' : 'bg-green-500'}`, style: { width: `${percent}%` } }) }));
}
