import Header from "@/components/header";
import Footer from "@/components/footer";
import ApplicationChecklist from "@/components/application-checklist";
import InteractiveMap from "@/components/interactive-map";
import LanguageResources from "@/components/language-resources";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Helmet } from "react-helmet";
import { FileCheck, Globe, Languages } from "lucide-react";

export default function Features() {
  return (
    <>
      <Helmet>
        <title>Study Abroad Features | Path Panda</title>
        <meta name="description" content="Use our specialized study abroad tools including application checklist, interactive country explorer map, and language learning resources." />
        <meta property="og:title" content="Study Abroad Features | Path Panda" />
        <meta property="og:description" content="Use our specialized study abroad tools including application checklist, interactive country explorer map, and language learning resources." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pathpanda.com/features" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <div className="bg-gradient-to-r from-panda-pink to-panda-purple dark:from-gray-800 dark:to-gray-900 text-white py-12 transition-colors duration-300">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold mb-4 text-center">Study Abroad Features</h1>
              <p className="text-xl max-w-2xl mx-auto text-center">
                Comprehensive tools and resources to help you plan every aspect of your international education journey.
              </p>
            </div>
          </div>
          
          <section className="py-10 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <Tabs defaultValue="checklist" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="grid grid-cols-3 gap-1">
                    <TabsTrigger value="checklist" className="flex flex-col items-center text-xs sm:text-sm py-2 px-1 sm:px-3">
                      <FileCheck className="h-4 w-4 mb-1" />
                      <span>Application Checklist</span>
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
                
                <TabsContent value="checklist">
                  <ApplicationChecklist />
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