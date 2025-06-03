import React, { useState, useEffect } from 'react';
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

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios.post('/projects', {
      ...form,
      requiredSkills: form.requiredSkills.split(',').map((s: string) => s.trim())
    });
    alert('Project created');
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Project Management</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mb-8">
        <input name="name" placeholder="Project Name" onChange={handleChange} required className="border p-2" />
        <input name="teamSize" type="number" placeholder="Team Size" onChange={handleChange} required className="border p-2" />
        <input name="startDate" type="date" onChange={handleChange} required className="border p-2" />
        <input name="endDate" type="date" onChange={handleChange} required className="border p-2" />
        <input name="requiredSkills" placeholder="Skills (comma-separated)" onChange={handleChange} required className="col-span-2 border p-2" />
        <textarea name="description" placeholder="Description" onChange={handleChange} required className="col-span-2 border p-2"></textarea>
        <select name="status" onChange={handleChange} className="col-span-2 border p-2">
          <option value="planning">Planning</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
        <button className="col-span-2 bg-blue-600 text-white py-2">Create Project</button>
      </form>

      <div className="grid gap-4">
        {projects.map((p: any) => (
          <div key={p.id} className="p-4 border rounded shadow-sm">
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p>Status: {p.status}</p>
            <p>Team Size: {p.teamSize}</p>
            <p>Skills: {p.requiredSkills.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectManagement;