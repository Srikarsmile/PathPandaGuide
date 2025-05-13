import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, GraduationCap, Globe, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-panda-pink via-panda-lav to-panda-purple opacity-90">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-8"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-panda-yellow opacity-20 animate-float-slow hidden lg:block"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-panda-pink opacity-20 animate-float hidden lg:block"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 rounded-full bg-panda-lav opacity-20 animate-float-reverse hidden lg:block"></div>
      
      <div className="container relative mx-auto px-4 py-20 md:py-32 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-white z-10">
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-white">Your Global Education Partner</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Find Your Perfect <span className="text-panda-yellow">Study Abroad</span> Path
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-lg">
            We guide students to their ideal international education opportunities, from visa support to scholarship applications.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/consult">
              <Button className="px-8 py-7 bg-panda-yellow hover:bg-opacity-90 text-panda-purple font-bold rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-lg group flex items-center justify-center">
                <span>Book a free consult</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/features">
              <Button variant="outline" className="px-8 py-7 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20 font-semibold rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl text-lg flex items-center justify-center">
                <span>Explore Features</span>
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-panda-yellow">50+</div>
              <div className="text-sm text-white/80">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-panda-yellow">1000+</div>
              <div className="text-sm text-white/80">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-panda-yellow">10k+</div>
              <div className="text-sm text-white/80">Students</div>
            </div>
          </div>
        </div>

        {/* Hero image/illustration */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center z-10">
          <div className="relative w-[350px] md:w-[450px] h-[350px] md:h-[450px]">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" 
              alt="International students" 
              className="absolute inset-4 object-cover rounded-xl shadow-lg"
            />
            
            {/* Feature badges */}
            <div className="absolute -left-5 top-10 bg-white rounded-lg shadow-lg p-3 flex items-center gap-2 animate-float">
              <GraduationCap className="h-6 w-6 text-panda-purple" />
              <span className="text-sm font-medium text-gray-700">Top Universities</span>
            </div>
            <div className="absolute -right-5 top-1/3 bg-white rounded-lg shadow-lg p-3 flex items-center gap-2 animate-float-reverse">
              <Globe className="h-6 w-6 text-panda-pink" />
              <span className="text-sm font-medium text-gray-700">Global Opportunities</span>
            </div>
            <div className="absolute -left-5 bottom-10 bg-white rounded-lg shadow-lg p-3 flex items-center gap-2 animate-float-slow">
              <Award className="h-6 w-6 text-panda-yellow" />
              <span className="text-sm font-medium text-gray-700">Scholarships</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#ffffff" preserveAspectRatio="none">
          <path d="M0,32L80,42.7C160,53,320,75,480,69.3C640,64,800,32,960,21.3C1120,11,1280,21,1360,26.7L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>
  );
}
