import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import api from '@/lib/api';
export default function SearchFilter() {
    const [engineers, setEngineers] = useState([]);
    const [projects, setProjects] = useState([]);
    const [skillQuery, setSkillQuery] = useState('');
    const [projectStatus, setProjectStatus] = useState('');
    useEffect(() => {
        api.get('/engineers').then((res) => setEngineers(res.data));
        api.get('/projects').then((res) => setProjects(res.data));
    }, []);
    const filteredEngineers = engineers.filter((eng) => eng.skills.some((skill) => skill.toLowerCase().includes(skillQuery.toLowerCase())));
    const filteredProjects = projects.filter((proj) => projectStatus ? proj.status === projectStatus : true);
    return (_jsxs("div", { className: "p-6 space-y-6", children: [_jsx("h2", { className: "text-xl font-bold", children: "Search & Filter" }), _jsxs("div", { children: [_jsx("input", { type: "text", placeholder: "Search engineer by skill (e.g., React)", value: skillQuery, onChange: (e) => setSkillQuery(e.target.value), className: "border p-2 rounded w-full" }), _jsx("ul", { className: "mt-2 space-y-2", children: filteredEngineers.map((e) => (_jsxs("li", { className: "p-2 border rounded", children: [e.name, " \u2013 Skills: ", e.skills.join(', ')] }, e.id))) })] }), _jsxs("div", { children: [_jsxs("select", { value: projectStatus, onChange: (e) => setProjectStatus(e.target.value), className: "border p-2 rounded", children: [_jsx("option", { value: "", children: "All Statuses" }), _jsx("option", { value: "Planning", children: "Planning" }), _jsx("option", { value: "Active", children: "Active" }), _jsx("option", { value: "Completed", children: "Completed" })] }), _jsx("ul", { className: "mt-2 space-y-2", children: filteredProjects.map((p) => (_jsxs("li", { className: "p-2 border rounded", children: [p.name, " \u2013 Status: ", p.status] }, p.id))) })] })] }));
}
