import { useEffect, useState } from 'react';
import api from '@/lib/api';

export default function SearchFilter() {
  const [engineers, setEngineers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skillQuery, setSkillQuery] = useState('');
  const [projectStatus, setProjectStatus] = useState('');

  useEffect(() => {
    api.get('/engineers').then((res) => setEngineers(res.data));
    api.get('/projects').then((res) => setProjects(res.data));
  }, []);

  const filteredEngineers = engineers.filter((eng: any) =>
    eng.skills.some((skill: string) =>
      skill.toLowerCase().includes(skillQuery.toLowerCase())
    )
  );

  const filteredProjects = projects.filter((proj: any) =>
    projectStatus ? proj.status === projectStatus : true
  );

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold">Search & Filter</h2>

      {/* Engineer Skill Search */}
      <div>
        <input
          type="text"
          placeholder="Search engineer by skill (e.g., React)"
          value={skillQuery}
          onChange={(e) => setSkillQuery(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <ul className="mt-2 space-y-2">
          {filteredEngineers.map((e: any) => (
            <li key={e.id} className="p-2 border rounded">
              {e.name} – Skills: {e.skills.join(', ')}
            </li>
          ))}
        </ul>
      </div>

      {/* Project Status Filter */}
      <div>
        <select
          value={projectStatus}
          onChange={(e) => setProjectStatus(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Statuses</option>
          <option value="Planning">Planning</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
        </select>
        <ul className="mt-2 space-y-2">
          {filteredProjects.map((p: any) => (
            <li key={p.id} className="p-2 border rounded">
              {p.name} – Status: {p.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
