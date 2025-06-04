// src/App.tsx
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TeamOverview from "./pages/manager/TeamOverview";
import MyAssignments from "./pages/engineer/MyAssignments";
import AssignPage from "@/pages/manager/Assign";
import ProjectsPage from "./pages/manager/Projects";
import ManagerLayout from "./layouts/ManagerLayout";


function App() {
  return (
    <Router>
      <Routes>
        {/* Landing or dashboard page */}
        <Route path="/" element={<Dashboard />} />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* ✅ Manager Dashboard with layout */}
        <Route path="/manager" element={<ManagerLayout />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<TeamOverview />} />
          <Route path="assign" element={<AssignPage />} />
          <Route path="projects" element={<ProjectsPage />} />
        
        </Route>

        {/* ✅ Engineer Dashboard with layout */}
        <Route path="/engineer" element={<EngineerLayout />}>
          <Route path="assignments" element={<MyAssignments />} />
          <Route index element={<Navigate to="assignments" replace />} />
        </Route>

        {/* Fallback to dashboard */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
