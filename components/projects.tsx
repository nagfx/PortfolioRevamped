import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Tinder Swiper (Uni edition)",
    description:
      "A frontend application (also fullstack version on Github) built keeping Tinder in mind but for University, and the algorithm was built keeping similar likes and uni in as priority for matches",
    image:
      "https://cdn.pixabay.com/photo/2021/11/25/08/52/mountains-6822937_1280.jpg",
    demoLink: "https://tinder-test.vercel.app/",
    codeLink: "https://github.com/nagfx/tinder-test",
  },
  {
    title: "Air Quality app",
    description:
      "Airquality application which fetches data from Transport from London API, and delivers hourly and the next day's forecast on airquality.",
    image:
      "https://cdn.pixabay.com/photo/2020/01/23/16/00/environment-4787978_1280.jpg",
    demoLink: "https://nagfx.github.io/airquality-js-app/",
    codeLink: "https://github.com/nagfx/airquality-js-app",
  },
  {
    title: "Airbnb frontpage",
    description: "Built a clone of Airbnb frontpage with TailwindCSS.",
    image:
      "https://cdn.pixabay.com/photo/2017/11/12/00/08/airbnb-2941142_1280.jpg",
    demoLink: "https://nagfx.github.io/airbnb-clone/",
    codeLink: "https://github.com/nagfx/airbnb-clone",
  },
];

export function Projects() {
  return (
    <section className="py-24 md:py-32 flex items-center justify-center">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          My Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-transform hover:scale-105"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="object-cover w-full h-48"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <Button asChild>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
