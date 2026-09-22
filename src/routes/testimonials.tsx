import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Play, Quote } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { testimonials, looks } from "@/lib/content";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials | AdornedBy_Ella" },
      {
        name: "description",
        content:
          "Five-star reviews from brides, celebrants and creatives styled by AdornedBy_Ella in Lagos.",
      },
      { property: "og:title", content: "Client Testimonials | AdornedBy_Ella" },
      {
        property: "og:description",
        content: "Real words from real clients, with photos, ratings and video reviews.",
      },
    ],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <PageHeader
        eyebrow="Client Love"
        title={
          <>
            Five Stars, <span className="text-gilded">Every Time</span>
          </>
        }
        subtitle="Our clients trust us with their biggest days. Here is what they say afterwards."
      />

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <blockquote className="glass-card hover-lift flex h-full flex-col rounded-3xl p-8">
                <Quote size={22} className="text-primary/60" />
                <p className="mt-4 grow font-accent text-xl leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={looks[i % looks.length]!.src}
                    alt={t.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover ring-1 ring-primary/50"
                  />
                  <div>
                    <p className="text-sm text-primary">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5 text-primary">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} size={13} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24">
        <Reveal className="text-center">
          <p className="eyebrow">Video Reviews</p>
          <h2 className="mt-4 font-display text-4xl">Hear It In Their Voice</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {looks.slice(0, 3).map((l, i) => (
            <Reveal key={`v-${i}`} delay={i * 80}>
              <div className="group relative overflow-hidden rounded-3xl luxe-shadow">
                <img
                  src={l.src}
                  alt={`Video testimonial from ${testimonials[i]?.name}`}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-background/40">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--gradient-gold)] text-primary-foreground float-slow">
                    <Play size={20} fill="currentColor" />
                  </span>
                </div>
                <p className="absolute bottom-5 left-6 font-display text-lg">
                  {testimonials[i]?.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link
            to="/booking"
            className="btn-base btn-gold btn-lg"
          >
            Become Our Next Story
          </Link>
        </Reveal>
      </section>
    </>
  );
}
