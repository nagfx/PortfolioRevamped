"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code2, Paintbrush, Database, Lightbulb } from "lucide-react";
import { AnimatedCard } from "./animated-card";
import { motion } from "framer-motion";

export function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section
      id="about"
      className="py-24 md:py-32 flex items-center justify-center bg-secondary"
    >
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center 
            hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-500 to-pink-500 
            transition-all duration-300"
        >
          About Me
        </motion.h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              icon: <Code2 className="h-8 w-8 mb-2 text-primary group-hover:scale-110 transition-transform duration-300" />,
              title: "Skills",
              content: (
                <ul className="list-disc pl-5 space-y-2">
                  <li>HTML, CSS, JavaScript</li>
                  <li>React, Next.js</li>
                  <li>Node.js, Express</li>
                  <li>MongoDB, PostgreSQL</li>
                  <li>UI/UX Design</li>
                  <li>Git, Gitlab</li>
                  <li>Deployment</li>
                </ul>
              )
            },
            {
              icon: <Paintbrush className="h-8 w-8 mb-2 text-primary group-hover:scale-110 transition-transform duration-300" />,
              title: "Experience",
              content: (
                <ul className="space-y-4">
                  <li>
                    <CardTitle className="text-lg">
                      Software Engineer fullstack developer IC4/L4
                    </CardTitle>
                    <CardDescription>
                      Confidential | 2024 - present
                    </CardDescription>
                  </li>
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
              )
            },
            {
              icon: <Database className="h-8 w-8 mb-2 text-primary group-hover:scale-110 transition-transform duration-300" />,
              title: "Education",
              content: (
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
              )
            },
            {
              icon: <Lightbulb className="h-8 w-8 mb-2 text-primary group-hover:scale-110 transition-transform duration-300" />,
              title: "Interests",
              content: (
                <ul className="list-disc pl-5 space-y-2">
                  <li>Artificial Intelligence</li>
                  <li>Apple and Android devices</li>
                  <li>Frontend Development</li>
                  <li>Tech Blogging</li>
                </ul>
              )
            }
          ].map((item, index) => (
            <AnimatedCard
              key={item.title}
              delay={index * 0.1}
              className="h-full"
            >
              <Card className="group h-full transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 
                hover:-translate-y-2 hover:border-primary/50 dark:hover:border-primary/50">
                <CardHeader>
                  {item.icon}
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {item.content}
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
