import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from 'react-hook-form';
import api from '../lib/api';
import { useState } from 'react';
export default function ProjectForm() {
    const { register, handleSubmit, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const onSubmit = async (data) => {
        const payload = {
            ...data,
            requiredSkills: data.requiredSkills.split(',').map((s) => s.trim()),
        };
        try {
            setLoading(true);
            console.log('Submitting project:', payload);
            await api.post('/projects', payload);
            alert('✅ Project created successfully');
            reset(); // clear form
        }
        catch (error) {
            console.error('❌ Project creation failed:', error);
            alert('❌ Failed to create project. Check console or backend.');
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4 p-6 max-w-md mx-auto", children: [_jsx("h2", { className: "text-xl font-semibold", children: "Project Management" }), _jsx("input", { ...register('name'), placeholder: "Project Name", className: "border p-2 w-full", required: true }), _jsx("input", { type: "number", ...register('teamSize'), placeholder: "Team Size", className: "border p-2 w-full", required: true }), _jsx("input", { type: "date", ...register('startDate'), className: "border p-2 w-full", required: true }), _jsx("input", { type: "date", ...register('endDate'), className: "border p-2 w-full", required: true }), _jsx("input", { ...register('requiredSkills'), placeholder: "Skills (comma-separated)", className: "border p-2 w-full", required: true }), _jsx("textarea", { ...register('description'), placeholder: "Description", className: "border p-2 w-full", required: true }), _jsxs("select", { ...register('status'), className: "border p-2 w-full", required: true, children: [_jsx("option", { value: "", children: "Select status" }), _jsx("option", { value: "planning", children: "Planning" }), _jsx("option", { value: "active", children: "Active" }), _jsx("option", { value: "completed", children: "Completed" })] }), _jsx("input", { type: "number", ...register('managerId'), placeholder: "Manager ID", className: "border p-2 w-full", required: true }), _jsx("button", { type: "submit", className: "bg-blue-600 text-white py-2 px-4 w-full rounded", disabled: loading, children: loading ? 'Creating...' : 'Create Project' })] }));
}
