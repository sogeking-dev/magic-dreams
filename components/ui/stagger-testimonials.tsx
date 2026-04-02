"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Nice guy. Been going there for years, nothing wrong with the products or customer service. 5 stars +",
    by: "Jaycee, Local Guide",
    imgSrc: "https://i.pravatar.cc/150?img=1"
  },
  {
    tempId: 1,
    testimonial: "Vriendelijke man achter de toonbank, top product, overall top smartshop.",
    by: "Jean Émarre, Local Guide",
    imgSrc: "https://i.pravatar.cc/150?img=2"
  },
  {
    tempId: 2,
    testimonial: "De eigenaar was erg behulpzaam, hielp ons bij de keuze en legde alles heel goed (in het Engels) uit!",
    by: "Bas Van der Ploeg",
    imgSrc: "https://i.pravatar.cc/150?img=3"
  },
  {
    tempId: 3,
    testimonial: "Is the best shop in the Tilburg area.",
    by: "Cankut Canturk",
    imgSrc: "https://i.pravatar.cc/150?img=4"
  },
  {
    tempId: 4,
    testimonial: "Super service! Een bezoek is zeker de moeite waard.",
    by: "Ireneusz Wierzbicki, Local Guide",
    imgSrc: "https://i.pravatar.cc/150?img=5"
  },
  {
    tempId: 5,
    testimonial: "A great guy, very helpful.",
    by: "Ozgur Sener",
    imgSrc: "https://i.pravatar.cc/150?img=6"
  },
  {
    tempId: 6,
    testimonial: "Hartelijke, uitnodigende sfeer, professioneel advies en veel lekkers.",
    by: "Google Review",
    imgSrc: "https://i.pravatar.cc/150?img=7"
  },
  {
    tempId: 7,
    testimonial: "Habe viele nützliche Informationen vom freundlichen Besitzer erhalten.",
    by: "Bolfriet Baker",
    imgSrc: "https://i.pravatar.cc/150?img=8"
  },
  {
    tempId: 8,
    testimonial: "Goeie service en goede hulp.",
    by: "William Krijnen, Local Guide",
    imgSrc: "https://i.pravatar.cc/150?img=9"
  },
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 border-[#d4af37]"
          : "z-0 border-[rgba(124,58,237,0.3)] hover:border-[rgba(212,175,55,0.5)]"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        backgroundColor: isCenter ? '#1a0028' : '#120018',
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(212,175,55,0.3)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45"
        style={{ right: -2, top: 48, width: SQRT_5000, height: 2, backgroundColor: isCenter ? '#d4af37' : 'rgba(124,58,237,0.3)' }}
      />
      <img
        src={testimonial.imgSrc}
        alt={testimonial.by.split(',')[0]}
        className="mb-4 h-14 w-12 object-cover object-top bg-[#0d000f]"
        style={{ boxShadow: "3px 3px 0px #0d000f" }}
      />
      <h3 className={cn(
        "text-base sm:text-xl font-medium font-[family-name:var(--font-cormorant)] italic",
        isCenter ? "text-[#f0eaf8]" : "text-[#9b8fb0]"
      )}>
        &ldquo;{testimonial.testimonial}&rdquo;
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-xs font-[family-name:var(--font-space)] tracking-wider",
        isCenter ? "text-[#d4af37]" : "text-[#9b8fb0]"
      )}>
        — {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="relative w-full overflow-hidden" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className="flex h-14 w-14 items-center justify-center border-2 border-[rgba(124,58,237,0.3)] bg-[#0d000f] text-[#9b8fb0] hover:bg-[#d4af37] hover:text-[#0d000f] hover:border-[#d4af37] transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className="flex h-14 w-14 items-center justify-center border-2 border-[rgba(124,58,237,0.3)] bg-[#0d000f] text-[#9b8fb0] hover:bg-[#d4af37] hover:text-[#0d000f] hover:border-[#d4af37] transition-colors"
          aria-label="Next"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
