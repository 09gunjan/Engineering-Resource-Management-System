import { useEffect, useState } from 'react';
import api from '../lib/api';
import CapacityBar from '../components/CapacityBar';

export default function ManagerDashboard() {
  const [engineers, setEngineers] = useState<any[]>([]);
  const [capacities, setCapacities] = useState<Record<number, any>>({});

  useEffect(() => {
    api.get('/engineers').then((res) => {
      setEngineers(res.data);
      res.data.forEach((eng: any) => {
        api.get(`/engineers/${eng.id}/capacity`).then((r) =>
          setCapacities((prev) => ({ ...prev, [eng.id]: r.data }))
        );
      });
    });
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Team Overview</h2>
      <ul className="space-y-4">
        {engineers.map((e) => (
          <li key={e.id} className="p-4 border rounded">
            <div className="font-semibold">{e.name} – {e.skills.join(', ')}</div>
            <div className="text-sm">Capacity: {capacities[e.id]?.allocated ?? 0}% allocated</div>
            <CapacityBar percent={capacities[e.id]?.allocated ?? 0} />
          </li>
        ))}
      </ul>
    </div>
  );
}
