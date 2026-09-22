import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { looks, categories } from "@/lib/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | AdornedBy_Ella Makeup Artistry" },
      {
        name: "description",
        content:
          "Browse bridal, soft glam, bold glam, editorial, birthday and traditional wedding makeup looks by AdornedBy_Ella.",
      },
      { property: "og:title", content: "Portfolio | AdornedBy_Ella Makeup Artistry" },
      {
        property: "og:description",
        content: "A curated portfolio of luxury makeup looks, filtered by category.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? looks : looks.filter((l) => l.category === active);

  return (
    <>
      <PageHeader
        eyebrow="Selected Work"
        title={
          <>
            The <span className="text-gilded">Portfolio</span>
          </>
        }
        subtitle="Every face is a canvas. Filter through the looks that define the house style."
      />

      <section className="mx-auto max-w-7xl px-5 pb-24">
        <Reveal className="flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "btn-base btn-sm",
                active === c ? "btn-gold" : "btn-outline-gold",
              )}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((l, i) => (
            <Reveal key={`${l.title}-${i}`} delay={i * 50}>
              <figure className="group relative overflow-hidden rounded-3xl luxe-shadow">
                <img
                  src={l.src}
                  alt={`${l.title} — ${l.category}`}
                  loading="lazy"
                  className="h-[28rem] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 bg-gradient-to-t from-background to-transparent p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="eyebrow">{l.category}</p>
                  <p className="mt-1 font-display text-xl">{l.title}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
