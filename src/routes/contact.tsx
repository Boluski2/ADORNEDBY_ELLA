import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import {
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Music2,
  Facebook,
  MapPin,
  Send,
} from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Field, inputClass } from "@/components/site/Field";
import { formatEntries, mailtoLink, site, whatsappLink } from "@/lib/site";
import studio from "@/assets/studio.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AdornedBy_Ella | Lagos Makeup Artist" },
      {
        name: "description",
        content:
          "Call, WhatsApp or email AdornedBy_Ella in Ogba, Lagos. Send a message and we respond the same day.",
      },
      { property: "og:title", content: "Contact AdornedBy_Ella | Lagos Makeup Artist" },
      {
        property: "og:description",
        content: "Phone, WhatsApp, email and social links, plus a direct message form.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) {
      toast.error("Please add your name and a message.");
      return;
    }
    const body = formatEntries([
      ["Name", form.name],
      ["Email", form.email],
      ["Phone", form.phone],
      ["Subject", form.subject],
      ["Message", form.message],
    ]);
    window.open(whatsappLink(`NEW WEBSITE MESSAGE\n\n${body}`), "_blank");
    toast.success("Message sent — Ella will reply shortly.");
  };

  const channels = [
    { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone}` },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: site.phone,
      href: whatsappLink("Hello AdornedBy_Ella!"),
    },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Instagram, label: "Instagram", value: "@adornedby_ella", href: site.instagram },
    { icon: Music2, label: "TikTok", value: "@adornedby_ella", href: site.tiktok },
    { icon: Facebook, label: "Facebook", value: "AdornedBy Ella", href: site.facebook },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Say Hello"
        title={
          <>
            Let's <span className="text-gilded">Talk Beauty</span>
          </>
        }
        subtitle="Enquiries, collaborations and bookings — we reply the same day."
        image={studio}
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-24 lg:grid-cols-2">
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="glass-card hover-lift rounded-3xl p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--gradient-gold)] text-primary-foreground">
                  <c.icon size={16} />
                </span>
                <p className="mt-5 text-[0.62rem] tracking-[0.2em] uppercase text-muted-foreground">
                  {c.label}
                </p>
                <p className="mt-1 text-sm text-foreground">{c.value}</p>
              </a>
            ))}
          </div>
          <div className="glass-card mt-4 flex items-center gap-4 rounded-3xl p-6">
            <MapPin size={18} className="text-primary" />
            <p className="text-sm text-muted-foreground">{site.location}</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} className="glass-card rounded-[2rem] p-8 sm:p-10">
            <p className="eyebrow">Contact Form</p>
            <h2 className="mt-4 mb-8 font-display text-3xl">Send A Message</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Full Name">
                <input className={inputClass} value={form.name} onChange={set("name")} placeholder="Your name" />
              </Field>
              <Field label="Email">
                <input type="email" className={inputClass} value={form.email} onChange={set("email")} placeholder="you@email.com" />
              </Field>
              <Field label="Phone">
                <input className={inputClass} value={form.phone} onChange={set("phone")} placeholder="080 0000 0000" />
              </Field>
              <Field label="Subject">
                <input className={inputClass} value={form.subject} onChange={set("subject")} placeholder="Enquiry" />
              </Field>
              <Field label="Message" full>
                <textarea
                  rows={5}
                  className={inputClass}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="How can we help?"
                />
              </Field>
            </div>
            <button
              type="submit"
              className="mt-8 btn-base btn-gold btn-lg w-full"
            >
              <Send size={15} /> Send Message
            </button>
            <a
              href={mailtoLink("Website Enquiry", "Hello Ella,")}
              className="mt-4 block text-center text-xs text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
            >
              Or email us directly
            </a>
          </form>
        </Reveal>
      </section>
    </>
  );
}
