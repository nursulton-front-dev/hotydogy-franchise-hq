import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  CheckCircle2,
  Download,
  GraduationCap,
  Loader2,
  PartyPopper,
  TrendingUp,
  Trophy,
  X,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Eyebrow, Pill, Section, Title, fmt, tap } from "./common";

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
        <a
          href="#top"
          className="font-display text-2xl font-black tracking-tight text-brand-yellow drop-shadow-[0_1px_0_rgba(33,38,32,0.35)]"
        >
          HOTY DOGY
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

const audience = [
  {
    id: "new",
    label: "Новичкам",
    icon: GraduationCap,
    title: "Первый бизнес без опыта",
    points: [
      "Полное обучение с нуля за 2 недели",
      "Управляющий сети помогает первый месяц",
      "Минимальный вход — формат Express",
    ],
  },
  {
    id: "inv",
    label: "Инвесторам",
    icon: TrendingUp,
    title: "Пассивный доход на потоке",
    points: [
      "Управление точкой под ключ нашей командой",
      "Прозрачная отчётность в приложении",
      "Возврат инвестиций от 6 месяцев",
    ],
  },
  {
    id: "pro",
    label: "Опытным",
    icon: Trophy,
    title: "Масштабирование сети",
    points: [
      "Мастер-франшиза на регион",
      "Приоритет по локациям в ТРЦ",
      "Спецусловия от 3 точек",
    ],
  },
];

export function AudienceTabs() {
  return (
    <Section>
      <Eyebrow>Кому подходит</Eyebrow>
      <Title>Выберите свой сценарий</Title>
      <Tabs defaultValue="new" className="mt-8">
        <TabsList className="h-auto flex-wrap justify-start gap-2 rounded-full bg-brand-dark/5 p-1.5">
          {audience.map((a) => (
            <TabsTrigger
              key={a.id}
              value={a.id}
              className="rounded-full px-5 py-2 text-sm font-bold data-[state=active]:bg-brand-orange data-[state=active]:text-white"
            >
              {a.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {audience.map((a) => (
          <TabsContent key={a.id} value={a.id} className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.35 }}
              className="rounded-[2rem] bg-white p-8 shadow-xl shadow-brand-orange/10"
            >
              <div className="grid h-14 w-14 place-items-center rounded-full bg-brand-yellow">
                <a.icon className="h-7 w-7 text-brand-dark" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-black">
                {a.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {a.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm font-semibold">
                    <CheckCircle2 color="#9fce00" className="h-5 w-5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
}

/* ---------------------------------- 10 --------------------------------- */

const formats = [
  {
    t: "Kiosk",
    price: "180 млн сум",
    area: "10–14 м²",
    accent: "border-brand-orange",
    pillCls: "bg-brand-orange text-white",
    feats: ["Отдельно стоящий модуль", "3–4 сотрудника", "Окупаемость 8 мес."],
  },
  {
    t: "Food Court",
    price: "320 млн сум",
    area: "25–30 м²",
    accent: "border-brand-red",
    pillCls: "bg-brand-red text-white",
    feats: ["Точка в ТРЦ", "Полное меню + напитки", "Окупаемость 10 мес."],
    best: true,
  },
  {
    t: "Express",
    price: "95 млн сум",
    area: "6–8 м²",
    accent: "border-brand-lime",
    pillCls: "bg-brand-lime text-brand-dark",
    feats: ["Уличный формат", "2 сотрудника", "Окупаемость 6 мес."],
  },
];

export function FormatsPricing({ onCta }: { onCta: () => void }) {
  return (
    <Section id="formats">
      <Eyebrow>Форматы</Eyebrow>
      <Title>Три способа зайти в сеть</Title>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {formats.map((f) => (
          <motion.div
            key={f.t}
            whileHover={{ scale: 1.03, y: -4 }}
            className={`relative rounded-[2rem] border-4 ${f.accent} bg-white p-8 shadow-xl shadow-brand-orange/10`}
          >
            {f.best && (
              <Pill className="absolute -top-4 left-8 bg-brand-red text-white shadow-lg">
                Хит сети
              </Pill>
            )}
            <h3 className="font-display text-3xl font-black">{f.t}</h3>
            <Pill className={`mt-3 ${f.pillCls}`}>{f.area}</Pill>
            <div className="mt-6 font-display text-4xl font-black text-brand-dark">
              {f.price}
            </div>
            <div className="text-xs font-bold text-brand-dark/50">
              инвестиции под ключ
            </div>
            <ul className="mt-6 space-y-2">
              {f.feats.map((x) => (
                <li key={x} className="flex items-center gap-2 text-sm font-semibold">
                  <CheckCircle2 color="#9fce00" className="h-5 w-5 shrink-0" />
                  {x}
                </li>
              ))}
            </ul>
            <motion.button
              {...tap}
              onClick={onCta}
              className="mt-7 w-full rounded-full bg-brand-dark py-3 font-display font-black text-white"
            >
              Выбрать формат
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
  const revenue = calcData.traffic * calcData.check * 30;
  const profit = revenue * 0.27;

  return (
    <Section id="calc">
      <div className="rounded-[2rem] bg-brand-dark p-8 shadow-xl shadow-brand-dark/25 md:p-12">
        <Pill className="bg-brand-lime text-brand-dark">Калькулятор</Pill>
        <h2 className="mt-5 font-display text-4xl font-black text-white md:text-5xl">
          Сколько заработает ваша точка
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="space-y-9">
            <div>
              <div className="flex items-baseline justify-between text-white">
                <span className="text-sm font-bold text-white/60">
                  Гостей в день
                </span>
                <span className="font-display text-2xl font-black text-brand-yellow">
                  {fmt(calcData.traffic)}
                </span>
              </div>
              <Slider
                value={[calcData.traffic]}
                min={50}
                max={800}
                step={10}
                onValueChange={(v) =>
                  setCalcData((p) => ({ ...p, traffic: v[0] ?? p.traffic }))
                }
                className="mt-4 [&_[data-slot=slider-range]]:bg-brand-lime"
              />
            </div>
            <div>
              <div className="flex items-baseline justify-between text-white">
                <span className="text-sm font-bold text-white/60">
                  Средний чек, сум
                </span>
                <span className="font-display text-2xl font-black text-brand-yellow">
                  {fmt(calcData.check)}
                </span>
              </div>
              <Slider
                value={[calcData.check]}
                min={20000}
                max={120000}
                step={1000}
                onValueChange={(v) =>
                  setCalcData((p) => ({ ...p, check: v[0] ?? p.check }))
                }
                className="mt-4"
              />
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <div className="text-sm font-bold text-white/60">
              Выручка в месяц
            </div>
            <div className="font-display text-2xl font-black text-white">
              {fmt(revenue)} сум
            </div>
            <div className="mt-6 text-sm font-bold text-white/60">
              Чистая прибыль в месяц
            </div>
            <motion.div
              key={profit}
              initial={{ scale: 0.94, opacity: 0.6 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="font-display text-5xl leading-none font-black text-brand-lime md:text-6xl"
            >
              {fmt(profit)}
            </motion.div>
            <div className="mt-1 text-xs font-bold text-white/40">
              сум · при марже 27%
            </div>
          </div>
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
