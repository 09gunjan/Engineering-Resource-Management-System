// Navbar.tsx
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ role }: { role: string }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
    window.location.reload(); // Hard reset
  };

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow">
      <div className="flex space-x-6 text-sm font-medium">
        {role === 'manager' && (
          <>
            <button
              className={`hover:underline ${isActive('/manager/overview') ? 'text-blue-300' : ''}`}
              onClick={() => navigate('/manager/overview')}
            >
              Team
            </button>
            <button
              className={`hover:underline ${isActive('/manager/assign') ? 'text-blue-300' : ''}`}
              onClick={() => navigate('/manager/assign')}
            >
              Assign
            </button>
            <button
              className={`hover:underline ${isActive('/manager/projects') ? 'text-blue-300' : ''}`}
              onClick={() => navigate('/manager/projects')}
            >
              Projects
            </button>
          </>
        )}
        {role === 'engineer' && (
          <>
            <button
              className={`hover:underline ${isActive('/engineer/assignments') ? 'text-blue-300' : ''}`}
              onClick={() => navigate('/engineer/assignments')}
            >
              My Assignments
            </button>
            <button
              className={`hover:underline ${isActive('/engineer/profile') ? 'text-blue-300' : ''}`}
              onClick={() => navigate('/engineer/profile')}
            >
              Profile
            </button>
          </>
        )}
      </div>

      <button
        className="bg-red-600 text-sm px-4 py-1 rounded hover:bg-red-700 transition"
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
