import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Eye, Target, Heart, Sparkles } from "lucide-react";
import artist from "@/assets/artist.jpg";
import brushes from "@/assets/brushes.jpg";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AdornedBy_Ella | The Brand Story" },
      {
        name: "description",
        content:
          "The story, mission and beauty philosophy behind AdornedBy_Ella — a luxury makeup artistry brand based in Ogba, Lagos.",
      },
      { property: "og:title", content: "About AdornedBy_Ella | The Brand Story" },
      {
        property: "og:description",
        content: "Years of artistry, certified training and a philosophy of confidence-first beauty.",
      },
    ],
  }),
  component: About,
});

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To make every client feel undeniably confident through artistry that honours their natural features.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To become West Africa's most trusted luxury beauty house and academy for the next generation of artists.",
  },
  {
    icon: Heart,
    title: "Our Philosophy",
    text: "Beauty is not a mask. It is a language of self-worth, applied with clean hands and a calm spirit.",
  },
];

const certifications = [
  "Certified Professional Makeup Artist (PMA)",
  "Advanced Bridal & Gele Artistry Diploma",
  "Airbrush & HD Camera-Ready Certification",
  "Skin Hygiene & Sanitation Practice Certificate",
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title={
          <>
            Beauty, Made <span className="text-gilded">Personal</span>
          </>
        }
        subtitle="AdornedBy_Ella began with one brush, one mirror and one belief — that every woman deserves to see her best self."
        image={brushes}
      />

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-12 lg:grid-cols-2">
        <Reveal>
          <img
            src={artist}
            alt="Ella applying luxury makeup to a client in her Lagos studio"
            loading="lazy"
            width={1200}
            height={1200}
            className="rounded-[2rem] luxe-shadow"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">The Brand Story</p>
          <h2 className="mt-4 font-display text-4xl">From A Single Brush To A Beauty House</h2>
          <div className="gold-rule mt-6 w-40" />
          <div className="mt-7 space-y-5 text-sm leading-relaxed text-muted-foreground">
            <p>
              What started in a small room in Ogba with a modest kit and a growing list of friends
              soon became one of Lagos' most requested makeup studios. Ella's obsession with skin
              prep, undertone matching and long-wear finishes turned first-time clients into brides,
              and brides into lifelong friends of the brand.
            </p>
            <p>
              Today, AdornedBy_Ella serves brides, celebrants, creatives and brands across Lagos —
              in studio and on location — with a luxury kit, a sanitised station and an unhurried,
              deeply personal experience.
            </p>
            <p>
              The brand also runs a hands-on internship academy, training passionate beginners into
              confident, bookable professional artists.
            </p>
          </div>
          <div className="mt-9 grid grid-cols-3 gap-4">
            {[
              { n: "7+", l: "Years Experience" },
              { n: "900+", l: "Faces Adorned" },
              { n: "250+", l: "Brides Styled" },
            ].map((s) => (
              <div key={s.l} className="glass-card rounded-2xl px-4 py-6 text-center">
                <p className="font-display text-3xl text-gilded">{s.n}</p>
                <p className="mt-1 text-[0.62rem] tracking-[0.16em] uppercase text-muted-foreground">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="glass-card hover-lift h-full rounded-3xl p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--gradient-gold)] text-primary-foreground">
                  <p.icon size={18} />
                </span>
                <h3 className="mt-6 font-display text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20">
        <Reveal>
          <div className="glass-card rounded-[2rem] p-10">
            <p className="eyebrow">Professional Certifications</p>
            <h2 className="mt-4 font-display text-3xl">Trained, Certified, Trusted</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {certifications.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Award size={16} className="mt-0.5 shrink-0 text-primary" />
                  {c}
                </li>
              ))}
            </ul>
            <Link
              to="/booking"
              className="mt-10 btn-base btn-gold btn-md"
            >
              <Sparkles size={14} /> Book A Session
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
