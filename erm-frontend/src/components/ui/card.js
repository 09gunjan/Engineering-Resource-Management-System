import { jsx as _jsx } from "react/jsx-runtime";
export const Card = ({ children, className = '' }) => (_jsx("div", { className: `bg-white shadow rounded-lg ${className}`, children: children }));
export const CardContent = ({ children, className = '' }) => (_jsx("div", { className: `p-4 ${className}`, children: children }));
