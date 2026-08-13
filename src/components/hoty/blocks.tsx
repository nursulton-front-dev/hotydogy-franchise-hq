import { motion } from "motion/react";
import {
  ArrowUpRight,
  BadgePercent,
  Bike,
  Boxes,
  CheckCircle2,
  ChefHat,
  Download,
  Flame,
  Headphones,
  Lightbulb,
  LineChart,
  MapPin,
  Megaphone,
  MonitorSmartphone,
  Quote,
  Rocket,
  Smartphone,
  Sparkles,
  Star,
  Store,
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
    <section className="relative overflow-hidden bg-brand-orange pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-brand-yellow/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-brand-red/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.35 }}
        >
          <Pill className="bg-brand-dark/85 text-brand-yellow">
            <Flame className="h-4 w-4" /> Франшиза №1 в стрит-фуде Узбекистана
          </Pill>
          <h1 className="mt-5 font-display text-5xl leading-[0.9] font-black tracking-tight text-white md:text-8xl">
            ХОТИ ДОГИ —
            <span className="block text-brand-yellow">твой бизнес</span>
            на каждый день
          </h1>
          <p className="mt-6 max-w-md text-lg font-medium text-white/90">
            Открой точку сети хот-догов с готовой технологией, приложением и
            потоком гостей. Окупаемость от 6 месяцев.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <motion.button
              {...tap}
              onClick={onCta}
              className="rounded-full bg-brand-red px-8 py-4 font-display text-lg font-black text-white shadow-xl shadow-brand-dark/20"
            >
              Получить презентацию
            </motion.button>
            <motion.a
              {...tap}
              href="#calc"
              className="rounded-full bg-white px-8 py-4 font-display text-lg font-black text-brand-orange shadow-xl shadow-brand-dark/10"
            >
              Расчёт прибыли
            </motion.a>
          </div>
        </motion.div>

        <div className="relative flex justify-center">
          <motion.img
            src={mascot}
            alt="Маскот ХОТИ ДОГИ — оранжевый хот-дог в панаме"
            width={1024}
            height={1024}
            className="w-[78%] max-w-sm drop-shadow-2xl md:w-full"
            animate={{ y: [0, -18, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          {floatBadges.map((b, i) => (
            <motion.div
              key={b.label}
              className={`absolute ${b.pos}`}
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 3 + i * 0.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Pill className={`${b.cls} shadow-lg shadow-brand-dark/15`}>
                {b.label}
              </Pill>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- 03 --------------------------------- */

const metrics = [
  { v: "6", l: "филиалов в Ташкенте", icon: Store, c: "bg-brand-orange" },
  { v: "4+", l: "года на рынке", icon: Star, c: "bg-brand-yellow" },
  { v: "1400+", l: "заказов в день", icon: Bike, c: "bg-brand-red" },
  { v: "97%", l: "довольных гостей", icon: Users, c: "bg-brand-lime" },
];

export function MetricsRow() {
  return (
    <Section className="py-10 md:py-14">
      <div className="no-scrollbar -mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-2">
        {metrics.map((m) => (
          <motion.div
            key={m.l}
            {...tap}
            className="min-w-[240px] flex-1 snap-start rounded-[2rem] bg-white p-6 shadow-xl shadow-brand-orange/10"
          >
            <div className={`mb-4 grid h-12 w-12 place-items-center rounded-full ${m.c}`}>
              <m.icon className="h-6 w-6 text-white" />
            </div>
            <div className="font-display text-4xl font-black text-brand-dark">
              {m.v}
            </div>
            <div className="mt-1 text-sm font-semibold text-brand-dark/60">
              {m.l}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------------- 04 --------------------------------- */

export function AppTraction() {
  return (
    <Section>
      <div className="grid items-center gap-8 rounded-[2rem] bg-brand-dark p-8 shadow-xl shadow-brand-dark/20 md:grid-cols-2 md:p-12">
        <div>
          <Pill className="bg-brand-lime text-brand-dark">
            <Smartphone className="h-4 w-4" /> Своё приложение
          </Pill>
          <h2 className="mt-5 font-display text-4xl font-black text-white md:text-5xl">
            Гости возвращаются <span className="text-brand-lime">сами</span>
          </h2>
          <p className="mt-4 text-white/70">
            Мобильное приложение с бонусами, доставкой и push-акциями работает
            на выручку каждой точки сети.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { v: "+82%", l: "рост повторных заказов" },
            { v: "22 000", l: "скачиваний" },
            { v: "4.8★", l: "рейтинг в сторах" },
            { v: "38%", l: "заказов через приложение" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-3xl border border-white/10 bg-white/5 p-5"
            >
              <div className="font-display text-3xl font-black text-brand-lime">
                {s.v}
              </div>
              <div className="mt-1 text-xs font-semibold text-white/60">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------------- 05 --------------------------------- */

const timeline = [
  { y: "2021", t: "Идея", d: "Команда собрала рецептуру уличных хот-догов нового поколения.", c: "bg-brand-yellow" },
  { y: "2022", t: "Первая точка", d: "Открытие киоска в центре Ташкента — очередь с первого дня.", c: "bg-brand-orange" },
  { y: "2024", t: "Приложение", d: "Запуск мобильного приложения и программы лояльности.", c: "bg-brand-red" },
  { y: "2026", t: "Сеть", d: "6 филиалов и старт франчайзинговой программы по стране.", c: "bg-brand-lime" },
];

export function BrandTimeline() {
  return (
    <Section>
      <Eyebrow>История бренда</Eyebrow>
      <Title>От киоска до сети</Title>
      <div className="relative mt-10 pl-8">
        <div className="absolute top-2 bottom-2 left-[11px] w-[2px] bg-brand-dark/10" />
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-6"
        >
          {timeline.map((s) => (
            <motion.div key={s.y} variants={staggerChild} className="relative">
              <span
                className={`absolute top-6 -left-8 h-6 w-6 rounded-full ${s.c} ring-4 ring-brand-light`}
              />
              <div className="rounded-[2rem] bg-white p-6 shadow-xl shadow-brand-orange/10">
                <Pill className="bg-brand-dark text-brand-yellow">{s.y}</Pill>
                <h3 className="mt-3 font-display text-2xl font-black">{s.t}</h3>
                <p className="mt-1 text-sm text-brand-dark/60">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

/* ---------------------------------- 06 --------------------------------- */

export function FounderQuote() {
  return (
    <Section>
      <div className="rounded-[2rem] bg-brand-dark p-8 shadow-xl shadow-brand-dark/20 md:p-14">
        <Quote className="h-10 w-10 text-brand-orange" />
        <p className="mt-6 font-display text-2xl leading-snug font-black text-white md:text-4xl">
          «Мы не продаём хот-доги. Мы продаём привычку заходить к нам каждый
          день — и эту привычку получает каждый партнёр сети».
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-brand-orange font-display text-xl font-black text-white">
            Ш
          </div>
          <div>
            <div className="font-display text-lg font-black text-white">
              Шохрух
            </div>
            <div className="text-sm text-white/60">Основатель ХОТИ ДОГИ</div>
          </div>
          <motion.a
            {...tap}
            href="https://www.spot.uz"
            target="_blank"
            rel="noreferrer"
            className="ml-auto inline-flex items-center gap-1 rounded-full bg-brand-yellow px-5 py-2 text-sm font-bold text-brand-dark"
          >
            Интервью на Spot.uz <ArrowUpRight className="h-4 w-4" />
          </motion.a>
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
        <div className="font-display text-2xl font-black text-brand-yellow">
          HOTY DOGY
        </div>
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
