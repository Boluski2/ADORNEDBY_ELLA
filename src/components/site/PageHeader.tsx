import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16">
      {image && (
        <div className="absolute inset-0 -z-10">
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-[var(--gradient-noir)] opacity-85" />
        </div>
      )}
      <div className="mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] sm:text-6xl">{title}</h1>
          <div className="gold-rule mx-auto mt-6 w-40" />
          {subtitle && (
            <p className="mx-auto mt-6 max-w-2xl font-accent text-xl text-muted-foreground">
              {subtitle}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
