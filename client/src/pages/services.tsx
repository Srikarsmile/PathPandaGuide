import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, BarChart, UserPlus, FileText, Plane } from "lucide-react";

// Section component for consistent spacing and styling
const Section = ({ id, className = "", children }: { id?: string, className?: string, children: React.ReactNode }) => (
  <section 
    id={id} 
    className={`py-16 sm:py-20 px-4 ${className}`}
  >
    <div className="container mx-auto max-w-5xl">
      {children}
    </div>
  </section>
);

// Service Card component
const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  className = "" 
}: { 
  icon: any, 
  title: string, 
  description: string, 
  className?: string 
}) => (
  <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] ${className}`}>
    <div className="w-14 h-14 bg-panda-purple/10 dark:bg-panda-purple/20 rounded-full flex items-center justify-center mb-6">
      <Icon className="w-7 h-7 text-panda-purple" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Pathpanda Study Abroad Services</title>
        <meta name="description" content="Data-driven shortlisting, expert coaching and application support for UK, USA and Canada admissions." />
        <meta property="og:title" content="Pathpanda Study Abroad Services" />
        <meta property="og:description" content="Data-driven shortlisting, expert coaching and application support for UK, USA and Canada admissions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pathpanda.com/services" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-16 md:py-24 px-4 bg-gradient-to-r from-panda-purple/5 to-panda-lav/10 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNCAzLjc5IDYgNCA2YzEuMjI0-Ljk1NyA0LTMuNzkxIDQtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10 dark:opacity-5"></div>
            
            <div className="container mx-auto max-w-5xl relative z-10">
              <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  <span className="text-panda-purple dark:text-panda-lav">Complete Support</span> for<br />Overseas Admission
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                  From first shortlist to acceptance letter, we're by your side.
                </p>
                <a
                  href="https://wa.me/+918639885985?text=Hi%20Pathpanda%20team%2C%20I%27d%20like%20to%20start%20my%20shortlist%20for%20studying%20abroad."
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center bg-panda-yellow hover:bg-panda-yellow/90 text-panda-purple font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <span>Start Your Shortlist</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  See packages after you lock in matches
                </p>
              </div>
              
              {/* Process Flowchart */}
              <div className="relative max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Your Journey to Success
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our proven 4-step process
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {/* Step 1 */}
                  <div className="relative text-center">
                    <div className="bg-panda-purple/10 dark:bg-panda-purple/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-panda-purple">
                      <span className="text-2xl font-bold text-panda-purple">1</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Discovery Call</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Understand your goals and preferences
                    </p>
                    {/* Arrow for larger screens */}
                    <div className="hidden lg:block absolute top-8 -right-3 text-panda-purple">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative text-center">
                    <div className="bg-panda-purple/10 dark:bg-panda-purple/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-panda-purple">
                      <span className="text-2xl font-bold text-panda-purple">2</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Smart Matching</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Data-driven university recommendations
                    </p>
                    {/* Arrow for larger screens */}
                    <div className="hidden lg:block absolute top-8 -right-3 text-panda-purple">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative text-center">
                    <div className="bg-panda-purple/10 dark:bg-panda-purple/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-panda-purple">
                      <span className="text-2xl font-bold text-panda-purple">3</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Expert Coaching</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      1-on-1 support for applications & essays
                    </p>
                    {/* Arrow for larger screens */}
                    <div className="hidden lg:block absolute top-8 -right-3 text-panda-purple">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="relative text-center">
                    <div className="bg-panda-yellow/20 dark:bg-panda-yellow/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-panda-yellow">
                      <CheckCircle className="w-8 h-8 text-panda-yellow" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Success!</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Multiple acceptances & scholarship wins
                    </p>
                  </div>
                </div>

                {/* Mobile arrows */}
                <div className="lg:hidden flex justify-center space-x-4 mt-6">
                  <div className="flex items-center space-x-2 text-panda-purple">
                    <div className="w-2 h-2 bg-panda-purple rounded-full"></div>
                    <div className="w-8 h-0.5 bg-panda-purple"></div>
                    <div className="w-2 h-2 bg-panda-purple rounded-full"></div>
                    <div className="w-8 h-0.5 bg-panda-purple"></div>
                    <div className="w-2 h-2 bg-panda-purple rounded-full"></div>
                    <div className="w-8 h-0.5 bg-panda-purple"></div>
                    <div className="w-2 h-2 bg-panda-yellow rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Services Grid */}
          <Section>
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center leading-tight">
                Our <span className="text-panda-purple dark:text-panda-lav">Premium</span> Services
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard 
                icon={BarChart}
                title="Data-Driven Matching"
                description="Our algorithm filters global options so you focus on true fits—saving weeks of research."
              />
              
              <ServiceCard 
                icon={UserPlus}
                title="1-to-1 Expert Coaching"
                description="Former admissions officers polish essays, prep interviews and decode country-specific rules."
              />
              
              <ServiceCard 
                icon={FileText}
                title="Application & Scholarship Support"
                description="We assemble every document, hit every deadline and locate funding paths that make study abroad affordable."
              />
              
              <ServiceCard 
                icon={Plane}
                title="Visa & Arrival Help (Launching 2026)"
                description="Future add-on: full visa guidance and pre-departure prep so you land smoothly."
              />
            </div>
          </Section>

          {/* Why Choose Us */}
          <section className="py-16 px-4 bg-panda-purple/5 dark:bg-gray-900">
            <div className="container mx-auto max-w-5xl">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Why Choose Pathpanda?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  DIY risks missed deadlines and hidden gems. We add structure, insight and up to 4× higher acceptance success.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Personalized guidance from experts",
                    "Data-driven university recommendations",
                    "Time-saving application support",
                    "Higher acceptance rates",
                    "Scholarship opportunity insights",
                    "Comprehensive timeline management"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-panda-yellow flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 text-center">
                  <a
                    href="https://wa.me/+918639885985?text=Hi%20Pathpanda%20team%2C%20I%27d%20like%20to%20start%20my%20shortlist%20for%20studying%20abroad."
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center bg-panda-yellow hover:bg-panda-yellow/90 text-panda-purple font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <span>Start Your Shortlist</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Student Success Stories */}
          <Section className="bg-white dark:bg-gray-900">
            <div className="mb-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                Real <span className="text-panda-purple dark:text-panda-lav">Results</span> for Real Students
              </h2>
              <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-lg">
                Our data-driven approach delivers up to 4× higher acceptance rates than DIY applications
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-panda-purple to-panda-purple/80 dark:from-panda-purple dark:to-panda-purple/90 rounded-xl p-8 sm:p-12 text-center shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Our Expert Support Makes the Difference
                </h3>
                <p className="text-white/90 text-lg sm:text-xl mb-6 leading-relaxed">
                  Join the thousands of students who've achieved their dreams with our personalized guidance
                </p>
                <Link href="/success-stories">
                  <Button className="bg-panda-yellow hover:bg-panda-yellow/90 text-panda-purple px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    Read Success Stories
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </Section>

          {/* CTA */}
          <section className="py-16 px-4 bg-panda-purple text-white text-center">
            <div className="container mx-auto max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Take the first step towards your international education goals today
              </p>
              <a
                href="https://wa.me/+918639885985?text=Hi%20Pathpanda%20team%2C%20I%27d%20like%20to%20start%20my%20shortlist%20for%20studying%20abroad."
                target="_blank"
                rel="noopener"
                className="inline-flex items-center bg-panda-yellow hover:bg-panda-yellow/90 text-panda-purple font-bold py-4 px-8 rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-lg"
              >
                <span>Start Your Shortlist</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}