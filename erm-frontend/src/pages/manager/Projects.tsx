import React, { useEffect, useState } from 'react';
import axios from '@/lib/axios';
import { Card, CardContent } from '@/components/ui/card';

interface Project {
  id: number;
  name: string;
  status: 'active' | 'completed' | 'planned';
  startDate: string;
  endDate: string;
}

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    axios.get('/projects').then(res => setProjects(res.data));
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Projects</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          New Project
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <Card key={project.id}>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg">{project.name}</h3>
              <div className="text-sm text-gray-600 mt-2">
                <p>Status: {project.status}</p>
                <p>Start: {new Date(project.startDate).toLocaleDateString()}</p>
                <p>End: {new Date(project.endDate).toLocaleDateString()}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage; 