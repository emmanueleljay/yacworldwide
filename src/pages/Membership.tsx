import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Users, Globe, BookOpen, Heart, Award, Calendar } from "lucide-react";

const Membership = () => {
  const benefits = [
    {
      icon: Users,
      title: "Global Network",
      description: "Connect with Yoruba professionals, entrepreneurs, and cultural advocates worldwide.",
    },
    {
      icon: Globe,
      title: "Cultural Events",
      description: "Exclusive access to cultural festivals, heritage celebrations, and community gatherings.",
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Access language courses, historical archives, and cultural preservation materials.",
    },
    {
      icon: Heart,
      title: "Community Support",
      description: "Be part of initiatives supporting Yoruba communities through education and development.",
    },
    {
      icon: Award,
      title: "Leadership Opportunities",
      description: "Participate in council activities and contribute to decision-making processes.",
    },
    {
      icon: Calendar,
      title: "Member Programs",
      description: "Join mentorship programs, professional development workshops, and networking events.",
    },
  ];

  const tiers = [
    {
      name: "Individual",
      price: "$50",
      period: "per year",
      description: "For individuals passionate about Yoruba heritage",
      features: [
        "Membership card & certificate",
        "Monthly newsletter",
        "Access to member events",
        "Voting rights in elections",
        "Online resource library",
      ],
      popular: false,
    },
    {
      name: "Family",
      price: "$100",
      period: "per year",
      description: "For households sharing our cultural values",
      features: [
        "All Individual benefits",
        "Up to 4 family members",
        "Family event discounts",
        "Youth program access",
        "Priority event registration",
        "Annual family recognition",
      ],
      popular: true,
    },
    {
      name: "Lifetime",
      price: "$500",
      period: "one-time",
      description: "Permanent commitment to our mission",
      features: [
        "All Family benefits",
        "Lifetime membership status",
        "VIP event access",
        "Wall of Honor recognition",
        "Advisory council eligibility",
        "Legacy member benefits",
        "Special commemorative gifts",
      ],
      popular: false,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
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
              Join Us
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mt-4 mb-6">
              Become a Member
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              Join thousands of Yoruba advocates worldwide in preserving our heritage, 
              advancing our community, and building bridges across generations.
            </p>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Why Join
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
              Membership Benefits
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Experience the full range of opportunities available to YAC members
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-card rounded-2xl p-8 shadow-warm hover:shadow-elevated transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 lg:py-28 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Membership Options
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
              Choose Your Path
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              Select the membership tier that best fits your commitment to the Yoruba community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`relative bg-card rounded-2xl p-8 shadow-warm hover:shadow-elevated transition-all duration-300 ${
                  tier.popular ? "ring-2 ring-primary scale-105" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gold-gradient text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-serif text-4xl font-bold text-primary">
                      {tier.price}
                    </span>
                    <span className="text-muted-foreground">/{tier.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-3">
                    {tier.description}
                  </p>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.popular ? "hero" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Select {tier.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Get Started
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
                Register Your Interest
              </h2>
              <p className="text-muted-foreground text-lg mt-4">
                Fill out the form below and our membership team will contact you
              </p>
            </div>

            <form className="bg-card rounded-2xl p-8 shadow-warm space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Membership Tier Interest
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option value="">Select a membership tier</option>
                  <option value="individual">Individual - $50/year</option>
                  <option value="family">Family - $100/year</option>
                  <option value="lifetime">Lifetime - $500 one-time</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Why do you want to join YAC?
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[120px]"
                  placeholder="Tell us about your interest in joining..."
                />
              </div>
              <Button variant="hero" size="xl" className="w-full">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Questions About Membership?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Our team is here to help you choose the right membership option and 
            answer any questions you may have about joining YAC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Contact Us
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Membership;
