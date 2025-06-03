import React, { useEffect, useState } from 'react';
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

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios.post('/assignments', form);
    alert('Assignment created!');
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Create Assignment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select name="projectId" onChange={handleChange} required className="w-full border p-2">
          <option value="">Select Project</option>
          {projects.map((p: any) => (
            <option value={p.id} key={p.id}>{p.name}</option>
          ))}
        </select>

        <select name="engineerId" onChange={handleChange} required className="w-full border p-2">
          <option value="">Select Engineer</option>
          {engineers.map((e: any) => (
            <option value={e.id} key={e.id}>{e.name}</option>
          ))}
        </select>

        <input name="role" onChange={handleChange} required className="w-full border p-2" placeholder="Role" />
        <input type="number" name="allocationPercentage" onChange={handleChange} required className="w-full border p-2" placeholder="Allocation %" />
        <input type="date" name="startDate" onChange={handleChange} required className="w-full border p-2" />
        <input type="date" name="endDate" onChange={handleChange} required className="w-full border p-2" />

        <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded">Assign</button>
      </form>
    </div>
  );
};

export default CreateAssignment; 