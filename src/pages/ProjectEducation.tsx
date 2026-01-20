import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, BookOpen, Award, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import educationImg from "@/assets/education.jpg";

const ProjectEducation = () => {
  const { t } = useTranslation();
  const programs = [
    {
      icon: GraduationCap,
      title: t("projects.education.programs.scholarships.title"),
      description: t("projects.education.programs.scholarships.description"),
    },
    {
      icon: BookOpen,
      title: t("projects.education.programs.materials.title"),
      description: t("projects.education.programs.materials.description"),
    },
    {
      icon: Award,
      title: t("projects.education.programs.meritAwards.title"),
      description: t("projects.education.programs.meritAwards.description"),
    },
    {
      icon: Users,
      title: t("projects.education.programs.mentorship.title"),
      description: t("projects.education.programs.mentorship.description"),
    },
  ];

  const stats = [
    { number: "500+", label: t("projects.education.stats.studentsSponsored") },
    { number: "25", label: t("projects.education.stats.schoolsSupported") },
    { number: "$200K+", label: t("projects.education.stats.fundsDistributed") },
    { number: "15", label: t("projects.education.stats.countriesReached") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${educationImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              {t("projects.education.badge")}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              {t("projects.education.title")} <span className="text-gradient-gold">{t("projects.education.titleHighlight")}</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              {t("projects.education.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl">
                <Heart className="w-5 h-5" />
                {t("projects.education.sponsorStudent")}
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/#projects">{t("common.viewAllProjects")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              {t("projects.education.programsTitle")}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t("projects.education.programsSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div 
                key={program.title}
                className="bg-card p-8 rounded-2xl shadow-warm hover:shadow-elevated transition-all duration-300 group flex gap-6"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <program.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">{program.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src={educationImg} 
                alt="Educational Sponsorship" 
                className="rounded-2xl shadow-elevated w-full"
              />
            </div>

            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t("projects.education.howToHelpTitle")}
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {t("projects.education.howToHelpSubtitle")}
              </p>
              
              <div className="space-y-6">
                {[
                  { step: "1", title: t("projects.education.steps.choose.title"), desc: t("projects.education.steps.choose.desc") },
                  { step: "2", title: t("projects.education.steps.match.title"), desc: t("projects.education.steps.match.desc") },
                  { step: "3", title: t("projects.education.steps.track.title"), desc: t("projects.education.steps.track.desc") },
                  { step: "4", title: t("projects.education.steps.impact.title"), desc: t("projects.education.steps.impact.desc") },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            {t("projects.education.ctaTitle")}
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            {t("projects.education.ctaText")}
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

export default ProjectEducation;
