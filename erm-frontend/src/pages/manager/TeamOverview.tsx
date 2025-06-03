"use client";

import type { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Charlie",
    skills: "Python, Node.js",
    allocation: 40,
  },
  {
    name: "Bob",
    skills: "React, Node.js",
    allocation: 60,
  },
  {
    name: "Diana",
    skills: "React, Python",
    allocation: 50,
  },
];

const TeamOverview: FC = () => {
  const getBarColor = (allocation: number) => {
    if (allocation < 50) return "bg-green-500";
    if (allocation < 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Team Overview</h2>
      <div className="flex flex-col gap-4">
        {teamMembers.map((member, idx) => (
          <Card key={idx}>
            <CardContent className="p-4">
              <div className="font-semibold">
                {member.name} – {member.skills}
              </div>
              <div className="text-sm text-gray-600 mb-2">
                Capacity: {member.allocation}% allocated
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`${getBarColor(
                    member.allocation
                  )} h-3 rounded-full transition-all duration-300`}
                  style={{ width: `${member.allocation}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamOverview;
