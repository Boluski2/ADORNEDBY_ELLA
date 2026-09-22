import type { ReactNode } from "react";

export function Field({
  label,
  children,
  full,
}: {
  label: string;
  children: ReactNode;
  full?: boolean;
}) {
  return (
    <label className={full ? "block sm:col-span-2" : "block"}>
      <span className="mb-2 block text-[0.68rem] tracking-[0.2em] uppercase text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

export const inputClass =
  "w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";
