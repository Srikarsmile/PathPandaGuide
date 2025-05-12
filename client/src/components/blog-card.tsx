import { Link } from "wouter";

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  categoryColor: string;
  imageUrl: string;
  imageAlt: string;
}

export default function BlogCard({
  slug,
  title,
  description,
  date,
  category,
  categoryColor,
  imageUrl,
  imageAlt
}: BlogCardProps) {
  return (
    <article className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden">
      <img 
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className={`${categoryColor} text-sm font-semibold mb-2`}>{category}</div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 dark:text-gray-400 text-sm">{date}</span>
          <Link href={`/blog/${slug}`}>
            <span className="text-panda-purple dark:text-panda-lav font-medium hover:underline cursor-pointer">Read more</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
