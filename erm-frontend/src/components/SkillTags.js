import { jsx as _jsx } from "react/jsx-runtime";
const SkillTags = ({ skills = [] }) => (_jsx("div", { className: "flex flex-wrap gap-2", children: skills.map((skill, i) => (_jsx("span", { className: "bg-gray-200 text-sm px-2 py-1 rounded-full", children: skill }, i))) }));
export default SkillTags;
