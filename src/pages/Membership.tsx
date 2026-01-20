import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Target, Users, GraduationCap, Crown, Award, Star } from "lucide-react";
import { AnimatedSection, AnimatedList } from "@/hooks/useScrollAnimation";
import membershipImage from "@/assets/membership.jpg";

const Membership = () => {
  const { t } = useTranslation();

  const objectives = [
    "Advance the progress of Yoruba descendants globally.",
    "Use resources to support the empowerment of Yorubas globally.",
    "Promote the active engagement and participation of the youth (Age 18-35-year bracket) in YAC activities.",
    "Serve as an advisory organization to other Pan-Yoruba organizations.",
    "Promote and support democracy at all levels.",
    "Encourage and deliberate on issues paramount to the Yoruba people.",
    "Foster the economic empowerment of Yorubas globally.",
    "Work with other organizations across the globe in general and Nigeria, in particular, to promote peace, stability, justice, and unity while working fervently for the promotion of the Yoruba interest.",
    "Engage in activities worldwide, that promote and ensure social justice, equity, business opportunities, and interests of the Yoruba.",
    "Work diligently to bridge the information gap between the Yoruba and the world.",
    "Ensure the advancement of Yoruba traditional institutions.",
    "Promote the advancement of Yoruba as a giant in politics, economics, and social initiatives.",
    "Provide awareness about our civic rights as Yoruba citizens.",
    "Honor and respect other peoples and cultures around the world as God's creation.",
    "Facilitate and foster Yoruba unity, strategic growth, and political visibility.",
  ];

  const membershipCategories = [
    {
      name: "Foundation Member",
      icon: Crown,
      price: "$500",
      period: "one-time",
      description: "Membership obtained at the inception of YAC. Foundation Members are the pillars of our organization.",
      features: [
        "Charter membership status",
        "Full voting rights",
        "Advisory council eligibility",
        "Wall of Honor recognition",
        "All member benefits included",
      ],
      note: "Registration fee due before the inauguration of the substantive Executive of YAC.",
      popular: false,
    },
    {
      name: "ANYAM",
      subtitle: "Accredited Non-Youth Adult Member",
      icon: Users,
      price: "$500",
      period: "one-time",
      description: "For adults above the age of 35, gainfully employed, and earning an income more than the NJ minimum wage.",
      features: [
        "Full membership status",
        "Voting rights in elections",
        "Mentorship opportunities",
        "Leadership participation",
        "All member benefits included",
      ],
      note: "Requires referral by two foundation members.",
      popular: false,
    },
    {
      name: "AYM - High Income",
      subtitle: "Accredited Youth Member",
      icon: Star,
      price: "$250",
      period: "one-time",
      description: "For youth (18-35 years) gainfully employed and earning an income higher than the NJ minimum wage ($8.50/hr).",
      features: [
        "Full youth membership",
        "Youth program participation",
        "Leadership development",
        "Networking opportunities",
        "Mentoring by senior members",
      ],
      note: "Requires referral by two foundation members.",
      popular: true,
    },
    {
      name: "AYM - Minimum Wage",
      subtitle: "Accredited Youth Member",
      icon: Star,
      price: "$100",
      period: "one-time",
      description: "For youth (18-35 years) employed and earning the NJ minimum wage or less.",
      features: [
        "Full youth membership",
        "Youth program participation",
        "Leadership development",
        "Networking opportunities",
        "Mentoring by senior members",
      ],
      note: "Requires referral by two foundation members.",
      popular: false,
    },
    {
      name: "Student - Graduate",
      subtitle: "Student Membership",
      icon: GraduationCap,
      price: "$50",
      period: "one-time",
      description: "For graduate students committed to serving YAC's mission and developing as future leaders.",
      features: [
        "Student membership status",
        "Mentoring services",
        "Youth program access",
        "Leadership training",
        "Service opportunities",
      ],
      note: "Students are called to serve in capacities that promote YAC's mission.",
      popular: false,
    },
    {
      name: "Student - Undergraduate",
      subtitle: "Student Membership",
      icon: GraduationCap,
      price: "$25",
      period: "one-time",
      description: "For undergraduate students eager to connect with their heritage and develop leadership skills.",
      features: [
        "Student membership status",
        "Mentoring services",
        "Youth program access",
        "Leadership training",
        "Service opportunities",
      ],
      note: "Students are called to serve in capacities that promote YAC's mission.",
      popular: false,
    },
    {
      name: "Honorary Member",
      icon: Award,
      price: "Free",
      period: "by nomination",
      description: "Highly distinguished Yoruba leaders nominated and ratified by the YAC membership.",
      features: [
        "Honorary membership status",
        "Advisory role opportunities",
        "Recognition and honor",
        "Moral support capacity",
        "Non-financial contributions welcome",
      ],
      note: "Admitted free through nomination and ratification process.",
      popular: false,
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
            {t('common.backToHome')}
          </Link>
          <AnimatedSection className="max-w-3xl">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              {t('membership.badge')}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mt-4 mb-6">
              {t('membership.title')}
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              {t('membership.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </header>

      {/* Image & Intro Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection animation="scale-in" className="relative">
              <div className="absolute -inset-4 bg-gold-gradient rounded-2xl opacity-20 blur-xl"></div>
              <img 
                src={membershipImage} 
                alt="YAC members celebrating in traditional Yoruba attire" 
                className="relative rounded-2xl shadow-elevated w-full h-auto object-cover"
              />
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                {t('membership.introLabel')}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                {t('membership.introTitle')}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {t('membership.introText1')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('membership.introText2')}
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              {t('membership.objectivesLabel')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
              {t('membership.objectivesTitle')}
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              {t('membership.objectivesSubtitle')}
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedList className="grid gap-4" staggerDelay={80}>
              {objectives.map((objective, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-warm hover:shadow-elevated transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-foreground leading-relaxed pt-2">
                    {objective}
                  </p>
                </div>
              ))}
            </AnimatedList>
          </div>
        </div>
      </section>

      {/* Membership Categories */}
      <section className="py-20 lg:py-28 bg-section-gradient">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              {t('membership.categoriesLabel')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
              {t('membership.categoriesTitle')}
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              {t('membership.categoriesSubtitle')}
            </p>
          </AnimatedSection>

          <AnimatedList
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            staggerDelay={100}
          >
            {membershipCategories.map((category) => (
              <div
                key={category.name}
                className={`relative bg-card rounded-2xl p-6 shadow-warm hover:shadow-elevated transition-all duration-300 flex flex-col ${
                  category.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {category.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gold-gradient text-primary-foreground px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                      {t('membership.youthTier')}
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center mx-auto mb-4">
                    <category.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {category.name}
                  </h3>
                  {category.subtitle && (
                    <p className="text-muted-foreground text-xs mt-1">
                      {category.subtitle}
                    </p>
                  )}
                  <div className="flex items-baseline justify-center gap-1 mt-3">
                    <span className="font-serif text-3xl font-bold text-primary">
                      {category.price}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {category.period}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm text-center mb-4 leading-relaxed">
                  {category.description}
                </p>
                <ul className="space-y-3 mb-6 flex-grow">
                  {category.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-accent" />
                      </div>
                      <span className="text-foreground text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>
                {category.note && (
                  <p className="text-muted-foreground text-xs italic border-t border-border pt-4 mt-auto">
                    {category.note}
                  </p>
                )}
              </div>
            ))}
          </AnimatedList>

          <AnimatedSection className="mt-12 max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-warm">
              <h3 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                {t('membership.importantInfo')}
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                {(t('membership.infoItems', { returnObjects: true }) as string[]).map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                {t('membership.registerLabel')}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
                {t('membership.registerTitle')}
              </h2>
              <p className="text-muted-foreground text-lg mt-4">
                {t('membership.registerSubtitle')}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <form className="bg-card rounded-2xl p-8 shadow-warm space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('membership.form.firstName')}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder={t('membership.form.firstName')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('membership.form.lastName')}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder={t('membership.form.lastName')}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('membership.form.email')}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder={t('membership.form.email')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('membership.form.phone')}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder={t('membership.form.phone')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('membership.form.category')}
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option value="">{t('membership.form.selectCategory')}</option>
                    {membershipCategories.map((cat) => (
                      <option key={cat.name} value={cat.name}>
                        {cat.name} - {cat.price}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('membership.form.message')}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder={t('membership.form.messagePlaceholder')}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gold-gradient hover:opacity-90 text-primary-foreground py-3"
                >
                  {t('membership.form.submit')}
                </Button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              {t('membership.ctaTitle')}
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              {t('membership.ctaText')}
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">{t('membership.ctaButton')}</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default Membership;