import { useState } from "react";
import { Loader2, Send, ChevronDown } from "lucide-react";
import { handleLeadSubmission } from "@/services/leadService";
import { useLanguage } from "@/locales/LanguageContext";

export interface LeadFormProps {
  onSuccess?: () => void;
  isModal?: boolean;
  selectedFormat?: string;
  className?: string;
}

const CITY_OPTIONS = [
  "Ташкент",
  "Самарканд",
  "Бухара",
  "Фергана",
  "Наманган",
  "Андижан",
  "Другой город",
];

const BUDGET_OPTIONS = [
  "$30 000 – $40 000 (Food Court)",
  "$40 000 – $50 000 (Street Retail)",
  "Свыше $50 000 (Multi-unit / Несколько точек)",
];

const formatUzPhone = (val: string): string => {
  let digits = val.replace(/\D/g, "");
  if (digits.startsWith("998")) {
    digits = digits.slice(3);
  }
  digits = digits.slice(0, 9);
  if (!digits) return "";
  let res = "+998";
  if (digits.length > 0) res += ` (${digits.slice(0, 2)}`;
  if (digits.length >= 2) res += `) ${digits.slice(2, 5)}`;
  if (digits.length >= 5) res += `-${digits.slice(5, 7)}`;
  if (digits.length >= 7) res += `-${digits.slice(7, 9)}`;
  return res;
};

export function LeadForm({
  onSuccess,
  isModal = false,
  selectedFormat,
  className = "",
}: LeadFormProps) {
  const { lang, t } = useLanguage();
  const currentLang = lang || "ru";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    budget: "",
    honeypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [spamError, setSpamError] = useState<string>("");
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    const formatted = formatUzPhone(rawVal);
    setForm((p) => ({ ...p, phone: formatted || rawVal }));
  };

  const resolveFormat = (): string => {
    if (selectedFormat) {
      if (selectedFormat.toLowerCase().includes("food")) return "Food Court";
      if (selectedFormat.toLowerCase().includes("street")) return "Street Retail";
      return selectedFormat;
    }
    if (form.budget) {
      if (form.budget.toLowerCase().includes("multi-unit") || form.budget.includes("Свыше")) {
        return "Multi-unit";
      }
      return "Street Retail";
    }
    return "Street Retail";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSpamError("");

    // Anti-spam check 1: Honeypot field must be empty
    if (form.honeypot.trim() !== "") {
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
      setSpamError(
        t.lead?.spamWarning || "Пожалуйста, подождите перед повторной отправкой."
      );
      return;
    }

    setLastSubmitTime(now);
    setIsSubmitting(true);

    try {
      const activeLanguage = (currentLang || "ru").toUpperCase();
      const payload = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        city: form.city,
        budget: form.budget,
        format: resolveFormat(),
        language: activeLanguage,
        lang: (currentLang === "uz" ? "uz" : "ru") as "ru" | "uz",
      };

      await handleLeadSubmission(payload);

      // Reset form values on success
      setForm({ name: "", phone: "", city: "", budget: "", honeypot: "" });

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      console.error("Error in lead submission:", err);
      setSpamError(
        currentLang === "uz"
          ? "Xatolik yuz berdi. Qaytadan urinib ko'ring."
          : "Произошла ошибка при отправке. Попробуйте еще раз."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={`space-y-4 ${className}`} onSubmit={handleSubmit}>
      {/* Anti-spam Honeypot Field */}
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
          {t.lead?.labelName || "Имя"}
        </label>
        <input
          required
          type="text"
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          placeholder="Введите ваше имя"
          className="w-full px-4 py-3.5 rounded-2xl border border-neutral-200 focus:border-[#FF6E00] focus:ring-2 focus:ring-orange-100 outline-none text-sm transition-all bg-white text-neutral-900 placeholder:text-neutral-400"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wide mb-1.5">
          {t.lead?.labelPhone || "Номер телефона / Telegram"}
        </label>
        <input
          required
          type="tel"
          value={form.phone}
          onChange={handlePhoneChange}
          placeholder="+998 (__) ___-__-__"
          className="w-full px-4 py-3.5 rounded-2xl border border-neutral-200 focus:border-[#FF6E00] focus:ring-2 focus:ring-orange-100 outline-none text-sm transition-all bg-white text-neutral-900 placeholder:text-neutral-400"
        />
      </div>

      {/* City */}
      <div>
        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wide mb-1.5">
          {t.lead?.labelCity || "Город / Регион"}
        </label>
        <div className="relative">
          <select
            required
            value={form.city}
            onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))}
            className="w-full px-4 py-3.5 rounded-2xl border border-neutral-200 focus:border-[#FF6E00] focus:ring-2 focus:ring-orange-100 outline-none text-sm transition-all bg-white appearance-none pr-10 text-neutral-900"
          >
            <option value="" disabled>
              {t.lead?.selectCity || "Выберите город"}
            </option>
            {CITY_OPTIONS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
        </div>
      </div>

      {/* Budget */}
      <div>
        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wide mb-1.5">
          {t.lead?.labelBudget || "Планируемый бюджет"}
        </label>
        <div className="relative">
          <select
            required
            value={form.budget}
            onChange={(e) => setForm((p) => ({ ...p, budget: e.target.value }))}
            className="w-full px-4 py-3.5 rounded-2xl border border-neutral-200 focus:border-[#FF6E00] focus:ring-2 focus:ring-orange-100 outline-none text-sm transition-all bg-white appearance-none pr-10 text-neutral-900"
          >
            <option value="" disabled>
              {t.lead?.selectBudget || "Выберите бюджет"}
            </option>
            {BUDGET_OPTIONS.map((b) => (
              <option key={b} value={b}>
                {b}
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
      <div className={isModal ? "pt-1" : "pt-2"}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#F60019] hover:bg-[#d50015] text-white font-bold py-4 rounded-2xl w-full shadow-lg shadow-red-500/25 transition-all flex items-center justify-center gap-2 text-base disabled:opacity-80 disabled:cursor-not-allowed cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              {t.lead?.submitting || "Отправляемся..."}
            </>
          ) : (
            <>
              {t.lead?.submitBtn || "Отправить заявку и получить презентацию"}
              <Send className="w-5 h-5 ml-1" />
            </>
          )}
        </button>
      </div>

      {/* Privacy Notice */}
      <p className="text-[11px] text-center text-neutral-400 mt-2 leading-tight">
        {t.lead?.privacy ||
          "Нажимая кнопку, вы соглашаетесь с обработкой персональных данных"}
      </p>
    </form>
  );
}
