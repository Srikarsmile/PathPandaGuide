import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Path Panda</title>
        <meta name="description" content="Get in touch with Path Panda for study abroad guidance and consultation." />
        <meta property="og:title" content="Contact Us | Path Panda" />
        <meta property="og:description" content="Get in touch with Path Panda for study abroad guidance and consultation." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Contact Section */}
          <section className="py-16 bg-gray-50">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ready to start your study abroad journey? Let's talk!
              </p>
            </div>
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                
                {/* Contact Options */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {/* WhatsApp */}
                  <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-panda-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-6 h-6 text-panda-purple" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
                    <p className="text-gray-600 text-sm mb-4">Quick chat & instant responses</p>
                    <a
                      href="https://wa.me/918639885985?text=Hi%20Path%20Panda%2C%20I%27d%20like%20to%20know%20more%20about%20studying%20abroad."
                      target="_blank"
                      rel="noopener"
                    >
                      <Button className="w-full bg-panda-yellow hover:bg-panda-yellow/90 text-panda-purple">
                        Start Chat
                      </Button>
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-panda-pink rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600 text-sm mb-4">Direct call with our team</p>
                    <Button className="w-full bg-panda-pink hover:bg-panda-pink/90 text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </div>

                  {/* Email */}
                  <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-panda-purple rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 text-sm mb-4">Detailed questions welcome</p>
                    <Button 
                      className="w-full bg-panda-purple hover:bg-panda-purple/90 text-white"
                      onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Send Email
                    </Button>
                  </div>
                </div>

                {/* Contact Form */}
                <div id="contact-form" className="bg-white rounded-xl shadow-lg p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
                    <p className="text-gray-600">We'll get back to you within 24 hours</p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                        <Input 
                          name="name" 
                          placeholder="Your full name" 
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <Input 
                          type="email" 
                          name="email" 
                          placeholder="your.email@example.com" 
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <Input 
                          type="tel" 
                          name="phone" 
                          placeholder="+91 98765 43210" 
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Country of Interest</label>
                        <Input 
                          name="country" 
                          placeholder="e.g., UK, Canada, Australia" 
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                      <Textarea 
                        name="message" 
                        placeholder="Tell us how we can help you with your study abroad goals..." 
                        rows={4} 
                        required
                        className="w-full"
                      />
                    </div>

                    <div className="text-center">
                      <Button 
                        type="submit" 
                        className="bg-panda-purple hover:bg-panda-purple/90 text-white px-8 py-3 text-lg font-medium"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </form>
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