import About from '../components/About';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import Skills from '../components/Skills';
import { getProjects } from '../lib/markdown';

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen overflow-hidden bg-[#090b10]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,rgba(45,212,191,0.10),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <SiteHeader />
        <Hero />
        <About />
        <Skills />
        <Projects projects={projects} />
        <SiteFooter />
      </div>
    </main>
  );
}
