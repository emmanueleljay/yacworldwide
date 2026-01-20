import { useTranslation } from "react-i18next";
import { Target, Users, Globe, Shield } from "lucide-react";
import { AnimatedSection, AnimatedList } from "@/hooks/useScrollAnimation";

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Target,
      titleKey: "about.values.mission.title",
      descriptionKey: "about.values.mission.description",
    },
    {
      icon: Users,
      titleKey: "about.values.unity.title",
      descriptionKey: "about.values.unity.description",
    },
    {
      icon: Globe,
      titleKey: "about.values.global.title",
      descriptionKey: "about.values.global.description",
    },
    {
      icon: Shield,
      titleKey: "about.values.cultural.title",
      descriptionKey: "about.values.cultural.description",
    },
  ];

  const pledgeItems = t("about.pledge.items", { returnObjects: true }) as string[];

  return (
    <section id="about" className="py-20 lg:py-32 bg-section-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            {t("about.sectionTitle")}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            {t("about.heading")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t("about.description")}
          </p>
        </AnimatedSection>

        {/* Values Grid */}
        <AnimatedList
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          staggerDelay={150}
        >
          {values.map((value) => (
            <div
              key={value.titleKey}
              className="group p-8 bg-card rounded-2xl shadow-warm hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {t(value.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(value.descriptionKey)}
              </p>
            </div>
          ))}
        </AnimatedList>

        {/* Solemn Pledge */}
        <AnimatedSection className="mt-20" delay={200}>
          <div className="bg-hero-gradient rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="font-serif text-2xl md:text-4xl font-bold text-primary-foreground mb-8">
                {t("about.pledge.title")}
              </h3>
              <div className="space-y-4 text-primary-foreground/90 text-lg leading-relaxed">
                <p className="italic">
                  "{t("about.pledge.intro")}"
                </p>
                <ul className="text-left max-w-2xl mx-auto space-y-3 mt-6">
                  {pledgeItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
