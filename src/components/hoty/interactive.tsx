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
  Trophy,
  X,
  Zap,
  ChevronDown,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Eyebrow, Pill, Section, Title, fmt, tap } from "./common";
import logo from "@/assets/logo.png";

/* ---------------------------------- 01 --------------------------------- */

export function HeaderNavigation({
  lang,
  setLang,
  onCta,
}: {
  lang: "ru" | "uz";
  setLang: (l: "ru" | "uz") => void;
  onCta: () => void;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-brand-dark/5 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3">
        <a href="#top" className="flex items-center">
          <img
            src={logo}
            alt="ХОТИ ДОГИ"
            className="h-11 w-auto object-contain md:h-13 drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)] transition-transform hover:scale-105"
          />
        </a>
        <nav className="ml-6 hidden gap-6 text-sm font-bold text-brand-dark/70 md:flex">
          <a href="#why" className="hover:text-brand-orange">
            Почему мы
          </a>
          <a href="#formats" className="hover:text-brand-orange">
            Форматы
          </a>
          <a href="#calc" className="hover:text-brand-orange">
            Калькулятор
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-2 rounded-full bg-brand-dark/5 p-1">
          {(["ru", "uz"] as const).map((l) => (
            <motion.button
              key={l}
              {...tap}
              onClick={() => setLang(l)}
              className={`rounded-full px-4 py-1 text-sm font-bold uppercase transition-colors ${
                lang === l
                  ? "bg-brand-orange text-white"
                  : "text-brand-dark/60"
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
          {lang === "ru" ? "Стать партнёром" : "Hamkor bo'lish"}
        </motion.button>
      </div>
    </header>
  );
}

/* ---------------------------------- 08 --------------------------------- */

const audienceTabsData = [
  {
    id: "first-business",
    label: "Первый бизнес",
    icon: GraduationCap,
    iconBg: "bg-[#FFD000] text-neutral-900",
    headline:
      "Ты никогда не открывал бизнес, но хочешь попробовать себя в предпринимательстве.",
    bullets: [
      "Обучение владельца и команды всем процессам с нуля",
      "Полная поддержка управляющего на этапе открытия",
      "Проверенные готовые технологические карты и рецептуры",
    ],
  },
  {
    id: "young-entrepreneur",
    label: "Молодой предприниматель",
    icon: Zap,
    iconBg: "bg-[#FF6E00] text-white",
    headline:
      "У тебя есть энергия, идеи и желание создать свой сильный проект.",
    bullets: [
      "Современный бренд и сильный визуальный стиль",
      "Готовая база лояльных клиентов и мобильное приложение",
      "Быстрый старт и возможность масштабирования сети",
    ],
  },
  {
    id: "interested",
    label: "Интересуешься бизнесом",
    icon: Search,
    iconBg: "bg-purple-600 text-white",
    headline:
      "Ты изучаешь разные направления, но хочешь начать с понятной модели.",
    bullets: [
      "Прозрачная юнит-экономика и расчет окупаемости",
      "Простой продукт со стабильным ежедневным спросом",
      "Готовые чек-листы и стандарты работы",
    ],
  },
  {
    id: "existing-business",
    label: "Уже есть бизнес",
    icon: TrendingUp,
    iconBg: "bg-[#F60019] text-white",
    headline:
      "Хочешь добавить новый высокодоходный проект в свой портфель.",
    bullets: [
      "Отработанная операционная модель и контроль качества",
      "Централизованные оптовые поставки ингредиентов",
      "IT-система аналитики и удаленный контроль показателей",
    ],
  },
  {
    id: "investor",
    label: "Инвестор",
    icon: Briefcase,
    iconBg: "bg-[#212620] text-white",
    headline:
      "Хочешь вложиться в готовую концепцию и работать по понятной модели.",
    bullets: [
      "Прогнозируемая доходность и короткий срок окупаемости",
      "Полный аудит и операционная поддержка сети",
      "Масштабирование на несколько точек в регионе",
    ],
  },
];

export function AudienceTabs() {
  const [activeTab, setActiveTab] = useState("first-business");
  const current =
    audienceTabsData.find((t) => t.id === activeTab) || audienceTabsData[0];

  return (
    <Section className="py-16 sm:py-20 max-w-7xl mx-auto px-4">
      {/* 1. Section Header */}
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-4 py-1 text-xs font-extrabold uppercase text-orange-600">
          ЦЕЛЕВАЯ АУДИТОРИЯ
        </span>
      </div>

      <h2 className="mt-3 text-center font-display text-3xl font-black tracking-tight text-[#212620] sm:text-4xl">
        <span className="text-[#FF6E00]">HOTY DOGY</span> — если ты давно хочешь начать своё дело
      </h2>

      <p className="mx-auto mb-8 mt-2 max-w-xl text-center text-base font-medium text-neutral-600">
        Выбери свой профиль и посмотри, как франшиза закрывает твои задачи.
      </p>

      {/* 2. Tab Controls */}
      <div className="bg-neutral-100 p-1.5 rounded-full flex flex-wrap sm:flex-nowrap gap-1 max-w-4xl mx-auto mb-8 justify-center overflow-x-auto no-scrollbar">
        {audienceTabsData.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-xs sm:text-sm whitespace-nowrap cursor-pointer transition-all duration-300 ${
                isActive
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

/* ---------------------------------- 10 --------------------------------- */

const storeFormats = [
  {
    id: "food-court",
    title: "Food Court",
    subtitleLabel: "Остров в ТРЦ",
    isRecommended: true,
    topBadge: "ХИТ СЕТИ • БЫСТРЫЙ СТАРТ",
    topBadgeCls:
      "bg-[#F60019] text-white font-black text-xs px-3 py-1 rounded-full absolute -top-3 left-1/2 -translate-x-1/2 shadow-xs whitespace-nowrap",
    containerCls:
      "border-2 border-[#F60019] relative shadow-lg bg-white rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-all",
    areaPill: "15 – 30 м²",
    areaPillCls:
      "bg-orange-50 text-[#FF6E00] font-bold px-3 py-1 rounded-full text-xs inline-block",
    investmentHeading: "$30 000 – $40 000",
    subPrice: "инвестиции под ключ (от ~390 млн сум)",
    features: [
      "Локация: Зона фуд-корта в популярных ТРЦ",
      "Срок запуска: от 3 недель",
      "Персонал: 2 сотрудника в смену",
      "Срок окупаемости: от 8–10 месяцев",
    ],
    ctaText: "Выбрать Food Court",
    ctaCls:
      "bg-[#212620] hover:bg-[#FF6E00] text-white font-bold py-3.5 rounded-xl transition-colors w-full mt-6 shadow-sm cursor-pointer",
  },
  {
    id: "street-retail",
    title: "Street Retail",
    subtitleLabel: "Отдельный вход / Стрит",
    isRecommended: false,
    topBadge: "МАКСИМАЛЬНЫЙ ТРАФИК",
    topBadgeCls:
      "bg-neutral-900 text-white font-bold text-xs px-3 py-1 rounded-full absolute -top-3 left-1/2 -translate-x-1/2 shadow-xs whitespace-nowrap",
    containerCls:
      "border border-neutral-200 hover:border-orange-300 relative shadow-sm hover:shadow-md bg-white rounded-3xl p-8 flex flex-col justify-between transition-all",
    areaPill: "от 55 м²",
    areaPillCls:
      "bg-neutral-100 text-neutral-800 font-bold px-3 py-1 rounded-full text-xs inline-block",
    investmentHeading: "$40 000 – $50 000",
    subPrice: "инвестиции под ключ (до ~650 млн сум)",
    features: [
      "Локация: Первая линия, высокий пешеходный трафик",
      "Срок запуска: 3 недели – 1 месяц",
      "Персонал: 3–4 сотрудника в смену",
      "Срок окупаемости: от 10–12 месяцев",
    ],
    ctaText: "Выбрать Street Retail",
    ctaCls:
      "bg-neutral-100 hover:bg-neutral-900 hover:text-white text-neutral-900 font-bold py-3.5 rounded-xl transition-colors w-full mt-6 cursor-pointer",
  },
];

export function FormatsPricing({ onCta }: { onCta?: (format?: string) => void }) {
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
          ФОРМАТЫ ТОЧЕК
        </span>
      </div>

      <h2 className="mt-3 text-center font-display text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">
        Форматы, которые приносят стабильную прибыль
      </h2>

      <p className="mx-auto mb-12 mt-2 max-w-xl text-center text-base font-medium text-neutral-600">
        Компактный, быстрый в запуске и прозрачный по инвестициям бизнес.
      </p>

      {/* 2. 2-Column Format Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {storeFormats.map((f) => (
          <motion.div
            key={f.id}
            whileHover={{ y: -4 }}
            className={f.containerCls}
          >
            {/* Top Badge */}
            <span className={f.topBadgeCls}>{f.topBadge}</span>

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
                <span className={f.areaPillCls}>{f.areaPill}</span>
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

              {/* Feature List with Lime checkmarks */}
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
              className={f.ctaCls}
            >
              {f.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------------- 11 --------------------------------- */

export function ROICalculator({
  calcData,
  setCalcData,
}: {
  calcData: { traffic: number; check: number };
  setCalcData: React.Dispatch<
    React.SetStateAction<{ traffic: number; check: number }>
  >;
}) {
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
          КАЛЬКУЛЯТОР
        </span>
      </div>

      <h2 className="mt-3 text-center font-display text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">
        Рассчитайте окупаемость
      </h2>

      <p className="mx-auto mb-8 mt-2 max-w-xl text-center text-base font-medium text-neutral-600">
        Двигайте ползунки и увидите финансовую модель в реальном времени.
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
                  Заказов в день
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
                  Средний чек
                </span>
                <span className="text-2xl font-black text-[#FF6E00]">
                  {fmt(avgCheck)} сум
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
                <span>35 000 сум</span>
                <span>100 000 сум</span>
              </div>
            </div>
          </div>

          {/* Footnote Note Box */}
          <div className="bg-amber-50/80 border border-amber-100 rounded-2xl p-4 text-xs text-neutral-600 mt-8 leading-relaxed">
            💡 Расчёт основан на операционной марже ~22% и инвестициях ~$35 000–$50 000. Food cost и базовые расходы учтены в модели.
          </div>
        </div>

        {/* RIGHT COLUMN: 4 Metric Cards Grid + CTA */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-6 border border-neutral-100 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Выручка в день
                </span>
                <div className="bg-amber-100 text-amber-700 p-2.5 rounded-xl">
                  <DollarSign className="w-5 h-5" />
                </div>
              </div>
              <div className="text-2xl font-black text-neutral-900 mt-4 tracking-tight">
                {fmt(dailyRevenue)} сум
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-6 border border-neutral-100 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Выручка в месяц
                </span>
                <div className="bg-lime-100 text-lime-800 p-2.5 rounded-xl">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>
              <div className="text-2xl font-black text-neutral-900 mt-4 tracking-tight">
                {fmt(monthlyRevenue)} сум
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-6 border border-neutral-100 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Операционная прибыль / мес
                </span>
                <div className="bg-purple-100 text-purple-700 p-2.5 rounded-xl">
                  <Calculator className="w-5 h-5" />
                </div>
              </div>
              <div className="text-2xl font-black text-[#FF6E00] mt-4 tracking-tight">
                {fmt(Math.round(monthlyProfit))} сум
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-3xl p-6 border border-neutral-100 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Срок окупаемости
                </span>
                <div className="bg-red-100 text-red-700 p-2.5 rounded-xl">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>
              <div className="text-2xl font-black text-neutral-900 mt-4 tracking-tight">
                от {paybackMonths} мес
              </div>
            </div>
          </div>

          {/* CTA Conversion Button */}
          <motion.button
            {...tap}
            onClick={scrollToLead}
            className="bg-[#F60019] hover:bg-[#d50015] text-white font-bold py-4 rounded-2xl shadow-lg shadow-red-500/20 transition-all w-full text-center mt-4 cursor-pointer flex items-center justify-center gap-2 text-base"
          >
            <FileText className="w-5 h-5" />
            Получить детальную финмодель (PDF)
          </motion.button>
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------- 15 & 16 ------------------------------- */

export function LeadGenForm({
  lang,
  isSubmitting,
  onSubmit,
}: {
  lang: "ru" | "uz";
  isSubmitting: boolean;
  onSubmit: (data: {
    name: string;
    phone: string;
    city: string;
    lang: "ru" | "uz";
  }) => void;
}) {
  const [form, setForm] = useState({ name: "", phone: "", city: "" });

  const fields = [
    { k: "name" as const, ru: "Ваше имя", uz: "Ismingiz" },
    { k: "phone" as const, ru: "Телефон", uz: "Telefon" },
    { k: "city" as const, ru: "Город", uz: "Shahar" },
  ];

  return (
    <Section id="lead">
      <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-brand-orange/15 md:p-14">
        <Eyebrow>Заявка</Eyebrow>
        <Title>
          Получите презентацию
          <span className="block text-brand-orange">франшизы за 1 минуту</span>
        </Title>
        <form
          className="mt-10 grid gap-4 md:grid-cols-3"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit({ ...form, lang });
          }}
        >
          {fields.map((f) => (
            <input
              key={f.k}
              required
              value={form[f.k]}
              onChange={(e) =>
                setForm((p) => ({ ...p, [f.k]: e.target.value }))
              }
              placeholder={lang === "ru" ? f.ru : f.uz}
              className="w-full rounded-full border-2 border-brand-dark/10 bg-brand-light px-6 py-4 text-base font-semibold outline-none focus:border-brand-orange"
            />
          ))}
          <input type="hidden" name="lang" value={lang} />
          <motion.button
            {...tap}
            type="submit"
            disabled={isSubmitting}
            className="pulse-cta md:col-span-3 inline-flex items-center justify-center gap-3 rounded-full bg-brand-red py-6 font-display text-2xl font-black text-white disabled:opacity-80"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-7 w-7 animate-spin" />
                Отправляем...
              </>
            ) : (
              <>Забрать презентацию</>
            )}
          </motion.button>
        </form>
        <p className="mt-4 text-center text-xs font-semibold text-brand-dark/40">
          Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
        </p>
      </div>
    </Section>
  );
}

export function SuccessModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
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
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-brand-lime">
              <PartyPopper className="h-10 w-10 text-white" />
            </div>
            <h3 className="mt-6 font-display text-3xl font-black">
              Презентация отправлена
            </h3>
            <p className="mt-2 text-sm font-semibold text-brand-dark/60">
              Менеджер свяжется с вами в течение 30 минут.
            </p>
            <motion.a
              {...tap}
              href="#lead"
              onClick={onClose}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-red py-4 font-display text-lg font-black text-white"
            >
              <Download className="h-5 w-5" /> Скачать PDF
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------------------------------- 13 --------------------------------- */

const faqData = [
  {
    q: "Нужен ли опыт в ресторанном бизнесе или фастфуде для старта?",
    a: "Нет, опыт не обязателен. Мы передаем готовую пошаговую систему, технологические карты и обучаем как владельца, так и весь линейный персонал с нуля до официального открытия точки.",
  },
  {
    q: "Сколько времени занимает открытие точки с нуля?",
    a: "В среднем процесс от подписания договора до первого чека занимает от 3 недель до 45 дней в зависимости от выбранного формата (Food Court или Street Retail) и состояния помещения.",
  },
  {
    q: "Какой размер инвестиций требуется и что в них входит?",
    a: "Общий объем инвестиций составляет от $30 000 до $50 000 (в зависимости от формата и площади). В эту сумму входят паушальный взнос, ремонтные работы, вывеска, полное торговое и кухонное оборудование, первоначальный запас сырья и маркетинговый запуск.",
  },
  {
    q: "Как устроены поставки продуктов и ингредиентов?",
    a: "У нас налажена централизованная цепочка поставок. Все фирменные булочки, сосиски, соусы и брендированная упаковка поставляются проверенными сетевыми поставщиками по единым оптовым ценам.",
  },
  {
    q: "Помогаете ли вы с подбором и оценкой локации?",
    a: "Да, наша команда лично анализирует пешеходный трафик, целевую аудиторию, конкурентное окружение и согласовывает условия аренды перед подписанием договора по помещению.",
  },
  {
    q: "Как работает мобильное приложение и IT-система для франчайзи?",
    a: "Ваша точка подключается к единому мобильному приложению HOTY DOGY (с готовой базой клиентов) и современной POS-системе. Вы получаете прозрачную сквозную аналитику продаж и расходов в реальном времени с телефона.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToLead = () => {
    document.getElementById("lead")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section className="py-16 sm:py-20 max-w-5xl mx-auto px-4">
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-4 py-1 text-xs font-bold uppercase text-orange-600">
          FAQ
        </span>
      </div>
      <h2 className="mt-3 text-center font-display text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
        Часто задаваемые вопросы
      </h2>
      <p className="mx-auto mb-10 mt-2 max-w-xl text-center text-base font-medium text-neutral-600">
        Всё, что важно знать о франшизе <span className="font-black text-[#FF6E00]">HOTY DOGY</span> до подписания договора.
      </p>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen ? "border-orange-200 shadow-md" : "border-neutral-100 shadow-sm"
              }`}
            >
              <button
                onClick={() => toggleOpen(i)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
              >
                <span className="font-display font-black text-base sm:text-lg text-neutral-900 pr-4 leading-snug">
                  {item.q}
                </span>
                <div
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    isOpen ? "bg-orange-100 text-[#FF6E00]" : "bg-neutral-100 text-neutral-500"
                  }`}
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
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
            Остались вопросы?
          </h4>
          <p className="text-xs sm:text-sm text-neutral-400 font-medium mt-1">
            Задайте их напрямую основателям сети.
          </p>
        </div>
        <motion.button
          {...tap}
          onClick={scrollToLead}
          className="bg-[#FF6E00] hover:bg-orange-600 text-white font-bold px-6 py-3.5 rounded-2xl transition-all shadow-md shrink-0 cursor-pointer text-sm whitespace-nowrap"
        >
          Задать вопрос в Telegram ↗
        </motion.button>
      </div>
    </Section>
  );
}
