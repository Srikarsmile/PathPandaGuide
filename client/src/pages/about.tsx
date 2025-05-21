import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About PathPanda</title>
        <meta name="description" content="Learn about Path Panda's mission to help students find their perfect study abroad opportunities for UK universities." />
        <meta property="og:title" content="About PathPanda" />
        <meta property="og:description" content="Learn about Path Panda's mission to help students find their perfect study abroad opportunities for UK universities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pathpanda.com/about" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-4 py-20 items-center">
            <div>
              <h1 className="text-4xl font-bold text-panda-purple mb-4">Our Story</h1>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I'm <strong>Srikar</strong>, a CS grad from Vijayawada who landed at
                the University of Leeds in 2019. PathPanda is the mentor I wish I'd had.
              </p>
              <h2 className="text-2xl font-semibold text-panda-purple mb-2">Values</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li><b>Integrity</b> — honest advice, no hidden fees.</li>
                <li><b>Student-First</b> — your goals trump our commissions.</li>
                <li><b>Lightning Fast</b> — replies in under 24 h.</li>
              </ul>
            </div>
            <div className="rounded-xl shadow-lg ring-4 ring-panda-purple/20 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1627556704302-624286467c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Founder" 
                width={420}
                height={560}
                className="w-full h-full object-cover" 
              />
            </div>
          </section>

          {/* CTA section */}
          <section className="bg-panda-purple text-white text-center py-12 px-4 mt-8">
            <div className="container mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your UK Study Journey?</h2>
              <p className="text-lg mb-6">
                Get personalized guidance from someone who's been there.
              </p>
              <Link href="/consult">
                <Button className="bg-panda-yellow hover:bg-panda-yellow/90 text-panda-purple font-bold text-lg px-8 py-3">
                  Book a Free Consultation
                </Button>
              </Link>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}