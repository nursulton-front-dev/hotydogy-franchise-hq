import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  AppTraction,
  BrandTimeline,
  Footer,
  FounderQuote,
  FranchisePackage,
  HeroSection,
  LaunchStepper,
  LocationsGallery,
  MetricsRow,
  SupportGrid,
  WhyUsGrid,
} from "@/components/hoty/blocks";
import {
  AudienceTabs,
  FormatsPricing,
  HeaderNavigation,
  LeadGenForm,
  ROICalculator,
  SuccessModal,
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
          "6 филиалов, 1400+ заказов в день, своё приложение. Считайте прибыль и получите презентацию франшизы.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [lang, setLang] = useState<"ru" | "uz">("ru");
  const [calcData, setCalcData] = useState({ traffic: 200, check: 45000 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const scrollToForm = () =>
    document.getElementById("lead")?.scrollIntoView({ behavior: "smooth" });

  const handleSubmit = async (data: {
    name: string;
    phone: string;
    city: string;
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
      <HeaderNavigation lang={lang} setLang={setLang} onCta={scrollToForm} />
      <main>
        <HeroSection onCta={scrollToForm} />
        <MetricsRow />
        <AppTraction />
        <BrandTimeline />
        <FounderQuote />
        <div id="why">
          <WhyUsGrid />
        </div>
        <AudienceTabs />
        <FranchisePackage />
        <FormatsPricing onCta={scrollToForm} />
        <ROICalculator calcData={calcData} setCalcData={setCalcData} />
        <LocationsGallery />
        <LaunchStepper />
        <SupportGrid />
        <LeadGenForm
          lang={lang}
          isSubmitting={isSubmitting}
          onSubmit={handleSubmit}
        />
      </main>
      <Footer />
      <SuccessModal open={showSuccess} onClose={() => setShowSuccess(false)} />
    </div>
  );
}
