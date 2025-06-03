import React, { useEffect, useState } from 'react';
import axios from '@/lib/axios';

interface Assignment {
  id: string;
  role: string;
  startDate: string;
  endDate: string;
  allocationPercentage: number;
  Project?: {
    name: string;
  };
  engineerId: string;
}

const MyAssignments = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    axios.get('/assignments').then(res => {
      const mine = res.data.filter((a: Assignment) => a.engineerId === user.id);
      setAssignments(mine);
    });
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">My Assignments</h2>
      {assignments.length === 0 ? (
        <p className="text-gray-500">No current assignments found.</p>
      ) : (
        <ul className="space-y-4">
          {assignments.map((a) => (
            <li key={a.id} className="p-4 border rounded bg-white shadow-sm">
              <p className="font-semibold text-lg">{a.Project?.name || 'Unnamed Project'}</p>
              <p><strong>Role:</strong> {a.role}</p>
              <p>
                <strong>From:</strong> {a.startDate?.slice(0, 10)} <strong>to</strong> {a.endDate?.slice(0, 10)}
              </p>
              <p><strong>Allocation:</strong> {a.allocationPercentage}%</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyAssignments;
