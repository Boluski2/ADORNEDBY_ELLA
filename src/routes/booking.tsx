import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { CalendarCheck } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Field, inputClass } from "@/components/site/Field";
import { formatEntries, mailtoLink, whatsappLink } from "@/lib/site";
import { services } from "@/lib/content";
import bridal from "@/assets/bridal.jpg";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book An Appointment | AdornedBy_Ella" },
      {
        name: "description",
        content:
          "Reserve your bridal, birthday, photoshoot or home-service makeup date with AdornedBy_Ella in Lagos.",
      },
      { property: "og:title", content: "Book An Appointment | AdornedBy_Ella" },
      {
        property: "og:description",
        content: "Pick your date, style and location — your booking reaches us instantly.",
      },
    ],
  }),
  component: Booking,
});

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  eventType: "Bridal",
  date: "",
  time: "",
  location: "",
  style: "Soft Glam",
  notes: "",
};

function Booking() {
  const [form, setForm] = useState(emptyForm);

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date) {
      toast.error("Please add your name, phone number and event date.");
      return;
    }
    const body = formatEntries([
      ["Full Name", form.name],
      ["Email", form.email],
      ["Phone", form.phone],
      ["Event Type", form.eventType],
      ["Event Date", form.date],
      ["Time", form.time],
      ["Location", form.location],
      ["Makeup Style", form.style],
      ["Notes", form.notes],
    ]);
    window.open(whatsappLink(`NEW BOOKING REQUEST\n\n${body}`), "_blank");
    toast.success("Booking sent — we'll confirm your date shortly.");
  };

  return (
    <>
      <PageHeader
        eyebrow="Reserve Your Date"
        title={
          <>
            Book Your <span className="text-gilded">Glam</span>
          </>
        }
        subtitle="Dates fill fast during wedding season. Send your details and we will confirm within hours."
        image={bridal}
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-24 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <form onSubmit={onSubmit} className="glass-card rounded-[2rem] p-8 sm:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Full Name">
                <input className={inputClass} value={form.name} onChange={set("name")} placeholder="Your name" />
              </Field>
              <Field label="Email">
                <input type="email" className={inputClass} value={form.email} onChange={set("email")} placeholder="you@email.com" />
              </Field>
              <Field label="Phone Number">
                <input className={inputClass} value={form.phone} onChange={set("phone")} placeholder="080 0000 0000" />
              </Field>
              <Field label="Event Type">
                <select className={inputClass} value={form.eventType} onChange={set("eventType")}>
                  {services.map((s) => (
                    <option key={s.name}>{s.name}</option>
                  ))}
                </select>
              </Field>
              <Field label="Event Date">
                <input type="date" className={inputClass} value={form.date} onChange={set("date")} />
              </Field>
              <Field label="Time">
                <input type="time" className={inputClass} value={form.time} onChange={set("time")} />
              </Field>
              <Field label="Location">
                <input className={inputClass} value={form.location} onChange={set("location")} placeholder="Venue or address" />
              </Field>
              <Field label="Makeup Style">
                <select className={inputClass} value={form.style} onChange={set("style")}>
                  {["Soft Glam", "Bold Glam", "Natural", "Editorial", "Traditional"].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </Field>
              <Field label="Additional Notes" full>
                <textarea
                  rows={4}
                  className={inputClass}
                  value={form.notes}
                  onChange={set("notes")}
                  placeholder="Skin type, inspiration, number of faces..."
                />
              </Field>
            </div>
            <button
              type="submit"
              className="mt-8 btn-base btn-gold btn-lg w-full"
            >
              <CalendarCheck size={15} /> Send Booking Request
            </button>
            <a
              href={mailtoLink("Makeup Booking Request", "Hello Ella, I'd like to book a session.")}
              className="mt-4 block text-center text-xs text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
            >
              Prefer email? Send it here instead
            </a>
          </form>
        </Reveal>

        <Reveal delay={120}>
          <aside className="glass-card sticky top-28 rounded-[2rem] p-8">
            <p className="eyebrow">Good To Know</p>
            <ul className="mt-6 space-y-5 text-sm text-muted-foreground">
              <li>A 50% deposit secures your date; the balance is due on the day.</li>
              <li>Bridal bookings include a complimentary trial consultation.</li>
              <li>Home service is available across Lagos — travel fee applies outside Ikeja.</li>
              <li>Please arrive with a clean, moisturised face for the best finish.</li>
              <li>Reschedules are welcome with 72 hours notice.</li>
            </ul>
            <div className="gold-rule my-7" />
            <p className="font-accent text-xl">
              "The calmest, most luxurious wedding morning I could have asked for."
            </p>
          </aside>
        </Reveal>
      </section>
    </>
  );
}
