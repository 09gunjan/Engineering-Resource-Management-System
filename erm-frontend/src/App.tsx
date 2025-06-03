import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AnalyticsDashboard from './pages/manager/AnalyticsDashboard';
import TeamOverview from './pages/manager/TeamOverview';
import CreateAssignment from './pages/manager/CreateAssignment';
import ProjectManagement from './pages/manager/Projectmanagement';
import MyAssignments from './pages/engineer/MyAssignments';
import Profile from './pages/engineer/Profile';
import Login from './pages/Login';
import Navbar from './components/Navbar';

const App = () => {
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  return (
    <Router>
      {user && <Navbar role={user.role} />}
      <Routes>
        <Route path="/" element={<Navigate to={user ? (user.role === 'manager' ? '/manager/overview' : '/engineer/assignments') : '/login'} />} />
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