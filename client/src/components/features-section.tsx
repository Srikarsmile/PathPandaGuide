import FeatureCard from "./feature-card";
import { Award, GraduationCap, Tickets } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Tickets,
      title: "Visa Guidance",
      description: "Navigate complex visa requirements with our step-by-step guidance and application support.",
      iconBgClass: "bg-panda-lav-20",
      iconColorClass: "text-panda-purple"
    },
    {
      icon: GraduationCap,
      title: "Course Matching",
      description: "Find the perfect academic program that aligns with your career goals and interests.",
      iconBgClass: "bg-panda-pink-20",
      iconColorClass: "text-panda-pink"
    },
    {
      icon: Award,
      title: "Scholarships",
      description: "Discover and apply for scholarships and financial aid opportunities to fund your education.",
      iconBgClass: "bg-panda-yellow-20",
      iconColorClass: "text-panda-yellow"
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">How Path Panda helps you</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We provide comprehensive support throughout your study abroad journey, from finding the right program to settling into your new home.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconBgClass={feature.iconBgClass}
              iconColorClass={feature.iconColorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
