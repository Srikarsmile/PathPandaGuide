import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/">
              <span className="flex items-center mb-4 text-panda-purple dark:text-panda-lav font-bold text-2xl cursor-pointer">
                Path Panda
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Your trusted guide to international education opportunities.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-panda-purple dark:hover:text-panda-pink transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-panda-purple dark:hover:text-panda-pink transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-panda-purple dark:hover:text-panda-pink transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-panda-purple dark:hover:text-panda-pink transition-colors">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog">
                  <span className="text-gray-600 dark:text-gray-400 hover:text-panda-purple dark:hover:text-white transition-colors cursor-pointer">Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/guides">
                  <span className="text-gray-600 dark:text-gray-400 hover:text-panda-purple dark:hover:text-white transition-colors cursor-pointer">Country Guides</span>
                </Link>
              </li>
              <li>
                <Link href="/scholarships">
                  <span className="text-gray-600 dark:text-gray-400 hover:text-panda-purple dark:hover:text-white transition-colors cursor-pointer">Scholarships</span>
                </Link>
              </li>
              <li>
                <Link href="/visa-info">
                  <span className="text-gray-600 dark:text-gray-400 hover:text-panda-purple dark:hover:text-white transition-colors cursor-pointer">Visa Information</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-gray-600 dark:text-gray-400 hover:text-panda-purple dark:hover:text-white transition-colors cursor-pointer">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <span className="text-gray-600 dark:text-gray-400 hover:text-panda-purple dark:hover:text-white transition-colors cursor-pointer">Our Team</span>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <span className="text-gray-600 dark:text-gray-400 hover:text-panda-purple dark:hover:text-white transition-colors cursor-pointer">Careers</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-600 dark:text-gray-400 hover:text-panda-purple dark:hover:text-white transition-colors cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-terms">
                  <span className="text-gray-600 dark:text-gray-400 hover:text-panda-purple dark:hover:text-white transition-colors cursor-pointer">Privacy & Terms</span>
                </Link>
              </li>
              <li>
                <Link href="/success-stories">
                  <span className="text-gray-600 dark:text-gray-400 hover:text-panda-purple dark:hover:text-white transition-colors cursor-pointer">Success Stories</span>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <span className="text-gray-600 dark:text-gray-400 hover:text-panda-purple dark:hover:text-white transition-colors cursor-pointer">FAQ</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Path Panda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
