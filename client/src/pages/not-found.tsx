import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Rocket, Star } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>420 - Coming Soon | Path Panda</title>
        <meta name="description" content="This feature is coming soon! Stay tuned for exciting updates." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow flex items-center justify-center">
          <section className="relative py-20 px-4 text-center">
            {/* Background Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-panda-yellow/20 animate-bounce hidden md:block"></div>
            <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-panda-purple/20 animate-pulse hidden md:block"></div>
            <div className="absolute top-1/3 right-20 w-12 h-12 rounded-full bg-panda-pink/20 animate-ping hidden md:block"></div>
            
            <div className="max-w-2xl mx-auto relative z-10">
              {/* Icon */}
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-panda-purple to-panda-pink rounded-full flex items-center justify-center shadow-2xl">
                    <Rocket className="w-16 h-16 text-white animate-bounce" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-panda-yellow rounded-full flex items-center justify-center animate-spin">
                    <Star className="w-4 h-4 text-panda-purple" />
                  </div>
                </div>
              </div>

              {/* Main Message */}
              <div className="mb-8">
                <h1 className="text-6xl md:text-8xl font-bold text-panda-purple mb-4 animate-pulse">
                  420
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  It's Coming Soon! 🚀
                </h2>
                <p className="text-lg text-gray-600 mb-6 max-w-lg mx-auto">
                  We're working hard to bring you something amazing. This feature will be ready before you know it!
                </p>
              </div>

              {/* Fun Animation */}
              <div className="mb-8">
                <div className="inline-block animate-bounce">
                  <div className="text-4xl">⏳</div>
                </div>
                <div className="mt-2 text-sm text-gray-500 animate-pulse">
                  Building something awesome...
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/">
                  <Button className="bg-panda-purple hover:bg-panda-purple/90 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
                
                <a
                  href="https://wa.me/918639885985?text=Hi%20Pathpanda%20team%2C%20I%27d%20like%20to%20know%20when%20new%20features%20will%20be%20available."
                  target="_blank"
                  rel="noopener"
                >
                  <Button variant="outline" className="border-panda-purple text-panda-purple hover:bg-panda-purple/10 px-8 py-3 rounded-xl">
                    <Rocket className="w-4 h-4 mr-2" />
                    Get Updates
                  </Button>
                </a>
              </div>

              {/* Progress Bar Animation */}
              <div className="mt-12 max-w-md mx-auto">
                <div className="text-sm text-gray-500 mb-2">Progress</div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-panda-purple via-panda-pink to-panda-yellow animate-pulse rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="text-xs text-gray-400 mt-1">75% Complete</div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}