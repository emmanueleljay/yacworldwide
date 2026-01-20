import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Heart, Calendar, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section id="events" className="py-20 lg:py-32 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Get Involved */}
          <AnimatedSection animation="slide-in">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-elevated">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm">
                  {t("cta.events.label")}
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-4">
                {t("cta.events.title")}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {t("cta.events.description")}
              </p>
              <Button variant="outline" size="lg" className="group">
                {t("cta.events.button")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </AnimatedSection>

          {/* Donate */}
          <AnimatedSection animation="slide-in" delay={200}>
            <div className="bg-hero-gradient rounded-3xl p-8 md:p-12 shadow-elevated">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-primary-foreground/80 font-medium uppercase tracking-wider text-sm">
                  {t("cta.donate.label")}
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
                {t("cta.donate.title")}
              </h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                {t("cta.donate.description")}
              </p>
              <Button variant="hero" size="lg" className="group">
                <Heart className="w-5 h-5" />
                {t("cta.donate.button")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CTA;
