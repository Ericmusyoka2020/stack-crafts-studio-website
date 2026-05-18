import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { Stats } from "@/components/site/Stats";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/Floating";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stack Crafts Studio — Smart Digital Solutions" },
      {
        name: "description",
        content:
          "Stack Crafts Studio builds websites, web apps, payment systems, SEO and institution platforms. Premium software, crafted in Nairobi.",
      },
      { property: "og:title", content: "Stack Crafts Studio — Smart Digital Solutions" },
      { property: "og:description", content: "Websites, web apps, payments, SEO & institution systems." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Stats />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingActions />
      <Toaster />
    </main>
  );
}
