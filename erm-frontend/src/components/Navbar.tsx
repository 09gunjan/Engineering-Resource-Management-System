import { useNavigate } from 'react-router-dom';

const Navbar = ({ role }: { role: string }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
    window.location.reload(); // refresh to clean up state
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <div className="flex space-x-4">
        {role === 'manager' && (
          <>
            <button onClick={() => navigate('/manager/overview')}>Team</button>
            <button onClick={() => navigate('/manager/assign')}>Assign</button>
            <button onClick={() => navigate('/manager/projects')}>Projects</button>
          </>
        )}
        {role === 'engineer' && (
          <>
            <button onClick={() => navigate('/engineer/assignments')}>My Assignments</button>
            <button onClick={() => navigate('/engineer/profile')}>Profile</button>
          </>
        )}
      </div>
      <button className="bg-red-600 px-4 py-1 rounded" onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
