import { useForm } from 'react-hook-form';
import api from '../lib/api';
import { useAuth } from '../store/authStore';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const setAuth = useAuth((s) => s.setAuth);

  const onSubmit = async (data: any) => {
    const res = await api.post('/auth/login', data);
    setAuth(res.data.token, res.data.user);
    window.location.href = res.data.user.role === 'manager' ? '/manager' : '/engineer';
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto p-4 space-y-4">
      <input placeholder="Email" {...register('email')} className="border w-full p-2" />
      <input type="password" placeholder="Password" {...register('password')} className="border w-full p-2" />
      <button className="bg-blue-600 text-white w-full py-2">Login</button>
    </form>
  );
}
