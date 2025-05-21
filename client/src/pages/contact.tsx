import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Declare the Calendly type to avoid TypeScript errors
declare global {
  interface Window {
    Calendly?: any;
  }
}

export default function Contact() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up on component unmount
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact & Booking | Path Panda</title>
        <meta name="description" content="Contact Path Panda for your UK university application needs, or book a free 30-minute consultation call for personalized guidance." />
        <meta property="og:title" content="Contact & Booking | Path Panda" />
        <meta property="og:description" content="Contact Path Panda for your UK university application needs, or book a free 30-minute consultation call for personalized guidance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pathpanda.com/contact" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <section className="max-w-3xl mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold text-panda-purple mb-6">Say Hello 👋</h1>
            <p className="text-gray-700 dark:text-gray-300 mb-10">
              Quick question? Use the form. Ready for a full discussion? Pick a slot below.
            </p>

            {/* Contact form */}
            <form action="https://formspree.io/f/your-id" method="POST" className="space-y-6 text-left">
              <Input 
                name="name" 
                placeholder="Full name" 
                required
                className="w-full border-panda-purple/30 rounded-lg px-4 py-3"
              />
              <Input 
                name="email" 
                type="email" 
                placeholder="Email address" 
                required
                className="w-full border-panda-purple/30 rounded-lg px-4 py-3"
              />
              <Textarea 
                name="message" 
                placeholder="Message" 
                rows={4} 
                required
                className="w-full border-panda-purple/30 rounded-lg px-4 py-3"
              />
              <div className="text-center">
                <Button 
                  type="submit" 
                  className="bg-panda-purple hover:bg-panda-purple/90 text-white px-8"
                >
                  Send Message
                </Button>
              </div>
            </form>

            {/* Divider */}
            <div id="book" className="my-16 h-px bg-panda-purple/20"></div>

            {/* Calendly */}
            <h2 className="text-2xl font-semibold text-panda-purple mb-4">
              Book a Free 30-Minute Call
            </h2>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/pathpanda/30min"
              style={{ minWidth: 320, height: 650 }}
            />
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}