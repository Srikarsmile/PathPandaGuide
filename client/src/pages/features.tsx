import Header from "@/components/header";
import Footer from "@/components/footer";
import CostCalculator from "@/components/cost-calculator";
import ApplicationChecklist from "@/components/application-checklist";
import StudentTestimonials from "@/components/student-testimonials";
import InteractiveMap from "@/components/interactive-map";
import LanguageResources from "@/components/language-resources";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Helmet } from "react-helmet";
import { Calculator, FileCheck, Users, Globe, Languages } from "lucide-react";

export default function Features() {
  return (
    <>
      <Helmet>
        <title>Study Abroad Features | Path Panda</title>
        <meta name="description" content="Use our specialized study abroad tools including cost of living calculator, application checklist, student testimonials, interactive map, and language resources." />
        <meta property="og:title" content="Study Abroad Features | Path Panda" />
        <meta property="og:description" content="Use our specialized study abroad tools including cost of living calculator, application checklist, student testimonials, interactive map, and language resources." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pathpanda.com/features" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <div className="bg-gradient-to-r from-panda-pink to-panda-purple text-white py-12">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold mb-4 text-center">Study Abroad Features</h1>
              <p className="text-xl max-w-2xl mx-auto text-center">
                Comprehensive tools and resources to help you plan every aspect of your international education journey.
              </p>
            </div>
          </div>
          
          <section className="py-10 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <Tabs defaultValue="cost" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="grid grid-cols-3 md:grid-cols-5 gap-1">
                    <TabsTrigger value="cost" className="flex flex-col items-center text-xs sm:text-sm py-2 px-1 sm:px-3">
                      <Calculator className="h-4 w-4 mb-1" />
                      <span>Cost Calculator</span>
                    </TabsTrigger>
                    <TabsTrigger value="checklist" className="flex flex-col items-center text-xs sm:text-sm py-2 px-1 sm:px-3">
                      <FileCheck className="h-4 w-4 mb-1" />
                      <span>Application Checklist</span>
                    </TabsTrigger>
                    <TabsTrigger value="testimonials" className="flex flex-col items-center text-xs sm:text-sm py-2 px-1 sm:px-3">
                      <Users className="h-4 w-4 mb-1" />
                      <span>Student Stories</span>
                    </TabsTrigger>
                    <TabsTrigger value="map" className="flex flex-col items-center text-xs sm:text-sm py-2 px-1 sm:px-3">
                      <Globe className="h-4 w-4 mb-1" />
                      <span>Country Explorer</span>
                    </TabsTrigger>
                    <TabsTrigger value="language" className="flex flex-col items-center text-xs sm:text-sm py-2 px-1 sm:px-3">
                      <Languages className="h-4 w-4 mb-1" />
                      <span>Language Learning</span>
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="cost">
                  <CostCalculator />
                </TabsContent>
                
                <TabsContent value="checklist">
                  <ApplicationChecklist />
                </TabsContent>
                
                <TabsContent value="testimonials">
                  <StudentTestimonials />
                </TabsContent>
                
                <TabsContent value="map">
                  <InteractiveMap />
                </TabsContent>
                
                <TabsContent value="language">
                  <LanguageResources />
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}