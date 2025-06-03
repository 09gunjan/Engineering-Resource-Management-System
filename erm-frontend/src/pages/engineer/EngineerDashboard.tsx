import { useEffect, useState } from 'react';
import api from "../../lib/api";



interface Assignment {
  id: number;
  project: {
    name: string;
    startDate: string;
    endDate: string;
  };
  allocationPercentage: number;
  role: string;
}

export default function EngineerDashboard() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    api.get('/assignments/my').then((res) => setAssignments(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Assignments</h2>
      <div className="space-y-4">
        {assignments.map((a) => (
          <div key={a.id} className="border p-4 rounded">
            <div className="text-lg font-semibold">{a.project.name}</div>
            <div className="text-sm">Role: {a.role}</div>
            <div className="text-sm">
              Duration: {new Date(a.project.startDate).toLocaleDateString()} - {new Date(a.project.endDate).toLocaleDateString()}
            </div>
            <div className="text-sm">Allocation: {a.allocationPercentage}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}
