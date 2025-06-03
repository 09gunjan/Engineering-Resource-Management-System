import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ role }: { role: 'manager' | 'engineer' }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex gap-6">
        {role === 'manager' ? (
          <>
            <Link to="/manager/overview">Team</Link>
            <Link to="/manager/assign">Assign</Link>
            <Link to="/manager/projects">Projects</Link>
          </>
        ) : (
          <>
            <Link to="/engineer/assignments">My Assignments</Link>
            <Link to="/engineer/profile">Profile</Link>
          </>
        )}
      </div>
      <button onClick={handleLogout} className="text-sm bg-red-600 px-3 py-1 rounded">Logout</button>
    </nav>
  );
};

export default Navbar;
