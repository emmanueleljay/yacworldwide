import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import historyBanner from "@/assets/history-banner.jpg";
import { Calendar, MapPin, Users, Award, Globe, FileText, Heart, Milestone } from "lucide-react";

const History = () => {
  const { t } = useTranslation();

  const timelineIcons = [FileText, Users, Award, Heart, Globe, Milestone, Calendar];
  const timelineData = t('history.timeline', { returnObjects: true }) as Array<{
    year: string;
    title: string;
    date: string;
    description: string;
  }>;

  const timeline = timelineData.map((item, index) => ({
    ...item,
    icon: timelineIcons[index] || Calendar,
    highlight: index === 0 || index === timelineData.length - 1,
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={historyBanner}
            alt="YAC History - Community gathering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-4">
              {t('history.title')}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              {t('history.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-8">
                <MapPin className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                  {t('history.foundingTitle')}
                </h2>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-lg">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  {t('history.foundingText1')}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t('history.foundingText2')}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('history.foundingText3')}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                {t('history.timelineTitle')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('history.timelineSubtitle')}
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <AnimatedSection key={index} animation="fade-up">
                    <div className={`relative flex items-start gap-4 mb-8 md:mb-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Content */}
                      <div className={`flex-1 ml-16 md:ml-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                        <div className={`bg-card border ${item.highlight ? 'border-primary/50 shadow-lg shadow-primary/10' : 'border-border'} rounded-xl p-6 hover:shadow-md transition-shadow`}>
                          <div className={`flex items-center gap-2 mb-2 ${isEven ? 'md:justify-end' : ''}`}>
                            <span className="text-sm font-medium text-primary">{item.date}</span>
                          </div>
                          <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-background border-2 border-primary rounded-full flex items-center justify-center z-10">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>

                      {/* Spacer for layout */}
                      <div className="hidden md:block flex-1" />
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                {t('history.legacyTitle')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('history.legacyText')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/who-we-are/mission"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors"
                >
                  {t('nav.mission')}
                </a>
                <a
                  href="/who-we-are/vision"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary/10 transition-colors"
                >
                  {t('nav.vision')}
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default History;