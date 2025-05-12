import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-panda-pink to-panda-purple text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find your perfect study-abroad path
          </h1>
          <p className="text-xl mb-8">
            We guide students to their ideal international education opportunities, from visa support to scholarship applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consult">
              <Button className="px-6 py-6 bg-panda-purple hover:bg-opacity-90 text-white font-semibold rounded-md shadow-lg transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 text-lg">
                Book a free consult
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
