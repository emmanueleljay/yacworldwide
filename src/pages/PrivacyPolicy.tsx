import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Lock, Eye, Phone, FileText, Users, Server } from "lucide-react";
import privacyBanner from "@/assets/privacy-banner.jpg";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative py-24 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${privacyBanner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/">
            <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Your Privacy Matters
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Effective Date: October 2020
            </p>
          </div>
        </div>
      </header>

      {/* Introduction */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-card">
              <p className="text-foreground text-lg leading-relaxed">
                Welcome to Yoruba Action Council ("we," "us," or "our"). We are committed to protecting 
                your privacy and ensuring the security of your personal information. This Privacy Policy 
                outlines how we collect, use, share, and safeguard your data when you use our services. 
                By using our services, you consent to the practices described in this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Section 1 */}
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                    1. Information We Collect
                  </h2>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We may collect the following types of information when you use our website creation services:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Personal Information:</span>
                    <span className="text-muted-foreground"> We may collect personal information, including your name, email address, phone number, and business information when you sign up for our services or communicate with us.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Payment Information:</span>
                    <span className="text-muted-foreground"> We may collect payment data for purchases, orders, or service requests, including valid credit card numbers, brands, and expiration dates. We store only very limited, if any, payment information that we collect. Otherwise, all financial information is stored by our payment processor, and you are encouraged to review their privacy policy and contact them directly for responses to your questions.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Website Information:</span>
                    <span className="text-muted-foreground"> In creating websites, we may collect content, images, and other materials provided by you to design and customize your website.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Technical Information:</span>
                    <span className="text-muted-foreground"> We collect information related to your website's usage, such as IP addresses, browser type, and access times.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Cookies and Tracking Technologies:</span>
                    <span className="text-muted-foreground"> We use cookies and similar technologies to track user behavior on our website. You can manage your cookie preferences through your browser settings.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                    2. How We Use Your Information
                  </h2>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We use your information for the following purposes:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Website Creation:</span>
                    <span className="text-muted-foreground"> We use your provided data and materials to create and customize websites according to your specifications.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Communication:</span>
                    <span className="text-muted-foreground"> We use your contact information to respond to your inquiries, provide support, and keep you updated on the progress of your website project.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Improvement of Services:</span>
                    <span className="text-muted-foreground"> We may use your website usage data to enhance and optimize our services and user experience.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Legal Compliance:</span>
                    <span className="text-muted-foreground"> We process your data to comply with legal obligations and protect our rights.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                    3. How We Share Your Information
                  </h2>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We may share your information with third parties under the following circumstances:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Service Providers:</span>
                    <span className="text-muted-foreground"> We may share your data with third-party service providers who assist us in delivering our services, such as hosting providers, domain registrars, and payment processors. These providers are contractually obligated to protect your data.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Legal Requirements:</span>
                    <span className="text-muted-foreground"> We may disclose your information if required by law or to protect our rights, privacy, safety, or property.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                    4. Security of Your Information
                  </h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We take appropriate measures to protect your personal information from unauthorized access, 
                disclosure, alteration, or destruction. We use encryption, access controls, and regular 
                security assessments to safeguard your data.
              </p>
            </div>

            {/* Section 5 */}
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                    5. Your Choices and Rights
                  </h2>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Access and Correction:</span>
                    <span className="text-muted-foreground"> You have the right to access and correct your personal information. You can do this by contacting us at 732-595-7420.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Opt-Out:</span>
                    <span className="text-muted-foreground"> You can opt out of receiving promotional communications from us at any time by following the instructions provided in the communication.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                    6. Changes to this Privacy Policy
                  </h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices 
                or for legal reasons. We will notify you of any significant changes via email or a notice 
                on our website.
              </p>
            </div>

            {/* Section 7 - Contact */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 lg:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                    7. Contact Us
                  </h2>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have any questions or concerns regarding this Privacy Policy, please contact us:
              </p>
              <a 
                href="tel:732-595-7420" 
                className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:underline"
              >
                <Phone className="h-5 w-5" />
                732-595-7420
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <Link to="/">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
