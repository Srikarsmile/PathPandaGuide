import Header from "@/components/header";
import Footer from "@/components/footer";
import UniversityComparison from "@/components/university-comparison";
import ScholarshipFinder from "@/components/scholarship-finder";
import CoursePopularityMap from "@/components/course-popularity-map";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Helmet } from "react-helmet";

export default function Tools() {
  return (
    <>
      <Helmet>
        <title>Study Abroad Tools | Path Panda</title>
        <meta name="description" content="Use our specialized tools to find scholarships, compare universities, explore popular courses by country, and discover study abroad options." />
        <meta property="og:title" content="Study Abroad Tools | Path Panda" />
        <meta property="og:description" content="Use our specialized tools to find scholarships, compare universities, explore popular courses by country, and discover study abroad options." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pathpanda.com/tools" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <div className="relative overflow-hidden bg-gradient-to-r from-panda-purple to-panda-pink text-white py-16">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-panda-yellow via-white to-panda-yellow opacity-20"></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-panda-yellow opacity-10"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-panda-lav opacity-10"></div>
            
            <div className="container relative mx-auto px-4 z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Study Abroad Tools</h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Interactive tools to help you plan your international education journey.
                  Explore programs, find scholarships, and discover the best destinations for your field.
                </p>
              </div>
            </div>
          </div>
          
          <section className="py-16 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <Tabs defaultValue="universities" className="w-full">
                <TabsList className="flex flex-wrap w-full mb-10">
                  <TabsTrigger value="universities" className="flex-1 min-w-[120px] text-xs sm:text-sm md:text-base">
                    University Comparison
                  </TabsTrigger>
                  <TabsTrigger value="scholarships" className="flex-1 min-w-[120px] text-xs sm:text-sm md:text-base">
                    Scholarship Finder
                  </TabsTrigger>
                  <TabsTrigger value="coursemap" className="flex-1 min-w-[120px] text-xs sm:text-sm md:text-base">
                    Course Popularity
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="universities">
                  <UniversityComparison />
                </TabsContent>
                
                <TabsContent value="scholarships">
                  <ScholarshipFinder />
                </TabsContent>
                
                <TabsContent value="coursemap">
                  <CoursePopularityMap />
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