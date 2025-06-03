import { useEffect, useState } from 'react';
import api from '../lib/api';
import CapacityBar from '../components/CapacityBar';

export default function ManagerDashboard() {
  const [engineers, setEngineers] = useState<any[]>([]);
  const [capacities, setCapacities] = useState<Record<number, any>>({});
  const [assignments, setAssignments] = useState<Record<number, any[]>>({});

  useEffect(() => {
    api.get('/engineers').then((res) => {
      setEngineers(res.data);

      res.data.forEach((eng: any) => {
        // Get capacity
        api.get(`/engineers/${eng.id}/capacity`).then((r) =>
          setCapacities((prev) => ({ ...prev, [eng.id]: r.data }))
        );

        // Get current assignments
        api.get(`/engineers/${eng.id}/assignments`).then((r) =>
          setAssignments((prev) => ({ ...prev, [eng.id]: r.data }))
        );
      });
    });
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Team Overview</h2>

      <ul className="space-y-4">
        {engineers.map((e) => (
          <li key={e.id} className="p-4 border rounded bg-white shadow-sm">
            <div className="font-semibold text-lg">
              {e.name} – {e.skills.join(', ')}
            </div>

            <div className="text-sm mb-1">
              Capacity: {capacities[e.id]?.allocated ?? 0}% allocated
            </div>
            <CapacityBar percent={capacities[e.id]?.allocated ?? 0} />

            {assignments[e.id]?.length > 0 ? (
              <ul className="text-sm mt-2 space-y-1">
                <p className="font-medium mt-2">Current Assignments:</p>
                {assignments[e.id].map((a: any) => (
                  <li key={a.id} className="ml-2">
                    • <strong>{a.projectName}</strong> – {a.allocationPercentage}% from{' '}
                    <span className="text-gray-600">{formatDate(a.startDate)}</span> to{' '}
                    <span className="text-gray-600">{formatDate(a.endDate)}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm mt-2 text-gray-500">No current assignments</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Helper to format ISO date to readable format
function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString();
}
