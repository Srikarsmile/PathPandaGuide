import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgClass: string;
  iconColorClass: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  iconBgClass,
  iconColorClass
}: FeatureCardProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 hover:transform hover:scale-105">
      <div className={`w-16 h-16 ${iconBgClass} rounded-full flex items-center justify-center mb-4`}>
        <Icon className={`${iconColorClass} text-2xl`} />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
