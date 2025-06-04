import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import api from '../lib/api';
export default function Assignments() {
    const { register, handleSubmit, reset } = useForm();
    const [engineers, setEngineers] = useState([]);
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        api.get('/engineers').then((r) => setEngineers(r.data));
        api.get('/projects').then((r) => setProjects(r.data));
    }, []);
    const onSubmit = async (data) => {
        await api.post('/assignments', data);
        alert('Assignment created');
        reset();
    };
    return (_jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4 p-6 max-w-lg mx-auto", children: [_jsxs("select", { ...register('engineerId'), className: "border p-2 w-full", children: [_jsx("option", { value: "", children: "Select Engineer" }), engineers.map((e) => (_jsx("option", { value: e.id, children: e.name }, e.id)))] }), _jsxs("select", { ...register('projectId'), className: "border p-2 w-full", children: [_jsx("option", { value: "", children: "Select Project" }), projects.map((p) => (_jsx("option", { value: p.id, children: p.name }, p.id)))] }), _jsx("input", { type: "number", ...register('allocationPercentage'), placeholder: "Allocation % (e.g., 50)", className: "border p-2 w-full" }), _jsx("input", { type: "text", ...register('role'), placeholder: "Engineer Role", className: "border p-2 w-full" }), _jsx("input", { type: "date", ...register('startDate'), className: "border p-2 w-full" }), _jsx("input", { type: "date", ...register('endDate'), className: "border p-2 w-full" }), _jsx("button", { className: "bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800", children: "Assign" })] }));
}
