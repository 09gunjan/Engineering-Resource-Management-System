import React from 'react';

const AssignmentTimeline = ({ assignments = [] }: { assignments: any[] }) => (
  <div className="border-l border-gray-300 pl-4">
    {assignments.map((a, i) => (
      <div key={i} className="mb-4">
        <div className="text-sm font-semibold">{a.Project?.name} ({a.role})</div>
        <div className="text-sm text-gray-500">{a.startDate?.slice(0, 10)} → {a.endDate?.slice(0, 10)}</div>
      </div>
    ))}
  </div>
);

export default AssignmentTimeline;
