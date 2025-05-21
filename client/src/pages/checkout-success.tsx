import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Helmet } from "react-helmet";

export default function CheckoutSuccess() {
  return (
    <>
      <Helmet>
        <title>Payment Successful | Path Panda</title>
        <meta name="description" content="Your payment has been received. We'll be in touch with you shortly." />
        <meta property="og:title" content="Payment Successful | Path Panda" />
        <meta property="og:description" content="Your payment has been received. We'll be in touch with you shortly." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pathpanda.com/checkout-success" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
            <p className="text-6xl mb-4">✅</p>
            <h1 className="text-3xl font-bold text-panda-purple mb-4">Payment received!</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              We'll be in touch within 24 hours.
            </p>
            <Link href="/">
              <Button variant="default" className="bg-panda-purple hover:bg-panda-purple/90 text-white">
                Back to Home
              </Button>
            </Link>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}