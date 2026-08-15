import { motion } from "motion/react";
import {
  ArrowUpRight,
  BadgePercent,
  BarChart3,
  Bike,
  Boxes,
  CheckCircle2,
  ChefHat,
  Download,
  ExternalLink,
  FileCheck,
  Flame,
  Headphones,
  Lightbulb,
  LineChart,
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
  Star,
  Store,
  TrendingUp,
  Truck,
  Users,
  ChevronRight,
  Coins,
  Plus,
  Send,
  User,
  UtensilsCrossed,
  Wallet,
  Wrench,
  Zap,
} from "lucide-react";
import {
  Eyebrow,
  Pill,
  Section,
  Title,
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

/* ---------------------------------- 02 --------------------------------- */

const floatBadges = [
  { label: "Вкусный", cls: "bg-brand-yellow text-brand-dark", pos: "left-[4%] top-[18%]" },
  { label: "Острый", cls: "bg-brand-red text-white", pos: "right-[6%] top-[12%]" },
  { label: "23 000 сум", cls: "bg-brand-lime text-brand-dark", pos: "left-[8%] bottom-[16%]" },
  { label: "Сочный", cls: "bg-white text-brand-orange", pos: "right-[4%] bottom-[22%]" },
];

export function HeroSection({ onCta }: { onCta: () => void }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#ff5500] via-[#ff6e00] to-[#ff8500] min-h-[600px] h-auto md:h-[calc(100vh-80px)] max-h-[850px] flex items-center pt-24 pb-16 md:pt-20 md:pb-16">
      {/* Background ambient lighting effects */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-yellow/35 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-brand-red/30 blur-[130px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 md:grid-cols-2 w-full">
        {/* Left Column: Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
        >
          {/* Badge */}
          <Pill className="bg-brand-dark/80 text-brand-yellow px-4 py-1 text-xs md:text-sm font-bold shadow-md">
            <Flame className="h-4 w-4 fill-brand-yellow text-brand-yellow" /> Франшиза fast food в Узбекистане
          </Pill>

          {/* H1 Heading */}
          <h1 className="mt-4 font-display text-3xl md:text-5xl leading-tight font-black tracking-tight text-white">
            <div>ХОЧЕШЬ НАЧАТЬ СВОЙ БИЗНЕС?</div>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <span>Начни с</span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 shadow-xl shadow-black/10">
                <img
                  src={logo}
                  alt="HOTY DOGY"
                  className="h-11 md:h-16 w-auto inline-block object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
                />
              </span>
            </div>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-lg text-sm md:text-base font-medium text-white/90 leading-relaxed">
            Не нужно придумывать бизнес с нуля. Мы создали готовую концепцию fast food, протестировали продукт и процессы и сегодня развиваем сеть <span className="font-black text-brand-yellow">HOTY DOGY</span>.
          </p>

          {/* Stat Line */}
          <div className="mt-3 text-sm md:text-base font-bold text-yellow-300 flex items-center gap-2">
            <span>⚡ 8 действующих филиалов</span>
            <span>•</span>
            <span>1 млн+ хот-догов продано</span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-start">
            <motion.button
              {...tap}
              onClick={onCta}
              className="rounded-full bg-[#F60019] px-7 py-3.5 font-display text-sm md:text-base font-black text-white shadow-lg shadow-brand-red/30 transition-transform text-center"
            >
              Получить презентацию франшизы
            </motion.button>
            <motion.a
              {...tap}
              href="#calc"
              className="rounded-full bg-white px-7 py-3.5 font-display text-sm md:text-base font-black text-brand-dark shadow-md hover:bg-white/95 transition-transform text-center"
            >
              Расчёт прибыли
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column: Mascot Illustration */}
        <div className="relative flex justify-center items-center">
          <motion.img
            src={mascot}
            alt="Маскот HOTY DOGY"
            width={1024}
            height={1024}
            className="w-[75%] max-w-xs md:max-w-sm max-h-[380px] object-contain drop-shadow-2xl"
            animate={{ y: [0, -14, 0], rotate: [-1.5, 1.5, -1.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          {floatBadges.map((b, i) => (
            <motion.div
              key={b.label}
              className={`absolute ${b.pos}`}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2.8 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Pill className={`${b.cls} shadow-lg shadow-brand-dark/15 text-xs md:text-sm font-bold`}>
                {b.label}
              </Pill>
            </motion.div>
          ))}
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

/* ---------------------------------- 03 --------------------------------- */

const metrics = [
  { v: "8", l: "Действующих филиалов" },
  { v: "3 года", l: "На рынке Узбекистана" },
  { v: "1 000 000+", l: "Проданных хот-догов" },
  { v: "1 000 000+", l: "Довольных гостей" },
  { v: "310 млн сум", l: "Средняя месячная выручка точки" },
  { v: "12–24 мес.", l: "Средний срок окупаемости" },
];

export function MetricsRow() {
  return (
    <Section className="py-14 md:py-20">
      <div className="text-center">
        <h2 className="font-display text-4xl font-black tracking-tight text-brand-dark md:text-5xl">
          Цифры, которые говорят сами
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-brand-dark/60 md:text-lg">
          За 3 года мы построили сеть, которая ежедневно обслуживает тысячи
          гостей по всему Узбекистану.
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



/* ---------------------------------- 05 --------------------------------- */

const timeline = [
  {
    year: "2024",
    title: "Рождение идеи",
    desc: "Рождение идеи бренда HOTY DOGY.",
  },
  {
    year: "2024",
    title: "Первый филиал",
    desc: "Открытие первого флагманского филиала в Ташкенте.",
  },
  {
    year: "2025",
    title: "Быстрый рост",
    desc: "Быстрый рост сети (+4 филиала).",
  },
  {
    year: "2025",
    title: "IT-приложение и CRM",
    desc: "Запуск собственного IT-приложения и CRM (100 000+ активных пользователей).",
  },
  {
    year: "2026",
    title: "Запуск франчайзинга",
    desc: "Масштабирование сети по всему Узбекистану и международный старт.",
  },
];

export function BrandTimeline() {
  return (
    <Section className="py-14 md:py-24">
      <div className="text-center">
        <h2 className="font-display text-4xl font-black tracking-tight text-brand-dark md:text-5xl">
          Эволюция бренда
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base font-medium leading-relaxed text-brand-dark/60 md:text-lg">
          Путь от идеи до запуска франчайзинга за 3 года.
        </p>
      </div>

      <div className="relative mt-16 max-w-5xl mx-auto">
        {/* Timeline Central / Left Line */}
        <div className="absolute top-4 bottom-4 left-6 md:left-1/2 w-0.5 -translate-x-1/2 bg-brand-orange/80" />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8 md:space-y-12"
        >
          {timeline.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={`${item.year}-${item.title}`}
                variants={staggerChild}
                className="relative flex flex-col md:flex-row items-center"
              >
                {/* Node Circle on the Line */}
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
                        {item.desc.includes("HOTY DOGY") ? (
                          <>
                            Рождение идеи бренда{" "}
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
                        {item.desc.includes("HOTY DOGY") ? (
                          <>
                            Рождение идеи бренда{" "}
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

/* ---------------------------------- 06 --------------------------------- */

export function FounderQuote() {
  return (
    <Section className="py-10 md:py-16">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1d221c] p-8 md:p-12 shadow-xl border border-white/5">
        {/* Top-Right Ambient Warm Glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-orange/15 blur-3xl" />

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Left Column: Large Portrait Photo of Shokhrukh with Lime Quote Badge */}
          <div className="relative shrink-0">
            <img
              src={shokhrukh}
              alt="Шохрух Асролходжаев"
              className="h-56 w-56 md:h-64 md:w-64 rounded-[2rem] object-cover shadow-2xl border border-white/10"
            />
            <div className="absolute -bottom-3 -right-3 h-12 w-12 rounded-2xl bg-brand-lime grid place-items-center shadow-lg border-2 border-[#1d221c]">
              <Quote className="h-6 w-6 text-brand-dark fill-brand-dark" />
            </div>
          </div>

          {/* Right Column: Info & Quote */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-display text-3xl md:text-4xl font-black text-white tracking-tight">
              Шохрух Асролходжаев
            </h2>
            <div className="mt-1.5 font-display text-sm md:text-base font-bold text-brand-yellow">
              Сооснователь <span className="font-black text-brand-yellow">HOTY DOGY</span>
            </div>
            <p className="mt-1 text-xs md:text-sm font-medium text-white/50 leading-relaxed">
              Экс-директор по маркетингу Bellissimo Pizza — 4+ года топ-менеджмента в HoReCa
            </p>

            {/* Quote with Left Accent Bar */}
            <div className="mt-6 border-l-2 border-brand-orange pl-4 md:pl-5 py-1 text-left">
              <p className="text-base md:text-lg font-medium text-white/90 leading-relaxed">
                «Мы уже прошли путь от идеи до работающей сети. Теперь хотим передать этот опыт предпринимателям, которые хотят начать своё дело.»
              </p>
            </div>

            {/* Link Button */}
            <div className="mt-7 flex flex-wrap items-center justify-center md:justify-start">
              <motion.a
                {...tap}
                href="https://www.spot.uz"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 hover:border-white/40"
              >
                Читать кейс <span className="font-black text-brand-yellow">HOTY DOGY</span> на Spot.uz <ExternalLink className="h-4 w-4 text-white/70" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------------- 06.5 --------------------------------- */

export function MarketingTraction() {
  return (
    <Section className="py-16 sm:py-20 max-w-7xl mx-auto px-4">
      {/* Pill Badge */}
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-4 py-1 text-xs font-extrabold uppercase text-purple-700">
          <Smartphone className="h-3.5 w-3.5 text-purple-600" /> IT & МАРКЕТИНГ
        </span>
      </div>

      {/* Headline H2 */}
      <h2 className="mt-3 text-center font-display text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">
        Мы не просто рассказываем о маркетинге.{" "}
        <span className="block sm:inline">Мы показываем результат.</span>
      </h2>

      {/* Subtitle */}
      <p className="mx-auto mb-12 mt-2.5 max-w-2xl text-center text-base font-medium text-neutral-600">
        Реальные показатели IT-экосистемы и маркетинговых акций сети <span className="font-black text-[#FF6E00]">HOTY DOGY</span> после запуска мобильного приложения.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Phone Mockup */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative">
            {/* Floating Downloads Badge */}
            <div className="absolute -right-4 -top-4 z-30 rounded-2xl border border-neutral-100 bg-white p-3 shadow-xl">
              <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                Скачиваний
              </div>
              <div className="font-display text-xl font-black text-brand-orange">
                22 000
              </div>
            </div>

            {/* Phone Frame */}
            <div className="w-[280px] sm:w-[310px] h-[560px] rounded-[40px] bg-neutral-900 border-[8px] border-neutral-900 shadow-2xl relative overflow-hidden flex flex-col p-2.5">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-4 bg-neutral-900 rounded-b-xl z-20" />

              {/* Inner Screen - Actual Screenshot Image */}
              <div className="rounded-[32px] overflow-hidden flex flex-col h-full relative bg-neutral-900">
                <img
                  src={appScreenshot}
                  alt="Скриншот приложения HOTY DOGY"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Stat Cards */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Card 1 */}
            <div className="rounded-[1.75rem] border border-neutral-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex rounded-2xl bg-purple-100 p-3 text-purple-600 mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="font-display text-3xl sm:text-4xl font-black text-[#9FCE00]">
                +82%
              </div>
              <div className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-neutral-600">
                Рост среднего дневного объема заказов после промо
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-[1.75rem] border border-neutral-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex rounded-2xl bg-purple-100 p-3 text-purple-600 mb-4">
                <Download className="h-6 w-6" />
              </div>
              <div className="font-display text-3xl sm:text-4xl font-black text-neutral-900">
                22 000
              </div>
              <div className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-neutral-600">
                Скачиваний приложения за первые 24 часа
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-[1.75rem] border border-neutral-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex rounded-2xl bg-purple-100 p-3 text-purple-600 mb-4">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <div className="font-display text-3xl sm:text-4xl font-black text-neutral-900">
                1 400
              </div>
              <div className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-neutral-600">
                Заказов через приложение за первые сутки
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-[1.75rem] border border-neutral-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex rounded-2xl bg-purple-100 p-3 text-purple-600 mb-4">
                <Percent className="h-6 w-6" />
              </div>
              <div className="font-display text-3xl sm:text-4xl font-black text-neutral-900">
                32%
              </div>
              <div className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-neutral-600">
                Дополнительных позиций в чеке (картофель, напитки, соусы)
              </div>
            </div>
          </div>

          {/* Below Cards Link Button */}
          <div className="mt-7">
            <a
              href="https://www.spot.uz/ru/2025/04/30/hoty-dogy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-bold text-neutral-800 hover:bg-neutral-50 transition-colors shadow-sm"
            >
              Читать полный кейс на Spot.uz <ExternalLink className="h-4 w-4 text-neutral-500" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------------- 07 --------------------------------- */

const why = [
  {
    t: "Понятный продукт",
    d: "Знаком каждому, высокий повторный спрос.",
    i: Flame,
    c: "bg-[#FF6E00] text-white",
    badge: null,
    badgeCls: "",
  },
  {
    t: "Быстрый сервис",
    d: "Приготовление и выдача от 3 минут.",
    i: Zap,
    c: "bg-[#FFD000] text-[#1D221C]",
    badge: "от 3 мин",
    badgeCls: "bg-amber-100 text-amber-800",
  },
  {
    t: "Компактный формат",
    d: "Оптимизированная площадь от 55 м².",
    i: MapPin,
    c: "bg-[#F60019] text-white",
    badge: "от 55 м²",
    badgeCls: "bg-red-100 text-red-700",
  },
  {
    t: "Доступный вход",
    d: "Инвестиции от $30 000 до $50 000.",
    i: Wallet,
    c: "bg-[#9FCE00] text-[#1D221C]",
    badge: "от $30 000",
    badgeCls: "bg-lime-100 text-lime-800",
  },
  {
    t: "Масштабируемость",
    d: "Легкое открытие 2-й и 3-й точек.",
    i: TrendingUp,
    c: "bg-[#FF6E00] text-white",
    badge: null,
    badgeCls: "",
  },
  {
    t: "Готовая IT-инфраструктура",
    d: "Касса, CRM, складской учет, приложение.",
    i: Smartphone,
    c: "bg-[#9333EA] text-white",
    badge: "App + CRM",
    badgeCls: "bg-purple-100 text-purple-700",
  },
];

export function WhyUsGrid() {
  return (
    <Section className="py-16 sm:py-20 max-w-7xl mx-auto px-4">
      {/* Pill Badge */}
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-4 py-1 text-xs font-extrabold uppercase text-orange-600">
          ПОЧЕМУ МЫ
        </span>
      </div>

      {/* Headline H2 */}
      <h2 className="mt-3 text-center font-display text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">
        Почему <span className="font-black text-[#FF6E00]">HOTY DOGY</span>?
      </h2>

      {/* Subtitle */}
      <p className="mx-auto mb-12 mt-2 max-w-2xl text-center text-base font-medium text-neutral-600">
        Понятный продукт. Понятный формат. Готовая система.
      </p>

      {/* 6 Cards Grid */}
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {why.map((f) => (
          <motion.div
            key={f.t}
            variants={staggerChild}
            className="group relative rounded-3xl border border-neutral-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Top Row: Icon Badge + Pill Badge (if present) */}
              <div className="flex items-start justify-between">
                <div
                  className={`grid h-12 w-12 place-items-center rounded-2xl ${f.c} shadow-md shadow-black/5 transition-transform duration-300 group-hover:scale-105`}
                >
                  <f.i className="h-6 w-6" />
                </div>

                {f.badge && (
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-extrabold tracking-tight ${f.badgeCls}`}
                  >
                    {f.badge}
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="mt-6 font-display text-xl font-black text-neutral-900 tracking-tight">
                {f.t}
              </h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-neutral-600">
                {f.d}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

/* ---------------------------------- 09 --------------------------------- */

const franchisePackageItems = [
  {
    num: "01",
    title: "Брендбук и визуальный стиль",
    desc: "Гайдлайн, айдентика, макеты полиграфии и правила оформления точки.",
  },
  {
    num: "02",
    title: "Технологические карты и рецептуры",
    desc: "Полное меню, стандарты граммовок, сезонные новинки и комбо-наборы.",
  },
  {
    num: "03",
    title: "Помощь в подборе локации",
    desc: "Анализ пешеходного трафика, аудит помещения и согласование аренды.",
  },
  {
    num: "04",
    title: "Индивидуальный дизайн-проект",
    desc: "Планировочное решение и 3D-визуализация под формат вашей локации.",
  },
  {
    num: "05",
    title: "Спецификация оборудования",
    desc: "Подбор, расстановка и централизованная закупка по партнерским ценам.",
  },
  {
    num: "06",
    title: "Обучение владельца и персонала",
    desc: "Стандарты сервиса, приготовление, санитария и обучение работе на кассе.",
  },
  {
    num: "07",
    title: "Налаженная цепочка поставок",
    desc: "Прямые поставки фирменных полуфабрикатов, сосисок, булочек и упаковки.",
  },
  {
    num: "08",
    title: "Маркетинговый запуск",
    desc: "Готовая digital-кампания, таргет, промо-материалы и привлечение первых гостей.",
  },
  {
    num: "09",
    title: "IT-экосистема и CRM",
    desc: "Подключение к POS-кассе, аналитике и мобильному приложению HOTY DOGY.",
    hasBrand: true,
  },
  {
    num: "10",
    title: "Пожизненный операционный контроль",
    desc: "Персональный куратор, регулярный аудит качества и непрерывная поддержка.",
    isVip: true,
  },
];

export function FranchisePackage() {
  return (
    <Section className="py-16 sm:py-20 max-w-5xl mx-auto px-4">
      {/* Pill Badge */}
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-4 py-1 text-xs font-bold uppercase text-orange-600">
          ПОДДЕРЖКА ПАРТНЕРОВ
        </span>
      </div>

      {/* Headline H2 */}
      <h2 className="mt-3 text-center font-display text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">
        Что вы получаете при покупке франшизы{" "}
        <span className="font-black text-[#FF6E00]">HOTY DOGY</span>
      </h2>

      {/* Subtitle */}
      <p className="mx-auto mb-12 mt-2 max-w-xl text-center text-base font-medium text-neutral-600">
        10 структурированных направлений — от брендбука до пожизненного операционного контроля.
      </p>

      {/* 2-Column Grid */}
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {franchisePackageItems.map((item) => (
          <motion.div
            key={item.num}
            variants={staggerChild}
            className={
              item.isVip
                ? "bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/5 border-2 border-orange-400 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex items-start gap-4 relative overflow-hidden"
                : "bg-white rounded-2xl p-5 border border-neutral-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all flex items-start gap-4"
            }
          >
            {/* Numeric Badge */}
            <div
              className={
                item.isVip
                  ? "w-10 h-10 rounded-xl bg-orange-500 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-sm"
                  : "w-10 h-10 rounded-xl bg-orange-50 text-[#FF6E00] font-black text-sm flex items-center justify-center shrink-0 border border-orange-100/60"
              }
            >
              {item.num}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display font-black text-base text-neutral-900 tracking-tight">
                  {item.title}
                </h3>
                {item.isVip && (
                  <span className="bg-[#9FCE00] text-neutral-900 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase shrink-0">
                    Главное преимущество
                  </span>
                )}
              </div>
              <p className="mt-1 text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed">
                {item.hasBrand ? (
                  <>
                    Подключение к POS-кассе, аналитике и мобильному приложению{" "}
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

/* ---------------------------------- 12 --------------------------------- */

const officialBranches = [
  {
    name: "Hoty Dogy Тараса Шевченко",
    address: "ул. Саид Барака, 14",
    format: "Street Retail • 55 м²",
    img: branch1,
  },
  {
    name: "Hoty Dogy Атлас Чимган",
    address: "ул. Тимура Малика, 3А (ТРЦ Atlas)",
    format: "Food Court • 28 м²",
    img: branch2,
  },
  {
    name: "Hoty Dogy NEXT",
    address: "ул. Бабура, 6 (ТРК NEXT)",
    format: "Food Court • 25 м²",
    img: branch3,
  },
  {
    name: "Hoty Dogy Чиланзар",
    address: "ул. Лутфий, 56",
    format: "Street Retail • 58 м²",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hoty Dogy IT Park",
    address: "Мирзо-Улугбекский р-н, ул. Тепамасжид, 4-й проезд",
    format: "Express • 30 м²",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hoty Dogy Ц-1",
    address: "Мирзо-Улугбекский р-н, ул. Буюк Ипак Йули, 31",
    format: "Street Retail • 60 м²",
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
  },
];

export function LocationsGallery() {
  const scrollToLead = () => {
    document.getElementById("lead")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section id="locations" className="py-16 sm:py-20 max-w-6xl mx-auto px-4">
      {/* 1. Header & Section Settings */}
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-4 py-1 text-xs font-bold uppercase text-orange-600">
          НАШИ ТОЧКИ
        </span>
      </div>

      <h2 className="mt-3 text-center font-display text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">
        Действующие филиалы <span className="font-black text-[#FF6E00]">HOTY DOGY</span>
      </h2>

      <p className="mx-auto mb-10 mt-2 max-w-2xl text-center text-base font-medium text-neutral-600">
        Реальные точки сети в топовых локациях Ташкента. Оцените концепцию и поток гостей вживую.
      </p>

      {/* 2. 6-Card Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {officialBranches.map((b) => (
          <motion.div
            key={b.name}
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
          >
            {/* Image aspect ratio aspect-[4/3] rounded-t-3xl overflow-hidden relative */}
            <div className="aspect-[4/3] relative overflow-hidden rounded-t-3xl bg-neutral-100">
              <img
                src={b.img}
                alt={`Филиал ${b.name}`}
                loading="lazy"
                className="group-hover:scale-105 transition-transform duration-500 object-cover w-full h-full"
              />
              {/* Floating Format Pill */}
              <span className="bg-black/65 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full absolute top-3 left-3 shadow-sm">
                {b.format}
              </span>
              {/* Floating Green Status Badge */}
              <span className="bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full absolute top-3 right-3 shadow-sm flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                ● Работает
              </span>
            </div>

            {/* Card Body */}
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-display font-black text-lg text-neutral-900 tracking-tight">
                  {b.name}
                </h3>
                <div className="flex items-start gap-1.5 text-xs text-neutral-500 font-medium mt-2 leading-relaxed">
                  <MapPin className="w-3.5 h-3.5 text-[#FF6E00] shrink-0 mt-0.5" />
                  <span>{b.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 4. Bottom CTA Card */}
      <div className="mt-12 bg-neutral-900 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-xl">
        <div>
          <h4 className="font-display font-black text-lg sm:text-xl text-white">
            Хотите открыть филиал в своем районе или другом городе Узбекистана?
          </h4>
          <p className="text-xs sm:text-sm text-neutral-400 font-medium mt-1">
            Проверьте доступность и забронируйте эксклюзивную локацию.
          </p>
        </div>
        <motion.button
          {...tap}
          onClick={scrollToLead}
          className="bg-[#FF6E00] hover:bg-orange-600 text-white font-bold px-6 py-3.5 rounded-2xl transition-all shadow-md shrink-0 cursor-pointer text-sm whitespace-nowrap flex items-center gap-2"
        >
          Проверить доступность локации ↗
        </motion.button>
      </div>
    </Section>
  );
}

/* ---------------------------------- 13 --------------------------------- */

const roadmapSteps = [
  { num: "01", icon: Sparkles, title: "Заявка", desc: "Оставляете контакты на сайте" },
  { num: "02", icon: Users, title: "Знакомство", desc: "Онлайн-встреча с фаундерами" },
  { num: "03", icon: BarChart3, title: "Расчёт модели", desc: "Финмодель под ваш бюджет" },
  { num: "04", icon: FileCheck, title: "Договор", desc: "Юридическое оформление" },
  { num: "05", icon: MapPin, title: "Локация", desc: "Аудит трафика и аренда" },
  { num: "06", icon: Wrench, title: "Ремонт и оборудование", desc: "Дизайн-проект и брендинг" },
  { num: "07", icon: ChefHat, title: "Обучение команды", desc: "Стандарты сервиса и меню" },
  { num: "08", icon: Rocket, title: "Торжественный запуск", desc: "Digital-промо и первые продажи", isAccent: true },
];

export function LaunchStepper() {
  return (
    <Section id="roadmap" className="py-16 sm:py-20 max-w-7xl mx-auto px-4">
      {/* 1. Section Header */}
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-lime-100 px-4 py-1 text-xs font-bold uppercase text-lime-800">
          ДОРОЖНАЯ КАРТА
        </span>
      </div>

      <h2 className="mt-3 text-center font-display text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">
        От заявки до запуска — за 45 дней
      </h2>

      <p className="mx-auto mb-12 mt-2 max-w-xl text-center text-base font-medium text-neutral-600">
        Чёткий пошаговый roadmap от первого звонка до торжественного открытия вашей точки{" "}
        <span className="font-black text-[#FF6E00]">HOTY DOGY</span>.
      </p>

      {/* 2. 8-Step Roadmap Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
        {roadmapSteps.map((step, index) => {
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
              {/* Connector line for desktop */}
              {index !== 3 && index !== 7 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 border-t-2 border-dashed border-orange-200 z-10 pointer-events-none" />
              )}

              {/* Card Header: Number Badge + Orange Icon */}
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-xl bg-neutral-100 text-neutral-900 font-black text-xs flex items-center justify-center">
                  {step.num}
                </span>
                <div className="w-10 h-10 rounded-2xl bg-orange-50 text-[#FF6E00] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              {/* Card Body: Title & Description */}
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

      {/* 3. Post-Launch Support Conclusion Card */}
      <div className="max-w-6xl mx-auto mt-8 bg-neutral-900 text-white rounded-3xl p-6 sm:p-8 border border-neutral-800 shadow-xl">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Header */}
          <div className="md:w-1/3 shrink-0">
            <span className="bg-orange-500/20 text-orange-400 font-bold text-xs px-3 py-1 rounded-full uppercase inline-block">
              ПОСЛЕ ОТКРЫТИЯ
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-4 leading-tight tracking-tight">
              Мы остаёмся рядом на каждом этапе
            </h3>
            <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
              Ваш бизнес не останется без внимания — управляющая компания обеспечивает бесперебойную работу сети.
            </p>
          </div>
          
          {/* 4 Pillars Grid */}
          <div className="md:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Pillar 1 */}
            <div className="bg-neutral-800/50 rounded-2xl p-5 border border-neutral-700/50 flex items-start gap-4 transition-all hover:bg-neutral-800">
              <div className="w-10 h-10 rounded-xl bg-[#FF6E00] text-white flex items-center justify-center shrink-0">
                <Megaphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-white">Маркетинг</h4>
                <p className="text-neutral-400 text-xs mt-1 leading-relaxed">
                  Федеральные промо-кампании, SMM и привлечение трафика.
                </p>
              </div>
            </div>
            {/* Pillar 2 */}
            <div className="bg-neutral-800/50 rounded-2xl p-5 border border-neutral-700/50 flex items-start gap-4 transition-all hover:bg-neutral-800">
              <div className="w-10 h-10 rounded-xl bg-[#F60019] text-white flex items-center justify-center shrink-0">
                <MonitorSmartphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-white">IT и Приложение</h4>
                <p className="text-neutral-400 text-xs mt-1 leading-relaxed">
                  Обновления POS-системы, мобильного приложения и аналитики.
                </p>
              </div>
            </div>
            {/* Pillar 3 */}
            <div className="bg-neutral-800/50 rounded-2xl p-5 border border-neutral-700/50 flex items-start gap-4 transition-all hover:bg-neutral-800">
              <div className="w-10 h-10 rounded-xl bg-[#9FCE00] text-neutral-900 flex items-center justify-center shrink-0">
                <Boxes className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-white">Бесперебойное снабжение</h4>
                <p className="text-neutral-400 text-xs mt-1 leading-relaxed">
                  Поставки фирменных полуфабрикатов и упаковки точно в срок.
                </p>
              </div>
            </div>
            {/* Pillar 4 */}
            <div className="bg-neutral-800/50 rounded-2xl p-5 border border-neutral-700/50 flex items-start gap-4 transition-all hover:bg-neutral-800">
              <div className="w-10 h-10 rounded-xl bg-[#FFD000] text-neutral-900 flex items-center justify-center shrink-0">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-white">Развитие меню</h4>
                <p className="text-neutral-400 text-xs mt-1 leading-relaxed">
                  Регулярный ввод сезонных новинок и комбо для роста среднего чека.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}



export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#212620] text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#top" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); scrollTo("top"); }}>
              <img src={logo} alt="HOTY DOGY" className="h-10 w-auto object-contain transition-transform hover:scale-105" />
            </a>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm mt-4">
              Сеть сочных хот-догов и готовый прибыльный fast-food бизнес в Узбекистане.
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
              Навигация
            </h4>
            <nav className="flex flex-col gap-3">
              <a href="#why" onClick={(e) => { e.preventDefault(); scrollTo("why"); }} className="text-neutral-400 hover:text-white transition-colors text-sm w-fit">
                О бренде и основателе
              </a>
              <a href="#why" onClick={(e) => { e.preventDefault(); scrollTo("why"); }} className="text-neutral-400 hover:text-white transition-colors text-sm w-fit">
                Преимущества франшизы
              </a>
              <a href="#formats" onClick={(e) => { e.preventDefault(); scrollTo("formats"); }} className="text-neutral-400 hover:text-white transition-colors text-sm w-fit">
                Форматы и стоимость
              </a>
              <a href="#calc" onClick={(e) => { e.preventDefault(); scrollTo("calc"); }} className="text-neutral-400 hover:text-white transition-colors text-sm w-fit">
                Калькулятор окупаемости
              </a>
              <a href="#roadmap" onClick={(e) => { e.preventDefault(); scrollTo("roadmap"); }} className="text-neutral-400 hover:text-white transition-colors text-sm w-fit">
                Пошаговый план запуска
              </a>
              <a href="#locations" onClick={(e) => { e.preventDefault(); scrollTo("locations"); }} className="text-neutral-400 hover:text-white transition-colors text-sm w-fit">
                Действующие точки сети
              </a>
              <a href="#lead" onClick={(e) => { e.preventDefault(); scrollTo("lead"); }} className="text-neutral-400 hover:text-white transition-colors text-sm w-fit">
                Часто задаваемые вопросы (FAQ)
              </a>
            </nav>
          </div>

          {/* Column 3: Franchise & Terms */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Франшиза
            </h4>
            <div className="flex flex-col gap-3 text-sm text-neutral-400">
              <span className="block">Инвестиции от $30 000</span>
              <span className="block">Окупаемость от 8 мес.</span>
              <a href="#lead" onClick={(e) => { e.preventDefault(); scrollTo("lead"); }} className="hover:text-white transition-colors w-fit">
                Скачать презентацию (PDF)
              </a>
              <a href="#" className="hover:text-white transition-colors w-fit mt-2">
                Политика конфиденциальности
              </a>
            </div>
          </div>

          {/* Column 4: Contacts */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Отдел франчайзинга
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
                <span className="block mb-1">Ташкент, Узбекистан</span>
                <span className="block">Пн–Сб: с 09:00 до 20:00</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-neutral-800/80 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © 2026 HOTY DOGY. Все права защищены.
          </div>
          <div className="font-medium text-neutral-500">
            Франчайзинговая сеть fast-food в Узбекистане
          </div>
        </div>
      </div>
    </footer>
  );
}
