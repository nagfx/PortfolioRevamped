import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Projects } from '@/components/projects';
import { Recommendations } from '@/components/recommendations';
import { ContactButtons } from '@/components/contact-buttons';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Recommendations />
      <ContactButtons />
    </div>
  );
}