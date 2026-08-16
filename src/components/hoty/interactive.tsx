import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Briefcase,
  Calculator,
  Calendar,
  CheckCircle2,
  DollarSign,
  Download,
  FileText,
  GraduationCap,
  Loader2,
  PartyPopper,
  Search,
  TrendingUp,
  X,
  Zap,
  ChevronDown,
  Send,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Section, fmt, tap } from "./common";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/locales/LanguageContext";

/* ---------------------------------- 01: Header --------------------------------- */

export function HeaderNavigation({
  lang: propLang,
  setLang: propSetLang,
  onCta,
}: {
  lang?: "ru" | "uz";
  setLang?: (l: "ru" | "uz") => void;
  onCta: () => void;
}) {
  const { lang: contextLang, setLang: contextSetLang, t } = useLanguage();
  const currentLang = propLang || contextLang;
  const changeLang = propSetLang || contextSetLang;

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-brand-dark/5 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3">
        <a href="#top" className="flex items-center">
          <img
            src={logo}
            alt="HOTY DOGY"
            className="h-11 w-auto object-contain md:h-13 drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)] transition-transform hover:scale-105"
          />
        </a>
        <nav className="ml-6 hidden gap-6 text-sm font-bold text-brand-dark/70 md:flex">
          <a href="#why" className="hover:text-brand-orange">
            {t.nav.whyUs}
          </a>
          <a href="#formats" className="hover:text-brand-orange">
            {t.nav.formats}
          </a>
          <a href="#calc" className="hover:text-brand-orange">
            {t.nav.calculator}
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-1.5 rounded-full bg-brand-dark/5 p-1">
          {(["ru", "uz"] as const).map((l) => (
            <motion.button
              key={l}
              {...tap}
              onClick={() => changeLang(l)}
              className={`rounded-full px-3.5 py-1 text-xs md:text-sm font-black uppercase transition-all ${currentLang === l
                  ? "bg-brand-orange text-white shadow-sm"
                  : "text-brand-dark/60 hover:text-brand-dark"
                }`}
            >
              {l}
            </motion.button>
          ))}
        </div>

        <motion.button
          {...tap}
          onClick={onCta}
          className="rounded-full bg-brand-red px-5 py-2 text-sm font-black text-white shadow-lg shadow-brand-red/25"
        >
          {t.nav.cta}
        </motion.button>
      </div>
    </header>
  );
}

/* ---------------------------------- 08: Audience Tabs --------------------------------- */

const audienceIconsMap: Record<string, { icon: typeof GraduationCap; iconBg: string }> = {
  "first-business": { icon: GraduationCap, iconBg: "bg-[#FFD000] text-neutral-900" },
  "young-entrepreneur": { icon: Zap, iconBg: "bg-[#FF6E00] text-white" },
  "interested": { icon: Search, iconBg: "bg-purple-600 text-white" },
  "existing-business": { icon: TrendingUp, iconBg: "bg-[#F60019] text-white" },
  "investor": { icon: Briefcase, iconBg: "bg-[#212620] text-white" },
};

export function AudienceTabs() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("first-business");

  const tabData = t.audience.tabs.map((tab) => ({
    ...tab,
    ...(audienceIconsMap[tab.id] || { icon: GraduationCap, iconBg: "bg-[#FF6E00] text-white" }),
  }));

  const current = tabData.find((item) => item.id === activeTab) || tabData[0];
  if (!current) return null;

  return (
    <Section className="py-16 sm:py-20 max-w-7xl mx-auto px-4">
      {/* 1. Section Header */}
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-4 py-1 text-xs font-extrabold uppercase text-orange-600">
          {t.audience.eyebrow}
        </span>
      </div>

      <h2 className="mt-3 text-center font-display text-3xl font-black tracking-tight text-[#212620] sm:text-4xl">
        <span className="text-[#FF6E00]">HOTY DOGY</span>{t.audience.titleEnd}
      </h2>

      <p className="mx-auto mb-8 mt-2 max-w-xl text-center text-base font-medium text-neutral-600">
        {t.audience.subtitle}
      </p>

      {/* 2. Tab Controls */}
      <div className="bg-neutral-100 p-1.5 rounded-full flex flex-wrap sm:flex-nowrap gap-1 max-w-4xl mx-auto mb-8 justify-center overflow-x-auto no-scrollbar">
        {tabData.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-xs sm:text-sm whitespace-nowrap cursor-pointer transition-all duration-300 ${isActive
                  ? "bg-[#FF6E00] text-white font-bold rounded-full px-5 py-2.5 shadow-md"
                  : "text-neutral-600 hover:text-neutral-900 font-semibold px-4 py-2.5"
                }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* 3. Tab Content Card */}
      <div className="max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-100 shadow-xl"
          >
            {/* Icon */}
            <div
              className={`w-12 h-12 rounded-full p-3 flex items-center justify-center mb-4 ${current.iconBg}`}
            >
              <current.icon className="w-6 h-6 shrink-0" />
            </div>

            {/* Headline */}
            <h3 className="font-display text-xl sm:text-2xl font-black text-neutral-900 leading-snug mb-6">
              {current.headline}
            </h3>

            {/* Bullets */}
            <ul className="space-y-3.5">
              {current.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-sm sm:text-base font-semibold text-neutral-800"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#9FCE00] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}

/* ---------------------------------- 10: Formats & Pricing --------------------------------- */

const formatStyles: Record<string, { topBadgeCls: string; containerCls: string; areaPillCls: string; ctaCls: string }> = {
  "street-retail": {
    topBadgeCls: "bg-[#F60019] text-white font-black text-xs px-3.5 py-1 rounded-full absolute -top-3.5 left-1/2 -translate-x-1/2 shadow-md whitespace-nowrap uppercase tracking-wider",
    containerCls: "border-2 border-[#FF6E00] relative shadow-xl bg-white rounded-3xl p-8 flex flex-col justify-between hover:shadow-2xl transition-all duration-300",
    areaPillCls: "bg-orange-50 text-[#FF6E00] font-bold px-3.5 py-1 rounded-full text-xs inline-block border border-orange-100",
    ctaCls: "bg-[#F60019] hover:bg-[#d50015] text-white font-bold py-4 rounded-2xl transition-all w-full mt-6 shadow-lg shadow-red-500/25 cursor-pointer text-center text-sm md:text-base flex items-center justify-center gap-2",
  },
};

export function FormatsPricing({ onCta }: { onCta?: (format?: string) => void }) {
  const { t } = useLanguage();

  const handleSelectFormat = (formatId: string) => {
    if (onCta) {
      onCta(formatId);
    }
    const el = document.getElementById("lead");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section id="formats" className="py-16 sm:py-20 max-w-7xl mx-auto px-4">
      {/* 1. Section Header */}
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-4 py-1 text-xs font-bold uppercase text-orange-600">
          {t.formats.eyebrow}
        </span>
      </div>

      <h2 className="mt-3 text-center font-display text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">
        {t.formats.title}
      </h2>

      <p className="mx-auto mb-12 mt-2 max-w-xl text-center text-base font-medium text-neutral-600">
        {t.formats.subtitle}
      </p>

      {/* 2. Format Card (Centered horizontally max-w-xl mx-auto) */}
      <div className="max-w-xl mx-auto">
        {t.formats.items.map((f) => {
          const style = formatStyles[f.id] ?? formatStyles["street-retail"];
          if (!style) return null;
          return (
            <motion.div
              key={f.id}
              whileHover={{ y: -4 }}
              className={style.containerCls}
            >
              {/* Top Badge */}
              <span className={style.topBadgeCls}>{f.topBadge}</span>

              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mt-2">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-neutral-900">
                      {f.title}
                    </h3>
                    <div className="text-xs font-bold text-neutral-500 mt-0.5">
                      {f.subtitleLabel}
                    </div>
                  </div>
                  <span className={style.areaPillCls}>{f.areaPill}</span>
                </div>

                {/* Investment Price */}
                <div className="mt-6">
                  <div className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
                    {f.investmentHeading}
                  </div>
                  <div className="text-xs font-medium text-neutral-500 mt-1">
                    {f.subPrice}
                  </div>
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-neutral-100" />

                {/* Feature List */}
                <ul className="space-y-3">
                  {f.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-neutral-800">
                      <CheckCircle2 className="h-5 w-5 text-[#9FCE00] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <motion.button
                {...tap}
                onClick={() => handleSelectFormat(f.id)}
                className={style.ctaCls}
              >
                {f.ctaText}
              </motion.button>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------------------------------- 11: ROI Calculator --------------------------------- */

export function ROICalculator({
  calcData,
  setCalcData,
}: {
  calcData: { traffic: number; check: number };
  setCalcData: React.Dispatch<
    React.SetStateAction<{ traffic: number; check: number }>
  >;
}) {
  const { t } = useLanguage();
  const dailyOrders = calcData.traffic;
  const avgCheck = calcData.check;

  const dailyRevenue = dailyOrders * avgCheck;
  const monthlyRevenue = dailyRevenue * 30;
  const monthlyProfit = monthlyRevenue * 0.22;
  const paybackMonths = Math.max(4, Math.round(450000000 / (monthlyProfit || 1)));

  const scrollToLead = () => {
    document.getElementById("lead")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section id="calc" className="py-16 sm:py-20 max-w-7xl mx-auto px-4">
      {/* 1. Section Header */}
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-4 py-1 text-xs font-bold uppercase text-orange-600">
          {t.calc.eyebrow}
        </span>
      </div>

      <h2 className="mt-3 text-center font-display text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">
        {t.calc.title}
      </h2>

      <p className="mx-auto mb-8 mt-2 max-w-xl text-center text-base font-medium text-neutral-600">
        {t.calc.subtitle}
      </p>

      {/* 2. 2-Column Calculator Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
        {/* LEFT COLUMN: Sliders Card */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm flex flex-col justify-between">
          <div className="space-y-8">
            {/* Slider 1: Orders per day */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-neutral-700">
                  {t.calc.ordersPerDay}
                </span>
                <span className="text-2xl font-black text-[#FF6E00]">
                  {fmt(dailyOrders)}
                </span>
              </div>
              <Slider
                value={[dailyOrders]}
                min={80}
                max={500}
                step={10}
                onValueChange={(v) =>
                  setCalcData((p) => ({ ...p, traffic: v[0] ?? p.traffic }))
                }
                className="mt-4 [&_[data-slot=slider-range]]:bg-[#FF6E00]"
              />
              <div className="flex justify-between text-[11px] font-bold text-neutral-400 mt-2">
                <span>80</span>
                <span>500</span>
              </div>
            </div>

            {/* Slider 2: Average Check */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-neutral-700">
                  {t.calc.avgCheck}
                </span>
                <span className="text-2xl font-black text-[#FF6E00]">
                  {fmt(avgCheck)} {t.calc.sumSuffix}
                </span>
              </div>
              <Slider
                value={[avgCheck]}
                min={35000}
                max={100000}
                step={5000}
                onValueChange={(v) =>
                  setCalcData((p) => ({ ...p, check: v[0] ?? p.check }))
                }
                className="mt-4 [&_[data-slot=slider-range]]:bg-[#FF6E00]"
              />
              <div className="flex justify-between text-[11px] font-bold text-neutral-400 mt-2">
                <span>35 000 {t.calc.sumSuffix}</span>
                <span>100 000 {t.calc.sumSuffix}</span>
              </div>
            </div>
          </div>

          {/* Footnote Note Box */}
          <div className="bg-amber-50/80 border border-amber-100 rounded-2xl p-4 text-xs text-neutral-600 mt-8 leading-relaxed">
            {t.calc.footnote}
          </div>
        </div>

        {/* RIGHT COLUMN: 4 Metric Cards Grid (Symmetric 2x2 stretch) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 h-full">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-100 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                {t.calc.dailyRevenue}
              </span>
              <div className="bg-amber-100 text-amber-700 p-2.5 rounded-xl">
                <DollarSign className="w-5 h-5" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-neutral-900 mt-6 tracking-tight">
              {fmt(dailyRevenue)} {t.calc.sumSuffix}
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-100 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                {t.calc.monthlyRevenue}
              </span>
              <div className="bg-lime-100 text-lime-800 p-2.5 rounded-xl">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-neutral-900 mt-6 tracking-tight">
              {fmt(monthlyRevenue)} {t.calc.sumSuffix}
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-100 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                {t.calc.monthlyProfit}
              </span>
              <div className="bg-purple-100 text-purple-700 p-2.5 rounded-xl">
                <Calculator className="w-5 h-5" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-[#FF6E00] mt-6 tracking-tight">
              {fmt(Math.round(monthlyProfit))} {t.calc.sumSuffix}
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-100 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                {t.calc.paybackPeriod}
              </span>
              <div className="bg-red-100 text-red-700 p-2.5 rounded-xl">
                <Calendar className="w-5 h-5" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-neutral-900 mt-6 tracking-tight">
              {t.calc.paybackPrefix ? `${t.calc.paybackPrefix} ` : ""}{paybackMonths} {t.calc.paybackSuffix}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------- Lead Gen Form ------------------------------- */

export function LeadGenForm({
  lang: propLang,
  isSubmitting,
  selectedFormat,
  onSubmit,
}: {
  lang?: "ru" | "uz";
  isSubmitting: boolean;
  selectedFormat?: string;
  onSubmit: (data: {
    name: string;
    phone: string;
    city: string;
    budget: string;
    format: string;
    language: string;
    lang: "ru" | "uz";
  }) => void;
}) {
  const { lang: contextLang, t } = useLanguage();
  const currentLang = propLang || contextLang;

  const [form, setForm] = useState({ name: "", phone: "", city: "", budget: "", honeypot: "" });
  const [spamError, setSpamError] = useState<string>("");
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  const resolveFormat = (): string => {
    if (selectedFormat) {
      if (selectedFormat.toLowerCase().includes("food")) return "Food Court";
      if (selectedFormat.toLowerCase().includes("street")) return "Street Retail";
      return selectedFormat;
    }
    if (form.budget) {
      if (form.budget.toLowerCase().includes("food court")) return "Food Court";
      if (form.budget.toLowerCase().includes("street retail")) return "Street Retail";
      if (form.budget.includes("Масштабирование") || form.budget.includes("Kengaytirish")) return "Multi-unit";
    }
    return "Street Retail";
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSpamError("");

    // Anti-spam check 1: Honeypot field must be empty
    if (form.honeypot.trim() !== "") {
      // Silent rejection for automated bot submissions
      return;
    }

    // Anti-spam check 2: Minimum digits validation for phone number
    const digitsOnly = form.phone.replace(/\D/g, "");
    if (digitsOnly.length < 7) {
      setSpamError(
        currentLang === "uz"
          ? "Iltimos, haqiqiy telefon raqamini kiriting."
          : "Пожалуйста, введите корректный номер телефона."
      );
      return;
    }

    // Anti-spam check 3: Cooldown rate limit (30 seconds)
    const now = Date.now();
    if (now - lastSubmitTime < 30000) {
      setSpamError((t.lead as any).spamWarning || "Пожалуйста, подождите перед повторной отправкой.");
      return;
    }

    setLastSubmitTime(now);
    onSubmit({
      name: form.name.trim(),
      phone: form.phone.trim(),
      city: form.city,
      budget: form.budget,
      format: resolveFormat(),
      language: currentLang.toUpperCase(),
      lang: currentLang,
    });
  };

  return (
    <Section id="lead" className="py-16 sm:py-24 max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column (Value & Offer) */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="bg-red-50 text-[#F60019] font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider inline-block">
              {t.lead.eyebrow}
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-neutral-900 leading-tight">
            {t.lead.title}
          </h2>
          <p className="text-neutral-600 text-base leading-relaxed">
            {t.lead.subtitle}
          </p>
          <div className="space-y-3.5 pt-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#9FCE00] shrink-0" />
              <span className="text-neutral-800 font-semibold mt-0.5">{t.lead.check1}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#9FCE00] shrink-0" />
              <span className="text-neutral-800 font-semibold mt-0.5">{t.lead.check2}</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#9FCE00] shrink-0" />
              <span className="text-neutral-800 font-semibold mt-0.5">{t.lead.check3}</span>
            </div>
          </div>
        </div>

        {/* Right Column (Form Card) */}
        <div className="lg:col-span-6">
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-neutral-100 shadow-xl shadow-neutral-200/50">
            <form className="space-y-4" onSubmit={handleSubmitForm}>
              {/* Anti-spam Honeypot Field (Hidden from human users) */}
              <div className="sr-only" aria-hidden="true">
                <input
                  type="text"
                  name="b_website_confirm"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.honeypot}
                  onChange={(e) => setForm((p) => ({ ...p, honeypot: e.target.value }))}
                />
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wide mb-1.5">
                  {t.lead.labelName}
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  placeholder={t.lead.placeholderName}
                  className="w-full px-4 py-3.5 rounded-2xl border border-neutral-200 focus:border-[#FF6E00] focus:ring-2 focus:ring-orange-100 outline-none text-sm transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wide mb-1.5">
                  {t.lead.labelPhone}
                </label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                  placeholder={t.lead.placeholderPhone}
                  className="w-full px-4 py-3.5 rounded-2xl border border-neutral-200 focus:border-[#FF6E00] focus:ring-2 focus:ring-orange-100 outline-none text-sm transition-all"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wide mb-1.5">
                  {t.lead.labelCity}
                </label>
                <div className="relative">
                  <select
                    required
                    value={form.city}
                    onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))}
                    className="w-full px-4 py-3.5 rounded-2xl border border-neutral-200 focus:border-[#FF6E00] focus:ring-2 focus:ring-orange-100 outline-none text-sm transition-all bg-white appearance-none pr-10"
                  >
                    <option value="" disabled>{t.lead.selectCity}</option>
                    {t.lead.cityOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wide mb-1.5">
                  {t.lead.labelBudget}
                </label>
                <div className="relative">
                  <select
                    required
                    value={form.budget}
                    onChange={(e) => setForm((p) => ({ ...p, budget: e.target.value }))}
                    className="w-full px-4 py-3.5 rounded-2xl border border-neutral-200 focus:border-[#FF6E00] focus:ring-2 focus:ring-orange-100 outline-none text-sm transition-all bg-white appearance-none pr-10"
                  >
                    <option value="" disabled>{t.lead.selectBudget}</option>
                    {t.lead.budgetOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
                </div>
              </div>

              {/* Anti-spam Error Display */}
              {spamError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs font-medium">
                  {spamError}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <motion.button
                  {...tap}
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#F60019] hover:bg-[#d50015] text-white font-bold py-4 rounded-2xl w-full shadow-lg shadow-red-500/25 transition-all flex items-center justify-center gap-2 text-base disabled:opacity-80 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      {t.lead.submitting}
                    </>
                  ) : (
                    <>
                      {t.lead.submitBtn}
                      <Send className="w-5 h-5 ml-1" />
                    </>
                  )}
                </motion.button>
              </div>

              {/* Privacy Notice */}
              <p className="text-[11px] text-center text-neutral-400 mt-2 leading-tight">
                {t.lead.privacy}
              </p>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}

export const LeadFormSection = LeadGenForm;

export function SuccessModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 grid place-items-center bg-brand-dark/60 p-5 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.85, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.45 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-[2rem] bg-white p-9 text-center shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Закрыть"
              className="absolute top-5 right-5 text-brand-dark/40 hover:text-brand-dark"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#9FCE00]/20 text-[#9FCE00]">
              <CheckCircle2 className="h-10 w-10 text-[#9FCE00]" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-black text-neutral-900">
              {t.successModal.title}
            </h3>
            <p className="mt-2 text-sm font-semibold text-neutral-600 leading-relaxed">
              {t.successModal.desc}
            </p>
            <motion.button
              {...tap}
              type="button"
              onClick={onClose}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#F60019] hover:bg-[#d50015] py-4 font-display text-base font-bold text-white shadow-lg shadow-red-500/25 transition-all"
            >
              {t.successModal.downloadBtn}
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------------------------------- FAQ --------------------------------- */

export function FaqAccordion({ onCta }: { onCta?: () => void }) {
  const { lang, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToLead = () => {
    if (onCta) {
      onCta();
    } else {
      const el = document.getElementById("lead");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setTimeout(() => {
      const input = document.getElementById("lead")?.querySelector("input");
      if (input) {
        input.focus();
      }
    }, 500);
  };

  return (
    <Section className="py-16 sm:py-20 max-w-5xl mx-auto px-4">
      <div className="flex justify-center">
        <span className="bg-red-50 text-[#F60019] font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider inline-block mb-3">
          {t.faq.eyebrow}
        </span>
      </div>
      <h2 className="font-display font-black text-3xl sm:text-4xl text-center text-neutral-900 mb-10">
        {t.faq.title}
      </h2>

      <div className="space-y-3">
        {t.faq.items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl border border-neutral-100 overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left transition-colors hover:bg-neutral-50/80"
              >
                <span className="font-display font-bold text-base sm:text-lg text-neutral-900">
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-[#F60019]" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base font-medium text-neutral-600 leading-relaxed border-t border-neutral-50 pt-4">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="mt-12 bg-neutral-900 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-xl">
        <div className="text-center sm:text-left">
          <h4 className="font-display font-black text-lg sm:text-xl text-white">
            {t.faq.bottomTitle}
          </h4>
          <p className="text-xs sm:text-sm text-neutral-400 font-medium mt-1">
            {t.faq.bottomSub}
          </p>
        </div>
        <motion.button
          {...tap}
          onClick={scrollToLead}
          className="bg-[#FF6E00] hover:bg-orange-600 text-white font-bold px-6 py-3.5 rounded-2xl transition-all shadow-md shrink-0 cursor-pointer text-sm whitespace-nowrap flex items-center gap-1.5"
        >
          {t.faq.telegramBtn}
        </motion.button>
      </div>
    </Section>
  );
}
