import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import ImageSection from "@/components/ImageSection";
import Blog from "@/components/Blog";
import Conference from "@/components/Conference";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ImageSection />
      <Features />
      <Blog />
      <Conference />
      <Team />
    </>
  );
}
