import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import studio from "@/assets/studio.jpg";

// const bridalFlyer = new URL("../assets/bide.PNG", import.meta.url).href;

import bridalFlyer from "@/assets/bide.png";

const bridalPackages = [
  {
    name: "Classic",
    event: "One-day event",
    price: "₦170,000",
    includes: [
      "White wedding makeup",
      "Traditional makeup",
      "Reception touch-up",
      "Gele styling",
      "Nails",
    ],
  },
  {
    name: "Prestige",
    event: "One-day event",
    price: "₦260,000",
    includes: [
      "White wedding makeup",
      "Traditional makeup",
      "Hair styling",
      "Reception touch-up",
      "Gele styling",
    ],
  },
  {
    name: "Luxury",
    event: "Two-day event",
    price: "₦300,000",
    includes: [
      "White wedding makeup",
      "Traditional makeup",
      "Touch-ups for both days",
      "Gele styling",
    ],
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing | AdornedBy_Ella" },
      {
        name: "description",
        content:
          "Explore AdornedBy_Ella's 2026 bridal makeup packages in Lagos: Classic, Prestige and Luxury, with transparent pricing and inclusions.",
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
            2026 Bridal <span className="text-gilded">Makeup Packages</span>
          </>
        }
        subtitle="Three wedding packages for celebrations within Lagos, with makeup and styling for your special days."
        image={studio}
      />

      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <Reveal>
            <figure className="mx-auto max-w-xl overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src={bridalFlyer}
                alt="2026 bridal makeup package flyer showing Classic, Prestige and Luxury options"
                className="h-auto w-full object-contain"
              />
            </figure>
          </Reveal>

          <div className="grid gap-5">
            {bridalPackages.map((bridalPackage, index) => (
              <Reveal key={bridalPackage.name} delay={index * 70}>
                <article className="glass-card rounded-2xl p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="eyebrow">{bridalPackage.event}</p>
                      <h2 className="mt-2 font-display text-2xl">{bridalPackage.name}</h2>
                    </div>
                    <p className="font-accent text-2xl text-gilded">{bridalPackage.price}</p>
                  </div>
                  <div className="gold-rule mt-5" />
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {bridalPackage.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check size={14} className="mt-0.5 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <p className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      <MapPin size={14} className="text-primary" /> Within Lagos
                    </p>
                    <Link to="/booking" className="btn-base btn-outline-gold btn-sm">
                      Book This Package
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
