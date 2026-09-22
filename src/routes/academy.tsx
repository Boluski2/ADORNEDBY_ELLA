import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { CheckCircle2, Send, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Field, inputClass } from "@/components/site/Field";
import { formatEntries, site, whatsappLink } from "@/lib/site";
import brushes from "@/assets/brushes.jpg";

export const Route = createFileRoute("/academy")({
  head: () => ({
    meta: [
      { title: "Makeup Internship | AdornedBy_Ella Beauty Academy" },
      {
        name: "description",
        content:
          "Join the AdornedBy_Ella team. A hands-on makeup internship in Ogba, Lagos for passionate beginners ready to learn.",
      },
      { property: "og:title", content: "Makeup Internship | AdornedBy_Ella Beauty Academy" },
      {
        property: "og:description",
        content: "Requirements, details and application form for our makeup internship opportunity.",
      },
    ],
  }),
  component: Academy,
});

const requirements = [
  "Passionate and dedicated individuals",
  "Little or no experience in the art of makeup",
  "Excellent communication skills",
  "Strong interpersonal skills",
  "Flexible — early hours, weekends, holidays or evenings",
  "Must reside around Ogba and its environs",
  "Honest, disciplined and ready to learn",
  "Ready to commit for a minimum of six months",
  "Preferably female",
];

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  whatsapp: "",
  address: "",
  age: "",
  gender: "Female",
  area: "",
  why: "",
  experience: "No experience",
};

function Academy() {
  const [form, setForm] = useState(emptyForm);
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.whatsapp || !form.area) {
      toast.error("Please add your name, WhatsApp number and area of residence.");
      return;
    }
    const body = formatEntries([
      ["Full Name", form.name],
      ["Email", form.email],
      ["Phone", form.phone],
      ["WhatsApp", form.whatsapp],
      ["Home Address", form.address],
      ["Age", form.age],
      ["Gender", form.gender],
      ["Area of Residence", form.area],
      ["Makeup Experience", form.experience],
      ["Why join", form.why],
    ]);
    window.open(whatsappLink(`INTERNSHIP APPLICATION\n\n${body}`), "_blank");
    toast.success("Application sent — we'll be in touch soon.");
  };

  return (
    <>
      <PageHeader
        eyebrow="Beauty Academy"
        title={
          <>
            Join Our Team — <span className="text-gilded">Makeup Internship</span>
          </>
        }
        subtitle="Learn the craft inside a working luxury studio. No experience needed, just passion and discipline."
        image={brushes}
      />

      {/* Flyer */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] luxe-shadow">
            <img
              src={brushes}
              alt="Rose gold makeup brushes flat lay"
              loading="lazy"
              width={1600}
              height={1008}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
            <div className="relative max-w-xl px-8 py-16 sm:px-14 sm:py-20">
              <p className="eyebrow">AdornedBy_Ella</p>
              <p className="mt-6 inline-block rounded-full bg-[var(--gradient-nude)] px-6 py-2 font-accent text-lg text-primary-foreground">
                Join our team
              </p>
              <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">
                Makeup Internship <span className="text-gilded">Opportunity</span>
              </h2>
              <div className="gold-rule mt-6 w-48" />
              <p className="mt-6 text-sm text-muted-foreground">
                Send your application to WhatsApp {site.phone} or {site.email} — or simply use the
                form below.
              </p>
              <a
                href="#apply"
                className="mt-8 btn-base btn-gold btn-md"
              >
                <Sparkles size={14} /> Apply Now
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Requirements */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <Reveal className="text-center">
          <p className="eyebrow">Requirements</p>
          <h2 className="mt-4 font-display text-4xl">What We Look For</h2>
          <div className="gold-rule mx-auto mt-6 w-40" />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {requirements.map((r, i) => (
            <Reveal key={r} delay={i * 50}>
              <div className="glass-card hover-lift flex h-full items-start gap-4 rounded-3xl p-6">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">{r}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form */}
      <section id="apply" className="mx-auto max-w-4xl px-5 pb-24">
        <Reveal>
          <form onSubmit={onSubmit} className="glass-card rounded-[2rem] p-8 sm:p-10">
            <p className="eyebrow">Application</p>
            <h2 className="mt-4 mb-8 font-display text-3xl">Apply For The Internship</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Full Name">
                <input className={inputClass} value={form.name} onChange={set("name")} placeholder="Your name" />
              </Field>
              <Field label="Email Address">
                <input type="email" className={inputClass} value={form.email} onChange={set("email")} placeholder="you@email.com" />
              </Field>
              <Field label="Phone Number">
                <input className={inputClass} value={form.phone} onChange={set("phone")} placeholder="080 0000 0000" />
              </Field>
              <Field label="WhatsApp Number">
                <input className={inputClass} value={form.whatsapp} onChange={set("whatsapp")} placeholder="080 0000 0000" />
              </Field>
              <Field label="Home Address" full>
                <input className={inputClass} value={form.address} onChange={set("address")} placeholder="Street, city" />
              </Field>
              <Field label="Age">
                <input className={inputClass} value={form.age} onChange={set("age")} placeholder="e.g. 22" />
              </Field>
              <Field label="Gender">
                <select className={inputClass} value={form.gender} onChange={set("gender")}>
                  {["Female", "Male", "Prefer not to say"].map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </Field>
              <Field label="Area of Residence">
                <input className={inputClass} value={form.area} onChange={set("area")} placeholder="e.g. Ogba" />
              </Field>
              <Field label="Do you have makeup experience?">
                <select className={inputClass} value={form.experience} onChange={set("experience")}>
                  {["No experience", "A little experience", "Intermediate", "Advanced"].map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </Field>
              <Field label="Why do you want to join?" full>
                <textarea
                  rows={4}
                  className={inputClass}
                  value={form.why}
                  onChange={set("why")}
                  placeholder="Tell us about your passion for beauty..."
                />
              </Field>
            </div>
            <button
              type="submit"
              className="mt-8 btn-base btn-gold btn-lg w-full"
            >
              <Send size={15} /> Submit Application
            </button>
          </form>
        </Reveal>
      </section>
    </>
  );
}
