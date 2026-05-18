import { SectionHeader } from "./Section";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  { q: "How long does a typical project take?", a: "Most marketing sites ship in 2–3 weeks. Custom web apps and institution systems range from 6–12 weeks depending on scope." },
  { q: "Do you offer payment integration?", a: "Yes — M-Pesa, Stripe, Paystack and Flutterwave. We handle setup, security and reconciliation." },
  { q: "Will my site be SEO ready?", a: "Every site we ship comes with semantic HTML, fast Core Web Vitals, sitemaps, structured data and meta tags out of the box." },
  { q: "Can you maintain my existing platform?", a: "Absolutely. We take over existing codebases, audit them, fix issues and run them long-term with monthly support plans." },
  { q: "Do you sign NDAs?", a: "Yes, we sign NDAs and MSAs before scoping any sensitive project." },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="FAQ"
          title={<>Questions, <span className="text-gradient">answered</span></>}
        />
        <div className="max-w-3xl mx-auto glass-strong rounded-3xl p-4 md:p-6">
          <Accordion type="single" collapsible className="w-full">
            {items.map((it, i) => (
              <AccordionItem key={i} value={`i-${i}`} className="border-white/10">
                <AccordionTrigger className="text-left text-base md:text-lg hover:no-underline px-2">
                  {it.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-2">
                  {it.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
