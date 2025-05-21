import { Layout } from "@/components/layout";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface SuccessStory {
  id: string;
  name: string;
  from: string;
  to: string;
  university: string;
  program: string;
  quote: string;
  fullStory: string;
  tags: string[];
  imageUrl: string;
}

const successStories: SuccessStory[] = [
  {
    id: "aisha",
    name: "Aisha",
    from: "Malaysia",
    to: "UK",
    university: "London School of Economics",
    program: "Economics",
    quote: "From confusion to a clear path forward, Pathpanda helped me secure my dream offer at LSE.",
    fullStory: "I was overwhelmed by UK university applications with so many programs to choose from. Pathpanda's matching tool narrowed down my options and their mentors helped strengthen my personal statement. Now I'm studying Economics in London, exactly where I wanted to be.",
    tags: ["Personal Statement", "UK Admissions", "Economics", "LSE"],
    imageUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "jian",
    name: "Jian",
    from: "China",
    to: "USA",
    university: "UC Berkeley",
    program: "Computer Science",
    quote: "Pathpanda's mentors knew exactly how to reframe my essays to impress US admissions officers.",
    fullStory: "The US admissions process was like a puzzle I couldn't solve. My Pathpanda mentor completely transformed my application strategy, reshaping my essays and test prep approach. The result was an acceptance to Berkeley's Computer Science program with a significant scholarship that made it affordable for my family.",
    tags: ["Essay Support", "US Admissions", "Computer Science", "Scholarships"],
    imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "sofia",
    name: "Sofia",
    from: "Brazil",
    to: "Canada",
    university: "University of British Columbia",
    program: "Environmental Science",
    quote: "The provincial requirements for Canadian universities were so complex until Pathpanda simplified everything.",
    fullStory: "I almost gave up on applying to Canadian universities because each province has different requirements. My Pathpanda advisor guided me through the entire process, helping me understand the nuances of Canadian applications. Now I'm researching Environmental Science at UBC in Vancouver, and I couldn't be happier with my decision.",
    tags: ["Canada Admissions", "Environmental Science", "UBC", "Application Support"],
    imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

export default function SuccessStories() {
  return (
    <Layout title="Success Stories">
      <Helmet>
        <title>Student Success Stories | Path Panda</title>
        <meta name="description" content="Real students, real offers, real futures. See how international students achieved their study abroad dreams with Path Panda's guidance." />
        <meta property="og:title" content="Student Success Stories | Path Panda" />
        <meta property="og:description" content="Real students, real offers, real futures. See how international students achieved their study abroad dreams with Path Panda's guidance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pathpanda.com/success-stories" />
      </Helmet>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-panda-purple mb-4">Their Success, Your Inspiration</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Real students, real offers, real futures. These journeys prove that data plus human guidance unlocks global potential. Yours could be next.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={story.imageUrl} 
                  alt={`${story.name} studying at ${story.university}`}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-panda-purple">{story.name}</h3>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {story.from} → {story.to}
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-2">
                  {story.program} at {story.university}
                </p>
                
                <blockquote className="border-l-4 border-panda-pink pl-4 italic my-4 text-gray-700 dark:text-gray-300">
                  "{story.quote}"
                </blockquote>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {story.fullStory.substring(0, 120)}...
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-panda-lav/10 text-panda-purple border-panda-lav/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="link" className="p-0 text-panda-pink hover:text-panda-purple">
                  Read full story <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-panda-purple mb-6">Ready to Write Your Own Success Story?</h2>
          <Link href="/services">
            <Button className="bg-panda-purple hover:bg-panda-purple/90 text-white">
              Start Your Journey Now
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}