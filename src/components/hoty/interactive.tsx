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
  Send,
  Receipt,
  Wallet,
  Quote,
  ChevronDown,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Section, fmt, tap } from "./common";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/locales/LanguageContext";
import { LeadForm } from "@/components/LeadForm";

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
            width={140}
            height={48}
            decoding="async"
            loading="eager"
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

        <button
          onClick={onCta}
          className="bg-[#F60019] hover:bg-[#d50015] text-white font-bold px-5 py-2.5 rounded-full text-sm shadow-md shadow-red-500/20 transition-all cursor-pointer"
        >
          {t.nav.cta}
        </button>
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

const formatStyles: Record<
  string,
  { topBadgeCls?: string; containerCls: string; areaPillCls: string; ctaCls: string }
> = {
  "food-court": {
    containerCls:
      "bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative h-full",
    areaPillCls:
      "bg-orange-50 text-[#FF6E00] font-bold px-3.5 py-1 rounded-full text-xs inline-block border border-orange-100",
    ctaCls:
      "bg-[#F60019] hover:bg-[#d50015] text-white font-bold py-4 rounded-2xl transition-all w-full mt-6 shadow-lg shadow-red-500/25 cursor-pointer text-center text-sm md:text-base flex items-center justify-center gap-2",
  },
  "street-retail": {
    topBadgeCls:
      "bg-[#FF6E00] text-white font-black text-xs px-3.5 py-1 rounded-full absolute -top-3.5 left-1/2 -translate-x-1/2 shadow-md whitespace-nowrap uppercase tracking-wider",
    containerCls:
      "bg-white rounded-3xl p-8 border-2 border-[#FF6E00] shadow-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative h-full",
    areaPillCls:
      "bg-orange-50 text-[#FF6E00] font-bold px-3.5 py-1 rounded-full text-xs inline-block border border-orange-100",
    ctaCls:
      "bg-[#F60019] hover:bg-[#d50015] text-white font-bold py-4 rounded-2xl transition-all w-full mt-6 shadow-lg shadow-red-500/25 cursor-pointer text-center text-sm md:text-base flex items-center justify-center gap-2",
  },
};

export function FormatsPricing({ onCta }: { onCta?: (format?: string) => void }) {
  const { t } = useLanguage();

  const handleSelectFormat = (formatId: string) => {
    const budgetVal =
      formatId === "food-court"
        ? "$30 000 – $40 000 (Food Court)"
        : "$40 000 – $50 000 (Street Retail)";
    if (onCta) {
      onCta(budgetVal);
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

      {/* 2. Format Cards Grid (2 columns on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {t.formats.items.map((f) => {
          const style = formatStyles[f.id] ?? formatStyles["food-court"];
          return (
            <motion.div
              key={f.id}
              whileHover={{ y: -4 }}
              className={style.containerCls}
            >
              {/* Top Badge (Only if present and styled) */}
              {f.topBadge && style.topBadgeCls && (
                <span className={style.topBadgeCls}>{f.topBadge}</span>
              )}

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
  const { t, lang } = useLanguage();
  const dailyOrders = calcData.traffic;
  const avgCheck = calcData.check;

  // 1. Выручка в день
  const dailyRevenue = dailyOrders * avgCheck;

  // 2. Выручка в месяц (30 дней)
  const monthlyRevenue = dailyRevenue * 30;

  // 3. Операционная / Чистая прибыль (Рентабельность строго 10%)
  const profitMargin = 0.10;
  const monthlyProfit = monthlyRevenue * profitMargin;

  // 4. Расчет срока окупаемости (при инвестициях $45 000 / ~585 млн сум)
  // Средний курс: $1 ≈ 13 000 сум (инвестиции ~585 000 000 сум)
  const totalInvestmentInSum = 45000 * 13000;
  const paybackMonths = Math.max(
    8,
    Math.ceil(totalInvestmentInSum / (monthlyProfit || 1))
  );

  const checksSuffix = lang === "uz" ? "ta chek" : "чеков";

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
                  {dailyOrders} {checksSuffix}
                </span>
              </div>
              <Slider
                value={[dailyOrders]}
                min={150}
                max={300}
                step={5}
                onValueChange={(v) =>
                  setCalcData((p) => ({ ...p, traffic: v[0] ?? p.traffic }))
                }
                className="mt-4 [&_[data-slot=slider-range]]:bg-[#FF6E00]"
              />
              <div className="flex justify-between text-[11px] font-bold text-neutral-400 mt-2">
                <span>150 {checksSuffix}</span>
                <span>300 {checksSuffix}</span>
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
                min={60000}
                max={70000}
                step={1000}
                onValueChange={(v) =>
                  setCalcData((p) => ({ ...p, check: v[0] ?? p.check }))
                }
                className="mt-4 [&_[data-slot=slider-range]]:bg-[#FF6E00]"
              />
              <div className="flex justify-between text-[11px] font-bold text-neutral-400 mt-2">
                <span>60 000 {t.calc.sumSuffix}</span>
                <span>70 000 {t.calc.sumSuffix}</span>
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
            <div className="text-2xl sm:text-3xl font-black text-[#9FCE00] mt-6 tracking-tight">
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
              {t.calc.paybackPrefix ? `${t.calc.paybackPrefix} ` : "от "}{paybackMonths} {t.calc.paybackSuffix}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------- Lead Gen Form ------------------------------- */

export function LeadGenForm({
  selectedFormat,
  onSubmitSuccess,
}: {
  lang?: "ru" | "uz";
  isSubmitting?: boolean;
  selectedFormat?: string;
  onSubmitSuccess?: () => void;
  onSubmit?: (data: any) => void;
}) {
  const { t } = useLanguage();

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
            <LeadForm onSuccess={onSubmitSuccess} selectedFormat={selectedFormat} />
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

/* -------------------------- Block 10.5: Case Study -------------------------- */

export function FranchiseeCaseStudy({
  onCta,
}: {
  onCta?: (budget?: string) => void;
}) {
  const { t, lang } = useLanguage();
  const cs = t.caseStudy || {
    eyebrow: "РЕАЛЬНЫЙ ОПЫТ",
    title: "Реальный кейс франчайзи",
    subtitle: "Подтверждённые показатели действующей точки в Ташкенте.",
    roleBadge: "ФРАНЧАЙЗИ",
    partnerNames: "Миракмаль",
    formatBadge: "Street Retail, 105 м² (Ташкент)",
    investmentVal: "~450 млн сум",
    card1Val: "180",
    card1Label: "Чеков в день",
    card1Sub: "Средний чек ~65 000 сум",
    card2Val: "11.8 млн сум",
    card2Label: "Выручка в день",
    card2Sub: "~350+ млн сум / месяц",
    card3Val: "32 млн сум",
    card3Label: "Опер. прибыль / месяц",
    card3Sub: "Чистый доход партнёров",
    quote:
      "«Запуск точки с HOTY DOGY прошёл за рекордные 25 дней. Мы получили готовую систему, стандарты кухни и поток гостей с первого дня открытия. Цифры полностью совпали с финмоделью.»",
    ctaBtn: "Хочу такой же результат",
  };

  const avatarInitial = lang === "uz" ? "M" : "М";

  return (
    <Section id="case-study" className="max-w-5xl mx-auto px-4 py-16 sm:py-20">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="bg-orange-50 text-[#FF6E00] font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
          {cs.eyebrow}
        </span>
        <h2 className="font-display font-black text-3xl sm:text-4xl text-neutral-900 text-center leading-tight">
          {cs.title}
        </h2>
        <p className="text-neutral-500 text-sm font-medium text-center mt-1">
          {cs.subtitle}
        </p>
      </div>

      {/* Main Case Card */}
      <div className="bg-[#212620] rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#FF6E00]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Row (Partner Info & Meta) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="bg-[#FFD000] text-black w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl shadow-md shrink-0">
              {avatarInitial}
            </div>
            <div>
              <span className="text-neutral-400 text-xs font-bold uppercase tracking-wide block">
                {cs.roleBadge}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                {cs.partnerNames}
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 py-2.5 border border-white/10 text-sm font-medium text-neutral-200">
              {cs.formatBadge}
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 py-2.5 border border-white/10 text-sm font-medium">
              <span className="text-neutral-400 mr-1.5">
                {lang === "uz" ? "Investitsiyalar:" : "Инвестиции:"}
              </span>
              <span className="text-[#9FCE00] font-black text-lg sm:text-xl">
                {cs.investmentVal}
              </span>
            </div>
          </div>
        </div>

        {/* Key Financial Metric Cards (3 Columns Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all">
            <div className="flex items-center justify-between mb-3">
              <Receipt className="w-6 h-6 text-[#FFD000]" />
            </div>
            <div className="font-black text-3xl sm:text-4xl text-white font-display">
              {cs.card1Val}
            </div>
            <div className="text-neutral-400 text-xs font-medium mt-1">
              {cs.card1Label}
            </div>
            <div className="text-neutral-500 text-[11px] mt-0.5">
              {cs.card1Sub}
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all">
            <div className="flex items-center justify-between mb-3">
              <TrendingUp className="w-6 h-6 text-[#FF6E00]" />
            </div>
            <div className="font-black text-2xl sm:text-3xl text-white font-display">
              {cs.card2Val}
            </div>
            <div className="text-neutral-400 text-xs font-medium mt-1">
              {cs.card2Label}
            </div>
            <div className="text-neutral-500 text-[11px] mt-0.5">
              {cs.card2Sub}
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all">
            <div className="flex items-center justify-between mb-3">
              <Wallet className="w-6 h-6 text-[#9FCE00]" />
            </div>
            <div className="font-black text-2xl sm:text-3xl text-[#9FCE00] font-display">
              {cs.card3Val}
            </div>
            <div className="text-neutral-400 text-xs font-medium mt-1">
              {cs.card3Label}
            </div>
            <div className="text-neutral-500 text-[11px] mt-0.5">
              {cs.card3Sub}
            </div>
          </div>
        </div>

        {/* Direct Quote & CTA Bar */}
        <div className="pt-4 border-t border-white/10">
          <div className="bg-white/5 rounded-2xl p-5 border border-white/5 flex items-start gap-4">
            <Quote className="w-8 h-8 text-[#FF6E00] shrink-0 mt-1" />
            <p className="italic text-neutral-300 text-sm sm:text-base leading-relaxed">
              {cs.quote}
            </p>
          </div>

          <motion.button
            {...tap}
            onClick={() => onCta?.("$40 000 – $50 000 (Street Retail)")}
            className="bg-[#F60019] hover:bg-[#d50015] text-white font-bold px-6 py-3.5 rounded-2xl text-sm transition-all shadow-lg shadow-red-500/30 flex items-center justify-center gap-2 mt-6 sm:mt-8 w-full sm:w-auto mx-auto cursor-pointer"
          >
            {cs.ctaBtn}
            <Send className="w-4 h-4 ml-1" />
          </motion.button>
        </div>
      </div>
    </Section>
  );
}
