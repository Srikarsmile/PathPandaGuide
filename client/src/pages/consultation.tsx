import Header from "@/components/header";
import Footer from "@/components/footer";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

export default function Consultation() {
  useEffect(() => {
    // Load Cal.com script
    const script = document.createElement('script');
    script.src = "https://cal.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up on component unmount
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
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

            {/* Cal.com Embed */}
            <div 
              data-cal-link="srikar-reddy-o5okkw" 
              data-cal-config='{"layout":"month_view"}'
              style={{ minWidth: 320, height: 650 }}
            ></div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}