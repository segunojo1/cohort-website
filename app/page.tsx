import Hero from "@/components/hero";
import Navbar from "@/components/navbar"
import Story from "@/components/story_animation";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Story />
      </main>
    </div>
  );
}
