import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnalyticsDashboard from './pages/manager/AnalyticsDashboard';
import TeamOverview from './pages/manager/TeamOverview';
import CreateAssignment from './pages/manager/CreateAssignment';
import ProjectManagement from './pages/manager/Projectmanagement';
import MyAssignments from './pages/engineer/MyAssignments';
import Profile from './pages/engineer/Profile';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';


const App = () => {
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const role = user?.role || null;

  return (
    <Router>
      {/* Show navbar only if user is logged in */}
      {user && <Navbar role={role} />}

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />

        {/* Manager Routes */}
        <Route path="/manager/overview" element={<TeamOverview />} />
        <Route path="/manager/assign" element={<CreateAssignment />} />
        <Route path="/manager/projects" element={<ProjectManagement />} />
        <Route path="/manager/analytics" element={<AnalyticsDashboard />} />

        {/* Engineer Routes */}
        <Route path="/engineer/assignments" element={<MyAssignments />} />
        <Route path="/engineer/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
