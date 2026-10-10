import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/hero/Hero";
import { OpenSource } from "@/components/sections/open-source/OpenSource";
import { Projects } from "@/components/sections/projects/Projects";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Projects />
        <OpenSource />
      </main>
    </div>
  );
}
