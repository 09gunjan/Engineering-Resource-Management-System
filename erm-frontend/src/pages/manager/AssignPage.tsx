import React, { useEffect, useState } from 'react';
import axios from '@/lib/axios';

interface Engineer {
  id: number;
  name: string;
  currentAllocation: number;
}

interface Project {
  id: number;
  name: string;
}

const AssignPage = () => {
  const [engineers, setEngineers] = useState<Engineer[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [form, setForm] = useState({
    engineerId: '',
    projectId: '',
    allocation: '',
    startDate: '',
    endDate: ''
  });

  useEffect(() => {
    axios.get('/engineers').then(res => setEngineers(res.data));
    axios.get('/projects').then(res => setProjects(res.data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('/assignments', form);
    alert('Assignment created successfully');
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Create Assignment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select 
          className="w-full p-2 border rounded"
          value={form.engineerId}
          onChange={e => setForm({...form, engineerId: e.target.value})}
        >
          <option value="">Select Engineer</option>
          {engineers.map(eng => (
            <option key={eng.id} value={eng.id}>{eng.name}</option>
          ))}
        </select>

        <select 
          className="w-full p-2 border rounded"
          value={form.projectId}
          onChange={e => setForm({...form, projectId: e.target.value})}
        >
          <option value="">Select Project</option>
          {projects.map(proj => (
            <option key={proj.id} value={proj.id}>{proj.name}</option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Allocation %"
          className="w-full p-2 border rounded"
          value={form.allocation}
          onChange={e => setForm({...form, allocation: e.target.value})}
        />

        <input
          type="date"
          className="w-full p-2 border rounded"
          value={form.startDate}
          onChange={e => setForm({...form, startDate: e.target.value})}
        />

        <input
          type="date"
          className="w-full p-2 border rounded"
          value={form.endDate}
          onChange={e => setForm({...form, endDate: e.target.value})}
        />

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Create Assignment
        </button>
      </form>
    </div>
  );
};

export default AssignPage; 