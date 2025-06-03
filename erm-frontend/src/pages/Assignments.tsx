import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import api from '../lib/api';

export default function Assignments() {
  const { register, handleSubmit } = useForm();
  const [engineers, setEngineers] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/engineers').then((r) => setEngineers(r.data));
    api.get('/projects').then((r) => setProjects(r.data));
  }, []);

  const onSubmit = async (data: any) => {
    await api.post('/assignments', data);
    alert('Assignment created');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6">
      <select {...register('engineerId')} className="border p-2 w-full">
        {engineers.map((e: any) => (
          <option key={e.id} value={e.id}>{e.name}</option>
        ))}
      </select>
      <select {...register('projectId')} className="border p-2 w-full">
        {projects.map((p: any) => (
          <option key={p.id} value={p.id}>{p.name}</option>
        ))}
      </select>
      <input type="number" {...register('allocationPercentage')} placeholder="Allocation %" className="border p-2 w-full" />
      <input type="text" {...register('role')} placeholder="Role" className="border p-2 w-full" />
      <button className="bg-blue-700 text-white px-4 py-2">Assign</button>
    </form>
  );
}
