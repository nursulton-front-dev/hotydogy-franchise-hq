import { motion } from "motion/react";
import {
  ArrowUpRight,
  BadgePercent,
  Bike,
  Boxes,
  CheckCircle2,
  ChefHat,
  Download,
  ExternalLink,
  Flame,
  Headphones,
  Lightbulb,
  LineChart,
  MapPin,
  Megaphone,
  MonitorSmartphone,
  Percent,
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
  Wrench,
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
            Не нужно придумывать бизнес с нуля. Мы создали готовую концепцию fast food, протестировали продукт и процессы и сегодня развиваем сеть HOTY DOGY.
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
                        {item.desc}
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
                        {item.desc}
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
              Сооснователь HOTY DOGY
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
                Читать кейс HOTY DOGY на Spot.uz <ExternalLink className="h-4 w-4 text-white/70" />
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
        Реальные показатели IT-экосистемы и маркетинговых акций сети HOTY DOGY после запуска мобильного приложения.
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

              {/* Inner Screen */}
              <div className="bg-gradient-to-b from-[#ff5500] via-[#ff6e00] to-[#ff7700] rounded-[32px] overflow-hidden flex flex-col h-full relative pt-6 px-3.5 pb-3 text-white">
                {/* App Header */}
                <div className="flex items-center justify-between border-b border-white/20 pb-3">
                  <div>
                    <div className="font-display text-lg font-black tracking-tight text-white">
                      HOTY DOGY
                    </div>
                    <div className="text-[11px] font-medium text-white/80">
                      Доставка хот-догов
                    </div>
                  </div>
                  <div className="rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-sm">
                    500 Koin 🪙
                  </div>
                </div>

                {/* Promo Card */}
                <div className="mt-3 rounded-2xl bg-purple-900/40 border border-purple-400/30 p-3 backdrop-blur-sm">
                  <div className="text-[10px] font-extrabold uppercase text-purple-200">
                    🔥 Акция
                  </div>
                  <div className="font-display text-sm font-black text-white mt-0.5">
                    Kombo 4 tasi — 55 000 сум
                  </div>
                </div>

                {/* Product Items List */}
                <div className="mt-3 space-y-2.5 flex-1 overflow-hidden">
                  <div className="rounded-2xl bg-white/15 p-3 backdrop-blur-sm flex items-center justify-between border border-white/10">
                    <div>
                      <div className="font-display text-xs font-bold text-white">
                        Хот-дог Classic
                      </div>
                      <div className="text-[10px] text-white/70">
                        Сочная сосиска, соус
                      </div>
                      <div className="font-display text-xs font-black text-brand-yellow mt-1">
                        от 23 000 сум
                      </div>
                    </div>
                    <button className="rounded-xl bg-brand-yellow px-2.5 py-1.5 text-[10px] font-black text-brand-dark shadow-sm">
                      + В корзину
                    </button>
                  </div>

                  <div className="rounded-2xl bg-white/15 p-3 backdrop-blur-sm flex items-center justify-between border border-white/10">
                    <div>
                      <div className="font-display text-xs font-bold text-white">
                        Хот-дог Special
                      </div>
                      <div className="text-[10px] text-white/70">
                        Двойной сыр, лук
                      </div>
                      <div className="font-display text-xs font-black text-brand-yellow mt-1">
                        от 29 000 сум
                      </div>
                    </div>
                    <button className="rounded-xl bg-brand-yellow px-2.5 py-1.5 text-[10px] font-black text-brand-dark shadow-sm">
                      + В корзину
                    </button>
                  </div>

                  <div className="rounded-2xl bg-white/15 p-3 backdrop-blur-sm flex items-center justify-between border border-white/10">
                    <div>
                      <div className="font-display text-xs font-bold text-white">
                        Хот-дог Mega Combo
                      </div>
                      <div className="text-[10px] text-white/70">
                        Сет с картофелем
                      </div>
                      <div className="font-display text-xs font-black text-brand-yellow mt-1">
                        от 45 000 сум
                      </div>
                    </div>
                    <button className="rounded-xl bg-brand-yellow px-2.5 py-1.5 text-[10px] font-black text-brand-dark shadow-sm">
                      + В корзину
                    </button>
                  </div>
                </div>
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
  { i: ChefHat, t: "Готовая рецептура", d: "Меню, протестированное на 1,4 млн заказов.", c: "bg-brand-orange" },
  { i: MonitorSmartphone, t: "IT-экосистема", d: "POS, приложение и аналитика из коробки.", c: "bg-brand-yellow" },
  { i: Truck, t: "Поставки", d: "Централизованные закупки по цене сети.", c: "bg-brand-red" },
  { i: Megaphone, t: "Маркетинг", d: "Digital-запуск и контент под ваш город.", c: "bg-brand-lime" },
  { i: LineChart, t: "Юнит-экономика", d: "Прозрачная модель: считаем до открытия.", c: "bg-brand-orange" },
  { i: Headphones, t: "Поддержка 24/7", d: "Персональный менеджер на всём пути.", c: "bg-brand-dark" },
];

export function WhyUsGrid() {
  return (
    <Section>
      <Eyebrow>Почему мы</Eyebrow>
      <Title>Бизнес, который просто работает</Title>
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {why.map((f) => (
          <motion.div
            key={f.t}
            variants={staggerChild}
            whileHover={{ scale: 1.03 }}
            className="rounded-[2rem] bg-white p-7 shadow-xl shadow-brand-orange/10"
          >
            <div className={`grid h-14 w-14 place-items-center rounded-full ${f.c}`}>
              <f.i className="h-7 w-7 text-white" />
            </div>
            <h3 className="mt-5 font-display text-xl font-black">{f.t}</h3>
            <p className="mt-2 text-sm text-brand-dark/60">{f.d}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

/* ---------------------------------- 09 --------------------------------- */

const pack = [
  "Право работы под брендом ХОТИ ДОГИ",
  "Полный брендбук и дизайн-проект точки",
  "Технологические карты и рецептуры",
  "Обучение управляющего и поваров",
  "Подбор и оценка локации",
  "POS-система и настройка учёта",
  "Подключение к мобильному приложению",
  "Пакет маркетинга на запуск",
  "Договоры с поставщиками сети",
  "Сопровождение первые 90 дней",
];

export function FranchisePackage() {
  return (
    <Section>
      <Eyebrow>Что входит</Eyebrow>
      <Title>10 пунктов вашего пакета</Title>
      <motion.ul
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-10 grid gap-3 md:grid-cols-2"
      >
        {pack.map((p) => (
          <motion.li
            key={p}
            variants={staggerChild}
            className="flex items-center gap-3 rounded-full bg-white px-5 py-4 shadow-lg shadow-brand-orange/10"
          >
            <CheckCircle2 color="#9fce00" className="h-6 w-6 shrink-0" />
            <span className="text-sm font-semibold">{p}</span>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}

/* ---------------------------------- 12 --------------------------------- */

const branches = [
  { img: branch1, t: "Compass Mall", d: "Киоск · 12 м²" },
  { img: branch2, t: "Samarqand Darvoza", d: "Фудкорт · 28 м²" },
  { img: branch3, t: "Chilonzor Street", d: "Express · 8 м²" },
];

export function LocationsGallery() {
  return (
    <Section>
      <Eyebrow>Наши точки</Eyebrow>
      <Title>Как это выглядит вживую</Title>
      <div className="no-scrollbar mt-10 -mx-5 flex snap-x gap-5 overflow-x-auto px-5 pb-3">
        {branches.map((b) => (
          <motion.figure
            key={b.t}
            whileHover={{ scale: 1.02 }}
            className="min-w-[80%] snap-center overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-brand-orange/10 md:min-w-[420px]"
          >
            <img
              src={b.img}
              alt={`Филиал ХОТИ ДОГИ ${b.t}`}
              width={1024}
              height={768}
              loading="lazy"
              className="h-56 w-full object-cover"
            />
            <figcaption className="flex items-center justify-between p-5">
              <div>
                <div className="font-display text-lg font-black">{b.t}</div>
                <div className="text-xs font-semibold text-brand-dark/50">
                  {b.d}
                </div>
              </div>
              <Pill className="bg-brand-lime/20 text-brand-dark">
                <MapPin className="h-4 w-4" /> Ташкент
              </Pill>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------------- 13 --------------------------------- */

const steps = [
  { t: "Заявка", i: Sparkles },
  { t: "Знакомство", i: Users },
  { t: "Расчёт модели", i: LineChart },
  { t: "Договор", i: BadgePercent },
  { t: "Локация", i: MapPin },
  { t: "Ремонт и оборудование", i: Wrench },
  { t: "Обучение команды", i: ChefHat },
  { t: "Запуск", i: Rocket },
];

export function LaunchStepper() {
  return (
    <Section>
      <Eyebrow>Дорожная карта</Eyebrow>
      <Title>От заявки до запуска — 45 дней</Title>
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {steps.map((s, i) => (
          <motion.div
            key={s.t}
            variants={staggerChild}
            whileHover={{ scale: 1.04 }}
            className="rounded-[2rem] border-2 border-brand-dark/5 bg-white p-6 shadow-lg shadow-brand-orange/10"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-3xl font-black text-brand-orange/30">
                0{i + 1}
              </span>
              <s.i className="h-6 w-6 text-brand-orange" />
            </div>
            <div className="mt-4 font-display text-lg leading-tight font-black">
              {s.t}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

/* ---------------------------------- 14 --------------------------------- */

const support = [
  { i: Megaphone, t: "Маркетинг", d: "Ежемесячные кампании, SMM и акции сети.", c: "bg-brand-orange" },
  { i: MonitorSmartphone, t: "IT", d: "Обновления POS, приложения и аналитики.", c: "bg-brand-red" },
  { i: Boxes, t: "Снабжение", d: "Логистика продуктов и упаковки по графику.", c: "bg-brand-lime" },
  { i: Lightbulb, t: "Развитие", d: "Новые позиции меню каждый квартал.", c: "bg-brand-yellow" },
];

export function SupportGrid() {
  return (
    <Section>
      <Eyebrow>После открытия</Eyebrow>
      <Title>Мы остаёмся рядом</Title>
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {support.map((s) => (
          <motion.div
            key={s.t}
            variants={staggerChild}
            whileHover={{ scale: 1.04 }}
            className="rounded-[2rem] bg-white p-7 shadow-xl shadow-brand-orange/10"
          >
            <div className={`grid h-12 w-12 place-items-center rounded-full ${s.c}`}>
              <s.i className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-5 font-display text-xl font-black">{s.t}</h3>
            <p className="mt-2 text-sm text-brand-dark/60">{s.d}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-dark py-12 text-white/60">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5">
        <a href="#top" className="flex items-center">
          <img
            src={logo}
            alt="HOTY DOGY"
            className="h-13 w-auto object-contain md:h-14 transition-transform hover:scale-105"
          />
        </a>
        <p className="text-sm">© 2026 ХОТИ ДОГИ · Ташкент, Узбекистан</p>
        <a
          href="tel:+998900000000"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-yellow"
        >
          <Download className="h-4 w-4" /> +998 90 000 00 00
        </a>
      </div>
    </footer>
  );
}
