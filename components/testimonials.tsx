"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

const testimonials = [
  {
    quote: "The meditations, visualizations, and explanations were incredibly helpful. I have been listening to the meditations daily.",
    author: "Participant in Meditation Course",
  },
  {
    quote: "The program surpassed my expectations. Throughout the day I think about positive, fluid connections in my brain and my breath.",
    author: "Participant in Meditation Course",
  },
  {
    quote: "My entire view of the disease has been transformed, and I now keep improving my physical and emotional health through meditation, exercise, and diet.",
    author: "Patient, age 61",
  },
  {
    quote: "It is empowering to understand how integrative therapies can help manage Parkinson’s disease alongside pharmacological treatment.",
    author: "Patient, age 63",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const move = (direction: number) => {
    setIndex((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_220px] lg:items-end">
      <figure key={index} className="animate-[testimonial-in_.45s_ease-out]">
        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#d9eee7] font-serif text-4xl leading-none text-[#0f7466]">“</div>
        <blockquote className="max-w-4xl font-serif text-3xl leading-[1.25] tracking-[-0.035em] text-[#173b38] md:text-5xl">
          {active.quote}
        </blockquote>
        <figcaption className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-[#6a817d]">{active.author}</figcaption>
      </figure>

      <div className="flex items-center gap-3 lg:justify-end">
        <button type="button" onClick={() => move(-1)} className="grid h-12 w-12 place-items-center rounded-full border border-[#bfd2cc] bg-white text-[#173b38] transition hover:-translate-y-0.5 hover:border-[#0f7466]" aria-label="Previous testimonial">
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button type="button" onClick={() => move(1)} className="grid h-12 w-12 place-items-center rounded-full bg-[#123e3a] text-white transition hover:-translate-y-0.5 hover:bg-[#0f7466]" aria-label="Next testimonial">
          <ChevronRightIcon className="h-5 w-5" />
        </button>
        <span className="ml-3 text-sm font-medium text-[#6a817d]">{String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span>
      </div>
    </div>
  );
}
