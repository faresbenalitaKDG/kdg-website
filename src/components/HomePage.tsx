"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import ImageSection from "@/components/ImageSection";
import Blog from "@/components/Blog";
import Conference from "@/components/Conference";
import Team from "@/components/Team";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/SectionDivider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionDivider variant="wave" flip />
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <ImageSection />
      </AnimatedSection>
      <AnimatedSection delay={150}>
        <Features />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <Blog />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <Conference />
      </AnimatedSection>
      <AnimatedSection delay={150}>
        <Team />
      </AnimatedSection>
      <SectionDivider variant="slant" />
    </>
  );
}
