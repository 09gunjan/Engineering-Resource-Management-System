import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import axios from '@/lib/axios';
const ProjectManagement = () => {
    const [projects, setProjects] = useState([]);
    const [form, setForm] = useState({
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        requiredSkills: '',
        teamSize: '',
        status: 'planning'
    });
    useEffect(() => {
        axios.get('/projects').then(res => setProjects(res.data));
    }, []);
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/projects', {
            ...form,
            requiredSkills: form.requiredSkills.split(',').map((s) => s.trim())
        });
        alert('Project created');
    };
    return (_jsxs("div", { className: "p-6 max-w-4xl mx-auto", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "Project Management" }), _jsxs("form", { onSubmit: handleSubmit, className: "grid grid-cols-2 gap-4 mb-8", children: [_jsx("input", { name: "name", placeholder: "Project Name", onChange: handleChange, required: true, className: "border p-2" }), _jsx("input", { name: "teamSize", type: "number", placeholder: "Team Size", onChange: handleChange, required: true, className: "border p-2" }), _jsx("input", { name: "startDate", type: "date", onChange: handleChange, required: true, className: "border p-2" }), _jsx("input", { name: "endDate", type: "date", onChange: handleChange, required: true, className: "border p-2" }), _jsx("input", { name: "requiredSkills", placeholder: "Skills (comma-separated)", onChange: handleChange, required: true, className: "col-span-2 border p-2" }), _jsx("textarea", { name: "description", placeholder: "Description", onChange: handleChange, required: true, className: "col-span-2 border p-2" }), _jsxs("select", { name: "status", onChange: handleChange, className: "col-span-2 border p-2", children: [_jsx("option", { value: "planning", children: "Planning" }), _jsx("option", { value: "active", children: "Active" }), _jsx("option", { value: "completed", children: "Completed" })] }), _jsx("button", { className: "col-span-2 bg-blue-600 text-white py-2", children: "Create Project" })] }), _jsx("div", { className: "grid gap-4", children: projects.map((p) => (_jsxs("div", { className: "p-4 border rounded shadow-sm", children: [_jsx("h3", { className: "font-semibold text-lg", children: p.name }), _jsxs("p", { children: ["Status: ", p.status] }), _jsxs("p", { children: ["Team Size: ", p.teamSize] }), _jsxs("p", { children: ["Skills: ", p.requiredSkills.join(', ')] })] }, p.id))) })] }));
};
export default ProjectManagement;
