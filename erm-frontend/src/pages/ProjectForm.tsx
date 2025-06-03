import { useForm } from 'react-hook-form';
import api from '../lib/api';

export default function ProjectForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    const payload = {
      ...data,
      requiredSkills: data.requiredSkills.split(',').map((s: string) => s.trim()),
    };
    await api.post('/projects', payload);
    alert('Project created');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6 max-w-md mx-auto">
      <input {...register('name')} placeholder="Project Name" className="border p-2 w-full" />
      <textarea {...register('description')} placeholder="Description" className="border p-2 w-full" />
      <input {...register('requiredSkills')} placeholder="Skills (comma-separated)" className="border p-2 w-full" />
      <input type="date" {...register('startDate')} className="border p-2 w-full" />
      <input type="date" {...register('endDate')} className="border p-2 w-full" />
      <input type="number" {...register('teamSize')} placeholder="Team Size" className="border p-2 w-full" />
      <select {...register('status')} className="border p-2 w-full">
        <option value="planning">Planning</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      <input type="number" {...register('managerId')} placeholder="Manager ID" className="border p-2 w-full" />
      <button className="bg-green-600 text-white py-2 px-4 w-full">Create Project</button>
    </form>
  );
}
