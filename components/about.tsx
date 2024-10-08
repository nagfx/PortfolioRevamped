import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code2, Paintbrush, Database, Lightbulb } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          About Me
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="transition-transform hover:scale-105">
            <CardHeader>
              <Code2 className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>HTML, CSS, JavaScript</li>
                <li>React, Next.js</li>
                <li>Node.js, Express</li>
                <li>MongoDB, PostgreSQL</li>
                <li>UI/UX Design</li>
                <li>Git, Gitlab</li>
                <li>Deployment</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="transition-transform hover:scale-105">
            <CardHeader>
              <Paintbrush className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <CardTitle className="text-lg">
                    Software Engineer fullstack developer
                  </CardTitle>
                  <CardDescription>
                    Capital Dynamics Group. | 2023 - 2024
                  </CardDescription>
                </li>
                <li>
                  <CardTitle className="text-lg">Frontend Developer</CardTitle>
                  <CardDescription>MP Data | 2022 - 2023</CardDescription>
                </li>{" "}
                <li>
                  <CardTitle className="text-lg">
                    Backend Developer trainee (Django)
                  </CardTitle>
                  <CardDescription>MP Data | 2023</CardDescription>
                </li>
                <li>
                  <CardTitle className="text-lg">
                    ITET Advisory (Intern)
                  </CardTitle>
                  <CardDescription>KPMG | 2022</CardDescription>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="transition-transform hover:scale-105">
            <CardHeader>
              <Database className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <CardTitle className="text-lg">
                    Bsc(Hons) Information Technology
                  </CardTitle>
                  <CardDescription>
                    Lancaster University | 2019 - 2022
                  </CardDescription>{" "}
                  <CardDescription>
                    Sunway University | 2019 - 2022
                  </CardDescription>
                </li>
                <li>
                  <CardTitle className="text-lg">
                    Become a Software Developer
                  </CardTitle>
                  <CardDescription>
                    Learning Path (35h) LinkedIn | 2022
                  </CardDescription>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="transition-transform hover:scale-105">
            <CardHeader>
              <Lightbulb className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Artificial Intelligence</li>
                <li>Apple and Android devices</li>
                <li>Frontend Development</li>
                <li>Tech Blogging</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
