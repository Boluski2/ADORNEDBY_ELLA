import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const logo = new URL("../../assets/logo.png", import.meta.url).href;

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  // { to: "/gallery", label: "Gallery" },
  { to: "/academy", label: "Academy" },
  // { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-card border-b py-2" : "py-5",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <Link to="/" className="group flex items-center leading-none">
          <img
            src={logo}
            alt="AdornedBy_Ella luxury makeup artistry"
            className="h-14 w-14 object-contain"
          />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-[0.7rem] tracking-[0.2em] uppercase text-foreground/75 transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/booking"
            className="hidden btn-base btn-outline-gold btn-sm sm:inline-flex"
          >
            Book Now
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-border p-2.5 text-primary lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-card mx-4 mt-3 rounded-2xl p-5 lg:hidden">
          <ul className="grid gap-1">
            {[...links, { to: "/booking", label: "Book Appointment" } as const].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm tracking-[0.14em] uppercase text-foreground/80 hover:bg-secondary hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">{site.location}</p>
        </div>
      )}
    </header>
  );
}
