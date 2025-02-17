"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedCard } from "@/components/animated-card";

const services = [
  {
    title: "Custom Website Development",
    description:
      "Transform your online presence with a bespoke website tailored to your brand. From sleek portfolios to robust e-commerce platforms, I craft digital experiences that captivate and convert.",
  },
  {
    title: "Mobile App Creation",
    description:
      "Bring your ideas to life in the palm of your users' hands. Our cutting-edge mobile apps combine intuitive design with powerful functionality, ensuring your business stays ahead in the mobile-first world.",
  },
  {
    title: "Academic Project Assistance",
    description:
      "Elevate your academic projects with expert guidance. Whether it's a complex coding assignment or a full-fledged software project, our tailored support ensures you excel in your studies while gaining practical skills.",
  },
];

export default function ServicesPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 md:py-32 flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.2 }}
          className="space-y-12 max-w-6xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center space-y-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold 
              bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 
              dark:from-blue-500 dark:via-blue-300 dark:to-green-300 
              text-transparent bg-clip-text animate-gradient-text">
              Services Offered
            </h1>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              Explore the range of services I offer to help bring your digital vision to life.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {services.map((service, index) => (
              <AnimatedCard 
                key={service.title}
                delay={index * 0.1}
                className="h-full w-full max-w-md"
              >
                <Card className="h-full group hover:shadow-2xl hover:shadow-primary/25 
                  hover:-translate-y-2 hover:border-primary/50 dark:hover:border-primary/50 
                  transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full group">
                      <a href="mailto:namanshaheer@gmail.com">
                        <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        Get in Touch
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedCard>
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            className="text-center space-y-6 max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-semibold">Need a Custom Solution?</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Don't see exactly what you're looking for? I'm always open to discussing custom projects 
              and unique challenges.
            </p>
            <Button asChild size="lg" className="group">
              <a href="mailto:namanshaheer@gmail.com">
                <Mail className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Contact Me
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
