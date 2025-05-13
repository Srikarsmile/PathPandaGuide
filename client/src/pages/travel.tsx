import { useState } from "react";
import { Helmet } from "react-helmet";
import { Calendar, Globe, Info, Clock, AlertTriangle, CheckCircle, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

// Types for visa data
interface VisaResource {
  name: string;
  officialWebsite: string;
  appointmentSystem?: string;
  alternativeAppointmentOptions?: string[];
  averageProcessingTime: string;
  visaFee: string;
  requiredDocuments: string[];
  tips: string[];
}

export default function Travel() {
  const [selectedCountry, setSelectedCountry] = useState<string>("germany");
  const [email, setEmail] = useState<string>("");
  const [submittedCountry, setSubmittedCountry] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  
  // Data for Schengen countries
  const schengenCountries: Record<string, VisaResource> = {
    germany: {
      name: "Germany",
      officialWebsite: "https://videx.diplo.de/videx/desktop/index.html#start",
      appointmentSystem: "https://service2.diplo.de/rktermin/extern/choose_realmList.do?locationCode=indi&request_locale=en",
      averageProcessingTime: "15 days",
      visaFee: "€80",
      requiredDocuments: [
        "Valid passport",
        "Application form",
        "Biometric photos",
        "Travel insurance",
        "Flight itinerary",
        "Proof of accommodation",
        "Proof of financial means",
        "Proof of student status (if applicable)",
        "Invitation letter (if applicable)"
      ],
      tips: [
        "Schedule your appointment at least 3 months before your planned travel",
        "Morning slots are released at midnight German time",
        "Check for cancellations daily, especially early mornings",
        "Some consulates release new slots at the beginning of each month"
      ]
    },
    france: {
      name: "France",
      officialWebsite: "https://france-visas.gouv.fr/en_US/web/france-visas/",
      appointmentSystem: "https://pastel.diplomatie.gouv.fr/rdvinternet/html-4.01.01/frameset/frameset.html?lcid=1&sgid=309&suid=1",
      alternativeAppointmentOptions: ["VFS Global centers sometimes have more available slots"],
      averageProcessingTime: "10-20 days",
      visaFee: "€80",
      requiredDocuments: [
        "Valid passport",
        "Application form",
        "Biometric photos",
        "Travel insurance",
        "Flight itinerary",
        "Proof of accommodation",
        "Proof of financial means",
        "Invitation letter (if applicable)"
      ],
      tips: [
        "New slots are typically released every Monday morning",
        "Check both embassy and VFS Global appointment systems",
        "Be prepared to book an appointment in a neighboring country if needed"
      ]
    },
    spain: {
      name: "Spain",
      officialWebsite: "http://www.exteriores.gob.es/Portal/en/ServiciosAlCiudadano/InformacionParaExtranjeros/Paginas/Inicio.aspx",
      appointmentSystem: "https://sede.administracionespublicas.gob.es/pagina/index/directorio/icpplus",
      averageProcessingTime: "15-30 days",
      visaFee: "€80",
      requiredDocuments: [
        "Valid passport",
        "Application form",
        "Biometric photos",
        "Travel insurance",
        "Flight itinerary",
        "Proof of accommodation",
        "Proof of financial means",
        "Invitation letter (if applicable)"
      ],
      tips: [
        "Check the appointment system after midnight Spanish time",
        "BLS International centers may have more available slots than consulates",
        "Some consulates release bulk slots at the beginning of each quarter"
      ]
    },
    italy: {
      name: "Italy",
      officialWebsite: "https://vistoperitalia.esteri.it/home/en",
      appointmentSystem: "https://prenotaonline.esteri.it/login.aspx?cidsede=100&returnUrl=/",
      alternativeAppointmentOptions: ["VFS Global centers in some locations"],
      averageProcessingTime: "15 days",
      visaFee: "€80",
      requiredDocuments: [
        "Valid passport",
        "Application form",
        "Biometric photos",
        "Travel insurance",
        "Flight itinerary",
        "Proof of accommodation",
        "Proof of financial means",
        "Invitation letter (if applicable)"
      ],
      tips: [
        "New slots are typically released on Mondays and Thursdays",
        "The official website may show no availability, but calling the consulate directly sometimes helps",
        "Consider applying through a visa agency that has reserved slots"
      ]
    },
    netherlands: {
      name: "Netherlands",
      officialWebsite: "https://www.netherlandsandyou.nl/travel-and-living/visas-for-the-netherlands",
      appointmentSystem: "https://appointment.netherlandsandyou.nl/",
      alternativeAppointmentOptions: ["VFS Global centers offer appointments in many countries"],
      averageProcessingTime: "15 days",
      visaFee: "€80",
      requiredDocuments: [
        "Valid passport",
        "Application form",
        "Biometric photos",
        "Travel insurance",
        "Flight itinerary",
        "Proof of accommodation",
        "Proof of financial means",
        "Invitation letter (if applicable)"
      ],
      tips: [
        "The Dutch embassy typically releases new slots on Wednesday mornings",
        "VFS Global centers often have more availability than the embassy",
        "The appointment calendar is updated at midnight Dutch time"
      ]
    }
  };

  const handleNotificationSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedCountry(selectedCountry);
    }, 1500);
  };

  const currentCountry = schengenCountries[selectedCountry];

  return (
    <>
      <Helmet>
        <title>Visa & Travel Resources | Path Panda</title>
        <meta name="description" content="Find helpful resources for Schengen visa applications, appointment booking tips, and expert guidance on securing visa slots for your study abroad journey." />
      </Helmet>
      
      <section className="relative py-20 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-panda-purple/5 to-panda-pink/10"></div>
        
        <div className="container relative mx-auto px-4 z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center bg-panda-purple/10 rounded-full py-1 px-4 mb-4">
              <span className="h-2 w-2 rounded-full bg-panda-purple mr-2"></span>
              <span className="text-sm font-medium text-panda-purple">Travel Resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Schengen Visa Application Guide
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Navigate the visa application process with our expert guidance and tips for securing appointment slots.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-panda-purple/10 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-panda-purple" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Appointment Booking Resources</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Official booking links, alternative options, and strategies for finding available slots.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-panda-pink/10 rounded-full flex items-center justify-center mb-4">
                <Info className="h-8 w-8 text-panda-pink" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Required Documents</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Country-specific document requirements, templates, and preparation checklists.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-panda-yellow/10 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-panda-yellow" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Country-Specific Tips</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Insider knowledge on specific embassy procedures, common pitfalls, and success strategies.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden mb-16">
            <div className="bg-gradient-to-r from-panda-purple to-panda-pink p-6 md:p-10">
              <h2 className="text-3xl font-bold text-white mb-2">Schengen Visa Appointment Resources</h2>
              <p className="text-white/90">Select a country to see detailed visa application information, booking resources, and appointment tips.</p>
            </div>
            
            <div className="p-6 md:p-10">
              <Tabs defaultValue="resources" className="w-full">
                <TabsList className="mb-8 grid grid-cols-3 w-full md:w-auto">
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                  <TabsTrigger value="tips">Appointment Tips</TabsTrigger>
                  <TabsTrigger value="notify">Slot Notifications</TabsTrigger>
                </TabsList>
                
                <div className="mb-6">
                  <label htmlFor="country-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Country</label>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger className="w-full md:w-[280px]">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(schengenCountries).map(([key, country]) => (
                        <SelectItem key={key} value={key}>{country.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <TabsContent value="resources" className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                      <span className="inline-block w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full mr-3 text-center leading-8 shadow-sm text-panda-purple font-bold">
                        {currentCountry.name.charAt(0)}
                      </span>
                      {currentCountry.name} Visa Resources
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Official Links</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Globe className="h-5 w-5 text-panda-purple mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="block text-sm text-gray-600 dark:text-gray-400">Official Website:</span>
                              <a href={currentCountry.officialWebsite} target="_blank" rel="noopener noreferrer" className="text-panda-purple hover:underline">
                                Visit {currentCountry.name} Visa Portal
                              </a>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <Calendar className="h-5 w-5 text-panda-purple mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="block text-sm text-gray-600 dark:text-gray-400">Appointment System:</span>
                              <a href={currentCountry.appointmentSystem} target="_blank" rel="noopener noreferrer" className="text-panda-purple hover:underline">
                                Book Appointment
                              </a>
                            </div>
                          </li>
                        </ul>
                        
                        {currentCountry.alternativeAppointmentOptions && (
                          <div className="mt-4">
                            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Alternative Booking Options</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 pl-2">
                              {currentCountry.alternativeAppointmentOptions.map((option, index) => (
                                <li key={index} className="text-sm">{option}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Application Information</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Clock className="h-5 w-5 text-panda-purple mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="block text-sm text-gray-600 dark:text-gray-400">Processing Time:</span>
                              <span className="font-medium">{currentCountry.averageProcessingTime}</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-panda-purple mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                              <span className="block text-sm text-gray-600 dark:text-gray-400">Visa Fee:</span>
                              <span className="font-medium">{currentCountry.visaFee}</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Required Documents</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
                        {currentCountry.requiredDocuments.map((doc, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/30 p-4 rounded-lg">
                      <div className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-amber-800 dark:text-amber-400">Important Note</h4>
                          <p className="text-sm text-amber-700 dark:text-amber-300">
                            Visa requirements and procedures may change. Always verify information with the embassy or consulate before applying.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="tips" className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                      {currentCountry.name} Appointment Tips
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm border border-gray-100 dark:border-gray-700">
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                          <Bookmark className="h-5 w-5 text-panda-purple mr-2" />
                          Best Practices for {currentCountry.name} Visa Appointments
                        </h4>
                        <ul className="space-y-3">
                          {currentCountry.tips.map((tip, index) => (
                            <li key={index} className="flex items-start">
                              <div className="mt-1 flex-shrink-0 w-5 h-5 bg-panda-purple/10 rounded-full flex items-center justify-center text-xs font-semibold text-panda-purple">
                                {index + 1}
                              </div>
                              <span className="ml-3 text-gray-600 dark:text-gray-400">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm border border-gray-100 dark:border-gray-700">
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-3">General Slot Hunting Tips</h4>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="text-left text-panda-purple">When is the best time to check for slots?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 dark:text-gray-400">
                              <p>Many embassies refresh their slots at specific times:</p>
                              <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>Early morning (local embassy time) - often between 12 AM and 2 AM</li>
                                <li>Beginning of the work week (Monday)</li>
                                <li>First working day of the month</li>
                                <li>Some embassies release slots in bulk at the beginning of each quarter</li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                          
                          <AccordionItem value="item-2">
                            <AccordionTrigger className="text-left text-panda-purple">How to find cancellations?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 dark:text-gray-400">
                              <p>Cancellations happen regularly and can be your best opportunity:</p>
                              <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>Check multiple times daily, especially in the morning</li>
                                <li>Look for appointments 48-72 hours before current dates, as many cancellations happen within this window</li>
                                <li>Be prepared to book immediately when you see an available slot</li>
                                <li>Have all your information ready to enter quickly</li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                          
                          <AccordionItem value="item-3">
                            <AccordionTrigger className="text-left text-panda-purple">Alternative booking methods</AccordionTrigger>
                            <AccordionContent className="text-gray-600 dark:text-gray-400">
                              <p>If official embassy systems show no availability:</p>
                              <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>Check if VFS Global or BLS International handles applications</li>
                                <li>Consider visa application centers in neighboring cities or regions</li>
                                <li>Some travel agencies have reserved slots (for an additional fee)</li>
                                <li>Contact the embassy directly - sometimes they can accommodate urgent cases</li>
                                <li>Check if premium/expedited services are available</li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="notify">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                      Get Notified About Available Slots
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      We'll send you updates when visa appointment slots become available for your selected country.
                    </p>
                    
                    {isSubmitted ? (
                      <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/30 p-5 rounded-lg">
                        <div className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-green-800 dark:text-green-400 text-lg">Notification Request Received</h4>
                            <p className="text-green-700 dark:text-green-300 mt-1">
                              We'll notify you when new {schengenCountries[submittedCountry!].name} visa appointment slots become available. 
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleNotificationSignup} className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm border border-gray-100 dark:border-gray-700">
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Email Address
                            </label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your.email@example.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              className="w-full"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                              Selected Country
                            </label>
                            <p className="text-gray-600 dark:text-gray-400 font-medium">
                              {schengenCountries[selectedCountry].name}
                            </p>
                          </div>
                          
                          <div className="pt-2">
                            <Button 
                              type="submit" 
                              className="w-full bg-panda-purple hover:bg-opacity-90 text-white"
                              disabled={isSubmitting || !email}
                            >
                              {isSubmitting ? (
                                <span className="flex items-center">
                                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                  Submitting...
                                </span>
                              ) : (
                                "Sign Up for Notifications"
                              )}
                            </Button>
                          </div>
                          
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            By signing up, you agree to receive email notifications about visa appointment availability.
                            We'll only send you relevant updates and won't share your email with third parties.
                          </p>
                        </div>
                      </form>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
            <div className="p-6 md:p-10">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Get Expert Visa Assistance
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Finding visa appointments can be challenging. Our experienced consultants can help you navigate the process and increase your chances of securing a slot.
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">Personalized guidance on the best times to check for slots</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">Document preparation assistance to save time during booking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">Information on alternative application methods for your specific case</span>
                    </li>
                  </ul>
                  
                  <Button className="bg-panda-purple hover:bg-opacity-90 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 px-6 py-3">
                    Schedule a Consultation
                  </Button>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                    Why students choose our visa assistance
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-panda-purple/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="font-bold text-panda-purple">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-white">Expert Knowledge</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Our consultants specialize in visa applications for students and know the process inside out.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-panda-pink/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="font-bold text-panda-pink">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-white">Time-Saving</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Stop spending hours refreshing booking pages - our strategies help you target the right times.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-panda-yellow/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="font-bold text-panda-yellow">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-white">Higher Success Rate</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Our students have a significantly higher rate of securing appointments on time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}