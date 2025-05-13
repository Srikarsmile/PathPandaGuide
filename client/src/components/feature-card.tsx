import { LucideIcon } from "lucide-react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgClass: string;
  iconColorClass: string;
  link?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  iconBgClass,
  iconColorClass,
  link
}: FeatureCardProps) {
  const CardContent = () => (
    <>
      <div className={`w-20 h-20 ${iconBgClass} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform -rotate-6`}>
        <Icon className={`h-10 w-10 ${iconColorClass}`} />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>
      {link && (
        <div className="mt-auto flex items-center font-medium text-panda-purple dark:text-panda-lav group-hover:underline">
          Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      )}
    </>
  );

  const cardClasses = "group bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 flex flex-col h-full transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden";
  
  // Gradient overlay that appears on hover
  const gradientOverlay = (
    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 dark:to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
  );

  // Corner decoration
  const cornerDecoration = (
    <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full opacity-10 bg-gradient-to-br from-panda-pink to-panda-purple"></div>
  );

  return link ? (
    <Link href={link}>
      <div className={`${cardClasses} cursor-pointer`}>
        {gradientOverlay}
        {cornerDecoration}
        <div className="relative z-10">
          <CardContent />
        </div>
      </div>
    </Link>
  ) : (
    <div className={cardClasses}>
      {gradientOverlay}
      {cornerDecoration}
      <div className="relative z-10">
        <CardContent />
      </div>
    </div>
  );
}
