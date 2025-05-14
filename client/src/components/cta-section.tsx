import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-panda-purple to-panda-pink/90">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-8"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-panda-yellow opacity-10 animate-float-slow"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-panda-lav opacity-10 animate-float"></div>
      
      <div className="container relative mx-auto px-4 z-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-white/20 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-center">
            <div className="md:col-span-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-4 md:mb-6 leading-tight">
                Ready to Start Your <span className="text-panda-yellow drop-shadow-lg">Study Abroad</span> Journey?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white font-medium drop-shadow mb-6 md:mb-8 max-w-2xl">
                Get personalized guidance from our experienced consultants and take the first step toward your international education.
              </p>
              
              <div className="flex flex-wrap gap-3 md:gap-4 items-center">
                <div className="flex items-center bg-white/20 rounded-lg px-3 py-1.5 md:px-4 md:py-2 text-white text-sm md:text-base">
                  <Calendar className="h-4 w-4 md:h-5 md:w-5 mr-1.5 md:mr-2" />
                  <span>Free 30-min session</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-lg px-3 py-1.5 md:px-4 md:py-2 text-white text-sm md:text-base">
                  <svg className="h-4 w-4 md:h-5 md:w-5 mr-1.5 md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>No obligation</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 mt-6 md:mt-0">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 md:p-8 shadow-lg border border-white/20">
                <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg mb-4 md:mb-6 text-center">Book Your Session</h3>
                <Link href="/consult">
                  <Button className="w-full px-4 py-6 md:px-8 md:py-8 bg-panda-yellow hover:bg-panda-yellow/90 text-panda-purple font-bold rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-base md:text-lg group flex items-center justify-center">
                    <span>Book Free Consultation</span>
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <p className="text-center text-white/70 mt-3 md:mt-4 text-xs md:text-sm">
                  Our consultants will get back to you within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
