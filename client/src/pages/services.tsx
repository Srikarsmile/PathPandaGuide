import { useState } from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";

// Section component for consistent spacing and styling
const Section = ({ id, className = "", children }: { id?: string, className?: string, children: React.ReactNode }) => (
  <section 
    id={id} 
    className={`py-16 px-4 ${className}`}
  >
    <div className="container mx-auto max-w-4xl">
      {children}
    </div>
  </section>
);

export default function Services() {
  /* === Inline university search hook === */
  type University = { name: string, city: string, ranking?: number, website?: string };
  const [q, setQ] = useState('');
  const [data, setData] = useState<University[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function runSearch() {
    if (!q.trim()) return;
    setLoading(true);
    setErr(null);
    setData(null);
    try {
      const r = await fetch('/api/university-search', {
        method: 'POST',
        body: JSON.stringify({ query: q })
      });
      const j = await r.json();
      if (r.ok) {
        setData(j);
      } else {
        setErr(j.message || 'Error');
      }
    } catch (error) {
      setErr('Failed to search universities');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>Our Services | Path Panda</title>
        <meta name="description" content="From university matching to visa support, Path Panda is your one-stop mentor for UK university applications." />
        <meta property="og:title" content="Our Services | Path Panda" />
        <meta property="og:description" content="From university matching to visa support, Path Panda is your one-stop mentor for UK university applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pathpanda.com/services" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          {/* Anchored hero */}
          <Section className="text-center" id="top">
            <h1 className="text-4xl font-bold text-panda-purple mb-4">
              What We Do
            </h1>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              From your first shortlist to touchdown in the UK, PathPanda is your one-stop mentor.
            </p>
            <nav className="flex flex-wrap gap-2 justify-center mt-8 text-sm">
              {['matching', 'sop', 'visa', 'ai', 'faq', 'book'].map(id => (
                <a 
                  key={id} 
                  href={`#${id}`} 
                  className="px-3 py-1 rounded-full bg-panda-lav/20 hover:bg-panda-lav/40 transition-colors"
                >
                  {id.toUpperCase()}
                </a>
              ))}
            </nav>
          </Section>

          {/* 1 University matching */}
          <Section id="matching">
            <h2 className="text-2xl font-semibold text-panda-purple mb-2">
              University & Course Matching
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We analyse your grades, budget and career goals, then recommend UK programmes that
              maximise ROI—no bias, no hidden agenda.
            </p>
          </Section>

          {/* 2 SOP */}
          <Section id="sop" className="bg-[#FC7A7A0D]">
            <h2 className="text-2xl font-semibold text-panda-purple mb-2">
              Application & SOP Review
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Upload your draft essays and documents; we return tracked-change feedback within 48 h.
              Your authentic voice—polished for impact.
            </p>
          </Section>

          {/* 3 Visa support */}
          <Section id="visa">
            <h2 className="text-2xl font-semibold text-panda-purple mb-2">
              Visa & Pre-Departure Support
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Tier-4 funding proofs, accommodation search, packing list, flight hacks—everything
              distilled into a simple checklist so you board stress-free.
            </p>
          </Section>

          {/* 4 AI search demo */}
          <Section id="ai" className="bg-[#FC7A7A0D]">
            <h2 className="text-2xl font-semibold text-panda-purple mb-6 text-center">
              Try Our AI-Powered University Finder
            </h2>
            <div className="max-w-xl mx-auto space-y-6">
              <div className="flex flex-col md:flex-row gap-2">
                <Input
                  value={q}
                  onChange={e => setQ(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && runSearch()}
                  placeholder="e.g. 1-year MBA in London under £25k tuition"
                  className="flex-1 border-panda-purple/30 rounded-lg px-4 py-3 focus:outline-none"
                />
                <Button 
                  variant="default" 
                  onClick={runSearch}
                  className="bg-panda-pink hover:bg-panda-pink/90 text-white"
                >
                  Search
                </Button>
              </div>
              {loading && <p className="text-center">Crunching numbers…</p>}
              {err && <p className="text-red-600">{err}</p>}
              {data && (
                data.length === 0
                  ? <p>No universities matched that query.</p>
                  : <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.map(u => (
                      <div key={u.name} className="bg-white dark:bg-gray-900 shadow rounded-xl p-4">
                        <h3 className="font-semibold text-panda-purple">{u.name}</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{u.city}</p>
                        {u.ranking && (
                          <span className="text-xs bg-panda-yellow px-2 py-1 rounded-full inline-block mt-1">
                            Rank {u.ranking}
                          </span>
                        )}
                        {u.website && (
                          <a 
                            target="_blank" 
                            rel="noopener noreferrer"
                            href={u.website} 
                            className="block mt-1 text-panda-pink hover:underline"
                          >
                            Visit site →
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
              )}
            </div>
          </Section>

          {/* 5 FAQ */}
          <Section id="faq">
            <h2 className="text-2xl font-semibold text-panda-purple mb-4 text-center">FAQ</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <details className="border border-panda-purple/20 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold">Is counselling really free?</summary>
                <p className="mt-2 text-gray-700 dark:text-gray-300">Yes. UK universities fund us after you enrol—so we never charge students.</p>
              </details>
              <details className="border border-panda-purple/20 rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold">How fast do you reply?</summary>
                <p className="mt-2 text-gray-700 dark:text-gray-300">Average reply time: 2 hours, max 24 hours.</p>
              </details>
            </div>
          </Section>

          {/* 6 CTA */}
          <Section id="book" className="text-center">
            <h2 className="text-3xl font-bold text-panda-purple mb-4">Ready to start?</h2>
            <Link href="/contact#book">
              <Button className="bg-panda-purple hover:bg-panda-purple/90 text-white">
                Book Your Free Session
              </Button>
            </Link>
          </Section>

          {/* Notice bar */}
          <div className="bg-panda-pink text-white text-center py-6">
            All counselling sessions are <span className="underline">100% FREE</span>.
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}