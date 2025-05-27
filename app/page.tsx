import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { OccasionTabs } from "@/components/occasion-tabs";
import { FeaturedCaterers } from "@/components/featured-caterers";
import { EventStepper } from "@/components/event-stepper";
import { Testimonials } from "@/components/testimonials";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <OccasionTabs />
      <FeaturedCaterers />
      <EventStepper />
      <Testimonials />
      <FaqSection />
      <Footer />
    </main>
  );
}