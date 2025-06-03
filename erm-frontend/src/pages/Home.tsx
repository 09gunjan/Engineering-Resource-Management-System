import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-6 mt-20">
      <h1 className="text-3xl font-bold">Welcome to ERM System</h1>
      <div className="space-x-4">
        <button
          onClick={() => navigate('/login?role=manager')}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          Login as Manager
        </button>
        <button
          onClick={() => navigate('/login?role=engineer')}
          className="px-6 py-3 bg-green-600 text-white rounded-lg"
        >
          Login as Engineer
        </button>
      </div>
    </div>
  );
};

export default Home;
