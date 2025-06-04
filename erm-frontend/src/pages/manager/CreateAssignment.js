import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import axios from '@/lib/axios';
const CreateAssignment = () => {
    const [projects, setProjects] = useState([]);
    const [engineers, setEngineers] = useState([]);
    const [form, setForm] = useState({
        engineerId: '',
        projectId: '',
        allocationPercentage: '',
        role: '',
        startDate: '',
        endDate: ''
    });
    useEffect(() => {
        axios.get('/projects').then(res => setProjects(res.data));
        axios.get('/engineers').then(res => setEngineers(res.data));
    }, []);
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/assignments', form);
        alert('Assignment created!');
    };
    return (_jsxs("div", { className: "max-w-xl mx-auto mt-10 p-4 border rounded", children: [_jsx("h2", { className: "text-xl font-bold mb-4", children: "Create Assignment" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("select", { name: "projectId", onChange: handleChange, required: true, className: "w-full border p-2", children: [_jsx("option", { value: "", children: "Select Project" }), projects.map((p) => (_jsx("option", { value: p.id, children: p.name }, p.id)))] }), _jsxs("select", { name: "engineerId", onChange: handleChange, required: true, className: "w-full border p-2", children: [_jsx("option", { value: "", children: "Select Engineer" }), engineers.map((e) => (_jsx("option", { value: e.id, children: e.name }, e.id)))] }), _jsx("input", { name: "role", onChange: handleChange, required: true, className: "w-full border p-2", placeholder: "Role" }), _jsx("input", { type: "number", name: "allocationPercentage", onChange: handleChange, required: true, className: "w-full border p-2", placeholder: "Allocation %" }), _jsx("input", { type: "date", name: "startDate", onChange: handleChange, required: true, className: "w-full border p-2" }), _jsx("input", { type: "date", name: "endDate", onChange: handleChange, required: true, className: "w-full border p-2" }), _jsx("button", { type: "submit", className: "bg-blue-600 text-white w-full py-2 rounded", children: "Assign" })] })] }));
};
export default CreateAssignment;
