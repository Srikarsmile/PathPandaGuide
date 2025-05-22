import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, MapPin, Clock, Users, ArrowRight, Star } from "lucide-react";

export default function Contact() {

  return (
    <>
      <Helmet>
        <title>Contact & Booking | Path Panda</title>
        <meta name="description" content="Contact Path Panda for your UK university application needs, or book a free 30-minute consultation call for personalized guidance." />
        <meta property="og:title" content="Contact & Booking | Path Panda" />
        <meta property="og:description" content="Contact Path Panda for your UK university application needs, or book a free 30-minute consultation call for personalized guidance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pathpanda.com/contact" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1] py-24 overflow-hidden">
            {/* Floating geometric shapes */}
            <div className="absolute top-20 left-10 w-16 h-16 bg-white/20 rounded-full animate-float"></div>
            <div className="absolute top-40 right-20 w-12 h-12 bg-panda-yellow/30 rotate-45 animate-float-reverse"></div>
            <div className="absolute bottom-32 left-1/4 w-8 h-8 bg-white/25 rounded-full animate-bounce"></div>
            <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-panda-yellow/40 rotate-12 animate-ping"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-5xl mx-auto">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-md mb-8 border border-white/30 shadow-lg">
                  <MessageCircle className="w-5 h-5 mr-3 text-panda-yellow" />
                  <span className="text-lg font-semibold">Ready to Connect?</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
                  Let's Make Your 
                  <span className="block text-panda-yellow drop-shadow-lg">Dreams Reality</span>
                </h1>
                
                <p className="text-xl md:text-2xl mb-12 text-white/95 max-w-3xl mx-auto font-light">
                  Your international education journey starts with a single conversation. Let's talk!
                </p>
                
                {/* Redesigned Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                  <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl md:text-5xl font-bold text-panda-yellow mb-2">2 min</div>
                    <div className="text-white/90 font-medium">Quick Response</div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl md:text-5xl font-bold text-panda-yellow mb-2">10k+</div>
                    <div className="text-white/90 font-medium">Success Stories</div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl md:text-5xl font-bold text-panda-yellow mb-2">24/7</div>
                    <div className="text-white/90 font-medium">Always Here</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Options Section */}
          <section className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-20">
                <div className="inline-block px-6 py-2 bg-panda-yellow/20 rounded-full mb-6">
                  <span className="text-panda-purple font-semibold">Multiple Ways to Connect</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Choose Your <span className="text-panda-purple">Perfect</span> Channel
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Every conversation matters. Pick the way that feels right for you.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* WhatsApp Contact - Featured */}
                <div className="lg:col-span-2 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 border-2 border-green-200 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-200 rounded-full translate-y-12 -translate-x-12 opacity-30"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <MessageCircle className="w-10 h-10 text-white" />
                      </div>
                      <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular ⭐
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">WhatsApp Chat</h3>
                    <p className="text-lg text-gray-700 mb-8">
                      Start chatting instantly! Get immediate responses and book your consultation on the go.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-600">Instant replies</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-600">Personal advisor</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-600">File sharing</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-600">Voice notes</span>
                      </div>
                    </div>
                    
                    <a
                      href="https://wa.me/918639885985?text=Hi%20Pathpanda%20team%2C%20I%27d%20like%20to%20book%20a%20consultation%20about%20studying%20abroad."
                      target="_blank"
                      rel="noopener"
                      className="block"
                    >
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        <MessageCircle className="w-5 h-5 mr-3" />
                        Start WhatsApp Chat
                        <ArrowRight className="w-5 h-5 ml-3" />
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Email & Phone Combined */}
                <div className="space-y-8">
                  {/* Email Contact */}
                  <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-3xl p-8 border border-blue-200 hover:shadow-xl transition-all duration-300 group">
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Us</h3>
                    <p className="text-gray-600 mb-6">
                      Send detailed questions for comprehensive guidance.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        24-hour response
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="w-4 h-4 mr-2" />
                        Detailed answers
                      </div>
                    </div>
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-xl" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                  </div>

                  {/* Phone Contact */}
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8 border border-purple-200 hover:shadow-xl transition-all duration-300 group">
                    <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Call Direct</h3>
                    <p className="text-gray-600 mb-6">
                      Speak with our education consultants directly.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        Mon-Sat 9AM-8PM
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        India timezone
                      </div>
                    </div>
                    <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-xl">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section id="contact-form" className="py-24 bg-gradient-to-br from-gray-900 via-panda-purple to-gray-800 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-panda-yellow/10 rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-panda-pink/10 rounded-full translate-x-48 translate-y-48 blur-3xl"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                  <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20">
                    <span className="text-white font-semibold">Drop Us a Line</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Ready to <span className="text-panda-yellow">Get Started?</span>
                  </h2>
                  <p className="text-xl text-white/90 max-w-2xl mx-auto">
                    Share your dreams with us. Every great journey begins with a single step.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                  <form action="https://formspree.io/f/your-id" method="POST" className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-white font-semibold text-lg block">Your Name *</label>
                        <Input 
                          name="name" 
                          placeholder="What should we call you?" 
                          required
                          className="w-full bg-white/20 border-white/30 focus:border-panda-yellow focus:ring-panda-yellow/50 rounded-2xl px-6 py-4 text-white placeholder-white/70 text-lg backdrop-blur-sm"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-white font-semibold text-lg block">Email Address *</label>
                        <Input 
                          name="email" 
                          type="email" 
                          placeholder="your.best@email.com" 
                          required
                          className="w-full bg-white/20 border-white/30 focus:border-panda-yellow focus:ring-panda-yellow/50 rounded-2xl px-6 py-4 text-white placeholder-white/70 text-lg backdrop-blur-sm"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-white font-semibold text-lg block">Phone Number</label>
                        <Input 
                          name="phone" 
                          type="tel" 
                          placeholder="+1 (555) 123-4567" 
                          className="w-full bg-white/20 border-white/30 focus:border-panda-yellow focus:ring-panda-yellow/50 rounded-2xl px-6 py-4 text-white placeholder-white/70 text-lg backdrop-blur-sm"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-white font-semibold text-lg block">Dream Destination</label>
                        <Input 
                          name="country" 
                          placeholder="UK, USA, Canada, Australia..." 
                          className="w-full bg-white/20 border-white/30 focus:border-panda-yellow focus:ring-panda-yellow/50 rounded-2xl px-6 py-4 text-white placeholder-white/70 text-lg backdrop-blur-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-white font-semibold text-lg block">Tell Us Your Story *</label>
                      <Textarea 
                        name="message" 
                        placeholder="What are your goals? What challenges are you facing? How can we help make your dreams come true?" 
                        rows={6} 
                        required
                        className="w-full bg-white/20 border-white/30 focus:border-panda-yellow focus:ring-panda-yellow/50 rounded-2xl px-6 py-4 text-white placeholder-white/70 text-lg backdrop-blur-sm resize-none"
                      />
                    </div>

                    <div className="text-center pt-8">
                      <Button 
                        type="submit" 
                        className="bg-gradient-to-r from-panda-yellow to-orange-400 hover:from-panda-yellow/90 hover:to-orange-400/90 text-panda-purple px-16 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 transform"
                      >
                        <Mail className="w-6 h-6 mr-3" />
                        Send My Message
                        <ArrowRight className="w-6 h-6 ml-3" />
                      </Button>
                      <p className="text-white/80 mt-6 text-lg">
                        ✨ We'll get back to you within 24 hours with personalized guidance
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Resource Links Section */}
          <section className="py-20 bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1] relative overflow-hidden">
            {/* Floating elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-panda-yellow/20 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/15 rotate-45 animate-pulse"></div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Need Quick Answers? 🚀
                </h2>
                <p className="text-xl text-white/90 mb-12">
                  Explore our comprehensive resources while you wait for our personal response
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 group">
                    <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold mb-2">Timeline</h3>
                    <p className="text-white/80 text-sm">Application deadlines</p>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 group">
                    <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold mb-2">Scholarships</h3>
                    <p className="text-white/80 text-sm">Funding opportunities</p>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 group">
                    <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold mb-2">Visa Guide</h3>
                    <p className="text-white/80 text-sm">Requirements & tips</p>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 group">
                    <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold mb-2">Calculator</h3>
                    <p className="text-white/80 text-sm">Cost estimator</p>
                  </div>
                </div>
                
                <div className="mt-12">
                  <p className="text-white/90 text-lg font-medium">
                    💬 Still have questions? Our team is standing by to help!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}