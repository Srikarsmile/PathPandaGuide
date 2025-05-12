import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <section className="bg-panda-purple py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to start your study abroad journey?</h2>
          <p className="text-xl text-white/90 mb-8">Get personalized guidance from our experienced consultants.</p>
          <Link href="/consult">
            <Button className="inline-block px-8 py-7 bg-panda-yellow text-panda-purple font-bold rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-200 transform hover:-translate-y-1 text-lg">
              Book your free consultation today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
