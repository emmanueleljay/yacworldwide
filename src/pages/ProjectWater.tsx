import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplet, MapPin, Users, Wrench, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import waterImg from "@/assets/water.jpg";

const ProjectWater = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: Droplet,
      title: t("projects.water.features.cleanWater.title"),
      description: t("projects.water.features.cleanWater.description"),
    },
    {
      icon: MapPin,
      title: t("projects.water.features.strategicLocations.title"),
      description: t("projects.water.features.strategicLocations.description"),
    },
    {
      icon: Users,
      title: t("projects.water.features.communityTraining.title"),
      description: t("projects.water.features.communityTraining.description"),
    },
    {
      icon: Wrench,
      title: t("projects.water.features.maintenance.title"),
      description: t("projects.water.features.maintenance.description"),
    },
  ];

  const impact = [
    { number: "20+", label: t("projects.water.stats.boreholesInstalled") },
    { number: "50K+", label: t("projects.water.stats.peopleServed") },
    { number: "30", label: t("projects.water.stats.communitiesReached") },
    { number: "100%", label: t("projects.water.stats.operationalRate") },
  ];

  const communities = [
    { name: t("projects.water.communities.okeOgun.name"), status: t("projects.water.communities.okeOgun.status"), year: "2023" },
    { name: t("projects.water.communities.ekiti.name"), status: t("projects.water.communities.ekiti.status"), year: "2022" },
    { name: t("projects.water.communities.oyo.name"), status: t("projects.water.communities.oyo.status"), year: "2024" },
    { name: t("projects.water.communities.osun.name"), status: t("projects.water.communities.osun.status"), year: "2024" },
  ];

  const donationTiers = t("projects.water.donationTiers", { returnObjects: true }) as { amount: string; impact: string }[];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${waterImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              {t("projects.water.badge")}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              {t("projects.water.title")} <span className="text-gradient-gold">{t("projects.water.titleHighlight")}</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              {t("projects.water.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl">
                <Heart className="w-5 h-5" />
                {t("projects.water.fundBorehole")}
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/#projects">{t("common.viewAllProjects")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impact.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-accent-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-accent-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              {t("projects.water.approachTitle")}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t("projects.water.approachSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="bg-card p-8 rounded-2xl shadow-warm hover:shadow-elevated transition-all duration-300 group flex gap-6"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Locations Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src={waterImg} 
                alt="Water Borehole Project" 
                className="rounded-2xl shadow-elevated w-full"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t("projects.water.locationsTitle")}
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {t("projects.water.locationsSubtitle")}
              </p>
              
              <div className="space-y-4">
                {communities.map((community) => (
                  <div 
                    key={community.name}
                    className="flex items-center justify-between p-4 bg-card rounded-xl shadow-warm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <Droplet className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{community.name}</h3>
                        <p className="text-muted-foreground text-sm">{community.year}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      community.status === t("projects.water.statusCompleted") 
                        ? 'bg-green-100 text-green-700' 
                        : community.status === t("projects.water.statusInProgress")
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {community.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Help Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              {t("projects.water.howToHelpTitle")}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t("projects.water.howToHelpSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {donationTiers.map((tier) => (
              <div 
                key={tier.amount}
                className="bg-card p-8 rounded-2xl shadow-warm hover:shadow-elevated transition-all duration-300 text-center"
              >
                <div className="text-3xl font-serif font-bold text-accent mb-4">{tier.amount}</div>
                <p className="text-muted-foreground">{tier.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            {t("projects.water.ctaTitle")}
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            {t("projects.water.ctaText")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl">
              <Heart className="w-5 h-5" />
              {t("common.donateNow")}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/membership">{t("common.becomeMember")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectWater;
