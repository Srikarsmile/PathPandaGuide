import Header from "@/components/header";
import Footer from "@/components/footer";
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | Path Panda</title>
        <meta name="description" content="From your first shortlist to touchdown in the UK, PathPanda has you covered with university matching, application support, and visa assistance." />
        <meta property="og:title" content="Our Services | Path Panda" />
        <meta property="og:description" content="From your first shortlist to touchdown in the UK, PathPanda has you covered with university matching, application support, and visa assistance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pathpanda.com/services" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <section className="bg-[#FC7A7A0D] py-20 text-center">
            <h1 className="text-4xl font-bold text-panda-purple mb-4">What We Do</h1>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto px-4">
              From your first shortlist to touchdown in the UK, PathPanda has you covered.
            </p>
          </section>

          <section className="max-w-3xl mx-auto px-4 py-16 space-y-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border border-panda-purple/20 rounded-lg mb-4">
                <AccordionTrigger className="font-semibold text-panda-purple px-4">
                  1. University & Course Matching
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p>Personalised shortlists—no bias, no hidden agenda.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border border-panda-purple/20 rounded-lg mb-4">
                <AccordionTrigger className="font-semibold text-panda-purple px-4">
                  2. Application + SOP Review
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p>Tracked-change feedback within 48 h—your voice, polished.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border border-panda-purple/20 rounded-lg mb-4">
                <AccordionTrigger className="font-semibold text-panda-purple px-4">
                  3. Visa & Pre-departure Support
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p>Tier-4 funds, accommodation, packing checklist—sorted.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="bg-panda-pink text-white text-center py-6 px-4">
            <p className="text-lg font-semibold">
              All counselling is <u>100% free</u>—universities fund us, not you.
            </p>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}