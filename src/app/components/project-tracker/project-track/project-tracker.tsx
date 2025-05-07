"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Script from "next/script";

export default function ProjectTracker() {
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

  const images = [
    { src: "/images/photo-1534996858221-380b92700493.avif", alt: "https://akqa-dk-flight-orbit-2025.vercel.app/" },
    { src: "/images/Georg-Jensen-01.jpg", alt: "https://www.georgjensen.com/da-dk" },
    { src: "/images/1714834935659.jpg", alt: "https://www.planetnusa.com/" },
    { src: "/images/ITMV.png", alt: "https://itmv-kea.netlify.app/" },
    { src: "/images/735122_poster_l.jpg", alt: "https://www.moominarabia.com/int/" },
    { src: "/images/photo-1744089326555-4508e029f2f5.avif", alt: "Project 6" },
    { src: "/images/photo-1746307415334-8914cae06a28.avif", alt: "Project 7" },
    { src: "/images/photo-1746310783422-16df7622e7c9.avif", alt: "Project 8" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="h-screen w-screen text-white pt-32 px-4 md:px-8 opacity-0 transition-opacity duration-1000"
    >
      <div className="mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16">Selected Work</h2>
        <div 
          id="image-track" 
          data-mouse-down-at="0" 
          data-prev-percentage="0" 
          data-percentage="0"
          className="flex select-none relative"
        >
          <div className="flex gap-6" style={{ width: 'fit-content' }}>
            {images.map((image, index) => (
              <div key={index} className="w-72 h-100 overflow-hidden">
                {image.alt && image.alt.startsWith('http') ? (
                  <a href={image.alt} target="_blank" rel="noopener noreferrer" className="pointer-events-none">
                    <Image 
                      src={image.src} 
                      alt={image.alt} 
                      width={1920} 
                      height={1080} 
                      className="w-full h-full object-cover object-center image hover:scale-105 transition-transform duration-300 pointer-events-none" 
                    />
                  </a>
                ) : (
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    width={1920} 
                    height={1080} 
                    className="w-full h-full object-cover object-center image pointer-events-none select-none" 
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Script src="/js/tracker.js" strategy="afterInteractive" />
    </section>
  );
}
