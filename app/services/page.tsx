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
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href="mailto:namanshaheer@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> Get in Touch
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-lg mb-4">
          Interested in our services? Let us discuss your project!
        </p>
        <Button asChild size="lg">
          <a href="mailto:namanshaheer@gmail.com">
            <Mail className="mr-2 h-4 w-4" /> Email me
          </a>
        </Button>
      </div>
    </div>
  );
}
