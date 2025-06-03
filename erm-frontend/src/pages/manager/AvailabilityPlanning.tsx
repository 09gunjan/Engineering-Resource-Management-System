import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { format } from "date-fns";

// Dummy data for engineers
const engineers = [
  {
    name: "Alice Johnson",
    availability: [
      { date: "2025-06-01", percent: 40 },
      { date: "2025-06-02", percent: 60 },
      { date: "2025-06-03", percent: 80 },
    ],
  },
  {
    name: "Bob Smith",
    availability: [
      { date: "2025-06-01", percent: 100 },
      { date: "2025-06-02", percent: 100 },
      { date: "2025-06-03", percent: 70 },
    ],
  },
];

const AvailabilityPlanning: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Engineer Availability Timeline</h2>
      {engineers.map((engineer) => (
        <Card key={engineer.name}>
          <CardContent className="p-4 space-y-2">
            <h3 className="font-medium">{engineer.name}</h3>
            <div className="space-y-2">
              {engineer.availability.map((slot) => (
                <div key={slot.date}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{format(new Date(slot.date), "MMM d, yyyy")}</span>
                    <span>{slot.percent}% allocated</span>
                  </div>
                  <Progress value={slot.percent} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AvailabilityPlanning;
