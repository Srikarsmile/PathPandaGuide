import Header from "@/components/header";
import Footer from "@/components/footer";
import UniversityComparison from "@/components/university-comparison";
import ScholarshipFinder from "@/components/scholarship-finder";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Helmet } from "react-helmet";

export default function Tools() {
  return (
    <>
      <Helmet>
        <title>Study Abroad Tools | Path Panda</title>
        <meta name="description" content="Use our specialized tools to find scholarships, compare universities, and explore study abroad options." />
        <meta property="og:title" content="Study Abroad Tools | Path Panda" />
        <meta property="og:description" content="Use our specialized tools to find scholarships, compare universities, and explore study abroad options." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pathpanda.com/tools" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <div className="bg-gradient-to-r from-panda-pink to-panda-purple text-white py-12">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold mb-4 text-center">Study Abroad Tools</h1>
              <p className="text-xl max-w-2xl mx-auto text-center">
                Interactive tools to help you plan your international education journey.
              </p>
            </div>
          </div>
          
          <section className="py-10 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <Tabs defaultValue="universities" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="universities">University Comparison</TabsTrigger>
                  <TabsTrigger value="scholarships">Scholarship Finder</TabsTrigger>
                </TabsList>
                
                <TabsContent value="universities">
                  <UniversityComparison />
                </TabsContent>
                
                <TabsContent value="scholarships">
                  <ScholarshipFinder />
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