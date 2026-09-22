import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { looks } from "@/lib/content";
import softglam from "@/assets/softglam.jpg";
import boldglam from "@/assets/boldglam.jpg";
import bridal from "@/assets/bridal.jpg";
import traditional from "@/assets/traditional.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | AdornedBy_Ella Makeup Transformations" },
      {
        name: "description",
        content:
          "A masonry gallery of luxury makeup transformations, plus before and after reveals by AdornedBy_Ella.",
      },
      { property: "og:title", content: "Gallery | AdornedBy_Ella Makeup Transformations" },
      {
        property: "og:description",
        content: "Browse the full gallery and see the before and after transformations.",
      },
    ],
  }),
  component: Gallery,
});

const beforeAfter = [
  { before: softglam, after: boldglam, label: "Soft to Bold Glam" },
  { before: traditional, after: bridal, label: "Traditional to Bridal" },
];

function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="The Gallery"
        title={
          <>
            Moments Of <span className="text-gilded">Transformation</span>
          </>
        }
        subtitle="Slide through the reveals and browse the full collection of finished looks."
      />

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <Reveal className="text-center">
          <p className="eyebrow">Before & After</p>
          <h2 className="mt-4 font-display text-4xl">Drag To Reveal</h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {beforeAfter.map((b, i) => (
            <Reveal key={b.label} delay={i * 90}>
              <BeforeAfter {...b} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24">
        <Reveal className="text-center">
          <p className="eyebrow">Masonry Collection</p>
          <h2 className="mt-4 font-display text-4xl">Every Look, Up Close</h2>
        </Reveal>
        <div className="mt-12 columns-2 gap-4 lg:columns-3 [&>*]:mb-4">
          {looks.map((l, i) => (
            <Reveal key={`${l.title}-${i}`} delay={(i % 6) * 50}>
              <figure className="group relative overflow-hidden rounded-3xl luxe-shadow">
                <img
                  src={l.src}
                  alt={`${l.title} — ${l.category}`}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    i % 3 === 0 ? "h-[30rem]" : i % 3 === 1 ? "h-[22rem]" : "h-[26rem]"
                  }`}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-5 opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="font-display text-lg">{l.title}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function BeforeAfter({ before, after, label }: { before: string; after: string; label: string }) {
  const [pos, setPos] = useState(50);
  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl luxe-shadow">
        <img src={before} alt={`${label} before`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img
            src={after}
            alt={`${label} after`}
            loading="lazy"
            className="h-full w-full object-cover"
            style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
          />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-primary"
          style={{ left: `${pos}%` }}
        />
        <input
          type="range"
          min={5}
          max={95}
          value={pos}
          aria-label={`Reveal slider for ${label}`}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-x-0 bottom-6 mx-auto w-4/5 accent-[var(--gold)]"
        />
      </div>
      <p className="mt-4 text-center text-[0.68rem] tracking-[0.22em] uppercase text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
