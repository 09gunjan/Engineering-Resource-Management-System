import React, { useEffect, useState } from 'react';
import axios from '@/lib/axios';

const MyAssignments = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    axios.get('/assignments').then(res => {
      const mine = res.data.filter((a: any) => a.engineerId === localStorage.getItem('userId'));
      setAssignments(mine);
    });
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">My Assignments</h2>
      <ul className="space-y-4">
        {assignments.map((a: any) => (
          <li key={a.id} className="p-4 border rounded">
            <p className="font-semibold">{a.Project?.name}</p>
            <p>Role: {a.role}</p>
            <p>From: {a.startDate?.slice(0, 10)} to {a.endDate?.slice(0, 10)}</p>
            <p>Allocation: {a.allocationPercentage}%</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyAssignments;