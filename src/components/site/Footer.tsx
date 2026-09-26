import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone, MapPin, Music2, Facebook } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

const logo = new URL("../../assets/logo.png", import.meta.url).href;


export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[var(--gradient-noir)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <img
            src={logo}
            alt="AdornedBy_Ella luxury makeup artistry"
            className="h-32 w-32 object-contain"
          />
          <p className="mt-3 max-w-sm font-accent text-lg text-muted-foreground">
            Enhancing beauty, creating confidence luxury makeup artistry for every
            unforgettable moment.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-border p-3 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram size={16} />
            </a>
            <a
              href={site.tiktok}
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="rounded-full border border-border p-3 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Music2 size={16} />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-border p-3 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="eyebrow">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-foreground/75">
            {[
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/academy", label: "Beauty Academy" },
              { to: "/booking", label: "Book Appointment" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-foreground/75">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-primary" />
              <a href={`tel:${site.phone}`}>{site.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-primary" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-primary" />
              {site.location}
            </li>
          </ul>
          <a
            href={whatsappLink("Hello AdornedBy_Ella, I'd like to make an enquiry.")}
            target="_blank"
            rel="noreferrer"
            className="mt-5 btn-base btn-gold btn-sm"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.name}. {site.tagline}.
      </div>
    </footer>
  );
}
