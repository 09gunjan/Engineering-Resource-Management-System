import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

// Dummy data
const teamUtilization = [
  { name: "Alice", allocation: 70 },
  { name: "Bob", allocation: 50 },
  { name: "Charlie", allocation: 90 },
  { name: "Diana", allocation: 40 },
];

const skillDistribution = [
  { name: "React", value: 4 },
  { name: "Node.js", value: 3 },
  { name: "Python", value: 2 },
  { name: "SQL", value: 1 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

const AnalyticsDashboard: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Analytics Dashboard</h2>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">Team Utilization</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={teamUtilization}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="allocation" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">Skill Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={skillDistribution}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {skillDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;
