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
          I'm a frontend developer based in Copenhagen, passionate about crafting engaging digital experiences that merge clean design with solid code.
          </p>
          <p>
          Currently studying Multimedia Design at KEA, I've built a strong foundation in HTML, CSS, JavaScript, TypeScript, and modern frameworks like React, Tailwind, and Liquid—skills I’ve developed through both academic projects and hands-on internship experience.          </p>
          <p>
          I thrive in collaborative environments where ideas flow and goals align. With a naturally positive attitude and a love for creative problem-solving, I bring both energy and precision to every project I take on.</p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Skills</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Frontend Development</li>
              <li>Creative Coding</li>
              <li>Interactive Experiences</li>
              <li>Animation Coding</li>
              <li>Database Management</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Technologies</h3>
            <ul className="space-y-2 text-gray-300">
              <li>React - Next.js/Astro</li>
              <li>TypeScript</li>
              <li>Liquid</li>
              <li>Shopify</li>
              <li>GSAP</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 