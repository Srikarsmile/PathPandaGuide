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
          <section className="relative bg-gradient-to-br from-panda-purple via-[#6441A5] to-[#8B5CF6] py-20 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yMDktMS43OS00LTQtNHMtNCAxLjc5MS00IDQgMy43OSA2IDQgNmMxLjIyNC0uOTU3IDQtMy43OTEgNC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/20">
                  <span className="text-sm font-medium flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Get In Touch
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Let's Start Your <span className="text-panda-yellow">Study Abroad</span> Journey
                </h1>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Connect with our expert advisors for personalized guidance on UK, USA & Canada admissions
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-panda-yellow">Under 5 min</div>
                    <div className="text-sm text-white/80">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-panda-yellow">10k+</div>
                    <div className="text-sm text-white/80">Students Helped</div>
                  </div>
                  <div className="text-center col-span-2 md:col-span-1">
                    <div className="text-2xl md:text-3xl font-bold text-panda-yellow">24/7</div>
                    <div className="text-sm text-white/80">Available</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Options Section */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Choose Your Preferred Way to Connect
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Whether you want instant answers or detailed consultation, we're here to help
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* WhatsApp Contact */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-green-100">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <MessageCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp Consultation</h3>
                  <p className="text-gray-600 mb-6">Get instant responses and book your free consultation directly</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      Instant response
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-2" />
                      Personal advisor
                    </div>
                  </div>
                  <a
                    href="https://wa.me/918639885985?text=Hi%20Pathpanda%20team%2C%20I%27d%20like%20to%20book%20a%20consultation%20about%20studying%20abroad."
                    target="_blank"
                    rel="noopener"
                    className="block"
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Start WhatsApp Chat
                    </Button>
                  </a>
                </div>

                {/* Email Contact */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Email Support</h3>
                  <p className="text-gray-600 mb-6">Send us detailed questions and receive comprehensive answers</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      24-hour response
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="w-4 h-4 mr-2" />
                      Detailed guidance
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </div>

                {/* Phone Contact */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-purple-100 md:col-span-2 lg:col-span-1">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                    <Phone className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Direct Call</h3>
                  <p className="text-gray-600 mb-6">Speak directly with our education consultants</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      Mon-Sat 9AM-8PM
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      India timezone
                    </div>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section id="contact-form" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-lg text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
                  <form action="https://formspree.io/f/your-id" method="POST" className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 block">Full Name *</label>
                        <Input 
                          name="name" 
                          placeholder="Your full name" 
                          required
                          className="w-full border-gray-200 focus:border-panda-purple focus:ring-panda-purple rounded-lg px-4 py-3 text-gray-900"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 block">Email Address *</label>
                        <Input 
                          name="email" 
                          type="email" 
                          placeholder="your.email@example.com" 
                          required
                          className="w-full border-gray-200 focus:border-panda-purple focus:ring-panda-purple rounded-lg px-4 py-3 text-gray-900"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 block">Phone Number</label>
                        <Input 
                          name="phone" 
                          type="tel" 
                          placeholder="+1 (555) 000-0000" 
                          className="w-full border-gray-200 focus:border-panda-purple focus:ring-panda-purple rounded-lg px-4 py-3 text-gray-900"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 block">Preferred Country</label>
                        <Input 
                          name="country" 
                          placeholder="UK, USA, Canada, etc." 
                          className="w-full border-gray-200 focus:border-panda-purple focus:ring-panda-purple rounded-lg px-4 py-3 text-gray-900"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 block">Message *</label>
                      <Textarea 
                        name="message" 
                        placeholder="Tell us about your study abroad goals, questions, or how we can help you..." 
                        rows={5} 
                        required
                        className="w-full border-gray-200 focus:border-panda-purple focus:ring-panda-purple rounded-lg px-4 py-3 text-gray-900"
                      />
                    </div>

                    <div className="text-center pt-4">
                      <Button 
                        type="submit" 
                        className="bg-panda-purple hover:bg-panda-purple/90 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Send Message
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                      <p className="text-sm text-gray-500 mt-4">
                        We'll respond within 24 hours during business days
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Quick Links */}
          <section className="py-16 bg-gradient-to-r from-panda-purple to-[#8B5CF6]">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Quick Questions? Check Our Resources
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                  Application Timeline
                </Button>
                <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                  Scholarship Guide
                </Button>
                <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                  Visa Requirements
                </Button>
                <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                  Cost Calculator
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}