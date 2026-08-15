import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider, useLanguage } from "@/locales/LanguageContext";
import {
  BrandTimeline,
  Footer,
  FounderQuote,
  FranchisePackage,
  HeroSection,
  LaunchStepper,
  LocationsGallery,
  MarketingTraction,
  MetricsRow,
  WhyUsGrid,
} from "@/components/hoty/blocks";
import {
  AudienceTabs,
  FormatsPricing,
  HeaderNavigation,
  LeadGenForm,
  ROICalculator,
  SuccessModal,
  FaqAccordion,
} from "@/components/hoty/interactive";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Франшиза ХОТИ ДОГИ — хот-доги нового поколения" },
      {
        name: "description",
        content:
          "Откройте точку сети хот-догов ХОТИ ДОГИ: готовая технология, приложение, поставки и поддержка. Окупаемость от 6 месяцев.",
      },
      { property: "og:title", content: "Франшиза ХОТИ ДОГИ" },
      {
        property: "og:description",
        content:
          "8 филиалов, 1 000 000+ проданных хот-догов, своё приложение. Считайте прибыль и получите презентацию франшизы.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function IndexContent() {
  const { t } = useLanguage();
  const [calcData, setCalcData] = useState({ traffic: 200, check: 45000 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    document.title = t.meta.title;
  }, [t.meta.title]);

  const scrollToForm = () =>
    document.getElementById("lead")?.scrollIntoView({ behavior: "smooth" });

  const handleSubmit = async (data: {
    name: string;
    phone: string;
    city: string;
    budget: string;
    lang: "ru" | "uz";
  }) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.info("lead", data);
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  return (
    <div id="top" className="min-h-screen bg-brand-light">
      <HeaderNavigation onCta={scrollToForm} />
      <main>
        <HeroSection onCta={scrollToForm} />
        <MetricsRow />
        <BrandTimeline />
        <FounderQuote />
        <MarketingTraction />
        <div id="why">
          <WhyUsGrid />
        </div>
        <AudienceTabs />
        <FranchisePackage />
        <FormatsPricing onCta={scrollToForm} />
        <ROICalculator calcData={calcData} setCalcData={setCalcData} />
        <LaunchStepper />
        <LocationsGallery />
        <FaqAccordion />
        <LeadGenForm
          isSubmitting={isSubmitting}
          onSubmit={handleSubmit}
        />
      </main>
      <Footer />
      <SuccessModal open={showSuccess} onClose={() => setShowSuccess(false)} />
    </div>
  );
}

function Index() {
  return (
    <LanguageProvider>
      <IndexContent />
    </LanguageProvider>
  );
}
