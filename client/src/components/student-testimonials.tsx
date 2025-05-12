import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  age: number;
  homeCountry: string;
  studyCountry: string;
  university: string;
  program: string;
  imageUrl: string;
  quote: string;
  fullStory: string;
  tags: string[];
}

const testimonials: Testimonial[] = [
  {
    id: "javier",
    name: "Javier Rodriguez",
    age: 22,
    homeCountry: "Mexico",
    studyCountry: "Germany",
    university: "Technical University of Munich",
    program: "Mechanical Engineering",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
    quote: "Studying in Germany opened doors I never knew existed. The practical approach to engineering education and the industry connections are unmatched.",
    fullStory: "I grew up in Mexico City with dreams of becoming an engineer. When I got accepted to TUM, I was both excited and terrified. The language barrier was challenging at first, but the university offered excellent German courses for international students. The engineering program's hands-on approach and the opportunity to work with industry partners like BMW and Siemens gave me practical experience that's highly valued in the job market. Living costs were manageable thanks to the affordable student housing and part-time work opportunities. The best part? After graduation, Germany's 18-month job-seeking visa lets international graduates stay and find work in their field. I'm now employed at a renewable energy firm in Munich and couldn't be happier with my decision to study abroad.",
    tags: ["Engineering", "Europe", "Language Learning", "Scholarships"]
  },
  {
    id: "aisha",
    name: "Aisha Patel",
    age: 24,
    homeCountry: "India",
    studyCountry: "Canada",
    university: "University of Toronto",
    program: "Computer Science",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
    quote: "Canada's welcoming environment for international students and post-graduation work opportunities made all the difference in my career trajectory.",
    fullStory: "Coming from Bangalore's tech scene, I wanted to expand my horizons with an international education in computer science. University of Toronto's program was challenging but incredibly rewarding. The diverse student body meant I was constantly learning new perspectives and approaches to problem-solving. Canadian winters took some getting used to, but the warm community made up for the cold weather! The cost of living in Toronto was high, but I managed through scholarships and a part-time job as a teaching assistant. What I value most is Canada's Post-Graduation Work Permit, which allowed me to gain valuable work experience with a leading tech company after graduation. This pathway to permanent residency is a huge advantage for international students considering Canada.",
    tags: ["Computer Science", "North America", "Work Opportunities", "City Life"]
  },
  {
    id: "mei",
    name: "Mei Chen",
    age: 26,
    homeCountry: "China",
    studyCountry: "Australia",
    university: "University of Melbourne",
    program: "Business Administration",
    imageUrl: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
    quote: "Studying in Australia gave me more than a degree - it gave me a global network and a new perspective on work-life balance.",
    fullStory: "When I left Shanghai for Melbourne, I was looking for a business education with an international outlook. The University of Melbourne exceeded my expectations with its diverse faculty and strong connections to the Asia-Pacific business community. The group projects with students from over 20 countries prepared me for the global workplace in ways I couldn't have imagined. Australia's lifestyle was a pleasant surprise - the emphasis on work-life balance helped me develop interests outside of academics, including surfing and hiking in Victoria's beautiful landscapes. The Australian Government's Temporary Graduate visa (subclass 485) allowed me to stay for 2 years after graduation, giving me time to gain valuable work experience with a multinational company. My advice to prospective students: embrace the local culture and build connections outside your comfort zone.",
    tags: ["Business", "Australia", "Networking", "Cultural Experience"]
  },
  {
    id: "gabriel",
    name: "Gabriel Silva",
    age: 23,
    homeCountry: "Brazil",
    studyCountry: "United Kingdom",
    university: "University of Edinburgh",
    program: "Environmental Science",
    imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
    quote: "Edinburgh's world-class research facilities and Scotland's commitment to renewable energy made it the perfect place for my environmental studies.",
    fullStory: "Growing up near the Amazon rainforest inspired my passion for environmental conservation. The University of Edinburgh's program offered field work opportunities that were invaluable for my research interests. The UK education system's emphasis on independent study was different from Brazil's more structured approach, but it helped me develop critical thinking skills that are essential in my field. Student life in Edinburgh was vibrant - the city's festivals, historic architecture, and natural beauty provided a perfect backdrop for my studies. Financially, the UK was challenging, but I received the Chevening Scholarship which covered tuition and living expenses. The scholarship application process was competitive but worth the effort. Post-graduation, I've returned to Brazil to work with conservation organizations, applying the research methodologies I learned abroad. The UK degree has given me credibility and opened doors to international collaboration opportunities.",
    tags: ["Environmental Science", "Europe", "Research", "Scholarships"]
  },
  {
    id: "fatima",
    name: "Fatima Al-Farsi",
    age: 25,
    homeCountry: "Oman",
    studyCountry: "Japan",
    university: "Kyoto University",
    program: "International Relations",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
    quote: "Japan offered a unique perspective on international relations that bridges Eastern and Western diplomatic traditions.",
    fullStory: "Choosing Japan for international relations studies was unconventional, but it provided me with insights into Asia-Pacific geopolitics that I couldn't have gained elsewhere. Kyoto University's program, taught in English, attracted students from across the globe while immersing us in Japanese culture. The most challenging aspect was learning Japanese, but the university provided excellent language support for international students. Living in Kyoto, a city that balances tradition and innovation, enriched my understanding of cultural diplomacy. I received the MEXT Scholarship from the Japanese government, which covered all expenses and included cultural programs that enhanced my experience. The rigid hierarchical structures in Japanese institutions were sometimes challenging to navigate, but they taught me valuable lessons about diplomatic protocol. After graduation, I secured a position with Oman's foreign ministry, where my unique educational background in Japanese diplomatic approaches has been highly valued.",
    tags: ["International Relations", "Asia", "Cultural Immersion", "Language Learning"]
  },
  {
    id: "kim",
    name: "Kim Song-Min",
    age: 24,
    homeCountry: "South Korea",
    studyCountry: "United States",
    university: "New York University",
    program: "Film Production",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
    quote: "Studying film in New York City placed me at the heart of a creative industry with unparalleled access to professionals and resources.",
    fullStory: "My journey from Seoul to New York was driven by my passion for storytelling through film. NYU's Tisch School of the Arts offered not just technical training but access to a network of industry professionals that guest lectured and mentored students. The collaborative project-based learning approach was initially intimidating but ultimately helped me find my voice as a director. New York City itself was an education - the diverse cultures, stories, and artistic expressions influenced my creative perspective. The cost of living and tuition in NYC was extremely high, and I worked part-time while studying to supplement my family's support. The F-1 visa's Optional Practical Training allowed me to work on independent film projects after graduation, building my portfolio before returning to Korea. I'm now working with a production company in Seoul, bringing international production standards to Korean content. My advice: Use every opportunity to create work and build connections - your student projects can become your professional calling card.",
    tags: ["Arts", "North America", "Networking", "City Life"]
  }
];

export default function StudentTestimonials() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [expandedStory, setExpandedStory] = useState<string | null>(null);

  const filterTags = Array.from(
    new Set(testimonials.flatMap(t => t.tags))
  ).sort();

  const filteredTestimonials = activeTab === "all" 
    ? testimonials 
    : testimonials.filter(t => t.tags.includes(activeTab));

  const toggleExpandStory = (id: string) => {
    if (expandedStory === id) {
      setExpandedStory(null);
    } else {
      setExpandedStory(id);
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Student Stories & Experiences
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real experiences from international students who've successfully navigated the challenges and rewards of studying abroad.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 md:grid-cols-8 gap-2">
              <TabsTrigger value="all" className="text-xs md:text-sm">
                All Stories
              </TabsTrigger>
              {filterTags.map(tag => (
                <TabsTrigger key={tag} value={tag} className="text-xs md:text-sm">
                  {tag}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col h-full">
                      <div className="bg-gradient-to-r from-panda-pink/20 to-panda-purple/20 p-6">
                        <div className="flex items-center mb-4">
                          <img 
                            src={testimonial.imageUrl} 
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-white shadow-md"
                          />
                          <div>
                            <h3 className="font-bold text-lg text-gray-800 dark:text-white">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {testimonial.homeCountry} → {testimonial.studyCountry}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start mb-4">
                          <Quote className="h-6 w-6 text-panda-purple mr-2 mt-1 flex-shrink-0" />
                          <p className="text-gray-700 dark:text-gray-300 italic">
                            "{testimonial.quote}"
                          </p>
                        </div>
                      </div>
                      
                      <div className="p-6 flex-grow">
                        <div className="mb-4">
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <span className="font-semibold">University:</span> {testimonial.university}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <span className="font-semibold">Program:</span> {testimonial.program}
                          </p>
                        </div>
                        
                        <div className="mb-6">
                          {expandedStory === testimonial.id ? (
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                              {testimonial.fullStory}
                            </p>
                          ) : (
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                              {testimonial.fullStory}
                            </p>
                          )}
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <Button 
                            variant="link" 
                            size="sm" 
                            className="p-0 text-panda-purple dark:text-panda-lav"
                            onClick={() => toggleExpandStory(testimonial.id)}
                          >
                            {expandedStory === testimonial.id ? "Read less" : "Read full story"}
                          </Button>
                          
                          <div className="flex flex-wrap gap-1 justify-end">
                            {testimonial.tags.slice(0, 2).map(tag => (
                              <span 
                                key={tag} 
                                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredTestimonials.length === 0 && (
              <div className="text-center py-12">
                <Quote className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                  No stories found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try selecting a different filter to see more student experiences.
                </p>
                <Button 
                  variant="link" 
                  className="mt-4 text-panda-purple dark:text-panda-lav"
                  onClick={() => setActiveTab("all")}
                >
                  View all stories
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <div className="bg-white dark:bg-gray-700 rounded-lg p-8 max-w-2xl mx-auto shadow-md">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Share Your Study Abroad Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Your experience could inspire and guide future international students. 
              Tell us about your study abroad adventure!
            </p>
            <Button className="bg-panda-purple hover:bg-opacity-90">
              Submit Your Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}