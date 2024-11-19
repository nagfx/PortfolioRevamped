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
    title: "N travel agency website",
    description:
      "Built a travel agency website. Uses React and TailwindCss sorry code repo is private",
    image: "/static/images/ntravels.jpeg",
    demoLink: "https://travelingnamansite.vercel.app/",
    codeLink: "https://travelingnamansite.vercel.app/",
  },
  {
    title: "Ecommerce application",
    description:
      "Another react ecommerce application with a nice UI built with React. Uses React and TailwindCss sorry code repo is private",
    image: "/static/images/modernshop.jpeg",
    demoLink: "https://e-commerce-website-naman.vercel.app/",
    codeLink: "https://e-commerce-website-naman.vercel.app/",
  },
  {
    title: "A calculator application",
    description:
      "A frontend application built with React and Tailwindcss, responsive and simple straight forward for your reference, sorry the repo is private",
    image: "/static/images/calculator.jpeg",
    demoLink: "https://calculator-app-scientific.vercel.app/",
    codeLink: "https://calculator-app-scientific.vercel.app/",
  },
  {
    title: "Tinder Swiper (Uni edition)",
    description:
      "A frontend application (also fullstack version on Github) built keeping Tinder in mind but for University, and the algorithm was built keeping similar likes and uni in as priority for matches",
    image: "/static/images/swiper.jpeg",
    demoLink: "https://tinder-test.vercel.app/",
    codeLink: "https://github.com/nagfx/tinder-test",
  },
  {
    title: "Air Quality app",
    description:
      "Airquality application which fetches data from Transport from London API, and delivers hourly and the next day's forecast on airquality.",
    image: "/static/images/airquality.jpeg",
    demoLink: "https://nagfx.github.io/airquality-js-app/",
    codeLink: "https://github.com/nagfx/airquality-js-app",
  },
  {
    title: "Airbnb frontpage",
    description: "Built a clone of Airbnb frontpage with TailwindCSS.",
    image: "/static/images/airbnb.jpeg",
    demoLink: "https://nagfx.github.io/airbnb-clone/",
    codeLink: "https://github.com/nagfx/airbnb-clone",
  },
  {
    title: "3D ToDo (nothing 3d about it)",
    description:
      "Another todo application designed with nice stylings. Uses React and TailwindCss sorry code repo is private",
    image: "/static/images/3dtodo.jpeg",
    demoLink: "https://3d-todo-app.vercel.app/",
    codeLink: "https://3d-todo-app.vercel.app/",
  },
  {
    title: "Task Tracker Pro Chrome extension",
    description:
      "A task tracking extension for Chrome, deployed already on the Chrome Webstore sorry repo is private for this",
    image: "/static/images/tasktracker.jpg",
    demoLink:
      "https://chromewebstore.google.com/detail/task-tracker-pro/egfcbiohkjbgjbejfjpnaioinpgpkhjg",
    codeLink:
      "https://chromewebstore.google.com/detail/task-tracker-pro/egfcbiohkjbgjbejfjpnaioinpgpkhjg",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 flex items-center justify-center"
    >
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
