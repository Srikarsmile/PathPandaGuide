import { Layout } from "@/components/layout";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Lock, ShieldCheck, HomeIcon } from "lucide-react";

export default function PrivacyTerms() {
  return (
    <Layout title="Privacy & Terms">
      <Helmet>
        <title>Privacy Policy & Terms of Service | Path Panda</title>
        <meta name="description" content="Review Path Panda's Privacy Policy and Terms of Service for our university application support services." />
        <meta property="og:title" content="Privacy Policy & Terms of Service | Path Panda" />
        <meta property="og:description" content="Review Path Panda's Privacy Policy and Terms of Service for our university application support services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pathpanda.com/privacy-terms" />
      </Helmet>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-panda-purple mb-4">Your Data & Our Guidelines</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            How we protect your information and the rules of using Pathpanda.
          </p>
        </div>

        <Tabs defaultValue="privacy" className="w-full mb-12">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-panda-lav/10">
              <TabsTrigger value="privacy" className="data-[state=active]:bg-panda-purple data-[state=active]:text-white">
                <Lock className="mr-2 h-4 w-4" /> Privacy Policy
              </TabsTrigger>
              <TabsTrigger value="terms" className="data-[state=active]:bg-panda-purple data-[state=active]:text-white">
                <ShieldCheck className="mr-2 h-4 w-4" /> Terms of Service
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="privacy">
            <div className="prose dark:prose-invert max-w-none">
              <h2>Privacy Policy</h2>
              <p className="text-muted-foreground text-sm">Last updated: May 21, 2025</p>

              <h3>1. Introduction</h3>
              <p>
                At Pathpanda, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. Please read this policy carefully to understand our practices regarding your personal data.
              </p>

              <h3>2. Information We Collect</h3>
              <p>We may collect several types of information from and about users of our platform, including:</p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone number, nationality, academic history, test scores, and other information you provide when creating an account or using our services.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you interact with our platform, including pages visited, features used, and time spent.
                </li>
                <li>
                  <strong>Device Information:</strong> Information about the device you use to access our platform, including IP address, browser type, and operating system.
                </li>
              </ul>

              <h3>3. How We Use Your Information</h3>
              <p>We use the information we collect for various purposes, including:</p>
              <ul>
                <li>Providing, maintaining, and improving our services</li>
                <li>Matching you with suitable universities and programs</li>
                <li>Communicating with you about our services</li>
                <li>Processing and managing your applications</li>
                <li>Analyzing usage patterns to enhance user experience</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h3>4. Data Sharing and Disclosure</h3>
              <p>We may share your information with:</p>
              <ul>
                <li>Universities and educational institutions with your explicit consent</li>
                <li>Service providers who assist us in operating our platform</li>
                <li>Legal authorities when required by law</li>
              </ul>
              <p>We will never sell your personal information to third parties.</p>

              <h3>5. Data Security</h3>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security assessments.
              </p>

              <h3>6. Your Privacy Rights</h3>
              <p>Depending on your location, you may have certain rights regarding your personal data, including:</p>
              <ul>
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to delete your personal information</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
              </ul>
              <p>To exercise these rights, please contact us at privacy@pathpanda.com.</p>

              <h3>7. Changes to This Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="terms">
            <div className="prose dark:prose-invert max-w-none">
              <h2>Terms of Service</h2>
              <p className="text-muted-foreground text-sm">Last updated: May 21, 2025</p>

              <h3>1. Acceptance of Terms</h3>
              <p>
                By accessing or using Pathpanda's platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>

              <h3>2. Description of Services</h3>
              <p>
                Pathpanda provides university matching, application support, and educational guidance services for international students seeking to study in the UK, USA, and Canada. Our services include but are not limited to:
              </p>
              <ul>
                <li>University and program matching based on student profiles</li>
                <li>Application preparation and submission assistance</li>
                <li>Personal statement and essay editing</li>
                <li>Interview preparation</li>
                <li>Scholarship application guidance</li>
              </ul>

              <h3>3. User Accounts</h3>
              <p>
                To access certain features of our platform, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>

              <h3>4. User Responsibilities</h3>
              <p>When using our services, you agree to:</p>
              <ul>
                <li>Provide accurate and complete information</li>
                <li>Update your information as needed to keep it current</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect the intellectual property rights of others</li>
                <li>Not use our services for any unlawful or unauthorized purpose</li>
              </ul>

              <h3>5. Payment and Refunds</h3>
              <p>
                Payment terms for our services are outlined during the purchase process. Refunds are considered on a case-by-case basis according to our refund policy, which is available upon request.
              </p>

              <h3>6. Limitation of Liability</h3>
              <p>
                While we strive to provide accurate information and quality services, Pathpanda does not guarantee admission to any university or program. We are not liable for any decisions made by educational institutions regarding your applications.
              </p>

              <h3>7. Intellectual Property</h3>
              <p>
                All content on our platform, including text, graphics, logos, and software, is the property of Pathpanda or its content suppliers and is protected by intellectual property laws.
              </p>

              <h3>8. Termination</h3>
              <p>
                We reserve the right to terminate or suspend your account and access to our services at our discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
              </p>

              <h3>9. Changes to These Terms</h3>
              <p>
                We may update these Terms of Service from time to time. We will notify you of any changes by posting the new terms on this page and updating the "Last updated" date.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-8">
          <Link href="/">
            <Button variant="outline" className="border-panda-purple text-panda-purple hover:bg-panda-purple/10">
              <HomeIcon className="mr-2 h-4 w-4" /> Return to Home
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}