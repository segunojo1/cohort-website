import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar"
import Story from "@/components/story_animation";

export default function Home() {
  return (
    <div className="bg-[#F0F0F0]">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Footer />
      </main>
    </div>
  );
}
