import Header from "@/components/header";
import Footer from "@/components/footer";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

// Declare the Calendly type to avoid TypeScript errors
declare global {
  interface Window {
    Calendly?: any;
  }
}

export default function Consultation() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Book Consultation | Path Panda</title>
        <meta name="description" content="Book your free 30-minute counselling session with Path Panda. Get personalized guidance for your study abroad journey via Zoom or WhatsApp." />
        <meta property="og:title" content="Book Consultation | Path Panda" />
        <meta property="og:description" content="Book your free 30-minute counselling session with Path Panda. Get personalized guidance for your study abroad journey via Zoom or WhatsApp." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pathpanda.com/consultation" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <section className="max-w-3xl mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold text-panda-purple mb-4">
              Book Your Free 30-Minute Counselling Session
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-10">
              Chat via Zoom or WhatsApp—your choice.
            </p>

            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/pathpanda/30min"
              style={{ minWidth: 320, height: 650 }}
            ></div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}