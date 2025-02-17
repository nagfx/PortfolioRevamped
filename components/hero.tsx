"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  const letterAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 md:py-32 flex items-center justify-center">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left md:w-1/2">
            <motion.div
              initial="initial"
              animate="animate"
              transition={{ staggerChildren: 0.1 }}
              className="flex flex-wrap gap-2 justify-center md:justify-start"
            >
              <div className="flex flex-wrap gap-[0.2rem]">
                {"Hi, I'm ".split('').map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letterAnimation}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              <motion.h1
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl 
                  bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 
                  dark:from-blue-500 dark:via-blue-300 dark:to-green-300 
                  text-transparent bg-clip-text animate-gradient-text
                  hover:scale-105 transition-transform duration-300"
              >
                Naman Iqbal
              </motion.h1>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 1 }}
              className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
            >
              I'm a web developer and a software engineer, I am enthusiastic
              about creating responsive and functional applications.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <Button 
                asChild
                className="group hover:scale-105 transition-transform duration-300"
              >
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                asChild
                className="hover:scale-105 transition-transform duration-300"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex items-center gap-4 mt-4"
            >
              <div className="flex items-center space-x-2">
                <Code className="h-5 w-5 text-primary animate-pulse" />
                <span>Web Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <Palette className="h-5 w-5 text-primary animate-pulse" />
                <span>UI/UX Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary animate-pulse" />
                <span>Fast & Efficient</span>
              </div>
            </motion.div>
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
