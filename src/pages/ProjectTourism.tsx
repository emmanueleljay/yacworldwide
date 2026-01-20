import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Camera, Calendar, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import tourismImg from "@/assets/tourism.jpg";

const ProjectTourism = () => {
  const { t } = useTranslation();
  const highlights = [
    {
      icon: MapPin,
      title: t("projects.tourism.highlights.heritageSites.title"),
      description: t("projects.tourism.highlights.heritageSites.description"),
    },
    {
      icon: Camera,
      title: t("projects.tourism.highlights.culturalExperiences.title"),
      description: t("projects.tourism.highlights.culturalExperiences.description"),
    },
    {
      icon: Calendar,
      title: t("projects.tourism.highlights.guidedTours.title"),
      description: t("projects.tourism.highlights.guidedTours.description"),
    },
    {
      icon: Users,
      title: t("projects.tourism.highlights.communityImpact.title"),
      description: t("projects.tourism.highlights.communityImpact.description"),
    },
  ];

  const destinations = [
    { name: t("projects.tourism.destinations.ileIfe.name"), description: t("projects.tourism.destinations.ileIfe.description") },
    { name: t("projects.tourism.destinations.oyoEmpire.name"), description: t("projects.tourism.destinations.oyoEmpire.description") },
    { name: t("projects.tourism.destinations.osunOsogbo.name"), description: t("projects.tourism.destinations.osunOsogbo.description") },
    { name: t("projects.tourism.destinations.idanreHills.name"), description: t("projects.tourism.destinations.idanreHills.description") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${tourismImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              {t("projects.tourism.badge")}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              {t("projects.tourism.title")} <span className="text-gradient-gold">{t("projects.tourism.titleHighlight")}</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              {t("projects.tourism.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/donate">
                  <Heart className="w-5 h-5" />
                  {t("projects.tourism.supportProject")}
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/#projects">{t("common.viewAllProjects")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              {t("projects.tourism.whatWeOffer")}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t("projects.tourism.whatWeOfferSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item) => (
              <div 
                key={item.title}
                className="bg-card p-8 rounded-2xl shadow-warm hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t("projects.tourism.destinationsTitle")}
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {t("projects.tourism.destinationsSubtitle")}
              </p>
              
              <div className="space-y-6">
                {destinations.map((dest, index) => (
                  <div 
                    key={dest.name}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{dest.name}</h3>
                      <p className="text-muted-foreground text-sm">{dest.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src={tourismImg} 
                alt="Yorubaland Tourism" 
                className="rounded-2xl shadow-elevated w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-warm">
                <div className="text-3xl font-serif font-bold text-primary mb-1">50+</div>
                <div className="text-muted-foreground text-sm">{t("projects.tourism.heritageSites")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            {t("projects.tourism.ctaTitle")}
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            {t("projects.tourism.ctaText")}
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

export default ProjectTourism;
