import React from "react";

interface Props {
  onSearchChange: (text: string) => void;
  onSkillChange: (skill: string) => void;
  onStatusChange: (status: string) => void;
  skills?: string[]; // optional dynamic list of skills
  statuses?: string[]; // optional dynamic list of statuses
}

const SearchFilter: React.FC<Props> = ({
  onSearchChange,
  onSkillChange,
  onStatusChange,
  skills = [],
  statuses = ["available", "partially available", "fully allocated"],
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <input
        type="text"
        placeholder="Search by name..."
        className="p-2 border rounded w-full"
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select
        className="p-2 border rounded w-full"
        defaultValue=""
        onChange={(e) => onSkillChange(e.target.value)}
      >
        <option value="">All Skills</option>
        {skills.map((skill, idx) => (
          <option key={idx} value={skill}>
            {skill}
          </option>
        ))}
      </select>

      <select
        className="p-2 border rounded w-full"
        defaultValue=""
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <option value="">All Statuses</option>
        {statuses.map((status, idx) => (
          <option key={idx} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchFilter;
