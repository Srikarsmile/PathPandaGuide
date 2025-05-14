import Header from "@/components/header";
import Footer from "@/components/footer";
import { getAllBlogPosts } from "@/lib/blog";
import BlogCard from "@/components/blog-card";
import { Helmet } from "react-helmet";

export default function Blog() {
  const blogPosts = getAllBlogPosts();

  return (
    <>
      <Helmet>
        <title>Blog | Path Panda</title>
        <meta name="description" content="Stay updated with the latest information on study abroad opportunities, visa changes, scholarships, and student experiences." />
        <meta property="og:title" content="Path Panda Blog" />
        <meta property="og:description" content="Expert insights and advice for international students." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pathpanda.com/blog" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <div className="bg-gradient-to-r from-panda-pink to-panda-purple dark:from-gray-800 dark:to-gray-900 text-white py-12 transition-colors duration-300">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold mb-4 text-center">Path Panda Blog</h1>
              <p className="text-xl max-w-2xl mx-auto text-center">
                Insights, guides, and updates for international students navigating the world of education abroad.
              </p>
            </div>
          </div>
          
          <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
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
        </main>
        
        <Footer />
      </div>
    </>
  );
}
