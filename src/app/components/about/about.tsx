"use client";
import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen w-screen text-white py-10 px-4 md:px-8 opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">About Me</h2>
        <div className="space-y-6 text-lg md:text-xl text-gray-300">
          <p>
            I'm a creative developer based in [Your Location], specializing in building immersive digital experiences that combine technical expertise with artistic vision.
          </p>
          <p>
            With a background in both design and development, I bridge the gap between aesthetics and functionality, creating websites and applications that are not only visually stunning but also technically robust.
          </p>
          <p>
            My approach combines modern web technologies with creative problem-solving, resulting in unique digital experiences that engage and inspire.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Skills</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Frontend Development</li>
              <li>UI/UX Design</li>
              <li>Creative Coding</li>
              <li>Interactive Experiences</li>
              <li>Motion Design</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Technologies</h3>
            <ul className="space-y-2 text-gray-300">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Three.js</li>
              <li>GSAP</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 