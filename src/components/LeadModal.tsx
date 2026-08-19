import { useEffect } from "react";
import { X } from "lucide-react";
import { LeadForm } from "./LeadForm";

export interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessSubmit?: () => void;
  selectedFormat?: string;
}

export function LeadModal({
  isOpen,
  onClose,
  onSuccessSubmit,
  selectedFormat,
}: LeadModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSuccess = () => {
    onClose();
    if (onSuccessSubmit) {
      onSuccessSubmit();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-100 my-8 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Floating 'X' Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-500 hover:text-neutral-900 flex items-center justify-center transition-colors absolute top-5 right-5 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div>
          <span className="bg-red-50 text-[#F60019] text-xs font-bold px-3 py-1 rounded-full uppercase inline-block mb-2">
            ЗАЯВКА
          </span>
          <h3 className="font-black text-2xl text-neutral-900 leading-snug font-display">
            Стать партнёром HOTY DOGY
          </h3>
          <p className="text-neutral-500 text-sm mt-1 mb-6">
            Оставьте контактные данные — мы свяжемся с вами в течение 15 минут и рассчитаем окупаемость.
          </p>
        </div>

        {/* Modal Body */}
        <LeadForm
          onSuccess={handleSuccess}
          isModal
          selectedFormat={selectedFormat}
        />
      </div>
    </div>
  );
}
