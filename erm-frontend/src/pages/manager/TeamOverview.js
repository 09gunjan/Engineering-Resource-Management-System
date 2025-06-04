"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "@/components/ui/card";
const teamMembers = [
    {
        name: "Charlie",
        skills: "Python, Node.js",
        allocation: 40,
    },
    {
        name: "Bob",
        skills: "React, Node.js",
        allocation: 60,
    },
    {
        name: "Diana",
        skills: "React, Python",
        allocation: 50,
    },
];
const TeamOverview = () => {
    const getBarColor = (allocation) => {
        if (allocation < 50)
            return "bg-green-500";
        if (allocation < 70)
            return "bg-yellow-500";
        return "bg-red-500";
    };
    return (_jsxs("div", { className: "p-6", children: [_jsx("h2", { className: "text-2xl font-bold mb-6", children: "Team Overview" }), _jsx("div", { className: "flex flex-col gap-4", children: teamMembers.map((member, idx) => (_jsx(Card, { children: _jsxs(CardContent, { className: "p-4", children: [_jsxs("div", { className: "font-semibold", children: [member.name, " \u2013 ", member.skills] }), _jsxs("div", { className: "text-sm text-gray-600 mb-2", children: ["Capacity: ", member.allocation, "% allocated"] }), _jsx("div", { className: "w-full h-3 bg-gray-200 rounded-full overflow-hidden", children: _jsx("div", { className: `${getBarColor(member.allocation)} h-3 rounded-full transition-all duration-300`, style: { width: `${member.allocation}%` } }) })] }) }, idx))) })] }));
};
export default TeamOverview;
