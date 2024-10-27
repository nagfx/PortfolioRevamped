import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

export function ContactButtons() {
  return (
    <section className="py-24 md:py-32 flex items-center justify-center bg-secondary">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Get in Touch
        </h2>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <a href="mailto:namanshaheer@gmail.com">
              <Mail className="mr-2 h-4 w-4" /> Email Me
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href="https://www.linkedin.com/in/naman-shaheer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
