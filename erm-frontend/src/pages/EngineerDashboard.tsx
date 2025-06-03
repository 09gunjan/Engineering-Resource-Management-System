import { useEffect, useState } from 'react';
import api from '../lib/api';
import { useAuth } from '../store/authStore';

export default function EngineerDashboard() {
  const user = useAuth((s) => s.user);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    api.get('/assignments').then((res) =>
      setAssignments(res.data.filter((a: any) => a.engineerId === user.id))
    );
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold">My Assignments</h2>
      <ul className="space-y-2 mt-4">
        {assignments.map((a: any) => (
          <li key={a.id}>
            <strong>{a.Project.name}</strong> – {a.role} ({a.allocationPercentage}%)
          </li>
        ))}
      </ul>
    </div>
  );
}
