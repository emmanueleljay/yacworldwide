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
      name: t('donate.tiers.supporter.name'),
      amount: t('donate.tiers.supporter.amount'),
      icon: Heart,
      description: t('donate.tiers.supporter.description'),
      impact: t('donate.tiers.supporter.impact', { returnObjects: true }) as string[],
    },
    {
      name: t('donate.tiers.advocate.name'),
      amount: t('donate.tiers.advocate.amount'),
      icon: Users,
      description: t('donate.tiers.advocate.description'),
      impact: t('donate.tiers.advocate.impact', { returnObjects: true }) as string[],
      popular: true,
    },
    {
      name: t('donate.tiers.champion.name'),
      amount: t('donate.tiers.champion.amount'),
      icon: GraduationCap,
      description: t('donate.tiers.champion.description'),
      impact: t('donate.tiers.champion.impact', { returnObjects: true }) as string[],
    },
    {
      name: t('donate.tiers.visionary.name'),
      amount: t('donate.tiers.visionary.amount'),
      icon: Globe,
      description: t('donate.tiers.visionary.description'),
      impact: t('donate.tiers.visionary.impact', { returnObjects: true }) as string[],
    },
  ];

  const impactAreas = [
    {
      icon: GraduationCap,
      title: t('donate.areas.education.title'),
      description: t('donate.areas.education.description'),
    },
    {
      icon: Droplets,
      title: t('donate.areas.water.title'),
      description: t('donate.areas.water.description'),
    },
    {
      icon: Globe,
      title: t('donate.areas.cultural.title'),
      description: t('donate.areas.cultural.description'),
    },
    {
      icon: Users,
      title: t('donate.areas.community.title'),
      description: t('donate.areas.community.description'),
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
          <div className="max-w-3xl">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              {t('donate.badge')}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mt-4 mb-6">
              {t('donate.title')}
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              {t('donate.subtitle')}
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
                {t('donate.impactLabel')}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                {t('donate.impactTitle')}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                {t('donate.impactText1')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('donate.impactText2')}
              </p>
            </div>
          </div>

          {/* Impact Areas */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              {t('donate.areasLabel')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
              {t('donate.areasTitle')}
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
              {t('donate.tiersLabel')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
              {t('donate.tiersTitle')}
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
              {t('donate.tiersSubtitle')}
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
                      {t('donate.mostPopular')}
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
                  {t('donate.donateButton')} {tier.amount}
                </Button>
              </div>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="max-w-xl mx-auto bg-card rounded-2xl p-8 shadow-warm">
            <div className="text-center mb-6">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                {t('donate.customAmount')}
              </h3>
              <p className="text-muted-foreground">
                {t('donate.customSubtitle')}
              </p>
            </div>
            <div className="flex gap-4">
              <div className="relative flex-grow">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                  $
                </span>
                <input
                  type="number"
                  placeholder={t('donate.customPlaceholder')}
                  className="w-full pl-8 pr-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  min="1"
                />
              </div>
              <Button 
                className="bg-gold-gradient hover:opacity-90 text-primary-foreground px-8"
                disabled
              >
                {t('donate.donateButton')}
              </Button>
            </div>
            <p className="text-center text-muted-foreground text-sm mt-4">
              {t('donate.comingSoon')}
            </p>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              {t('donate.otherWaysLabel')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              {t('donate.otherWaysTitle')}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t('donate.otherWaysSubtitle')}
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-card rounded-2xl p-6 shadow-warm">
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  {t('donate.volunteer.title')}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t('donate.volunteer.description')}
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-warm">
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  {t('donate.corporate.title')}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t('donate.corporate.description')}
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-warm">
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  {t('donate.planned.title')}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t('donate.planned.description')}
                </p>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-muted-foreground mb-4">
                {t('donate.contactPrompt')}
              </p>
              <Link to="/contact">
                <Button className="bg-gold-gradient hover:opacity-90 text-primary-foreground">
                  {t('donate.contactButton')}
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
              <strong className="text-foreground">Tax-Deductible:</strong> {t('donate.taxInfo')}
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
