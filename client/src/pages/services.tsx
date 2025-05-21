
import { Layout } from "@/components/layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Services() {
  return (
    <Layout title="Our Services">
      {/* Hero */}
      <section className="bg-[#FC7A7A0D] py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl font-bold text-primary mb-4">
            What We Do
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            From the first university shortlist to the moment you land in the UK,
            PathPanda is your single point of honest, lightning-fast guidance.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <Accordion type="single" collapsible className="space-y-6">
          <AccordionItem value="university-matching" className="border border-primary/20 rounded-lg">
            <AccordionTrigger className="px-4 font-semibold text-primary">
              1  University & Course Matching
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <p>
                We analyse your grades, budget and career goals, then recommend UK programmes that
                maximise ROI—no bias, no hidden agenda. You'll get a personalized shortlist with entry
                criteria, tuition, and scholarship flags.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="application-review" className="border border-primary/20 rounded-lg">
            <AccordionTrigger className="px-4 font-semibold text-primary">
              2  Application + SOP Review
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <p>
                Submit draft essays and documents; we give tracked-change feedback within 48 h.
                You keep your authentic voice—our job is clarity, structure and impact.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="visa-support" className="border border-primary/20 rounded-lg">
            <AccordionTrigger className="px-4 font-semibold text-primary">
              3  Visa & Pre-departure Support
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <p>
                Tier-4 financial proof, accommodation search, packing list, flight hacks—everything
                distilled into an action checklist so you board stress-free.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Call-out */}
      <section className="bg-accent text-white text-center py-6 px-4">
        <p className="text-lg font-semibold">
          All counselling sessions are <span className="underline">100 % FREE</span>—universities
          fund us, not you.
        </p>
      </section>
    </Layout>
  );
}
