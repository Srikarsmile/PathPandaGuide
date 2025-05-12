import { Link } from "wouter";
import BlogCard from "./blog-card";

// Sample blog posts for preview
const blogPosts = [
  {
    slug: "visa-changes",
    title: "Important Visa Changes for International Students in 2024",
    description: "Stay updated on the latest visa policy changes affecting international students worldwide.",
    date: "May 15, 2024",
    category: "News",
    categoryColor: "text-panda-pink",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    imageAlt: "Student studying abroad"
  },
  {
    slug: "scholarships",
    title: "Top Scholarships for International Students in 2024",
    description: "Explore fully-funded scholarship opportunities in the US, UK, Canada, and Australia.",
    date: "May 10, 2024",
    category: "Guide",
    categoryColor: "text-panda-yellow",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    imageAlt: "International student scholarship opportunities"
  },
  {
    slug: "best-cities",
    title: "Best Cities for International Students: 2024 Edition",
    description: "Discover the top-rated cities worldwide for academics, affordability, and quality of life.",
    date: "May 5, 2024",
    category: "Destinations",
    categoryColor: "text-panda-lav",
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    imageAlt: "London study abroad destination"
  }
];

export default function BlogPreview() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Latest from our blog</h2>
          <Link href="/blog">
            <span className="text-panda-purple dark:text-panda-lav font-medium hover:underline cursor-pointer">View all articles</span>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              slug={post.slug}
              title={post.title}
              description={post.description}
              date={post.date}
              category={post.category}
              categoryColor={post.categoryColor}
              imageUrl={post.imageUrl}
              imageAlt={post.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
