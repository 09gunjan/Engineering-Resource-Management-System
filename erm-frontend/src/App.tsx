import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ManagerDashboard from './pages/ManagerDashboard';
import EngineerDashboard from './pages/EngineerDashboard';
import Assignments from './pages/Assignments';
import ProjectForm from './pages/ProjectForm';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/manager" element={<ManagerDashboard />} />
        <Route path="/manager/assignments" element={<Assignments />} />
        <Route path="/manager/create-project" element={<ProjectForm />} />
        <Route path="/engineer" element={<EngineerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
