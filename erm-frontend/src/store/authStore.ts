// src/store/authStore.ts
import { create } from 'zustand';
import axios from '@/lib/axios';

interface User {
  id: number;
  email: string;
  role: 'manager' | 'engineer';
}

interface AuthState {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// ✅ Rehydrate user from localStorage on store creation
const storedUser = localStorage.getItem("user");
const initialUser = storedUser ? JSON.parse(storedUser) : null;

export const useAuthStore = create<AuthState>((set) => ({
  user: initialUser, // ✅ user initialized from localStorage
  loading: false,
  login: async (email, password) => {
    try {
      set({ loading: true });
      const response = await axios.post('/auth/login', { email, password });

      const user = response.data.user;
      localStorage.setItem("user", JSON.stringify(user)); // ✅ Store user
      set({ user, loading: false });
      return true;
    } catch (error) {
      set({ loading: false });
      return false;
    }
  },
  logout: () => {
    set({ user: null });
    localStorage.removeItem('user'); // ✅ fix: remove 'user' instead of 'token'
  }
}));
