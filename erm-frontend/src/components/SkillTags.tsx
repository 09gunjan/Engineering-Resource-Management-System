import React from 'react';

const SkillTags = ({ skills = [] }: { skills: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {skills.map((skill, i) => (
      <span key={i} className="bg-gray-200 text-sm px-2 py-1 rounded-full">{skill}</span>
    ))}
  </div>
);

export default SkillTags;