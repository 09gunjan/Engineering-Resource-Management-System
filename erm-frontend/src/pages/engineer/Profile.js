import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import axios from '@/lib/axios';
const Profile = () => {
    const [user, setUser] = useState({
        name: '',
        department: '',
        skills: [],
        seniority: 'junior',
        employmentType: 'full-time',
        allocatedPercentage: 0,
    });
    useEffect(() => {
        axios.get('/auth/profile').then((res) => {
            setUser(res.data);
        });
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    const handleSkillsChange = (e) => {
        setUser({ ...user, skills: e.target.value.split(',').map(skill => skill.trim()) });
    };
    const handleSave = async () => {
        try {
            await axios.put('/auth/profile', user);
            alert('Profile updated');
        }
        catch (err) {
            alert('Error updating profile');
        }
    };
    return (_jsxs("div", { className: "max-w-2xl mx-auto p-6", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "Engineer Profile" }), _jsx("input", { name: "name", value: user.name, onChange: handleChange, className: "w-full border p-2 mb-2 rounded", placeholder: "Full Name" }), _jsx("input", { name: "department", value: user.department, onChange: handleChange, className: "w-full border p-2 mb-2 rounded", placeholder: "Department" }), _jsx("input", { name: "skills", value: user.skills.join(', '), onChange: handleSkillsChange, className: "w-full border p-2 mb-2 rounded", placeholder: "Skills (comma separated)" }), _jsxs("select", { name: "seniority", value: user.seniority, onChange: handleChange, className: "w-full border p-2 mb-2 rounded", children: [_jsx("option", { value: "junior", children: "Junior" }), _jsx("option", { value: "mid", children: "Mid" }), _jsx("option", { value: "senior", children: "Senior" })] }), _jsxs("select", { name: "employmentType", value: user.employmentType, onChange: handleChange, className: "w-full border p-2 mb-4 rounded", children: [_jsx("option", { value: "full-time", children: "Full-time (100%)" }), _jsx("option", { value: "part-time", children: "Part-time (50%)" })] }), user.allocatedPercentage !== undefined && (_jsxs("div", { className: "mb-4 text-sm text-gray-700", children: [_jsx("strong", { children: "Current Status:" }), " ", user.allocatedPercentage, "% allocated,", ' ', user.employmentType === 'full-time'
                        ? 100 - user.allocatedPercentage
                        : 50 - user.allocatedPercentage, "% available"] })), _jsx("button", { onClick: handleSave, className: "bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition", children: "Save" })] }));
};
export default Profile;
