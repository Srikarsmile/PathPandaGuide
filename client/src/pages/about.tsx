import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Award, Book, GraduationCap, LineChart, Users, Globe } from "lucide-react";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Path Panda | Your Study Abroad Partner</title>
        <meta name="description" content="Learn about Path Panda's mission to help students find their perfect study abroad opportunities across the globe." />
        <meta property="og:title" content="About Path Panda | Your Study Abroad Partner" />
        <meta property="og:description" content="Learn about Path Panda's mission to help students find their perfect study abroad opportunities across the globe." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pathpanda.com/about" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero section */}
          <section className="bg-gradient-to-r from-panda-pink to-panda-purple text-white pt-16 pb-20 relative overflow-hidden">
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white opacity-10"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-panda-yellow opacity-10"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Path Panda</h1>
                <p className="text-xl opacity-90 mb-8">
                  Helping students navigate their international education journey with confidence and clarity.
                </p>
              </div>
            </div>
          </section>
          
          {/* Mission section */}
          <section className="py-16 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    At Path Panda, we believe that international education transforms lives. Our mission is to make studying abroad accessible to students everywhere by providing comprehensive resources, personalized guidance, and innovative tools.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    We're dedicated to helping students navigate the complex world of international education—from choosing the right university and program to securing scholarships and managing visa requirements.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Our team combines technology with personal expertise to ensure every student finds their perfect path to global education opportunities.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1627556704302-624286467c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="International students collaborating" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Values section */}
          <section className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Values</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  The principles that guide everything we do at Path Panda.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 rounded-full bg-panda-pink/20 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-panda-pink" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Excellence</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We strive for excellence in all our services, continuously improving to provide the best support possible.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 rounded-full bg-panda-yellow/20 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-panda-yellow" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Inclusivity</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We believe education should be accessible to everyone, regardless of background or circumstance.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 rounded-full bg-panda-purple/20 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-panda-purple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Global Perspective</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We embrace cultural diversity and foster international understanding in everything we do.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 rounded-full bg-panda-lav/20 flex items-center justify-center mb-4">
                    <LineChart className="h-6 w-6 text-panda-lav" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Innovation</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We constantly explore new technologies and approaches to enhance the study abroad experience.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Book className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Lifelong Learning</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We champion the pursuit of knowledge and personal growth throughout life's journey.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Student Success</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We measure our achievement by the success of the students we help in their global education journeys.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Team section placeholder */}
          <section className="py-16 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Team</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  A diverse team of education experts, technologists, and former international students passionate about global education.
                </p>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button className="bg-panda-purple hover:bg-panda-purple/90 text-white">
                      <span>Contact Our Team</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA section */}
          <section className="py-16 bg-gradient-to-r from-panda-lav to-panda-purple text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Whether you're just beginning to explore study abroad options or need help with specific aspects of your application, we're here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/consult">
                  <Button className="bg-panda-yellow hover:bg-panda-yellow/90 text-panda-purple font-bold">
                    Book a Free Consultation
                  </Button>
                </Link>
                <Link href="/tools">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Explore Our Tools
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}