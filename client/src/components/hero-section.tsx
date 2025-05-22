import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, GraduationCap, Globe, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Premium royal background with dark mode support */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a0845] via-panda-purple to-[#6441A5] opacity-95 dark:from-[#1a0835] dark:via-[#4C0666] dark:to-[#5431A5] dark:opacity-90">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center mix-blend-overlay opacity-20 dark:opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent dark:from-black/40 dark:to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNCAzLjc5IDYgNCA2YzEuMjI0-Ljk1NyA0LTMuNzkxIDQtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20 dark:opacity-30"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-panda-yellow opacity-20 animate-float-slow hidden lg:block"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-panda-pink opacity-20 animate-float hidden lg:block"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 rounded-full bg-panda-lav opacity-20 animate-float-reverse hidden lg:block"></div>
      
      <div className="container relative mx-auto px-4 py-16 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-white z-10">
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-4 md:mb-6 border border-white/20">
            <span className="text-xs md:text-sm font-medium text-white flex items-center">
              <span className="w-2 h-2 bg-panda-yellow rounded-full mr-2 animate-pulse"></span>
              Global Education Specialists
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-white">
            Your <span className="text-panda-yellow drop-shadow-md">Path</span> to Academic Excellence Abroad
          </h1>
          <p className="text-base md:text-xl mb-6 md:mb-8 text-white font-medium max-w-lg drop-shadow-sm">
            Personalised guidance and data‑driven matching for UK, USA & Canada admissions.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4 items-center">
            <a
              href="https://wa.me/+918639885985?text=Hi%20Pathpanda%20team%2C%20I%27d%20like%20to%20book%20a%20consultation%20about%20studying%20abroad."
              target="_blank"
              rel="noopener"
            >
              <Button className="px-5 py-5 md:px-8 md:py-7 bg-panda-yellow hover:bg-panda-yellow/90 text-panda-purple font-bold rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-sm md:text-lg group flex items-center justify-center border border-white/10">
                <span>Book Free Consultation</span>
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <Link href="/services">
              <Button variant="outline" className="px-5 py-5 md:px-8 md:py-7 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 font-semibold rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl text-sm md:text-lg flex items-center justify-center">
                <span>Explore Our Services</span>
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 mt-8 md:mt-12 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-3 md:p-6 border border-white/20 shadow-xl">
            <div className="text-center relative">
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-panda-yellow/50 rounded-tl-lg"></div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-panda-yellow drop-shadow-lg">50+</div>
              <div className="text-xs md:text-sm text-white font-medium">Destinations</div>
            </div>
            <div className="text-center relative">
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-panda-yellow/50 rounded-tl-lg"></div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-panda-yellow drop-shadow-lg">1000+</div>
              <div className="text-xs md:text-sm text-white font-medium">Institutions</div>
            </div>
            <div className="text-center relative">
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-panda-yellow/50 rounded-tl-lg"></div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-panda-yellow drop-shadow-lg">10k+</div>
              <div className="text-xs md:text-sm text-white font-medium">Students Placed</div>
            </div>
          </div>
        </div>

        {/* Hero image/illustration - premium royal version */}
        <div className="lg:w-1/2 mt-10 md:mt-12 lg:mt-0 flex justify-center z-10">
          <div className="relative w-[280px] sm:w-[350px] md:w-[450px] h-[280px] sm:h-[350px] md:h-[450px]">
            {/* Gold frame effect */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#FFC000] via-[#FFEA80] to-[#FFD700] opacity-40 blur-lg rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#421a63] to-[#6441A5] backdrop-blur-md rounded-2xl shadow-2xl border border-white/20"></div>
            
            {/* Royal corner decorations */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-[#FFD700] rounded-tl-xl"></div>
            <div className="absolute -top-3 -right-3 w-12 h-12 border-t-4 border-r-4 border-[#FFD700] rounded-tr-xl"></div>
            <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-4 border-l-4 border-[#FFD700] rounded-bl-xl"></div>
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-[#FFD700] rounded-br-xl"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" 
              alt="Global Education Excellence" 
              className="absolute inset-4 object-cover rounded-xl shadow-lg"
            />
            
            {/* Enhanced badges */}
            <div className="absolute -left-4 md:-left-5 top-10 bg-gradient-to-r from-white to-gray-100 rounded-lg shadow-2xl p-2 md:p-3 flex items-center gap-1 md:gap-2 animate-float border-2 border-[#FFD700]/40">
              <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-panda-purple" />
              <span className="text-xs md:text-sm font-bold text-gray-800">Top-tier Universities</span>
            </div>
            <div className="absolute -right-4 md:-right-5 top-1/3 bg-gradient-to-r from-white to-gray-100 rounded-lg shadow-2xl p-2 md:p-3 flex items-center gap-1 md:gap-2 animate-float-reverse hidden sm:flex border-2 border-[#FFD700]/40">
              <Globe className="h-5 w-5 md:h-6 md:w-6 text-panda-purple" />
              <span className="text-xs md:text-sm font-bold text-gray-800">Global Network</span>
            </div>
            <div className="absolute -left-4 md:-left-5 bottom-10 bg-gradient-to-r from-white to-gray-100 rounded-lg shadow-2xl p-2 md:p-3 flex items-center gap-1 md:gap-2 animate-float-slow border-2 border-[#FFD700]/40">
              <Award className="h-5 w-5 md:h-6 md:w-6 text-[#FFC000]" />
              <span className="text-xs md:text-sm font-bold text-gray-800">Scholarship Access</span>
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
