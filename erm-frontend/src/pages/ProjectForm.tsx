import { useForm } from 'react-hook-form';
import api from '../lib/api';
import { useState } from 'react';

export default function ProjectForm() {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    const payload = {
      ...data,
      requiredSkills: data.requiredSkills.split(',').map((s: string) => s.trim()),
    };

    try {
      setLoading(true);
      console.log('Submitting project:', payload);
      await api.post('/projects', payload);
      alert('✅ Project created successfully');
      reset(); // clear form
    } catch (error: any) {
      console.error('❌ Project creation failed:', error);
      alert('❌ Failed to create project. Check console or backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold">Project Management</h2>
      <input {...register('name')} placeholder="Project Name" className="border p-2 w-full" required />
      <input type="number" {...register('teamSize')} placeholder="Team Size" className="border p-2 w-full" required />
      <input type="date" {...register('startDate')} className="border p-2 w-full" required />
      <input type="date" {...register('endDate')} className="border p-2 w-full" required />
      <input {...register('requiredSkills')} placeholder="Skills (comma-separated)" className="border p-2 w-full" required />
      <textarea {...register('description')} placeholder="Description" className="border p-2 w-full" required />
      <select {...register('status')} className="border p-2 w-full" required>
        <option value="">Select status</option>
        <option value="planning">Planning</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      <input type="number" {...register('managerId')} placeholder="Manager ID" className="border p-2 w-full" required />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 w-full rounded"
        disabled={loading}
      >
        {loading ? 'Creating...' : 'Create Project'}
      </button>
    </form>
  );
}
