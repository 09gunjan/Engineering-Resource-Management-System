import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnalyticsDashboard from './pages/manager/AnalyticsDashboard';
import TeamOverview from './pages/manager/TeamOverview';
import CreateAssignment from './pages/manager/CreateAssignment';
import ProjectManagement from './pages/manager/ProjectManagement';
import MyAssignments from './pages/engineer/MyAssignments';
import Profile from './pages/engineer/Profile';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import EngineerDashboard from './pages/engineer/EngineerDashboard';
import AvailabilityPlanning from './pages/manager/AvailabilityPlanning'; // Create this if not exists
import SearchFilter from './pages/manager/SearchFilter';
const App = () => {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    const role = user?.role || null;
    return (_jsxs(Router, { children: [user && _jsx(Navbar, { role: role }), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/manager/overview", element: _jsx(TeamOverview, {}) }), _jsx(Route, { path: "/manager/assign", element: _jsx(CreateAssignment, {}) }), _jsx(Route, { path: "/manager/projects", element: _jsx(ProjectManagement, {}) }), _jsx(Route, { path: "/manager/analytics", element: _jsx(AnalyticsDashboard, {}) }), _jsx(Route, { path: "/manager/availability", element: _jsx(AvailabilityPlanning, {}) }), _jsx(Route, { path: "/manager/search", element: _jsx(SearchFilter, {}) }), _jsx(Route, { path: "/engineer/assignments", element: _jsx(MyAssignments, {}) }), _jsx(Route, { path: "/engineer/profile", element: _jsx(Profile, {}) }), _jsx(Route, { path: "/engineer/dashboard", element: _jsx(EngineerDashboard, {}) })] })] }));
};
export default App;
