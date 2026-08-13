import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const sectionMotion = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, type: "spring" as const, bounce: 0.4 },
};

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      {...sectionMotion}
      className={cn("mx-auto w-full max-w-6xl px-5 py-16 md:py-24", className)}
    >
      {children}
    </motion.section>
  );
}

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", bounce: 0.45, duration: 0.6 },
  },
};

export function Pill({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-4 py-1 text-sm font-bold",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <Pill className="mb-4 bg-brand-lime/20 text-brand-dark">{children}</Pill>
  );
}

export function Title({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-display text-4xl leading-[0.95] font-black tracking-tight text-brand-dark md:text-6xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export const tap = { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } };

export const fmt = (n: number) => new Intl.NumberFormat("ru-RU").format(Math.round(n));
