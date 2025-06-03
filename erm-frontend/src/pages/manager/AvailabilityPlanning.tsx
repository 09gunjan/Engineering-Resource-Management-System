import { useEffect, useState } from 'react';
import api from '@/lib/api';

interface Assignment {
  projectName: string;
  startDate: string;
  endDate: string;
  allocationPercentage: number;
}

interface Engineer {
  id: number;
  name: string;
  assignments: Assignment[];
}

export default function AvailabilityPlanning() {
  const [engineers, setEngineers] = useState<Engineer[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await api.get('/engineers');
      const data = await Promise.all(
        res.data.map(async (eng: any) => {
          const assignmentsRes = await api.get(`/engineers/${eng.id}/assignments`);
          return { ...eng, assignments: assignmentsRes.data };
        })
      );
      setEngineers(data);
    }

    fetchData();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Availability Planning</h2>
      {engineers.map((eng) => (
        <div key={eng.id} className="border p-4 rounded shadow">
          <h3 className="font-semibold text-lg">{eng.name}</h3>
          <ul className="mt-2 space-y-2">
            {eng.assignments.map((a, i) => (
              <li key={i} className="text-sm">
                <strong>{a.projectName}</strong> — {a.allocationPercentage}% from{' '}
                {new Date(a.startDate).toLocaleDateString()} to{' '}
                {new Date(a.endDate).toLocaleDateString()}
              </li>
            ))}
          </ul>
          {eng.assignments.length === 0 && <p className="text-gray-500 text-sm">Fully available</p>}
        </div>
      ))}
    </div>
  );
}
