import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Users, GraduationCap, Droplets, Globe, Check } from "lucide-react";
import membershipImage from "@/assets/membership.jpg";

const Donate = () => {
  const { t } = useTranslation();
  const donationTiers = [
    {
      name: "Supporter",
      amount: "$25",
      icon: Heart,
      description: "Help us continue our mission to advance Yoruba heritage and culture worldwide.",
      impact: [
        "Supports educational materials",
        "Helps fund community events",
        "Contributes to cultural preservation",
      ],
    },
    {
      name: "Advocate",
      amount: "$50",
      icon: Users,
      description: "Your generosity enables us to expand our reach and impact more communities.",
      impact: [
        "Funds youth mentorship programs",
        "Supports advocacy initiatives",
        "Enables community outreach",
      ],
      popular: true,
    },
    {
      name: "Champion",
      amount: "$100",
      icon: GraduationCap,
      description: "Make a significant impact on our educational and empowerment programs.",
      impact: [
        "Sponsors student scholarships",
        "Funds leadership development",
        "Supports educational projects",
      ],
    },
    {
      name: "Visionary",
      amount: "$250",
      icon: Globe,
      description: "Help us create lasting change through major initiatives and projects.",
      impact: [
        "Funds major project initiatives",
        "Supports international partnerships",
        "Enables large-scale impact",
      ],
    },
  ];

  const impactAreas = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Supporting scholarships and educational programs for Yoruba youth globally.",
    },
    {
      icon: Droplets,
      title: "Water Projects",
      description: "Providing clean water through borehole construction in Yoruba communities.",
    },
    {
      icon: Globe,
      title: "Cultural Preservation",
      description: "Preserving and promoting Yoruba language, arts, and traditions.",
    },
    {
      icon: Users,
      title: "Community Development",
      description: "Empowering Yoruba communities through economic and social initiatives.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
      {/* Header */}
      <header className="bg-hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Support Our Mission
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mt-4 mb-6">
              Make a Donation
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              Your generous contribution helps us advance the progress of Yoruba descendants 
              globally and preserve our rich cultural heritage for future generations.
            </p>
          </div>
        </div>
      </header>

      {/* Impact Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="absolute -inset-4 bg-gold-gradient rounded-2xl opacity-20 blur-xl"></div>
              <img 
                src={membershipImage} 
                alt="YAC community members" 
                className="relative rounded-2xl shadow-elevated w-full h-auto object-cover"
              />
            </div>
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Your Impact
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Every Contribution Matters
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                The Yoruba Action Council is a 501(c)3 nonprofit organization. Your donations 
                are tax-deductible and directly support our mission to empower Yoruba 
                descendants worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From educational scholarships to community development projects, your 
                generosity enables us to create meaningful change in the lives of Yoruba 
                people across the globe.
              </p>
            </div>
          </div>

          {/* Impact Areas */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Where Your Donation Goes
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
              Areas of Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {impactAreas.map((area, index) => (
              <div
                key={area.title}
                className="bg-card rounded-2xl p-6 shadow-warm hover:shadow-elevated transition-all duration-300 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center mx-auto mb-4">
                  <area.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-20 lg:py-28 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Choose Your Contribution
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
              Donation Options
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Select a giving level that works for you, or enter a custom amount
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {donationTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`relative bg-card rounded-2xl p-6 shadow-warm hover:shadow-elevated transition-all duration-300 flex flex-col ${
                  tier.popular ? "ring-2 ring-primary" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gold-gradient text-primary-foreground px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center mx-auto mb-4">
                    <tier.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mt-3">
                    <span className="font-serif text-3xl font-bold text-primary">
                      {tier.amount}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm text-center mb-4 leading-relaxed">
                  {tier.description}
                </p>
                <ul className="space-y-3 mb-6 flex-grow">
                  {tier.impact.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-accent-foreground" />
                      </div>
                      <span className="text-foreground text-xs">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-gold-gradient hover:opacity-90 text-primary-foreground"
                  disabled
                >
                  Donate {tier.amount}
                </Button>
              </div>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="max-w-xl mx-auto bg-card rounded-2xl p-8 shadow-warm">
            <div className="text-center mb-6">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                Custom Amount
              </h3>
              <p className="text-muted-foreground">
                Enter any amount you'd like to donate
              </p>
            </div>
            <div className="flex gap-4">
              <div className="relative flex-grow">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                  $
                </span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full pl-8 pr-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  min="1"
                />
              </div>
              <Button 
                className="bg-gold-gradient hover:opacity-90 text-primary-foreground px-8"
                disabled
              >
                Donate
              </Button>
            </div>
            <p className="text-center text-muted-foreground text-sm mt-4">
              Payment processing coming soon
            </p>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Other Ways to Support
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              More Ways to Give
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Beyond monetary donations, there are many ways you can support the 
              Yoruba Action Council's mission.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-card rounded-2xl p-6 shadow-warm">
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  Volunteer
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Share your time and talents to help with events, programs, and initiatives.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-warm">
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  Corporate Partnerships
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Partner with YAC through sponsorships, matching gifts, or cause marketing.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-warm">
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  Planned Giving
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Include YAC in your estate planning to leave a lasting legacy.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-muted-foreground mb-4">
                For questions about donations or giving opportunities, please contact us:
              </p>
              <Link to="/contact">
                <Button className="bg-gold-gradient hover:opacity-90 text-primary-foreground">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Info */}
      <section className="py-12 bg-section-gradient border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-muted-foreground text-sm">
              <strong className="text-foreground">Tax-Deductible:</strong> The Yoruba Action Council 
              is a registered 501(c)3 nonprofit organization. All donations are tax-deductible to 
              the fullest extent allowed by law. You will receive a tax receipt for your records.
            </p>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
