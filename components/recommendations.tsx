import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote } from "lucide-react";

const recommendations = [
  {
    name: " Saleh",
    role: "IT Analyst at Capital Dynamics Group",
    quote: "He carried out his tasks efficiently.",
  },
  {
    name: "Wisnu Wadhana",
    role: "Developer at Capital Dynamics Group",
    quote:
      "Naman has experience working on Australian and Singaporean websites, where he effectively managed both frontend and backend development.",
  },
  {
    name: "Kesavan Sunthera",
    role: "Assistant Manager at KPMG",
    quote:
      "Naman is a team player and thrives well under challenging situations.",
  },
  {
    name: "Quinsy Bati",
    role: "Director, Digital Transformation, Connected Enterprise and Program & Project Management at KPMG ",
    quote:
      "His contribution greatly helped the team during a very busy period.",
  },
];

export function Recommendations() {
  return (
    <section className="py-24 md:py-32 flex items-center justify-center">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Recommendations
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {recommendations.map((rec, index) => (
            <Card key={index} className="transition-transform hover:scale-105">
              <CardHeader>
                <Quote className="h-8 w-8 mb-2 text-primary" />
                <CardTitle className="text-lg">{rec.name}</CardTitle>
                <p className="text-sm text-gray-500">{rec.role}</p>
              </CardHeader>
              <CardContent>
                <p className="italic">"{rec.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
