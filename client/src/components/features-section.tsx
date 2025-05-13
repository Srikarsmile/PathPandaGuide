import FeatureCard from "./feature-card";
import { Award, GraduationCap, Ticket, Globe, BarChart, Building, BookOpen, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function FeaturesSection() {
  const primaryFeatures = [
    {
      icon: Ticket,
      title: "Visa Guidance",
      description: "Navigate complex visa requirements with our step-by-step guidance and application support.",
      iconBgClass: "bg-panda-purple",
      iconColorClass: "text-white",
      link: "/features"
    },
    {
      icon: GraduationCap,
      title: "Course Matching",
      description: "Find the perfect academic program that aligns with your career goals and interests.",
      iconBgClass: "bg-panda-pink",
      iconColorClass: "text-white",
      link: "/features"
    },
    {
      icon: Award,
      title: "Scholarships",
      description: "Discover and apply for scholarships and financial aid opportunities to fund your education.",
      iconBgClass: "bg-panda-yellow",
      iconColorClass: "text-panda-purple",
      link: "/features"
    }
  ];

  const secondaryFeatures = [
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with universities and institutions worldwide through our extensive partner network."
    },
    {
      icon: Building,
      title: "Accommodation Support",
      description: "Find safe and affordable housing options with our pre-vetted accommodation providers."
    },
    {
      icon: BarChart,
      title: "Career Planning",
      description: "Access resources and guidance for post-graduation career opportunities in your field."
    },
    {
      icon: BookOpen,
      title: "Pre-Departure Guidance",
      description: "Comprehensive preparation for your journey including cultural adaptation tips."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock assistance during your application process and throughout your studies."
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-panda-pink via-panda-lav to-panda-purple"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-panda-pink/5 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-panda-purple/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-panda-pink/10 rounded-full py-1 px-4 mb-4">
            <span className="h-2 w-2 rounded-full bg-panda-pink mr-2"></span>
            <span className="text-sm font-medium text-panda-pink">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">How Path Panda Helps You</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            We provide comprehensive support throughout your study abroad journey, from finding the right program to settling into your new home.
          </p>
        </div>
        
        {/* Primary features */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {primaryFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconBgClass={feature.iconBgClass}
              iconColorClass={feature.iconColorClass}
              link={feature.link}
            />
          ))}
        </div>

        {/* Secondary features with alternating pattern */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 mb-16">
          {secondaryFeatures.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className={`w-12 h-12 rounded-lg bg-panda-${index % 3 === 0 ? 'purple' : index % 3 === 1 ? 'pink' : 'yellow'}/10 flex items-center justify-center mr-4 flex-shrink-0`}>
                <feature.icon className={`h-6 w-6 text-panda-${index % 3 === 0 ? 'purple' : index % 3 === 1 ? 'pink' : 'yellow'}`} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/features">
            <Button className="bg-transparent text-panda-purple hover:bg-panda-purple/10 dark:text-panda-lav hover:dark:bg-panda-lav/10 border border-panda-purple/30 dark:border-panda-lav/30 px-8 py-6 rounded-full">
              Explore All Features
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
