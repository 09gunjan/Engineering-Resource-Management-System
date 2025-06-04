import { create } from 'zustand';
export const useAuth = create((set) => ({
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    setAuth: (token, user) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        set({ token, user });
    },
    logout: () => {
        localStorage.clear();
        set({ token: null, user: null });
    },
}));
