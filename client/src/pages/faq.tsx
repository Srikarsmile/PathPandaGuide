import { Layout } from "@/components/layout";
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Mail, MessageSquare } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: "basics" | "services" | "getting-started";
}

const faqItems: FAQItem[] = [
  {
    question: "What is Pathpanda?",
    answer: "Pathpanda is a platform that unites smart university shortlisting with expert coaching for UK, USA, and Canada applicants. We help international students navigate the complex application process for studying abroad with data-driven recommendations and personalized guidance.",
    category: "basics"
  },
  {
    question: "How does the matching algorithm work?",
    answer: "Our proprietary algorithm compares your academic profile, budget constraints, and career goals with historical admission data to identify universities and programs where you have the best chances of acceptance. It factors in your grades, test scores, extracurricular activities, and preferences to surface the most suitable options.",
    category: "basics"
  },
  {
    question: "Is Pathpanda only for undergraduate applications?",
    answer: "No, Pathpanda supports both undergraduate and postgraduate applications across the UK, USA, and Canada. Our expertise covers Bachelor's, Master's, and PhD programs across various disciplines.",
    category: "basics"
  },
  {
    question: "Do you help with scholarships?",
    answer: "Yes, scholarship guidance is included in all our paid packages. We help identify scholarship opportunities that match your profile, assist with application materials, and provide strategies to maximize your chances of securing financial support.",
    category: "services"
  },
  {
    question: "What does the application support service include?",
    answer: "Our application support includes personal statement/essay editing, CV optimization, interview preparation, recommendation letter guidance, and application form review. We also provide strategic advice on program selection and ensure all requirements are met before submission.",
    category: "services"
  },
  {
    question: "Do you provide visa assistance?",
    answer: "We're expanding our services to include comprehensive visa support starting in 2026. Currently, we offer basic guidance on visa requirements and documentation, but do not provide legal visa consultation.",
    category: "services"
  },
  {
    question: "How do I get started with Pathpanda?",
    answer: "Create a free profile on our platform and use our university matching tool to generate your initial shortlist. From there, you can book a free consultation to discuss your options with an expert advisor or explore our packages for more comprehensive support.",
    category: "getting-started"
  },
  {
    question: "What information do I need to provide for the university matching?",
    answer: "For the most accurate matches, you should provide your academic history (grades, test scores), budget range, preferred study destinations, subject interests, and career goals. The more information you provide, the more tailored your recommendations will be.",
    category: "getting-started"
  },
  {
    question: "How much do your services cost?",
    answer: "Our services start with a free university matching tool and consultation. Paid packages range from targeted support for specific application components to comprehensive end-to-end assistance. Package prices vary based on the level of support and destination countries. Contact us for a personalized quote.",
    category: "getting-started"
  }
];

export default function FAQ() {
  return (
    <Layout title="FAQ">
      <Helmet>
        <title>Frequently Asked Questions | Path Panda</title>
        <meta name="description" content="Find answers to common questions about Path Panda's university application support services for UK, USA and Canada." />
        <meta property="og:title" content="FAQ | Path Panda" />
        <meta property="og:description" content="Find answers to common questions about Path Panda's university application support services for UK, USA and Canada." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pathpanda.com/faq" />
      </Helmet>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-panda-purple mb-4">Answers to Your Admission Questions</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Clear, concise guidance for your study abroad journey. Can't find what you're looking for? <Link href="/contact"><span className="text-panda-pink hover:underline cursor-pointer">Contact us</span></Link>.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-panda-purple mb-6">Pathpanda Basics</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems
              .filter(item => item.category === "basics")
              .map((item, index) => (
                <AccordionItem key={index} value={`basics-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-gray-800 dark:text-gray-200">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-panda-purple mb-6">Services & Pricing</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems
              .filter(item => item.category === "services")
              .map((item, index) => (
                <AccordionItem key={index} value={`services-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-gray-800 dark:text-gray-200">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-panda-purple mb-6">Getting Started</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems
              .filter(item => item.category === "getting-started")
              .map((item, index) => (
                <AccordionItem key={index} value={`getting-started-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-gray-800 dark:text-gray-200">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </div>

        <div className="bg-panda-lav/10 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-semibold text-panda-purple mb-4">Still Have Questions?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Our team is ready to help with any specific inquiries about your study abroad journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-panda-purple hover:bg-panda-purple/90 text-white w-full sm:w-auto">
                <Mail className="mr-2 h-4 w-4" /> Email Us
              </Button>
            </Link>
            <Link href="/consultation">
              <Button variant="outline" className="border-panda-purple text-panda-purple hover:bg-panda-purple/10 w-full sm:w-auto">
                <MessageSquare className="mr-2 h-4 w-4" /> Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}