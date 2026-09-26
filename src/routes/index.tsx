import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  Gem,
  ShieldCheck,
  HeartHandshake,
  Clock,
  BadgeCheck,
  Star,
  ArrowRight,
  Instagram,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import studio from "@/assets/studio.jpg";
import { Reveal } from "@/components/site/Reveal";
import { looks, services, testimonials } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AdornedBy_Ella | Luxury Makeup Artistry in Lagos" },
      {
        name: "description",
        content:
          "Enhancing beauty, creating confidence. Bridal, editorial and event makeup artistry in Lagos, plus a professional beauty internship academy.",
      },
      { property: "og:title", content: "AdornedBy_Ella | Luxury Makeup Artistry in Lagos" },
      {
        property: "og:description",
        content: "Luxury makeup artistry for weddings, events, photoshoots and every special moment.",
      },
    ],
  }),
  component: Home,
});

const whyUs = [
  { icon: Gem, title: "Premium Products", text: "Only luxury, skin-loving brands touch your face." },
  { icon: BadgeCheck, title: "Professional Artist", text: "Certified, trained and endlessly detailed." },
  { icon: ShieldCheck, title: "Hygienic Tools", text: "Sanitised brushes and disposables, every client." },
  { icon: HeartHandshake, title: "Personalized Beauty", text: "Looks designed around your features." },
  { icon: Clock, title: "On-time Service", text: "Punctual arrivals, calm and stress-free mornings." },
  { icon: Sparkles, title: "Affordable Luxury", text: "High-end artistry at honest, transparent pricing." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src={hero}
          alt="Bridal client with luxury glam makeup by AdornedBy_Ella"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-20">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Discover the art of beauty</p>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] sm:text-7xl">
              Enhancing Beauty,
              <br />
              Creating <span className="text-gilded">Confidence.</span>
            </h1>
            <div className="gold-rule mt-8 w-56" />
            <p className="mt-7 max-w-lg font-accent text-2xl leading-snug text-muted-foreground">
              Luxury makeup artistry for weddings, events, photoshoots and every special moment.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/booking"
                className="group btn-base btn-gold btn-lg"
              >
                Book Appointment
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/portfolio"
                className="group btn-base btn-outline-gold btn-lg"
              >
                View Portfolio
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <Reveal className="text-center">
          <p className="eyebrow">The Signature Menu</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">Services Crafted For You</h2>
          <div className="gold-rule mx-auto mt-6 w-40" />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 8).map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <div className="glass-card hover-lift h-full overflow-hidden rounded-3xl">
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  className="h-55 w-full object-cover"
                />
                <div className="p-7">
                  <Sparkles size={20} className="text-primary" />
                  <h3 className="mt-5 font-display text-xl">{s.name}</h3>
                  {/* <p className="mt-2 text-sm text-muted-foreground">{s.duration}</p> */}
                  {/* <p className="mt-5 font-accent text-2xl text-gilded">{s.price}</p> */}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link
            to="/services"
            className="btn-base btn-outline-gold btn-md"
          >
            Explore all services <ArrowRight size={14} />
          </Link>
        </Reveal>
      </section>

      {/* Why choose us */}
      <section className="relative overflow-hidden border-y border-border py-24">
        <img
          src={studio}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[var(--gradient-noir)] opacity-90" />
        <div className="relative mx-auto max-w-7xl px-5">
          <Reveal className="text-center">
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">The AdornedBy_Ella Standard</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 70}>
                <div className="glass-card hover-lift flex h-full gap-5 rounded-3xl p-7">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--gradient-gold)] text-primary-foreground">
                    <w.icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg">{w.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{w.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <Reveal className="text-center">
          <p className="eyebrow">Featured Work</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">A Gallery of Glow</h2>
          <div className="gold-rule mx-auto mt-6 w-40" />
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {looks.slice(0, 6).map((l, i) => (
            <Reveal key={l.title} delay={i * 60}>
              <figure className="group relative overflow-hidden rounded-3xl luxe-shadow">
                <img
                  src={l.src}
                  alt={`${l.title} — ${l.category} makeup`}
                  loading="lazy"
                  className="h-[26rem] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="eyebrow">{l.category}</p>
                  <p className="mt-1 font-display text-xl">{l.title}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border bg-secondary/20 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="text-center">
            <p className="eyebrow">Client Love</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">Words From The Chair</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <blockquote className="glass-card hover-lift h-full rounded-3xl p-8">
                  <div className="flex gap-1 text-primary">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-5 font-accent text-xl leading-relaxed">"{t.quote}"</p>
                  <footer className="mt-6 text-sm">
                    <span className="text-primary">{t.name}</span>
                    <span className="text-muted-foreground"> — {t.role}</span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram preview */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <Reveal className="text-center">
          <p className="eyebrow">@adornedby_ella</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">Latest On Instagram</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {looks.slice(0, 6).map((l, i) => (
            <Reveal key={`ig-${i}`} delay={i * 50}>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-2xl"
              >
                <img
                  src={l.src}
                  alt={l.title}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-background/70 opacity-0 transition-opacity group-hover:opacity-100">
                  <Instagram size={20} className="text-primary" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-8">
        <Reveal>
          <div className="glass-card rounded-[2rem] px-8 py-16 text-center">
            <h2 className="font-display text-4xl sm:text-5xl">Ready To Be Adorned?</h2>
            <p className="mx-auto mt-5 max-w-xl font-accent text-xl text-muted-foreground">
              Reserve your date and let us design a look that lives in your memory forever.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                to="/booking"
                className="btn-base btn-gold btn-lg"
              >
                Book Appointment
              </Link>
              <a
                href={whatsappLink("Hello AdornedBy_Ella, I would like to book a makeup session.")}
                target="_blank"
                rel="noreferrer"
                className="btn-base btn-outline-gold btn-lg"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
