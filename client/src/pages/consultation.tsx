import { Helmet } from "react-helmet";
import { Layout } from "@/components/layout";

export default function Consultation() {

  return (
    <Layout title="Book Consultation">
      <Helmet>
        <title>Book Consultation | Path Panda</title>
        <meta name="description" content="Book your free 30-minute counselling session with Path Panda. Get personalized guidance for your study abroad journey via Zoom or WhatsApp." />
        <meta property="og:title" content="Book Consultation | Path Panda" />
        <meta property="og:description" content="Book your free 30-minute counselling session with Path Panda. Get personalized guidance for your study abroad journey via Zoom or WhatsApp." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pathpanda.com/consultation" />
      </Helmet>
      
      <section className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-panda-purple mb-4">
          Book Your Free 30-Minute Counselling Session
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-10">
          Chat via Zoom or WhatsApp—your choice.
        </p>

        <div className="rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <h3 className="text-xl font-semibold mb-3">Book Your Free Consultation</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Click the button below to connect with us directly on WhatsApp and schedule your free consultation.
          </p>
          <a 
            href="https://wa.me/+918639885985?text=Hi%20Pathpanda%20team%2C%20I%27d%20like%20to%20book%20a%20consultation%20about%20studying%20abroad."
            target="_blank" 
            rel="noopener"
            className="inline-block bg-panda-purple hover:bg-panda-purple/90 text-white px-6 py-3 rounded-md"
          >
            Book Your Free Consultation
          </a>
        </div>
      </section>
    </Layout>
  );
}