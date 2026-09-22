import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Clock, Palette } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/lib/content";
import studio from "@/assets/studio.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing | AdornedBy_Ella" },
      {
        name: "description",
        content:
          "Bridal glam from ₦80,000, birthday glam from ₦35,000, photoshoot, editorial, home service and group makeup by AdornedBy_Ella in Lagos.",
      },
      { property: "og:title", content: "Services & Pricing | AdornedBy_Ella" },
      {
        property: "og:description",
        content: "Transparent luxury pricing with what's included, duration and products used.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services & Investment"
        title={
          <>
            Luxury, <span className="text-gilded">Priced Honestly</span>
          </>
        }
        subtitle="Each service includes a consultation, premium products and hygienic, single-use applicators."
        image={studio}
      />

      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <article className="glass-card hover-lift flex h-full flex-col rounded-3xl p-8">
                <h2 className="font-display text-2xl">{s.name}</h2>
                <p className="mt-3 font-accent text-3xl text-gilded">{s.price}</p>
                <div className="gold-rule mt-6" />
                <p className="mt-5 flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-muted-foreground">
                  <Clock size={13} className="text-primary" /> {s.duration}
                </p>
                <p className="mt-3 flex items-start gap-2 text-xs text-muted-foreground">
                  <Palette size={13} className="mt-0.5 shrink-0 text-primary" /> {s.products}
                </p>
                <p className="mt-6 text-[0.65rem] tracking-[0.2em] uppercase text-primary">
                  What's Included
                </p>
                <ul className="mt-3 grow space-y-2">
                  {s.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check size={14} className="mt-0.5 shrink-0 text-primary" />
                      {inc}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/booking"
                  className="mt-8 btn-base btn-outline-gold btn-sm w-full"
                >
                  Book This
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
