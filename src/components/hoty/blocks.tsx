import { useState, useCallback, memo } from "react";
import { motion } from "motion/react";
import {
  BarChart3,
  Boxes,
  ChefHat,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  FileCheck,
  Flame,
  Lightbulb,
  MapPin,
  Megaphone,
  MonitorSmartphone,
  Percent,
  Instagram,
  Youtube,
  Quote,
  Rocket,
  ShoppingCart,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
  Send,
  Wallet,
  Wrench,
  Zap,
} from "lucide-react";
import {
  Pill,
  Section,
  staggerChild,
  staggerParent,
  tap,
} from "./common";
import mascot from "@/assets/mascot.png";
import logo from "@/assets/logo.png";
import shokhrukh from "@/assets/shokhrukh.png";
import branch1 from "@/assets/branch-1.jpg";
import branch2 from "@/assets/branch-2.jpg";
import branch3 from "@/assets/branch-3.jpg";
import appScreenshot from "@/assets/app-screenshot.png";
import { useLanguage } from "@/locales/LanguageContext";

/* ---------------------------------- 02: Hero Section --------------------------------- */

export function HeroSection({ onCta }: { onCta: () => void }) {
  const { lang, t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#ff4500] via-[#ff6a00] to-[#ff8c00] min-h-[620px] h-auto md:h-[calc(100vh-80px)] max-h-[880px] flex items-center pt-24 pb-16 md:pt-20 md:pb-16 z-0">
      {/* Background ambient lighting effects */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[550px] w-[550px] rounded-full bg-brand-yellow/40 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-[550px] w-[550px] -translate-y-1/2 rounded-full bg-brand-red/35 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[450px] w-[450px] rounded-full bg-amber-400/20 blur-[110px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-12 w-full">
        {/* Left Column: Text & CTAs */}
        <motion.div
          className="md:col-span-6 z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
        >
          {/* Badge */}
          <Pill className="bg-brand-dark/80 text-brand-yellow px-4 py-1.5 text-xs md:text-sm font-bold shadow-lg border border-white/10 backdrop-blur-md">
            <Flame className="h-4 w-4 fill-brand-yellow text-brand-yellow animate-pulse" /> {t.hero.pill}
          </Pill>

          {/* H1 Heading */}
          <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl leading-tight font-black tracking-tight text-white drop-shadow-sm">
            <div>{t.hero.titleLine1}</div>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              {lang === "uz" ? (
                <>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 shadow-xl shadow-black/10">
                    <img
                      src={logo}
                      alt="HOTY DOGY"
                      width={160}
                      height={64}
                      decoding="async"
                      className="h-11 md:h-16 w-auto inline-block object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
                    />
                  </span>
                  <span>{t.hero.titleLine2}</span>
                </>
              ) : (
                <>
                  <span>{t.hero.titleLine2}</span>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 shadow-xl shadow-black/10">
                    <img
                      src={logo}
                      alt="HOTY DOGY"
                      width={160}
                      height={64}
                      decoding="async"
                      className="h-11 md:h-16 w-auto inline-block object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
                    />
                  </span>
                </>
              )}
            </div>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-lg text-sm md:text-base font-medium text-white/95 leading-relaxed">
            {t.hero.subtitle}
            {lang === "ru" && <><span className="font-black text-brand-yellow">HOTY DOGY</span>.</>}
          </p>

          {/* Stat Line */}
          <div className="mt-4 text-sm md:text-base font-bold text-yellow-300 flex flex-wrap items-center gap-2 bg-black/15 backdrop-blur-md w-fit px-4 py-2 rounded-2xl border border-white/10">
            <span>{t.hero.stat1}</span>
            <span className="text-white/40">•</span>
            <span>{t.hero.stat2}</span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-start">
            <motion.button
              {...tap}
              onClick={onCta}
              className="rounded-full bg-[#F60019] hover:bg-[#ff1a31] px-8 py-4 font-display text-sm md:text-base font-black text-white shadow-xl shadow-brand-red/40 transition-all text-center border border-white/20 cursor-pointer"
            >
              {t.hero.ctaPresentation}
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column: Mascot as Main Hero Character */}
        <div className="md:col-span-6 relative flex justify-center items-center py-6 md:py-0">
          {/* Spotlight aura behind mascot */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[340px] sm:h-[420px] w-[340px] sm:w-[420px] rounded-full bg-gradient-to-tr from-brand-yellow/45 via-amber-300/30 to-transparent blur-[80px]" />
          
          {/* Outer glowing ring */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] sm:h-[380px] w-[300px] sm:w-[380px] rounded-full border-2 border-white/20 animate-spin" style={{ animationDuration: "35s" }} />

          {/* Floating mascot character wrapper */}
          <div className="relative flex justify-center items-center w-full">
            {/* Mascot Image with levitation animation */}
            <motion.img
              src={mascot}
              alt="HOTY DOGY mascot"
              width={1024}
              height={1024}
              decoding="async"
              loading="eager"
              className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[430px] lg:max-w-[480px] h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)] relative z-10"
              animate={{
                y: [0, -20, 0],
                rotate: [-2.5, 2.5, -2.5],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Dynamic levitation shadow under mascot */}
            <motion.div
              className="absolute -bottom-2 sm:bottom-0 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-7 bg-black/30 rounded-[100%] blur-md z-0"
              animate={{
                scale: [0.75, 1.05, 0.75],
                opacity: [0.25, 0.55, 0.25],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />


            {/* Floating Badge 2 (Bottom Right): Sauce Badge */}
            <motion.div
              className="absolute bottom-[8%] right-[0%] sm:right-[4%] z-20"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            >
              <Pill className="bg-brand-yellow text-brand-dark shadow-2xl text-xs md:text-sm font-black tracking-wide px-5 py-2.5 rounded-full border-2 border-white/50 flex items-center gap-2">
                <Flame className="h-4 w-4 text-brand-dark fill-brand-dark" />
                {t.hero.sauceBadge}
              </Pill>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Wavy bottom divider transition */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 leading-none overflow-hidden">
        <svg
          className="relative block w-full h-10 md:h-16 text-brand-light fill-current"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0,32 C320,110 420,10 720,60 C1020,110 1180,20 1440,50 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}

/* ---------------------------------- 03: Metrics Row --------------------------------- */

export function MetricsRow() {
  const { t } = useLanguage();

  const metrics = [
    { v: t.metrics.m1Val, l: t.metrics.m1Lbl },
    { v: t.metrics.m2Val, l: t.metrics.m2Lbl },
    { v: t.metrics.m3Val, l: t.metrics.m3Lbl },
    { v: t.metrics.m4Val, l: t.metrics.m4Lbl },
    { v: t.metrics.m5Val, l: t.metrics.m5Lbl },
    { v: t.metrics.m6Val, l: t.metrics.m6Lbl },
  ];

  return (
    <Section className="py-14 md:py-20">
      <div className="text-center">
        <h2 className="font-display text-4xl font-black tracking-tight text-brand-dark md:text-5xl">
          {t.metrics.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-brand-dark/60 md:text-lg">
          {t.metrics.subtitle}
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((m) => (
          <motion.div
            key={m.l}
            {...tap}
            className="flex items-center gap-4 rounded-[1.75rem] border border-black/5 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="h-12 w-1.5 shrink-0 rounded-full bg-[#9fce00]" />
            <div>
              <div className="font-display text-3xl font-black tracking-tight text-brand-dark md:text-4xl">
                {m.v}
              </div>
              <div className="mt-1 text-sm font-semibold text-brand-dark/60">
                {m.l}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------------- 05: Brand Timeline --------------------------------- */

export function BrandTimeline() {
  const { t } = useLanguage();

  return (
    <Section id="brand" className="py-14 md:py-24">
      <div className="text-center">
        <h2 className="font-display text-4xl font-black tracking-tight text-brand-dark md:text-5xl">
          {t.timeline.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base font-medium leading-relaxed text-brand-dark/60 md:text-lg">
          {t.timeline.subtitle}
        </p>
      </div>

      <div className="relative mt-16 max-w-5xl mx-auto">
        <div className="absolute top-4 bottom-4 left-6 md:left-1/2 w-0.5 -translate-x-1/2 bg-brand-orange/80" />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8 md:space-y-12"
        >
          {t.timeline.items.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={`${item.year}-${item.title}`}
                variants={staggerChild}
                className="relative flex flex-col md:flex-row items-center"
              >
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-7 w-4 h-4 rounded-full bg-brand-orange ring-4 ring-brand-light shadow-sm z-10" />

                {/* Left Column (Desktop) */}
                <div className="w-full md:w-1/2 pl-14 md:pl-0 md:pr-12">
                  {isEven ? (
                    <div className="rounded-[1.75rem] border border-black/5 bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
                      <span className="inline-block rounded-full bg-brand-yellow px-3.5 py-1 font-display text-xs font-bold text-brand-dark mb-3">
                        {item.year}
                      </span>
                      <h3 className="font-display text-2xl font-black tracking-tight text-brand-dark">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-brand-dark/60">
                        {item.hasBrand ? (
                          <>
                            {item.desc}
                            <span className="font-black text-[#FF6E00]">HOTY DOGY</span>.
                          </>
                        ) : (
                          item.desc
                        )}
                      </p>
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>

                {/* Right Column (Desktop) */}
                <div className="w-full md:w-1/2 pl-14 md:pl-12">
                  {!isEven ? (
                    <div className="rounded-[1.75rem] border border-black/5 bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
                      <span className="inline-block rounded-full bg-brand-yellow px-3.5 py-1 font-display text-xs font-bold text-brand-dark mb-3">
                        {item.year}
                      </span>
                      <h3 className="font-display text-2xl font-black tracking-tight text-brand-dark">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-brand-dark/60">
                        {item.hasBrand ? (
                          <>
                            {item.desc}
                            <span className="font-black text-[#FF6E00]">HOTY DOGY</span>.
                          </>
                        ) : (
                          item.desc
                        )}
                      </p>
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}

/* ---------------------------------- 06: Founder Quote --------------------------------- */

export function FounderQuote() {
  const { t } = useLanguage();

  return (
    <Section className="py-10 md:py-16">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1d221c] p-8 md:p-12 shadow-xl border border-white/5">
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-orange/15 blur-3xl" />

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Left Column: Photo */}
          <div className="relative shrink-0">
            <img
              src={shokhrukh}
              alt={t.founder.name}
              width={256}
              height={256}
              loading="lazy"
              decoding="async"
              className="h-56 w-56 md:h-64 md:w-64 rounded-[2rem] object-cover shadow-2xl border border-white/10"
            />
            <div className="absolute -bottom-3 -right-3 h-12 w-12 rounded-2xl bg-brand-lime grid place-items-center shadow-lg border-2 border-[#1d221c]">
              <Quote className="h-6 w-6 text-brand-dark fill-brand-dark" />
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-display text-3xl md:text-4xl font-black text-white tracking-tight">
              {t.founder.name}
            </h2>
            <div className="mt-1.5 font-display text-sm md:text-base font-bold text-brand-yellow">
              {t.founder.role}<span className="font-black text-brand-yellow">HOTY DOGY</span>
            </div>
            <p className="mt-1 text-xs md:text-sm font-medium text-white/50 leading-relaxed">
              {t.founder.subRole}
            </p>

            <div className="mt-6 border-l-2 border-brand-orange pl-4 md:pl-5 py-1 text-left">
              <p className="text-base md:text-lg font-medium text-white/90 leading-relaxed">
                {t.founder.quote}
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center md:justify-start">
              <motion.a
                {...tap}
                href="https://www.spot.uz/ru/2025/04/30/hoty-dogy/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 hover:border-white/40"
              >
                {t.founder.caseBtn}<span className="font-black text-brand-yellow">HOTY DOGY</span>{t.founder.caseBtnAfter} <ExternalLink className="h-4 w-4 text-white/70" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------------- 06.5: Marketing Traction --------------------------------- */

export function MarketingTraction() {
  const { t } = useLanguage();

  return (
    <Section className="py-16 sm:py-20 max-w-7xl mx-auto px-4">
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-4 py-1 text-xs font-extrabold uppercase text-purple-700">
          <Smartphone className="h-3.5 w-3.5 text-purple-600" /> {t.traction.eyebrow}
        </span>
      </div>

      <h2 className="mt-3 text-center font-display text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">
        {t.traction.titlePart1}
        <span className="block sm:inline">{t.traction.titlePart2}</span>
      </h2>

      <p className="mx-auto mb-12 mt-2.5 max-w-2xl text-center text-base font-medium text-neutral-600">
        {t.traction.subtitle}<span className="font-black text-[#FF6E00]">HOTY DOGY</span>{t.traction.subtitleEnd}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative">
            <div className="absolute -right-4 -top-4 z-30 rounded-2xl border border-neutral-100 bg-white p-3 shadow-xl">
              <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                {t.traction.downloadsLabel}
              </div>
              <div className="font-display text-xl font-black text-brand-orange">
                22 000
              </div>
            </div>

            <div className="w-[280px] sm:w-[310px] h-[560px] rounded-[40px] bg-neutral-900 border-[8px] border-neutral-900 shadow-2xl relative overflow-hidden flex flex-col p-2.5">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-4 bg-neutral-900 rounded-b-xl z-20" />
              <div className="rounded-[32px] overflow-hidden flex flex-col h-full relative bg-neutral-900">
                <img
                  src={appScreenshot}
                  alt="HOTY DOGY App"
                  width={310}
                  height={560}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-[1.75rem] border border-neutral-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex rounded-2xl bg-purple-100 p-3 text-purple-600 mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="font-display text-3xl sm:text-4xl font-black text-[#9FCE00]">
                {t.traction.card1Val}
              </div>
              <div className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-neutral-600">
                {t.traction.card1Desc}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-neutral-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex rounded-2xl bg-purple-100 p-3 text-purple-600 mb-4">
                <Download className="h-6 w-6" />
              </div>
              <div className="font-display text-3xl sm:text-4xl font-black text-neutral-900">
                {t.traction.card2Val}
              </div>
              <div className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-neutral-600">
                {t.traction.card2Desc}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-neutral-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex rounded-2xl bg-purple-100 p-3 text-purple-600 mb-4">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <div className="font-display text-3xl sm:text-4xl font-black text-neutral-900">
                {t.traction.card3Val}
              </div>
              <div className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-neutral-600">
                {t.traction.card3Desc}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-neutral-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex rounded-2xl bg-purple-100 p-3 text-purple-600 mb-4">
                <Percent className="h-6 w-6" />
              </div>
              <div className="font-display text-3xl sm:text-4xl font-black text-neutral-900">
                {t.traction.card4Val}
              </div>
              <div className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-neutral-600">
                {t.traction.card4Desc}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-6">
            <a
              href="https://www.spot.uz/ru/2025/04/30/hoty-dogy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-neutral-100 hover:bg-[#212620] hover:text-white text-neutral-900 font-bold text-xs sm:text-sm border border-neutral-200/80 transition-all duration-200 group"
            >
              <span>{t.traction.caseStudyBtn}</span>
              <ExternalLink className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://www.spot.uz/ru/2025/04/30/hoty-dogy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-neutral-100 hover:bg-[#212620] hover:text-white text-neutral-900 font-bold text-xs sm:text-sm border border-neutral-200/80 transition-all duration-200 group"
            >
              <span>{t.traction.interviewBtn}</span>
              <ExternalLink className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------------- 07: Why Us Grid --------------------------------- */

const whyIconsMap = [
  { i: Flame, c: "bg-[#FF6E00] text-white" },
  { i: Zap, c: "bg-[#FFD000] text-[#1D221C]" },
  { i: MapPin, c: "bg-[#F60019] text-white" },
  { i: Wallet, c: "bg-[#9FCE00] text-[#1D221C]" },
  { i: TrendingUp, c: "bg-[#FF6E00] text-white" },
  { i: Smartphone, c: "bg-[#9333EA] text-white" },
];

export function WhyUsGrid() {
  const { t } = useLanguage();

  const whyData = t.why.items.map((item, idx) => ({
    ...item,
    ...(whyIconsMap[idx] || whyIconsMap[0]),
  }));

  return (
    <Section className="py-16 sm:py-20 max-w-7xl mx-auto px-4">
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-4 py-1 text-xs font-extrabold uppercase text-orange-600">
          {t.why.eyebrow}
        </span>
      </div>

      <h2 className="mt-3 text-center font-display text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">
        {t.why.title}<span className="font-black text-[#FF6E00]">HOTY DOGY</span>{t.why.titleEnd}
      </h2>

      <p className="mx-auto mb-12 mt-2 max-w-2xl text-center text-base font-medium text-neutral-600">
        {t.why.subtitle}
      </p>

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {whyData.map((f) => {
          const Icon = f.i || Flame;
          return (
            <motion.div
              key={f.t}
              variants={staggerChild}
              className="group relative rounded-3xl border border-neutral-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div
                    className={`grid h-12 w-12 place-items-center rounded-2xl ${f.c} shadow-md shadow-black/5 transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  {f.badge && (
                    <span className="rounded-full bg-orange-100 text-[#FF6E00] px-3 py-1 text-[11px] font-extrabold tracking-tight">
                      {f.badge}
                    </span>
                  )}
                </div>

                <h3 className="mt-6 font-display text-xl font-black text-neutral-900 tracking-tight">
                  {f.t}
                </h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-neutral-600">
                  {f.d}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

/* ---------------------------------- 09: Franchise Package --------------------------------- */

export function FranchisePackage() {
  const { t } = useLanguage();

  return (
    <Section className="py-16 sm:py-20 max-w-5xl mx-auto px-4">
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-4 py-1 text-xs font-bold uppercase text-orange-600">
          {t.package.eyebrow}
        </span>
      </div>

      <h2 className="mt-3 text-center font-display text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">
        {t.package.titleStart}
        <span className="font-black text-[#FF6E00]">HOTY DOGY</span>
      </h2>

      <p className="mx-auto mb-12 mt-2 max-w-xl text-center text-base font-medium text-neutral-600">
        {t.package.subtitle}
      </p>

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {t.package.items.map((item) => (
          <motion.div
            key={item.num}
            variants={staggerChild}
            className={
              item.isVip
                ? "bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/5 border-2 border-orange-400 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex items-start gap-4 relative overflow-hidden"
                : "bg-white rounded-2xl p-5 border border-neutral-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all flex items-start gap-4"
            }
          >
            <div
              className={
                item.isVip
                  ? "w-10 h-10 rounded-xl bg-orange-500 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-sm"
                  : "w-10 h-10 rounded-xl bg-orange-50 text-[#FF6E00] font-black text-sm flex items-center justify-center shrink-0 border border-orange-100/60"
              }
            >
              {item.num}
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display font-black text-base text-neutral-900 tracking-tight">
                  {item.title}
                </h3>
                {item.isVip && (
                  <span className="bg-[#9FCE00] text-neutral-900 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase shrink-0">
                    {t.package.vipBadge}
                  </span>
                )}
              </div>
              <p className="mt-1 text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed">
                {item.hasBrand ? (
                  <>
                    {item.desc}{" "}
                    <span className="font-black text-[#FF6E00]">HOTY DOGY</span>.
                  </>
                ) : (
                  item.desc
                )}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

/* ---------------------------------- 12: Locations Gallery --------------------------------- */

interface PhotoItem {
  url: string;
  alt: string;
}

interface BranchMetrics {
  orders: string;
  revenue: string;
  revenueExact?: string;
  avgCheck: string;
  avgCheckExact?: string;
}

interface MetricsLabels {
  orders: string;
  revenue: string;
  avgCheck: string;
}

interface BranchItem {
  name: string;
  address: string;
  format: string;
  metrics?: BranchMetrics;
  photos: PhotoItem[];
}

const defaultMetricsLabels: MetricsLabels = {
  orders: "Заказы",
  revenue: "Выручка",
  avgCheck: "Средний чек",
};

const defaultBranches: BranchItem[] = [
  {
    name: "Hoty Dogy IT Park",
    address: "ул. Тепамасжид, 4-й проезд",
    format: "Street Retail • 105 м²",
    metrics: {
      orders: "154",
      revenue: "10.9 млн сум",
      revenueExact: "10 966 301 сум",
      avgCheck: "71.1 тыс. сум",
      avgCheckExact: "71 076 сум",
    },
    photos: [
      {
        url: "/branches/itpark-1.jpg",
        alt: "Hoty Dogy IT Park - Фасад и экстерьер",
      },
      {
        url: "/branches/itpark-2.jpg",
        alt: "Hoty Dogy IT Park - Интерьер и зал",
      },
      {
        url: "/branches/itpark-3.jpg",
        alt: "Hoty Dogy IT Park - Зона выдачи",
      },
    ],
  },
  {
    name: "Hoty Dogy Ц-1",
    address: "ул. Буюк Ипак Йули, 31",
    format: "Street Retail • 95 м²",
    metrics: {
      orders: "138",
      revenue: "9.8 млн сум",
      revenueExact: "9 783 457 сум",
      avgCheck: "70.7 тыс. сум",
      avgCheckExact: "70 663 сум",
    },
    photos: [
      {
        url: "/branches/c1-1.jpg",
        alt: "Hoty Dogy Ц-1 - Фасад и вывеска",
      },
      {
        url: "/branches/c1-2.jpg",
        alt: "Hoty Dogy Ц-1 - Интерьер и посадка",
      },
      {
        url: "/branches/c1-3.jpg",
        alt: "Hoty Dogy Ц-1 - Атмосфера филиала",
      },
    ],
  },
  {
    name: "Hoty Dogy Экобазар",
    address: "ТЦ Экобазар",
    format: "Food Court / Island • 80 м²",
    metrics: {
      orders: "135",
      revenue: "7.4 млн сум",
      revenueExact: "7 434 860 сум",
      avgCheck: "54.9 тыс. сум",
      avgCheckExact: "54 916 сум",
    },
    photos: [
      {
        url: "/branches/ecobazar-1.jpg",
        alt: "Hoty Dogy Экобазар - Концепт островка и фасад",
      },
      {
        url: "/branches/ecobazar-2.jpg",
        alt: "Hoty Dogy Экобазар - Зона заказа и посадка",
      },
      {
        url: "/branches/ecobazar-3.jpg",
        alt: "Hoty Dogy Экобазар - Меню и блюда",
      },
    ],
  },
];

const BranchCard = memo(function BranchCard({
  branch,
  workingBadge,
  labels = defaultMetricsLabels,
}: {
  branch: BranchItem;
  workingBadge: string;
  labels?: MetricsLabels;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 40;

  const nextSlide = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % branch.photos.length);
  }, [branch.photos.length]);

  const prevSlide = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + branch.photos.length) % branch.photos.length);
  }, [branch.photos.length]);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  }, [touchStart, touchEnd, nextSlide, prevSlide]);

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-lg shadow-neutral-100/60 transition-all duration-300 hover:shadow-xl flex flex-col justify-between h-full">
      <div>
        {/* Integrated Slider Component */}
        <div
          className="aspect-[4/3] w-full relative overflow-hidden rounded-t-3xl group select-none bg-neutral-900"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Floating Badges */}
          <span className="bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full absolute top-3 left-3 z-10 shadow-sm">
            {branch.format}
          </span>
          <span className="bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 absolute top-3 right-3 z-10 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            {workingBadge.startsWith("●") ? workingBadge : `● ${workingBadge}`}
          </span>

          {/* Images slider track */}
          <div
            className="flex h-full w-full transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {branch.photos.map((photo, i) => (
              <img
                key={i}
                src={photo.url}
                alt={photo.alt}
                width={600}
                height={450}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover shrink-0"
              />
            ))}
          </div>

          {/* Slider Controls */}
          {branch.photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous photo"
                className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-3 transition-opacity duration-200 opacity-0 group-hover:opacity-100 cursor-pointer z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next photo"
                className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-3 transition-opacity duration-200 opacity-0 group-hover:opacity-100 cursor-pointer z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Bottom Pagination Dots */}
              <div className="flex gap-1.5 absolute bottom-3 left-1/2 -translate-x-1/2 z-10">
                {branch.photos.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(i);
                    }}
                    aria-label={`Go to slide ${i + 1}`}
                    className={
                      i === currentIndex
                        ? "w-5 h-1.5 rounded-full bg-white transition-all duration-300 cursor-pointer"
                        : "w-1.5 h-1.5 rounded-full bg-white/50 hover:bg-white/80 transition-all duration-300 cursor-pointer"
                    }
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Card Body Details */}
        <h3 className="text-xl font-black text-neutral-900 mt-4 px-6 font-display tracking-tight">
          {branch.name}
        </h3>
        <div className="text-neutral-500 text-sm flex items-center gap-1.5 px-6 mt-1 font-medium">
          <MapPin className="w-4 h-4 text-[#FF6E00] shrink-0" />
          <span>{branch.address}</span>
        </div>
      </div>

      {/* KPI Performance Metrics Grid */}
      {branch.metrics && (
        <div className="mx-6 mb-6 mt-4 grid grid-cols-3 gap-2 rounded-2xl bg-neutral-50 p-2.5 border border-neutral-100">
          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-white shadow-xs border border-neutral-100 text-center">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400">
              {labels.orders}
            </span>
            <span className="mt-0.5 font-display text-sm sm:text-base font-black text-neutral-900">
              {branch.metrics.orders}
            </span>
          </div>

          <div
            className="flex flex-col items-center justify-center p-2 rounded-xl bg-white shadow-xs border border-neutral-100 text-center cursor-help"
            title={branch.metrics.revenueExact}
          >
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400">
              {labels.revenue}
            </span>
            <span className="mt-0.5 font-display text-xs sm:text-sm font-black text-[#FF6E00] whitespace-nowrap">
              {branch.metrics.revenue}
            </span>
          </div>

          <div
            className="flex flex-col items-center justify-center p-2 rounded-xl bg-white shadow-xs border border-neutral-100 text-center cursor-help"
            title={branch.metrics.avgCheckExact}
          >
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400">
              {labels.avgCheck}
            </span>
            <span className="mt-0.5 font-display text-xs sm:text-sm font-black text-neutral-900 whitespace-nowrap">
              {branch.metrics.avgCheck}
            </span>
          </div>
        </div>
      )}
    </div>
  );
});

export function LocationsGallery() {
  const { t } = useLanguage();

  const branches = (t.locations.branches as unknown as BranchItem[]) || defaultBranches;
  const metricsLabels = (t.locations.metricsLabels as unknown as MetricsLabels) || defaultMetricsLabels;

  return (
    <section id="locations" className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
      <div className="flex justify-center">
        <span className="bg-orange-100 text-orange-600 font-bold px-4 py-1 rounded-full text-xs uppercase">
          {t.locations.eyebrow || "НАШИ ТОЧКИ"}
        </span>
      </div>

      <h2 className="text-neutral-900 font-black text-3xl sm:text-4xl text-center mt-3 font-display tracking-tight">
        {t.locations.titleStart || "Действующие филиалы "}<span className="text-[#FF6E00]">HOTY DOGY</span>
      </h2>

      <p className="text-neutral-500 text-sm font-medium text-center mt-1 mb-10">
        {t.locations.subtitle || "Реальные точки сети"}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6">
        {branches.map((b) => (
          <BranchCard
            key={b.name}
            branch={b}
            workingBadge={t.locations.workingBadge || "Работает"}
            labels={metricsLabels}
          />
        ))}
      </div>
    </section>
  );
}

export const LocationsSection = LocationsGallery;

/* ---------------------------------- 13: Launch Stepper --------------------------------- */

const stepIconsMap = [Sparkles, Users, BarChart3, FileCheck, MapPin, Wrench, ChefHat, Rocket];

export function LaunchStepper() {
  const { lang, t } = useLanguage();

  const steps = t.roadmap.steps.map((s, idx) => ({
    ...s,
    icon: stepIconsMap[idx] || Sparkles,
  }));

  const pillarIconsMap = [Megaphone, MonitorSmartphone, Boxes, Lightbulb];
  const pillarBgColors = ["bg-[#FF6E00] text-white", "bg-[#F60019] text-white", "bg-[#9FCE00] text-neutral-900", "bg-[#FFD000] text-neutral-900"];

  return (
    <Section id="roadmap" className="py-16 sm:py-20 max-w-7xl mx-auto px-4">
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-lime-100 px-4 py-1 text-xs font-bold uppercase text-lime-800">
          {t.roadmap.eyebrow}
        </span>
      </div>

      <h2 className="mt-3 text-center font-display text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">
        {t.roadmap.title}
      </h2>

      <p className="mx-auto mb-12 mt-2 max-w-xl text-center text-base font-medium text-neutral-600">
        {t.roadmap.subtitle}
        {lang === "ru" && <><span className="font-black text-[#FF6E00]">HOTY DOGY</span>.</>}
      </p>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.num}
              variants={staggerChild}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4 }}
              className={
                step.isAccent
                  ? "bg-gradient-to-br from-orange-50/80 via-amber-50/50 to-white rounded-3xl p-6 border-2 border-orange-400 shadow-md hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between min-h-[160px]"
                  : "bg-white rounded-3xl p-6 border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col justify-between min-h-[160px]"
              }
            >
              {index !== 3 && index !== 7 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 border-t-2 border-dashed border-orange-200 z-10 pointer-events-none" />
              )}

              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-xl bg-neutral-100 text-neutral-900 font-black text-xs flex items-center justify-center">
                  {step.num}
                </span>
                <div className="w-10 h-10 rounded-2xl bg-orange-50 text-[#FF6E00] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-display font-black text-base text-neutral-900 tracking-tight leading-snug">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs text-neutral-500 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-6xl mx-auto mt-8 bg-neutral-900 text-white rounded-3xl p-6 sm:p-8 border border-neutral-800 shadow-xl">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/3 shrink-0">
            <span className="bg-orange-500/20 text-orange-400 font-bold text-xs px-3 py-1 rounded-full uppercase inline-block">
              {t.roadmap.postLaunch.pill}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-4 leading-tight tracking-tight">
              {t.roadmap.postLaunch.title}
            </h3>
            <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
              {t.roadmap.postLaunch.subtitle}
            </p>
          </div>

          <div className="md:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
            {t.roadmap.postLaunch.pillars.map((p, i) => {
              const PillarIcon = pillarIconsMap[i] || Megaphone;
              const iconCls = pillarBgColors[i] || pillarBgColors[0];
              return (
                <div key={p.title} className="bg-neutral-800/50 rounded-2xl p-5 border border-neutral-700/50 flex items-start gap-4 transition-all hover:bg-neutral-800">
                  <div className={`w-10 h-10 rounded-xl ${iconCls} flex items-center justify-center shrink-0`}>
                    <PillarIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-white">{p.title}</h4>
                    <p className="text-neutral-400 text-xs mt-1 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------------- 14: Footer --------------------------------- */

export function Footer() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#212620] text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#top" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); scrollTo("top"); }}>
              <img src={logo} alt="HOTY DOGY" width={140} height={40} loading="lazy" decoding="async" className="h-10 w-auto object-contain transition-transform hover:scale-105" />
            </a>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm mt-4">
              {t.footer.bio}
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-[#FF6E00] hover:text-white flex items-center justify-center transition-colors text-neutral-300 shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://t.me/hotydogy_franchise" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-[#FF6E00] hover:text-white flex items-center justify-center transition-colors text-neutral-300 shadow-sm">
                <Send className="w-4 h-4 ml-0.5" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-[#FF6E00] hover:text-white flex items-center justify-center transition-colors text-neutral-300 shadow-sm">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              {t.footer.navTitle}
            </h4>
            <nav className="flex flex-col gap-3">
              <a href="#why" onClick={(e) => { e.preventDefault(); scrollTo("why"); }} className="text-neutral-400 hover:text-white transition-colors text-sm w-fit">
                {t.footer.whyLink}
              </a>
              <a href="#formats" onClick={(e) => { e.preventDefault(); scrollTo("formats"); }} className="text-neutral-400 hover:text-white transition-colors text-sm w-fit">
                {t.footer.formatsLink}
              </a>
              <a href="#calc" onClick={(e) => { e.preventDefault(); scrollTo("calc"); }} className="text-neutral-400 hover:text-white transition-colors text-sm w-fit">
                {t.footer.calcLink}
              </a>
              <a href="#roadmap" onClick={(e) => { e.preventDefault(); scrollTo("roadmap"); }} className="text-neutral-400 hover:text-white transition-colors text-sm w-fit">
                {t.footer.roadmapLink}
              </a>
              <a href="#locations" onClick={(e) => { e.preventDefault(); scrollTo("locations"); }} className="text-neutral-400 hover:text-white transition-colors text-sm w-fit">
                {t.footer.locationsLink}
              </a>
              <a href="#lead" onClick={(e) => { e.preventDefault(); scrollTo("lead"); }} className="text-neutral-400 hover:text-white transition-colors text-sm w-fit">
                {t.footer.faqLink}
              </a>
            </nav>
          </div>

          {/* Column 3: Franchise & Terms */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              {t.footer.franchiseTitle}
            </h4>
            <div className="flex flex-col gap-3 text-sm text-neutral-400">
              <span className="block">{t.footer.investments}</span>
              <span className="block">{t.footer.payback}</span>
              <a href="#lead" onClick={(e) => { e.preventDefault(); scrollTo("lead"); }} className="hover:text-white transition-colors w-fit">
                {t.footer.downloadPdf}
              </a>
              <a href="#" className="hover:text-white transition-colors w-fit mt-2">
                {t.footer.privacyPolicy}
              </a>
            </div>
          </div>

          {/* Column 4: Contacts */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              {t.footer.deptTitle}
            </h4>
            <div className="space-y-3">
              <div>
                <a href="tel:+998900000000" className="text-white font-bold text-base hover:text-[#FF6E00] transition-colors inline-block">
                  +998 (90) 000-00-00
                </a>
                <a href="https://t.me/hotydogy_franchise" target="_blank" rel="noreferrer" className="text-neutral-400 text-sm hover:text-white transition-colors block mt-1">
                  @hotydogy_franchise
                </a>
              </div>
              <div className="text-sm text-neutral-400 mt-3 pt-3 border-t border-neutral-800/80">
                <span className="block mb-1">{t.footer.location}</span>
                <span className="block">{t.footer.schedule}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-neutral-800/80 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            {t.footer.rights}
          </div>
          <div className="font-medium text-neutral-500">
            {t.footer.tagline}
          </div>
        </div>
      </div>
    </footer>
  );
}
