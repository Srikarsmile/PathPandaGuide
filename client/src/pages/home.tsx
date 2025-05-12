import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import SearchBar from "@/components/search-bar";
import FeaturesSection from "@/components/features-section";
import BlogPreview from "@/components/blog-preview";
import CTASection from "@/components/cta-section";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Path Panda - Find Your Perfect Study-Abroad Path</title>
        <meta name="description" content="Path Panda guides students to their ideal international education opportunities, from visa support to scholarship applications." />
        <meta property="og:title" content="Path Panda - Find Your Perfect Study-Abroad Path" />
        <meta property="og:description" content="We guide students to their ideal international education opportunities, from visa support to scholarship applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pathpanda.com" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <HeroSection />
          <SearchBar />
          <FeaturesSection />
          <BlogPreview />
          <CTASection />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
