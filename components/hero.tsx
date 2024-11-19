import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="py-24 md:py-32 flex items-center justify-center ">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left md:w-1/2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-8xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 dark:from-blue-500 dark:via-blue-300 dark:to-green-300 text-transparent bg-clip-text animate-gradient-text">
              Hi, I'm Naman Iqbal
            </h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              I'm a web developer and a software engineer, I am enthusiastic
              about creating responsive and functional applications.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button asChild>
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <div className="flex justify-center md:justify-start space-x-4 mt-8">
              <div className="flex items-center space-x-2">
                <Code className="h-5 w-5 text-primary" />
                <span>Web Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <Palette className="h-5 w-5 text-primary" />
                <span>UI/UX Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>Fast & Efficient</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg"
              alt="Coding on a laptop"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
