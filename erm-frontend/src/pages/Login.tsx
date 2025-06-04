import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";

function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams(); // 👈 get role from URL
  const role = searchParams.get("role");     // ?role=manager or ?role=engineer

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthStore();

  // Login.tsx
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
  
      // Navigate with full layout path
      if (user.role === "manager") {
        navigate("/manager", { replace: true });
      } else if (user.role === "engineer") {
        navigate("/engineer", { replace: true });
      }
    }
  };
  


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="mb-2 p-2 border w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-2 border w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 w-full rounded">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
